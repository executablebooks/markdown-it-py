from markdown_it import MarkdownIt, presets


def test_highlight_arguments():
    def highlight_func(str_, lang, attrs):
        assert lang == "a"
        assert attrs == "b  c  d"
        return "<pre><code>==" + str_ + "==</code></pre>"

    conf = presets.commonmark.make()
    conf["options"]["highlight"] = highlight_func
    md = MarkdownIt(config=conf)
    assert md.render("``` a  b  c  d \nhl\n```") == "<pre><code>==hl\n==</code></pre>\n"


def test_ordered_list_info():
    def type_filter(tokens, type_):
        return [t for t in tokens if t.type == type_]

    md = MarkdownIt()

    tokens = md.parse("1. Foo\n2. Bar\n20. Fuzz")
    assert len(type_filter(tokens, "ordered_list_open")) == 1
    tokens = type_filter(tokens, "list_item_open")
    assert len(tokens) == 3
    assert tokens[0].info == "1"
    assert tokens[0].markup == "."
    assert tokens[1].info == "2"
    assert tokens[1].markup == "."
    assert tokens[2].info == "20"
    assert tokens[2].markup == "."

    tokens = md.parse(" 1. Foo\n2. Bar\n  20. Fuzz\n 199. Flp")
    assert len(type_filter(tokens, "ordered_list_open")) == 1
    tokens = type_filter(tokens, "list_item_open")
    assert len(tokens) == 4
    assert tokens[0].info == "1"
    assert tokens[0].markup == "."
    assert tokens[1].info == "2"
    assert tokens[1].markup == "."
    assert tokens[2].info == "20"
    assert tokens[2].markup == "."
    assert tokens[3].info == "199"
    assert tokens[3].markup == "."


def test_backslash_before_two_space_hardbreak():
    # A literal backslash directly before a two-space hard line break must not
    # consume a space, otherwise only one space is left and the newline rule
    # produces a soft break instead of a hard break.
    md = MarkdownIt("commonmark")
    assert md.render("foo\\  \nbar") == "<p>foo\\<br />\nbar</p>\n"
