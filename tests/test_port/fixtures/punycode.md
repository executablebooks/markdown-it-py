Should decode punycode:

.
<http://xn--n3h.net/>
.
<p><a href="http://xn--n3h.net/">http://☃.net/</a></p>
.

.
<http://☃.net/>
.
<p><a href="http://xn--n3h.net/">http://☃.net/</a></p>
.

Invalid punycode:

.
<http://xn--xn.com/>
.
<p><a href="http://xn--xn.com/">http://xn--xn.com/</a></p>
.

Invalid punycode (non-ascii):

.
<http://xn--γ.com/>
.
<p><a href="http://xn--xn---emd.com/">http://xn--γ.com/</a></p>
.

Two slashes should start a domain:

.
[](//☃.net/)
.
<p><a href="//xn--n3h.net/"></a></p>
.

Should auto-add protocol to autolinks:

.
test google.com foo
.
<p>test <a href="http://google.com">google.com</a> foo</p>
.

Should support IDN in autolinks:

.
test http://xn--n3h.net/ foo
.
<p>test <a href="http://xn--n3h.net/">http://☃.net/</a> foo</p>
.

.
test http://☃.net/ foo
.
<p>test <a href="http://xn--n3h.net/">http://☃.net/</a> foo</p>
.

.
test //xn--n3h.net/ foo
.
<p>test <a href="//xn--n3h.net/">//☃.net/</a> foo</p>
.

.
test xn--n3h.net foo
.
<p>test <a href="http://xn--n3h.net">☃.net</a> foo</p>
.

.
test xn--n3h@xn--n3h.net foo
.
<p>test <a href="mailto:xn--n3h@xn--n3h.net">xn--n3h@☃.net</a> foo</p>
.
