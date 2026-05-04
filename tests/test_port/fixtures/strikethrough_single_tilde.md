Single tilde basic
.
~Strikeout~
.
<p><s>Strikeout</s></p>
.

Double tilde still works
.
~~Strikeout~~
.
<p><s>Strikeout</s></p>
.

Single and double don't cross-match
.
~foo~~
.
<p>~foo~~</p>
.

Single and double don't cross-match (reversed)
.
~~foo~
.
<p>~~foo~</p>
.

Three or more tildes rejected in inline context
.
a ~~~foo~~~ b
.
<p>a ~~~foo~~~ b</p>
.

Four tildes rejected in inline context
.
a ~~~~foo~~~~ b
.
<p>a ~~~~foo~~~~ b</p>
.

Mixed single and double
.
~single~ and ~~double~~
.
<p><s>single</s> and <s>double</s></p>
.

Nested double inside single
.
~foo ~~bar~~ baz~
.
<p><s>foo <s>bar</s> baz</s></p>
.

Single tilde with spaces (no match - flanking rules)
.
foo ~ bar ~ baz
.
<p>foo ~ bar ~ baz</p>
.

Single tilde with punctuation
.
~foo~bar
.
<p><s>foo</s>bar</p>
.

Multiple single tildes
.
~one~ ~two~ ~three~
.
<p><s>one</s> <s>two</s> <s>three</s></p>
.

Single tilde emphasis priority with bold
.
**~test**~
.
<p><strong>~test</strong>~</p>
.

Single tilde in link context
.
[~link]()~
.
<p><a href="">~link</a>~</p>
.
