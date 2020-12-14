"""HTML5 entities map: { name -> characters }."""
import html.entities

from markdown_it.utils import AttrDict


DATA = {name.rstrip(";"): chars for name, chars in html.entities.html5.items()}

entities = AttrDict(DATA)
