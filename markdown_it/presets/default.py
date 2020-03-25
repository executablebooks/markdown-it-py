"""markdown-it default options."""


presets = {
    "options": {
        "html": False,  # Enable HTML tags in source
        "xhtmlOut": False,  # Use '/' to close single tags (<br />)
        "breaks": False,  # Convert '\n' in paragraphs into <br>
        "langPrefix": "language-",  # CSS language prefix for fenced blocks
        "linkify": False,  # autoconvert URL-like texts to links
        # Enable some language-neutral replacements + quotes beautification
        "typographer": False,
        # Double + single quotes replacement pairs, when typographer enabled,
        # and smartquotes on. Could be either a String or an Array.
        #
        # For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        # and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        "quotes": "\u201c\u201d\u2018\u2019",  # /* “”‘’ */
        # Highlighter function. Should return escaped HTML,
        # or '' if the source string is not changed and should be escaped externaly.
        # If result starts with <pre... internal wrapper is skipped.
        #
        # function (/*str, lang*/) { return ''; }
        #
        "highlight": None,
        "maxNesting": 100,  # Internal protection, recursion limit
    },
    "components": {"core": {}, "block": {}, "inline": {}},
}
