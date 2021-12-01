
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
