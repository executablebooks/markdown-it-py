
Encode link destination, decode text inside it:

.
<http://example.com/α%CE%B2γ%CE%B4>
.
<p><a href="http://example.com/%CE%B1%CE%B2%CE%B3%CE%B4">http://example.com/αβγδ</a></p>
.

.
[foo](http://example.com/α%CE%B2γ%CE%B4)
.
<p><a href="http://example.com/%CE%B1%CE%B2%CE%B3%CE%B4">foo</a></p>
.


Don't encode domains in unknown schemas:

.
[](skype:γγγ)
.
<p><a href="skype:%CE%B3%CE%B3%CE%B3"></a></p>
.
