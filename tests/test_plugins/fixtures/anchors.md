basic (max level 2):
.
# H1

## H2

### H3
.
<h1 id="h1">H1</h1>
<h2 id="h2">H2</h2>
<h3>H3</h3>
.

space:
.
# a b  c
.
<h1 id="a-b--c">a b  c</h1>
.

characters:
.
# a,b\cβÊ
.
<h1 id="abcβê">a,b\cβÊ</h1>
.

emoji:
.
# 🚀a
.
<h1 id="a">🚀a</h1>
.

html entity:
.
# foo&amp;bar
.
<h1 id="foobar">foo&amp;bar</h1>
.

uniqueness:
.
# a
# a
## a
.
<h1 id="a">a</h1>
<h1 id="a-1">a</h1>
<h2 id="a-2">a</h2>
.

standard (permalink after):
.
# a
.
<h1 id="a">a <a class="header-anchor" href="#a">¶</a></h1>
.

standard (permalink before):
.
# a
.
<h1 id="a"><a class="header-anchor" href="#a">¶</a> a</h1>
.
