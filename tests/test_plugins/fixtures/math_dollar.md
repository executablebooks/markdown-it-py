single character inline equation. (valid=True)
.
$a$
.
<p><eq>a</eq></p>
.

inline equation with single greek character (valid=True)
.
$\\varphi$
.
<p><eq>\\varphi</eq></p>
.

simple equation starting and ending with numbers. (valid=True)
.
$1+1=2$
.
<p><eq>1+1=2</eq></p>
.

simple equation including special html character. (valid=True)
.
$1+1<3$
.
<p><eq>1+1<3</eq></p>
.

equation including backslashes. (valid=True)
.
$a \\backslash$
.
<p><eq>a \\backslash</eq></p>
.

use of currency symbol (valid=True)
.
You get 3$ if you solve $1+2$
.
<p>You get 3$ if you solve <eq>1+2</eq></p>
.

use of currency symbol (valid=True)
.
If you solve $1+2$ you get $3
.
<p>If you solve <eq>1+2</eq> you get $3</p>
.

inline fraction (valid=True)
.
$\\frac{1}{2}$
.
<p><eq>\\frac{1}{2}</eq></p>
.

inline column vector (valid=True)
.
$\\begin{pmatrix}x\\\\y\\end{pmatrix}$
.
<p><eq>\\begin{pmatrix}x\\\\y\\end{pmatrix}</eq></p>
.

inline bold vector notation (valid=True)
.
${\\tilde\\bold e}_\\alpha$
.
<p><eq>{\\tilde\\bold e}_\\alpha</eq></p>
.

exponentiation (valid=True)
.
$a^{b}$
.
<p><eq>a^{b}</eq></p>
.

conjugate complex (valid=True)
.
$a^\*b$ with $a^\*$
.
<p><eq>a^\*b</eq> with <eq>a^\*</eq></p>
.

Inline multi-line (valid=True)
.
a $a
\not=1$ b
.
<p>a <eq>a
\not=1</eq> b</p>
.

Inline multi-line with newline (valid=False)
.
a $a

\not=1$ b
.
<p>a $a</p>
<p>\not=1$ b</p>
.

single block equation, greek index (valid=True)
.
$$e_\\alpha$$
.
<section>
<eqn>e_\\alpha</eqn>
</section>
.

display equation on its own single line. (valid=True)
.
$$1+1=2$$
.
<section>
<eqn>1+1=2</eqn>
</section>
.

inline equation followed by block equation. (valid=True)
.
${e}_x$

$$e_\\alpha$$
.
<p><eq>{e}_x</eq></p>
<section>
<eqn>e_\\alpha</eqn>
</section>
.

underline tests (valid=True)
.
$$c{\\bold e}_x = a{\\bold e}_\\alpha - b\\tilde{\\bold e}_\\alpha$$
.
<section>
<eqn>c{\\bold e}_x = a{\\bold e}_\\alpha - b\\tilde{\\bold e}_\\alpha</eqn>
</section>
.

non-numeric character before opening $ or
after closing $ or both is allowed. (valid=True)
.
a$1+1=2$
$1+1=2$b
c$x$d
.
<p>a<eq>1+1=2</eq>
<eq>1+1=2</eq>b
c<eq>x</eq>d</p>
.

following dollar character '$' is allowed. (valid=True)
.
$x$ $ 
.
<p><eq>x</eq> $</p>
.

consecutive inline equations. (valid=True)
.
$x$ $y$
.
<p><eq>x</eq> <eq>y</eq></p>
.

inline equation after '-' sign in text. (valid=True)
.
so-what is $x$
.
<p>so-what is <eq>x</eq></p>
.

display equation with line breaks. (valid=True)
.
$$
1+1=2
$$
.
<section>
<eqn>
1+1=2
</eqn>
</section>
.

multiple equations (valid=True)
.
$$
a = 1
$$

$$
b = 2
$$
.
<section>
<eqn>
a = 1
</eqn>
</section>
<section>
<eqn>
b = 2
</eqn>
</section>
.

equation followed by a labelled equation (valid=True)
.
$$
a = 1
$$

$$
b = 2
$$ (1)
.
<section>
<eqn>
a = 1
</eqn>
</section>
<section>
<eqn>
b = 2
</eqn>
</section>
.

