# if __name__ == "__main__":

from markdown_it import MarkdownIt
from markdown_it.extensions.front_matter import front_matter_plugin
from markdown_it.extensions.myst_blocks import myst_block_plugin
from markdown_it.extensions.myst_role import myst_role_plugin
from markdown_it.doc_renderer import DocRenderer

md = MarkdownIt().use(front_matter_plugin).use(myst_block_plugin).use(myst_role_plugin)
tokens = md.parse(
    """\
---
a: 1
b:
  - c
---
(xyz)=
# title
a
- b *c* **g**
    - h
d
> +++
---
` a `
```a dfg
mj
```
## a

abc
===

<c@google.com>

[a][b]

[b]: s

<div>A</div>

a <span>a</span>

![a *A*](b)

+++ axbc

{role-name:}`abc`
"""
)

# print(get_nested(tokens))

doc = DocRenderer()
doc.run_render(tokens)
print(doc.document.pformat())
