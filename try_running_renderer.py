from markdown_it import MarkdownIt
from markdown_it.utils import AttrDict
from markdown_it.extensions.front_matter import front_matter_plugin
from markdown_it.extensions.myst_blocks import myst_block_plugin
from markdown_it.extensions.myst_role import myst_role_plugin
from markdown_it.extensions.texmath import texmath_plugin
from markdown_it.extensions.footnote import footnote_plugin
from markdown_it._doc_renderer import DocRenderer

md = (
    MarkdownIt()
    .enable("table")
    .use(front_matter_plugin)
    .use(myst_block_plugin)
    .use(myst_role_plugin)
    .use(texmath_plugin)
    .use(footnote_plugin)
    .disable("footnote_inline")
    # disable this for now, because it need a new implementation in the renderer
    .disable("footnote_tail")
    # we don't want to yet remove un-referenced, because they may be referenced
    # in admonition type directives
    # we need to do our own post process to gather them
    # (and also add nodes.transition() above)
)
env = AttrDict()
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

{sub}`abc`


|a|*b* |
|-|--: |

% whatever *abc*

$a=1$

$$xyz=3$$

[^foot]: 123
asdas asdasda

[^foot]

1. 345
""",
    env=env,
)

doc = DocRenderer()
doc.run_render(tokens, env)
print(doc.document.pformat())
