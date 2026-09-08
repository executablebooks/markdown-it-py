Basic note alert
.
> [!NOTE]
> This is a note.
.
<div class="markdown-alert markdown-alert-note">
<p class="markdown-alert-title">Note</p>
<p>This is a note.</p>
</div>
.

Basic tip alert
.
> [!TIP]
> This is a tip.
.
<div class="markdown-alert markdown-alert-tip">
<p class="markdown-alert-title">Tip</p>
<p>This is a tip.</p>
</div>
.

Basic important alert
.
> [!IMPORTANT]
> This is important.
.
<div class="markdown-alert markdown-alert-important">
<p class="markdown-alert-title">Important</p>
<p>This is important.</p>
</div>
.

Basic warning alert
.
> [!WARNING]
> This is a warning.
.
<div class="markdown-alert markdown-alert-warning">
<p class="markdown-alert-title">Warning</p>
<p>This is a warning.</p>
</div>
.

Basic caution alert
.
> [!CAUTION]
> This is a caution.
.
<div class="markdown-alert markdown-alert-caution">
<p class="markdown-alert-title">Caution</p>
<p>This is a caution.</p>
</div>
.

Case insensitive - lowercase
.
> [!note]
> Lowercase note.
.
<div class="markdown-alert markdown-alert-note">
<p class="markdown-alert-title">Note</p>
<p>Lowercase note.</p>
</div>
.

Case insensitive - mixed case
.
> [!Warning]
> Mixed case warning.
.
<div class="markdown-alert markdown-alert-warning">
<p class="markdown-alert-title">Warning</p>
<p>Mixed case warning.</p>
</div>
.

Multi-paragraph content
.
> [!NOTE]
> First paragraph.
>
> Second paragraph.
.
<div class="markdown-alert markdown-alert-note">
<p class="markdown-alert-title">Note</p>
<p>First paragraph.</p>
<p>Second paragraph.</p>
</div>
.

Alert with inline formatting
.
> [!TIP]
> This has **bold** and *italic* text.
.
<div class="markdown-alert markdown-alert-tip">
<p class="markdown-alert-title">Tip</p>
<p>This has <strong>bold</strong> and <em>italic</em> text.</p>
</div>
.

Not an alert - unknown type
.
> [!UNKNOWN]
> Not an alert.
.
<blockquote>
<p>[!UNKNOWN]
Not an alert.</p>
</blockquote>
.

Not an alert - text after marker on same line
.
> [!NOTE] extra text
> Content.
.
<blockquote>
<p>[!NOTE] extra text
Content.</p>
</blockquote>
.

Not an alert - not on first line
.
> Some text
> [!NOTE]
> More text.
.
<blockquote>
<p>Some text
[!NOTE]
More text.</p>
</blockquote>
.

Regular blockquote unchanged
.
> This is a regular blockquote.
.
<blockquote>
<p>This is a regular blockquote.</p>
</blockquote>
.

Empty alert (marker only)
.
> [!NOTE]
.
<div class="markdown-alert markdown-alert-note">
<p class="markdown-alert-title">Note</p>
</div>
.

Alert with list
.
> [!IMPORTANT]
> Things to do:
>
> - item one
> - item two
.
<div class="markdown-alert markdown-alert-important">
<p class="markdown-alert-title">Important</p>
<p>Things to do:</p>
<ul>
<li>item one</li>
<li>item two</li>
</ul>
</div>
.
