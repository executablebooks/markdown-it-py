linkify
.
url http://www.youtube.com/watch?v=5Jt5GEr4AYg.
.
<p>url <a href="http://www.youtube.com/watch?v=5Jt5GEr4AYg">http://www.youtube.com/watch?v=5Jt5GEr4AYg</a>.</p>
.


don't touch text in links
.
[https://example.com](https://example.com)
.
<p><a href="https://example.com">https://example.com</a></p>
.


don't touch text in autolinks
.
<https://example.com>
.
<p><a href="https://example.com">https://example.com</a></p>
.


don't touch text in html <a> tags
.
<a href="https://example.com">https://example.com</a>
.
<p><a href="https://example.com">https://example.com</a></p>
.


match links without protocol
.
www.example.org
.
<p><a href="http://www.example.org">www.example.org</a></p>
.


emails
.
test@example.com

mailto:test@example.com
.
<p><a href="mailto:test@example.com">test@example.com</a></p>
<p><a href="mailto:test@example.com">mailto:test@example.com</a></p>
.


typorgapher should not break href
.
http://example.com/(c)
.
<p><a href="http://example.com/(c)">http://example.com/(c)</a></p>
.

before line
.
before
github.com
.
<p>before
<a href="http://github.com">github.com</a></p>
.

after line
.
github.com
after
.
<p><a href="http://github.com">github.com</a>
after</p>
.

before after lines
.
before
github.com
after
.
<p>before
<a href="http://github.com">github.com</a>
after</p>
.

before after lines with blank line
.
before

github.com

after
.
<p>before</p>
<p><a href="http://github.com">github.com</a></p>
<p>after</p>
.