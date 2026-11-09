#31 empty lines after certain lists raises exception:
.
> a

- b


.
<blockquote>
<p>a</p>
</blockquote>
<ul>
<li>b</li>
</ul>
.

#50 blank lines after block quotes
.
> A Block Quote

> Another Block Quote


.
<blockquote>
<p>A Block Quote</p>
</blockquote>
<blockquote>
<p>Another Block Quote</p>
</blockquote>
.

#80 UnicodeError with codepoints larger than 0xFFFF
.
&#x1F4AC;
.
<p>💬</p>
.

Fix CVE-2023-26303
.
![![]()
]([)
.
<p><img src="%5B" alt="
" /></p>
.

Fix parsing of incorrect numeric character references
.
[](&#X22y;) &#X22y;
[](&#35y;) &#35y;
.
<p><a href="&amp;#X22y;"></a> &amp;#X22y;
<a href="&amp;#35y;"></a> &amp;#35y;</p>
.

#437 a lowercase declaration interrupts a paragraph
.
para
<!doctype html>
.
<p>para</p>
<!doctype html>
.

#437 Unicode lookalikes that case-fold to ASCII (U+017F, U+0130, U+0131) do not start an HTML block
.
para
<ſcript>
text

para
<ſtyle>
text

para
<dİv>
text

para
<dıv>
text
.
<p>para
&lt;ſcript&gt;
text</p>
<p>para
&lt;ſtyle&gt;
text</p>
<p>para
&lt;dİv&gt;
text</p>
<p>para
&lt;dıv&gt;
text</p>
.

#437 a Unicode lookalike does not close a type 1 HTML block
.
<script>
x
</ſcript>
after

more
.
<script>
x
</ſcript>
after

more
.

#437 an ASCII mixed-case tag name still starts and closes an HTML block
.
para
<ScRiPt>
text
</sCrIpT>
after
.
<p>para</p>
<ScRiPt>
text
</sCrIpT>
<p>after</p>
.

#437 a no-break space (U+00A0) after a type 6 tag name still starts an HTML block
.
para
<div class="x">
text
.
<p>para</p>
<div class="x">
text
.

#437 a no-break space (U+00A0) after a type 1 tag name still starts an HTML block
.
para
<pre >

*a*
</pre>
.
<p>para</p>
<pre >

*a*
</pre>
.
