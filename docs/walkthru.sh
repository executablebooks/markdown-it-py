421285  @1782070408:UTC     git clone https://github.com/executablebooks/markdown-it-py.git
421286  @1782070412:UTC     cd ./markdown-it-py/
421287  @1782070412:UTC     ll
421288  @1782070425:UTC     uv build
421289  @1782070436:UTC     uv sync
421290  @1782070441:UTC     ll
421291  @1782070442:UTC     ack docs
421292  @1782070444:UTC     cls;ack docs
421293  @1782070461:UTC     ll
421294  @1782070464:UTC     ll docs/
421295  @1782070467:UTC     cd ./docs/
421296  @1782070468:UTC     uv init
421297  @1782070470:UTC     uv sync
421298  @1782070472:UTC     emc Makefile
421299  @1782070487:UTC     make html
421300  @1782070499:UTC     uv add -r requirements.txt
421301  @1782070507:UTC     make html
421302  @1782070525:UTC     uv add --path
421303  @1782070528:UTC     uv add --help
421304  @1782070537:UTC     uv add --editable ..
421305  @1782070540:UTC     make html
421306  @1782070547:UTC     uv add mdit_py_plugins
421307  @1782070549:UTC     make html
421308  @1782070558:UTC     uv add sphinx_copybutton
421309  @1782070560:UTC     make html
421310  @1782070566:UTC     uv add sphinx_design
421311  @1782070570:UTC     bat conf.py
421312  @1782070579:UTC     uv add jupyter_sphinx
421313  @1782070582:UTC     bat conf.py
421314  @1782070591:UTC     uv add sphinx_book_theme
421315  @1782070597:UTC     uv add sphinx_rtd_theme
421316  @1782070603:UTC     make html
421317  @1782070617:UTC     uv add sphinx_ext_apidoc
421318  @1782070620:UTC     uv add sphinx.ext.apidoc
421319  @1782070705:UTC     uv add sphinx
421320  @1782070710:UTC     make html
421321  @1782070746:UTC     emc conf.py
421322  @1782070790:UTC     make html
421323  @1782070819:UTC     emc ../pyproject.toml
421324  @1782070829:UTC     uv add "linkify-it-py>=1,<3"
421325  @1782070837:UTC     uv add "mdit-py-plugins>=0.5.0"
421326  @1782070866:UTC     > install-deps.sh
421327  @1782070867:UTC     emc install-deps.sh
421328  @1782070925:UTC     mv install-deps.sh install-deps.toml
421329  @1782070935:UTC     cls;jaq '.' install-deps.toml
421330  @1782070945:UTC     cls;jaq '.|to_entries' install-deps.toml
421331  @1782070963:UTC     cls;jaq '.|to_entries | [].value' install-deps.toml
421332  @1782070974:UTC     cls;jaq '.|to_entries | .[].value' install-deps.toml
421333  @1782070985:UTC     cls;jaq '.|to_entries | .[].value' install-deps.toml
421334  @1782070996:UTC     cls;jaq '.|to_entries | .[].value' install-deps.toml
421335  @1782071005:UTC     cls;jaq '.|to_entries | .[].value[]' install-deps.toml
421336  @1782071013:UTC     cls;jaq -r '.|to_entries | .[].value[]' install-deps.toml
421337  @1782071051:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^[a-zA-Z0-9_+.-]+[^~=]*")' install-deps.toml
421338  @1782071077:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>([a-zA-Z0-9_+.-]+)([^~=]*))(.*)")' install-deps.toml
421339  @1782071089:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>([a-zA-Z0-9_+.-]+)([^~=]*))(?<garbage>.*)")' install-deps.toml
421340  @1782071111:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)")' install-deps.toml
421341  @1782071146:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures[0]' install-deps.toml
421342  @1782071154:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures' install-deps.toml
421343  @1782071166:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures | .[]' install-deps.toml
421344  @1782071185:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures | .[] | select(.name == "pkg")' install-deps.toml
421345  @1782071201:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures | .[] | select(.name == "pkg") | .string' install-deps.toml
421346  @1782071221:UTC     cls;jaq -r '.|to_entries | .[].value[] | match("^(?<pkg>(?<pkg_name>[a-zA-Z0-9_+.-]+)(?<pkg_rest>[^~=]*))(?<garbage>.*)") | .captures | .[] | select(.name == "pkg") | .string' install-deps.toml | xargs -Ieach uv add --dev 'each'
