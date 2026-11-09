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
