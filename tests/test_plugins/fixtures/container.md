
Simple container
.
::: name
*content*
:::
.
<div class="name">
<p><em>content</em></p>
</div>
.

Delimiters too short
.
:: name
*content*
::
.
<p>:: name
<em>content</em>
::</p>
.


Could contain block elements too
.
::: name
### heading

-----------
:::
.
<div class="name">
<h3>heading</h3>
<hr>
</div>
.


Ending marker could be longer
.
::::: name :::::
  hello world
::::::::::::::::
.
<div class="name">
<p>hello world</p>
</div>
.


Nested blocks
.
::::: name
:::: name
xxx
::::
:::::
.
<div class="name">
<div class="name">
<p>xxx</p>
</div>
</div>
.


Incorrectly nested blocks
.
:::: name
this block is closed with 5 markers below

::::: name
auto-closed block

:::::
::::
.
<div class="name">
<p>this block is closed with 5 markers below</p>
<div class="name">
<p>auto-closed block</p>
</div>
</div>
<p>::::</p>
.


Marker could be indented up to 3 spaces
.
   ::: name
   content
    :::
   :::
.
<div class="name">
<p>content
:::</p>
</div>
.


But that's a code block
.
    ::: name
    content
    :::
.
<pre><code>::: name
content
:::
</code></pre>
.


Some more indent checks
.
  ::: name
   not a code block

    code block
  :::
.
<div class="name">
<p>not a code block</p>
<pre><code>code block
</code></pre>
</div>
.


Name could be adjacent to marker
.
:::name
xxx
:::
.
<div class="name">
<p>xxx</p>
</div>
.


Or several spaces apart
.
:::    name
xxx
:::
.
<div class="name">
<p>xxx</p>
</div>
.


It could contain params
.
::: name arg=123 foo=456
xxx
:::
.
<div class="name">
<p>xxx</p>
</div>
.


But closing marker can't
.
::: name
xxx
::: arg=123
.
<div class="name">
<p>xxx
::: arg=123</p>
</div>
.


This however isn't a valid one
.
::: namename
xxx
:::
.
<p>::: namename
xxx
:::</p>
.


Containers self-close at the end of the document
.
::: name
xxx
.
<div class="name">
<p>xxx</p>
</div>
.


They should terminate paragraphs
.
blah blah
::: name
content
:::
.
<p>blah blah</p>
<div class="name">
<p>content</p>
</div>
.


They could be nested in lists
.
 -  ::: name
    - xxx
    :::
.
<ul>
<li>
<div class="name">
<ul>
<li>xxx</li>
</ul>
</div>
</li>
</ul>
.


Or in blockquotes
.
> ::: name
> xxx
>> yyy
> zzz
> :::
.
<blockquote>
<div class="name">
<p>xxx</p>
<blockquote>
<p>yyy
zzz</p>
</blockquote>
</div>
</blockquote>
.


List indentation quirks
.
 -  ::: name
    xxx
    yyy
   :::

 -  ::: name
    xxx
   yyy
   :::
.
<ul>
<li>
<div class="name">
<p>xxx
yyy</p>
</div>
</li>
</ul>
<p>:::</p>
<ul>
<li>
<div class="name">
<p>xxx</p>
</div>
</li>
</ul>
<p>yyy
:::</p>
.
