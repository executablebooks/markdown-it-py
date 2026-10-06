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
