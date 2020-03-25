from pathlib import Path


class AttrDict(dict):
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self

        # recursively apply to all nested dictionaries
        for key, item in list(self.items()):
            if isinstance(item, dict):
                self[key] = AttrDict(item)


def read_fixture_file(path):
    text = Path(path).read_text()
    tests = []
    section = 0
    last_pos = 0
    lines = text.splitlines(keepends=True)
    for i in range(len(lines)):
        if lines[i].rstrip() == ".":
            if section == 0:
                tests.append([i, lines[i - 1].strip()])
                section = 1
            elif section == 1:
                tests[-1].append("".join(lines[last_pos + 1 : i]))
                section = 2
            elif section == 2:
                tests[-1].append("".join(lines[last_pos + 1 : i]))
                section = 0

            last_pos = i
    return tests
