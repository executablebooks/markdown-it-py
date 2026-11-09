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

#445 Image alt keeps backslash escapes and entities
.
![a \* b](/u)

![a &amp; b](/u)

![a &lt; b](/u)

![a \* *b* &amp; c](/u)

![C:\Python26](/u)
.
<p><img src="/u" alt="a * b" /></p>
<p><img src="/u" alt="a &amp; b" /></p>
<p><img src="/u" alt="a &lt; b" /></p>
<p><img src="/u" alt="a * b &amp; c" /></p>
<p><img src="/u" alt="C:\Python26" /></p>
.

#445 Image alt keeps backslash escapes when the image is a link's text
.
[![a \* b](x)](y)
.
<p><a href="y"><img src="x" alt="a * b" /></a></p>
.

#445 Nested image alt: only one level is joined, as in markdown-it 15.0.3
.
![a ![b \* c](x) d](y)
.
<p><img src="y" alt="a b  c d" /></p>
.

Keep the text of a code span in image alt text
.
![a `code` b](x.png)
.
<p><img src="x.png" alt="a code b" /></p>
.

Code span text in image alt is HTML-escaped, as in markdown-it 15.0.3
.
![a `c<d` e](/u)
.
<p><img src="/u" alt="a c&lt;d e" /></p>
.

Image alt keeps escapes, entities and code span text together
.
![a \* `c<d` &amp; e](/u)
.
<p><img src="/u" alt="a * c&lt;d &amp; e" /></p>
.

#377 comment HTML block in a list item still ends at the next item after a blank line
.
- <!--

- b
.
<ul>
<li>
<!--

</li>
<li>
<p>b</p>
</li>
</ul>
.

#377 comment HTML block in a list item still ends at an outdented non-blank line
.
- <!--
foo
-->
.
<ul>
<li>
<!--
</li>
</ul>
<p>foo
--&gt;</p>
.
