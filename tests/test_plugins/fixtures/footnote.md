
Pandoc example:
.
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won't be part of the note, because it
isn't indented.
.
<p>Here is a footnote reference,<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> and another.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>
<p>This paragraph won't be part of the note, because it
isn't indented.</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Here is the footnote. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Here's one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote.</p>
<pre><code>{ some.code }
</code></pre>
<p>The whole paragraph can be indented, or just the first
line.  In this way, multi-paragraph footnotes work like
multi-paragraph list items. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.



They could terminate each other:

.
[^1][^2][^3]

[^1]: foo
[^2]: bar
[^3]: baz
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup><sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup><sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>foo <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>bar <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn3" class="footnote-item"><p>baz <a href="#fnref3" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


They could be inside blockquotes, and are lazy:
.
[^foo]

> [^foo]: bar
baz
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<blockquote></blockquote>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>bar
baz <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Their labels could not contain spaces or newlines:

.
[^ foo]: bar baz

[^foo
]: bar baz
.
<p>[^ foo]: bar baz</p>
<p>[^foo
]: bar baz</p>
.


We support inline notes too (pandoc example):

.
Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]
.
<p>Here is an inline note.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


They could have arbitrary markup:

.
foo^[ *bar* ]
.
<p>foo<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p> <em>bar</em>  <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Duplicate footnotes:
.
[^xxxxx] [^xxxxx]

[^xxxxx]: foo
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[1:1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>foo <a href="#fnref1" class="footnote-backref">↩︎</a> <a href="#fnref1:1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Indents:

.
[^xxxxx] [^yyyyy]

[^xxxxx]: foo
    ---

[^yyyyy]: foo
   ---
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>
<hr>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><h2>foo</h2>
 <a href="#fnref1" class="footnote-backref">↩︎</a></li>
<li id="fn2" class="footnote-item"><p>foo <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Indents for the first line:

.
[^xxxxx] [^yyyyy]

[^xxxxx]:       foo

[^yyyyy]:        foo
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>foo <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><pre><code>foo
</code></pre>
 <a href="#fnref2" class="footnote-backref">↩</a></li>
</ol>
</section>
.

Indents for the first line (tabs):
.
[^xxxxx]

[^xxxxx]:		foo
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>foo <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Security 1
.
[^__proto__]

[^__proto__]: blah
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>blah <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Security 2
.
[^hasOwnProperty]

[^hasOwnProperty]: blah
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>blah <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.


Should allow links in inline footnotes
.
Example^[this is another example https://github.com]
.
<p>Example<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>this is another example https://github.com <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
.

Nested blocks:
.
[^a]

[^a]: abc

    def
hij

    - list

    > block

terminates here
.
<p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>
<p>terminates here</p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>abc</p>
<p>def
hij</p>
<ul>
<li>list</li>
</ul>
<blockquote>
<p>block</p>
</blockquote>
 <a href="#fnref1" class="footnote-backref">↩︎</a></li>
</ol>
</section>
.