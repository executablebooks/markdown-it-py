
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


Keep %25 as is because decoding it may break urls, #720
.
<https://www.google.com/search?q=hello%2E%252Ehello>
.
<p><a href="https://www.google.com/search?q=hello%2E%252Ehello">https://www.google.com/search?q=hello.%252Ehello</a></p>
.


Don't encode domains in unknown schemas:

.
[](skype:γγγ)
.
<p><a href="skype:%CE%B3%CE%B3%CE%B3"></a></p>
.


Square brackets are allowed
.
[foo](https://bar]baz.org)
.
<p><a href="https://bar%5Dbaz.org">foo</a></p>
.


Preserve IPv6 host brackets while encoding brackets in the path, query and fragment
.
[foo](https://user:pass@[2001:db8::1]:8443/a[b]?q=[c]#[d])
.
<p><a href="https://user:pass@[2001:db8::1]:8443/a%5Bb%5D?q=%5Bc%5D#%5Bd%5D">foo</a></p>
.

.
[foo](//[::ffff:192.0.2.1]/)
.
<p><a href="//[::ffff:192.0.2.1]/">foo</a></p>
.

.
<http://[::1]:8000/>
.
<p><a href="http://[::1]:8000/">http://[::1]:8000/</a></p>
.

.
![foo](https://[::1]/a.png)
.
<p><img src="https://[::1]/a.png" alt="foo" /></p>
.
