
Block Break:
.
+++
.
<hr class="myst-block">
.

Block Break Split Markers:
.
 + +   + + xfsdfsdf
.
<hr class="myst-block">
.

Block Break Too Few Markers:
.
++
.
<p>++</p>
.

Terminates other blocks:
.
a
+++
- b
+++
> c
+++
.
<p>a</p>
<hr class="myst-block">
<ul>
<li>b</li>
</ul>
<hr class="myst-block">
<blockquote>
<p>c</p>
</blockquote>
<hr class="myst-block">
.


Target:
.
(a)=
.
<div class=" admonition myst-target">target = <code>a</code></div>
.


Terminates other blocks:
.
a
(a)=
- b
(a)=
> c
(a)=
.
<p>a</p>
<div class=" admonition myst-target">target = <code>a</code></div><ul>
<li>b</li>
</ul>
<div class=" admonition myst-target">target = <code>a</code></div><blockquote>
<p>c</p>
</blockquote>
<div class=" admonition myst-target">target = <code>a</code></div>
.