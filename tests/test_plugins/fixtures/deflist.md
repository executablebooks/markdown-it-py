
Pandoc (with slightly changed indents):

.
Term 1

: Definition 1

Term 2 with *inline markup*

: Definition 2

      { some code, part of Definition 2 }

  Third paragraph of definition 2.
.
<dl>
<dt>Term 1</dt>
<dd>
<p>Definition 1</p>
</dd>
<dt>Term 2 with <em>inline markup</em></dt>
<dd>
<p>Definition 2</p>
<pre><code>{ some code, part of Definition 2 }
</code></pre>
<p>Third paragraph of definition 2.</p>
</dd>
</dl>
.

Pandoc again:

.
Term 1

:   Definition
with lazy continuation.

    Second paragraph of the definition.
.
<dl>
<dt>Term 1</dt>
<dd>
<p>Definition
with lazy continuation.</p>
<p>Second paragraph of the definition.</p>
</dd>
</dl>
.

Well, I might just copy-paste the third one while I'm at it:

.
Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
.
<dl>
<dt>Term 1</dt>
<dd>Definition 1</dd>
<dt>Term 2</dt>
<dd>Definition 2a</dd>
<dd>Definition 2b</dd>
</dl>
.

Now, with our custom ones. Spaces after a colon:

.
Term 1
  :    paragraph

Term 2
  :     code block
.
<dl>
<dt>Term 1</dt>
<dd>paragraph</dd>
<dt>Term 2</dt>
<dd>
<pre><code>code block
</code></pre>
</dd>
</dl>
.

There should be something after a colon by the way:

.
Non-term 1
  :

Non-term 2
  :   
.
<p>Non-term 1
:</p>
<p>Non-term 2
:</p>
.


List is tight iff all dts are tight:
.
Term 1
: foo
: bar

Term 2
: foo

: bar
.
<dl>
<dt>Term 1</dt>
<dd>
<p>foo</p>
</dd>
<dd>
<p>bar</p>
</dd>
<dt>Term 2</dt>
<dd>
<p>foo</p>
</dd>
<dd>
<p>bar</p>
</dd>
</dl>
.


Regression test (first paragraphs shouldn't be tight):
.
Term 1
: foo

  bar
Term 2
: foo
.
<dl>
<dt>Term 1</dt>
<dd>
<p>foo</p>
<p>bar
Term 2</p>
</dd>
<dd>
<p>foo</p>
</dd>
</dl>
.

Definition lists should be second last in the queue. Exemplī grātiā, this isn't a valid one:

.
# test
  : just a paragraph with a colon
.
<h1>test</h1>
<p>: just a paragraph with a colon</p>
.

Nested definition lists:

.
test
  : foo
      : bar
          : baz
      : bar
  : foo
.
<dl>
<dt>test</dt>
<dd>
<dl>
<dt>foo</dt>
<dd>
<dl>
<dt>bar</dt>
<dd>baz</dd>
</dl>
</dd>
<dd>bar</dd>
</dl>
</dd>
<dd>foo</dd>
</dl>
.


Regression test, tabs
.
Term 1
  :		code block
.
<dl>
<dt>Term 1</dt>
<dd>
<pre><code>code block
</code></pre>
</dd>
</dl>
.


Regression test (blockquote inside deflist)
.
foo
: > bar
: baz
.
<dl>
<dt>foo</dt>
<dd>
<blockquote>
<p>bar</p>
</blockquote>
</dd>
<dd>baz</dd>
</dl>
.


Coverage, 1 blank line
.
test

.
<p>test</p>
.


Coverage, 2 blank lines
.
test


.
<p>test</p>
.