multiline equation. (valid=True)
.
$$\\begin{matrix}
 f & = & 2 + x + 3 \\ 
 & = & 5 + x 
\\end{matrix}$$
.
<section>
<eqn>\\begin{matrix}
 f & = & 2 + x + 3 \\ 
 & = & 5 + x 
\\end{matrix}</eqn>
</section>
.

vector equation. (valid=True)
.
$$\\begin{pmatrix}x_2 \\\\ y_2 \\end{pmatrix} = 
\\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix}\\cdot
\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix}$$
.
<section>
<eqn>\\begin{pmatrix}x_2 \\\\ y_2 \\end{pmatrix} = 
\\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix}\\cdot
\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix}</eqn>
</section>
.

display equation with equation number. (valid=True)
.
$$f(x) = x^2 - 1$$ (1)
.
<section>
<eqn>f(x) = x^2 - 1</eqn>
</section>
.

inline equation following code section. (valid=True)
.
`code`$a-b$
.
<p><code>code</code><eq>a-b</eq></p>
.

equation following code block. (valid=True)
.
```
code
```
$$a+b$$
.
<pre><code>code
</code></pre>
<section>
<eqn>a+b</eqn>
</section>
.

numbered equation following code block. (valid=True)
.
```
code
```
$$a+b$$(1)
.
<pre><code>code
</code></pre>
<section>
<eqn>a+b</eqn>
</section>
.

Equations in list. (valid=True)
.
1. $1+2$
2. $2+3$
    1. $3+4$
.
<ol>
<li><eq>1+2</eq></li>
<li><eq>2+3</eq>
<ol>
<li><eq>3+4</eq></li>
</ol>
</li>
</ol>
.

Inline sum. (valid=True)
.
$\\sum\_{i=1}^n$
.
<p><eq>\\sum\_{i=1}^n</eq></p>
.

Sum without equation number. (valid=True)
.
$$\\sum\_{i=1}^n$$
.
<section>
<eqn>\\sum\_{i=1}^n</eqn>
</section>
.

Sum with equation number. (valid=True)
.
$$\\sum\_{i=1}\^n$$ \(2\)
.
<section>
<eqn>\\sum\_{i=1}\^n</eqn>
</section>
.

equation number always vertically aligned. (valid=True)
.
$${\\bold e}(\\varphi) = \\begin{pmatrix}
\\cos\\varphi\\\\\\sin\\varphi
\\end{pmatrix}$$ (3)
.
<section>
<eqn>{\\bold e}(\\varphi) = \\begin{pmatrix}
\\cos\\varphi\\\\\\sin\\varphi
\\end{pmatrix}</eqn>
</section>
.

inline equations in blockquote. (valid=True)
.
> see $a = b + c$ 
> $c^2=a^2+b^2$ (2) 
> $c^2=a^2+b^2$ 
.
<blockquote>
<p>see <eq>a = b + c</eq>
<eq>c^2=a^2+b^2</eq> (2)
<eq>c^2=a^2+b^2</eq></p>
</blockquote>
.

display equation in blockquote. (valid=True)
.
> formula
>
> $$ a+b=c$$ (2)
>
> in blockquote. 
.
<blockquote>
<p>formula</p>
<section>
<eqn> a+b=c</eqn>
</section>
<p>in blockquote.</p>
</blockquote>
.

mixed syntax:
.
$$
a=1 \\
b=2
$$ (abc)

- ab $c=1$ d
.
<section>
<eqn>
a=1 \\
b=2
</eqn>
</section>
<ul>
<li>ab <eq>c=1</eq> d</li>
</ul>
.

escaped dollars '\\$' are interpreted as
dollar '$' characters. (valid=True)
.
\\$1+1=2$
$1+1=2\\$
.
<p>\$1+1=2$
$1+1=2\$</p>
.

empty line between text and display formula is required. (valid=False)
.
some text
 \$\\$a+b=c\$\$
.
<p>some text
$\$a+b=c$$</p>
.

whitespace character after opening $
or before closing $ is not allowed. (valid=False)
.
$ $
$ x$
$x $
.
<p>$ $
$ x$
$x $</p>
.
