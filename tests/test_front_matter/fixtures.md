
should parse empty front matter:
.
---
---
# Head
.

<h1>Head</h1>
.


should parse basic front matter:
.
---
x: 1
---
# Head
.

<h1>Head</h1>
.

should parse until triple dots:
.
---
x: 1
...
# Head
.

<h1>Head</h1>
.

should parse front matter with indentation:
.
---
title: Associative arrays
people:
    name: John Smith
    age: 33
morePeople: { name: Grace Jones, age: 21 }
---
# Head
.

<h1>Head</h1>
.

should ignore spaces after front matter delimiters:
.
---   
title: Associative arrays
people:
    name: John Smith
    age: 33
morePeople: { name: Grace Jones, age: 21 }
---   
# Head
.

<h1>Head</h1>
.

should ignore front matter with less than 3 opening dashes:
.
--
x: 1
--
# Head
.
<h2>--
x: 1</h2>
<h1>Head</h1>
.

should require front matter have matching number of opening and closing dashes:
.
----
x: 1
---
# Head
.
<hr>
<h2>x: 1</h2>
<h1>Head</h1>
.
