(md/plugins)=

# Plugin extensions

The following plugins are embedded within the core package (enabled when using the `"default"` preset configuration):

- [tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

Other plugins are then available *via* the `markdown_it.extensions` package:

- [footnote](https://github.com/markdown-it/markdown-it-footnote) is based on the [pandoc definition](http://johnmacfarlane.net/pandoc/README.html#footnotes):

    ```md
    Normal footnote:

    Here is a footnote reference,[^1] and another.[^longnote]

    [^1]: Here is the footnote.

    [^longnote]: Here's one with multiple blocks.

        Subsequent paragraphs are indented to show that they
    belong to the previous footnote.
    ```

- [front-matter](https://github.com/ParkSB/markdown-it-front-matter) parses initial metadata, stored between opening/closing dashes:

    ```md
    ---
    valid-front-matter: true
    ---
    ```

- [containers](https://github.com/markdown-it/markdown-it-container) is a plugin for creating block-level custom containers:

    ```md
    ::::: name
    :::: name
    *markdown*
    ::::
    :::::
    ```

- [texmath](https://github.com/goessner/markdown-it-texmath) parses TeX math equations set inside opening and closing delimiters:

    ```md
    $\alpha = \frac{1}{2}$
    ```

- `amsmath` also parses TeX math equations, but without the surrounding delimiters and only for top-level [amsmath](https://ctan.org/pkg/amsmath) environments:

    ```latex
    \begin{gather*}
    a_1=b_1+c_1\\
    a_2=b_2+c_2-d_2+e_2
    \end{gather*}
    ```

- `myst_blocks` and `myst_role` plugins are utilised by the [MyST renderer](https://myst-parser.readthedocs.io/en/latest/using/syntax.html)

There are also many other plugins which could easily be ported (and hopefully will be):

- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [definition list](https://github.com/markdown-it/markdown-it-deflist)
- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- ... and [others](https://www.npmjs.org/browse/keyword/markdown-it-plugin)
