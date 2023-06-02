Should parse nested quotes:
.
"foo 'bar' baz"

'foo 'bar' baz'
.
<p>“foo ‘bar’ baz”</p>
<p>‘foo ‘bar’ baz’</p>
.


Should not overlap quotes:
.
'foo "bar' baz"
.
<p>‘foo &quot;bar’ baz&quot;</p>
.


Should match quotes on the same level:
.
"foo *bar* baz"
.
<p>“foo <em>bar</em> baz”</p>
.


Should handle adjacent nested quotes:
.
'"double in single"'

"'single in double'"
.
<p>‘“double in single”’</p>
<p>“‘single in double’”</p>
.



Should not match quotes on different levels:
.
*"foo* bar"

"foo *bar"*

*"foo* bar *baz"*
.
<p><em>&quot;foo</em> bar&quot;</p>
<p>&quot;foo <em>bar&quot;</em></p>
<p><em>&quot;foo</em> bar <em>baz&quot;</em></p>
.

Smartquotes should not overlap with other tags:
.
*foo "bar* *baz" quux*
.
<p><em>foo &quot;bar</em> <em>baz&quot; quux</em></p>
.


Should try and find matching quote in this case:
.
"foo "bar 'baz"
.
<p>&quot;foo “bar 'baz”</p>
.


Should not touch 'inches' in quotes:
.
"Monitor 21"" and "Monitor""
.
<p>“Monitor 21&quot;” and “Monitor”&quot;</p>
.


Should render an apostrophe as a rsquo:
.
This isn't and can't be the best approach to implement this...
.
<p>This isn’t and can’t be the best approach to implement this…</p>
.


Apostrophe could end the word, that's why original smartypants replaces all of them as rsquo:
.
users' stuff
.
<p>users’ stuff</p>
.

Quotes between punctuation chars:

.
"(hai)".
.
<p>“(hai)”.</p>
.

Quotes at the start/end of the tokens:
.
"*foo* bar"

"foo *bar*"

"*foo bar*"
.
<p>“<em>foo</em> bar”</p>
<p>“foo <em>bar</em>”</p>
<p>“<em>foo bar</em>”</p>
.

Should treat softbreak as a space:
.
"this"
and "that".

"this" and
"that".
.
<p>“this”
and “that”.</p>
<p>“this” and
“that”.</p>
.

Should treat hardbreak as a space:
.
"this"\
and "that".

"this" and\
"that".
.
<p>“this”<br />
and “that”.</p>
<p>“this” and<br />
“that”.</p>
.

Should allow quotes adjacent to other punctuation characters, #643:
.
The dog---"'man's' best friend"
.
<p>The dog—“‘man’s’ best friend”</p>
.

Should parse quotes adjacent to code block, #677:
.
"test `code`"

"`code` test"
.
<p>“test <code>code</code>”</p>
<p>“<code>code</code> test”</p>
.

Should parse quotes adjacent to inline html, #677:
.
"test <br>"

"<br> test"
.
<p>“test <br>”</p>
<p>“<br> test”</p>
.

Should be escapable:
.
"foo"

\"foo"

"foo\"
.
<p>“foo”</p>
<p>&quot;foo&quot;</p>
<p>&quot;foo&quot;</p>
.

Should not replace entities:
.
&quot;foo&quot;

&quot;foo"

"foo&quot;
.
<p>&quot;foo&quot;</p>
<p>&quot;foo&quot;</p>
<p>&quot;foo&quot;</p>
.
