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
