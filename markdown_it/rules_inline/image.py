# Process ![image](<src> "title")

from .state_inline import StateInline
from ..common.utils import isSpace, charCodeAt, normalizeReference
from ..common.normalize_url import normalizeLink, validateLink


def image(state: StateInline, silent: bool):

    tokens = None
    label = None
    href = ""
    oldPos = state.pos
    max = state.posMax

    # /* ! */
    if charCodeAt(state.src, state.pos) != 0x21:
        return False
    # /* [ */
    if charCodeAt(state.src, state.pos + 1) != 0x5B:
        return False

    labelStart = state.pos + 2
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, False)

    # parser failed to find ']', so it's not a valid link
    if labelEnd < 0:
        return False

    pos = labelEnd + 1
    # /* ( */
    if pos < max and charCodeAt(state.src, pos) == 0x28:
        #
        # Inline link
        #

        # [link](  <href>  "title"  )
        #        ^^ skipping these spaces
        pos += 1
        while pos < max:
            code = charCodeAt(state.src, pos)
            if not isSpace(code) and code != 0x0A:
                break
            pos += 1

        if pos >= max:
            return False

        # [link](  <href>  "title"  )
        #          ^^^^^^ parsing link destination
        start = pos
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax)
        if res.ok:
            href = normalizeLink(res.str)
            if validateLink(href):
                pos = res.pos
            else:
                href = ""

        # [link](  <href>  "title"  )
        #                ^^ skipping these spaces
        start = pos
        while pos < max:
            code = charCodeAt(state.src, pos)
            if not isSpace(code) and code != 0x0A:
                break
            pos += 1

        # [link](  <href>  "title"  )
        #                  ^^^^^^^ parsing link title
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax)
        if pos < max and start != pos and res.ok:
            title = res.str
            pos = res.pos

            # [link](  <href>  "title"  )
            #                         ^^ skipping these spaces
            while pos < max:
                code = charCodeAt(state.src, pos)
                if not isSpace(code) and code != 0x0A:
                    break
                pos += 1
        else:
            title = ""

        # /* ) */
        if pos >= max or charCodeAt(state.src, pos) != 0x29:
            state.pos = oldPos
            return False

        pos += 1

    else:
        #
        # Link reference
        #
        if "references" not in state.env:
            return False

        # /* [ */
        if pos < max and charCodeAt(state.src, pos) == 0x5B:
            start = pos + 1
            pos = state.md.helpers.parseLinkLabel(state, pos)
            if pos >= 0:
                label = state.src[start:pos]
                pos += 1
            else:
                pos = labelEnd + 1
        else:
            pos = labelEnd + 1

        # covers label == '' and label == undefined
        # (collapsed reference link and shortcut reference link respectively)
        if not label:
            label = state.src[labelStart:labelEnd]

        ref = state.env.references.get(normalizeReference(label), None)
        if not ref:
            state.pos = oldPos
            return False

        href = ref.href
        title = ref.title

    #
    # We found the end of the link, and know for a fact it's a valid link
    # so all that's left to do is to call tokenizer.
    #
    if not silent:
        content = state.src[labelStart:labelEnd]

        tokens = []
        state.md.inline.parse(content, state.md, state.env, tokens)

        token = state.push("image", "img", 0)
        token.attrs = attrs = [["src", href], ["alt", ""]]
        token.children = tokens or None

        if title:
            attrs.append(["title", title])

    state.pos = pos
    state.posMax = max
    return True
