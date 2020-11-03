"""HTML5 entities map: { name -> characters }."""
import html


class _Entities:
    def __getattr__(self, name):
        try:
            return DATA[name]
        except KeyError:
            raise AttributeError(name)

    def __getitem__(self, name):
        return DATA[name]

    def __contains__(self, name):
        return name in DATA


entities = _Entities()

DATA = {name.rstrip(";"): chars for name, chars in html.entities.html5.items()}
