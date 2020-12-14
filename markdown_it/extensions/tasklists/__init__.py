"""Builds task/todo lists out of markdown lists with items starting with [ ] or [x]"""

# Ported by Wolmar Nyberg Åkerström from https://github.com/revin/markdown-it-task-lists
# ISC License
# Copyright (c) 2016, Revin Guillen
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from typing import List
from uuid import uuid4

from markdown_it import MarkdownIt

from markdown_it.token import Token


def tasklists_plugin(
    md: MarkdownIt,
    enabled: bool = False,
    label: bool = False,
    label_after: bool = False,
):
    """Plugin for building task/todo lists out of markdown lists with items starting with [ ] or [x]
    .. Nothing else

    For example::
       - [ ] An item that needs doing
       - [x] An item that is complete

    The rendered HTML checkboxes are disabled; to change this, pass a truthy value into the enabled
    property of the plugin options.

    :param enabled: True enables the rendered checkboxes
    :param label: True wraps the rendered list items in a <label> element for UX purposes,
    :param label_after: True – adds the <label> element after the checkbox.
    """
    disable_checkboxes = not enabled
    use_label_wrapper = label
    use_label_after = label_after

    def fcn(state):
        tokens: List[Token] = state.tokens
        for i in range(2, len(tokens) - 1):

            if is_todo_item(tokens, i):
                todoify(tokens[i], tokens[i].__class__)
                attr_set(
                    tokens[i - 2],
                    "class",
                    "task-list-item" + (" enabled" if not disable_checkboxes else ""),
                )
                attr_set(
                    tokens[parent_token(tokens, i - 2)], "class", "contains-task-list"
                )

    md.core.ruler.after("inline", "github-tasklists", fcn)

    def attr_set(token, name, value):
        index = token.attrIndex(name)
        attr = [name, value]
        if index < 0:
            token.attrPush(attr)
        else:
            token.attrs[index] = attr

    def parent_token(tokens, index):
        target_level = tokens[index].level - 1
        for i in range(1, index + 1):
            if tokens[index - i].level == target_level:
                return index - i
        return -1

    def is_todo_item(tokens, index):
        return (
            is_inline(tokens[index])
            and is_paragraph(tokens[index - 1])
            and is_list_item(tokens[index - 2])
            and starts_with_todo_markdown(tokens[index])
        )

    def todoify(token: Token, token_constructor):
        assert token.children is not None
        token.children.insert(0, make_checkbox(token, token_constructor))
        token.children[1].content = token.children[1].content[3:]
        token.content = token.content[3:]

        if use_label_wrapper:
            if use_label_after:
                token.children.pop()

                # Replaced number generator from original plugin with uuid.
                checklist_id = f"task-item-{uuid4()}"
                token.children[0].content = (
                    token.children[0].content[0:-1] + f' id="{checklist_id}">'
                )
                token.children.append(
                    after_label(token.content, checklist_id, token_constructor)
                )
            else:
                token.children.insert(0, begin_label(token_constructor))
                token.children.append(end_label(token_constructor))

    def make_checkbox(token, token_constructor):
        checkbox = token_constructor("html_inline", "", 0)
        disabled_attr = 'disabled="disabled"' if disable_checkboxes else ""
        if token.content.startswith("[ ] "):
            checkbox.content = (
                '<input class="task-list-item-checkbox" '
                f'{disabled_attr} type="checkbox">'
            )
        elif token.content.startswith("[x] ") or token.content.startswith("[X] "):
            checkbox.content = (
                '<input class="task-list-item-checkbox" checked="checked" '
                f'{disabled_attr} type="checkbox">'
            )
        return checkbox

    def begin_label(token_constructor):
        token = token_constructor("html_inline", "", 0)
        token.content = "<label>"
        return token

    def end_label(token_constructor):
        token = token_constructor("html_inline", "", 0)
        token.content = "</label>"
        return token

    def after_label(content, checkbox_id, token_constructor):
        token = token_constructor("html_inline", "", 0)
        token.content = (
            f'<label class="task-list-item-label" for="{checkbox_id}">{content}</label>'
        )
        token.attrs = [{"for": checkbox_id}]
        return token

    def is_inline(token):
        return token.type == "inline"

    def is_paragraph(token):
        return token.type == "paragraph_open"

    def is_list_item(token):
        return token.type == "list_item_open"

    def starts_with_todo_markdown(token):
        # leading whitespace in a list item is already trimmed off by markdown-it
        return (
            token.content.startswith("[ ] ")
            or token.content.startswith("[x] ")
            or token.content.startswith("[X] ")
        )
