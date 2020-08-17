
Basic:
.
{abc}`xyz`
.
<p><code class="sphinx-role">{abc}[xyz]</code></p>
.

Surrounding Text:
.
a {abc}`xyz` b
.
<p>a <code class="sphinx-role">{abc}[xyz]</code> b</p>
.

In Code:
.
`` {abc}`xyz` ``
.
<p><code>{abc}`xyz`</code></p>
.


Surrounding Code:
.
`a` {abc}`xyz` `b`
.
<p><code>a</code> <code class="sphinx-role">{abc}[xyz]</code> <code>b</code></p>
.

In list:
.
- {abc}`xyz`
.
<ul>
<li><code class="sphinx-role">{abc}[xyz]</code></li>
</ul>
.

In Quote:
.
> {abc}`xyz` b
.
<blockquote>
<p><code class="sphinx-role">{abc}[xyz]</code> b</p>
</blockquote>
.

Multiple ticks:
.
{abc}``xyz``
.
<p><code class="sphinx-role">{abc}[xyz]</code></p>
.

Unbalanced ticks:
.
{abc}``xyz`
.
<p>{abc}``xyz`</p>
.

Space in name:
.
{ab c}`xyz`
.
<p>{ab c}<code>xyz</code></p>
.

Escaped:
.
\{abc}`xyz`
.
<p>{abc}<code>xyz</code></p>
.
