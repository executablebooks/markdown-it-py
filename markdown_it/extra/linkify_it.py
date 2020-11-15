class NotImportedError(Exception):
    """Not imported ``linkify-it-py`` package error"""

    def __init__(self):
        message = (
            "If you want to use the 'linkify', "
            + "you must pre-install the 'linkify-it-py' package. "
            + "Please try 'pip install linkify-it-py'."
        )
        super().__init__(message)


class LinkifyIt:
    """linkify-it-py dummy class.

    If ``linkify-it-py`` is not installed, this dummy class will be called. And
    raise :class:`markdown_it.extra.linkify_it.NotImportedError` when input data
    is parsed via core.rules (linkify).
    """

    def __init__(self, schemas=None, options=None):
        pass

    # def add(self, schema, definition):
    #     raise NotImportedError

    # def match(self, text):
    #     raise NotImportedError

    def pretest(self, text):
        raise NotImportedError

    # def set(self, options):
    #     raise NotImportedError

    # def test(self, text):
    #     raise NotImportedError

    # def test_schema_at(self, text, name, position):
    #     raise NotImportedError

    # def tlds(self, list_tlds, keep_old=False):
    #     raise NotImportedError
