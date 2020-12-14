# The initial tests  are adapted from the test for normal code fences in tests/test_port/fixtures/commonmark_spec.md

src line: 1638

.
:::
<
 >
:::
.
<pre><code>&lt;
 &gt;
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1665

.
::
foo
::
.
<p>::
foo
::</p>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1676

.
:::
aaa
~~~
:::
.
<pre><code>aaa
~~~
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1688

.
:::
aaa
```
:::
.
<pre><code>aaa
```
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1702

.
::::
aaa
:::
::::::
.
<pre><code>aaa
:::
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1729

.
:::
.
<pre><code></code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1736

.
:::::

:::
aaa
.
<pre><code>
:::
aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1749

.
> :::
> aaa

bbb
.
<blockquote>
<pre><code>aaa
</code></pre>
</blockquote>
<p>bbb</p>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1765

.
:::

  
:::
.
<pre><code>
  
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1779

.
:::
:::
.
<pre><code></code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1791

.
 :::
 aaa
aaa
:::
.
<pre><code>aaa
aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1803

.
  :::
aaa
  aaa
aaa
  :::
.
<pre><code>aaa
aaa
aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1817

.
   :::
   aaa
    aaa
  aaa
   :::
.
<pre><code>aaa
 aaa
aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1833

.
    :::
    aaa
    :::
.
<pre><code>:::
aaa
:::
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1848

.
:::
aaa
  :::
.
<pre><code>aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1858

.
   :::
aaa
  :::
.
<pre><code>aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1870

.
:::
aaa
    :::
.
<pre><code>aaa
    :::
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1884

.
::: :::
aaa
.
<pre><code class="block-:::" >aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1907

.
foo
:::
bar
:::
baz
.
<p>foo</p>
<pre><code>bar
</code></pre>
<p>baz</p>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1946

.
:::ruby
def foo(x)
  return 3
end
:::
.
<pre><code class="block-ruby" >def foo(x)
  return 3
end
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1974

.
::::;
::::
.
<pre><code class="block-;" ></code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 1984

.
::: aa :::
foo
.
<pre><code class="block-aa" >foo
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 2007

.
:::
::: aaa
:::
.
<pre><code>::: aaa
</code></pre>
.



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src line: 2007

.
:::
::: aaa
:::
.
<pre><code>::: aaa
</code></pre>
.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Ending marker could be longer
.
::::: name :::::
  hello world
::::::::::::::::
.
<pre><code class="block-name" >  hello world
</code></pre>
.

Nested blocks
.
::::: name
:::: name
xxx
::::
:::::
.
<pre><code class="block-name" >:::: name
xxx
::::
</code></pre>
.

Name could be adjacent to marker
.
:::name
xxx
:::
.
<pre><code class="block-name" >xxx
</code></pre>
.

They should terminate paragraphs
.
blah blah
::: name
content
:::
.
<p>blah blah</p>
<pre><code class="block-name" >content
</code></pre>
.

They could be nested in lists
.
 -  ::: name
    - xxx
    :::
.
<ul>
<li>
<pre><code class="block-name" >- xxx
</code></pre>
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
<pre><code class="block-name" >xxx
&gt; yyy
zzz
</code></pre>
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
<pre><code class="block-name" >xxx
yyy
</code></pre>
</li>
</ul>
<pre><code>
-  ::: name
 xxx
yyy
</code></pre>
.
