Bullet unchecked and checked
.
- [ ] unchecked item 1
- [ ] unchecked item 2
- [x] checked item 3
.
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> unchecked item 1</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> unchecked item 2</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> checked item 3</li>
</ul>
.

Uppercase X
.
- [X] checked uppercase
- [x] checked lowercase
.
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> checked uppercase</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> checked lowercase</li>
</ul>
.

Ordered list with tasks
.
1. [x] checked ordered 1
2. [ ] unchecked ordered 2
.
<ol class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> checked ordered 1</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> unchecked ordered 2</li>
</ol>
.

Invalid checkbox syntax
.
- [  ] not a todo
- [ x] not a todo
- [x ] not a todo
.
<ul>
<li>[  ] not a todo</li>
<li>[ x] not a todo</li>
<li>[x ] not a todo</li>
</ul>
.

Mixed task and non-task items
.
- normal item
- [ ] unchecked
- another normal
- [x] checked
.
<ul class="contains-task-list">
<li>normal item</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> unchecked</li>
<li>another normal</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> checked</li>
</ul>
.

No task items - no class on list
.
- normal 1
- normal 2
.
<ul>
<li>normal 1</li>
<li>normal 2</li>
</ul>
.

Nested list with tasks
.
- foo
  - [ ] nested unchecked
  - [x] nested checked
.
<ul>
<li>foo
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> nested unchecked</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> nested checked</li>
</ul>
</li>
</ul>
.

Task with inline formatting
.
- [x] **bold** task
- [ ] *italic* task
- [x] `code` task
.
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> <strong>bold</strong> task</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <em>italic</em> task</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> <code>code</code> task</li>
</ul>
.

Single task item
.
- [x] only item
.
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> only item</li>
</ul>
.

Different bullet markers
.
+ [x] plus checked
+ [ ] plus unchecked
.
<ul class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> plus checked</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> plus unchecked</li>
</ul>
.

Ordered list starting from non-1
.
3. [x] task three
4. [ ] task four
.
<ol start="3" class="contains-task-list">
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox" checked=""> task three</li>
<li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> task four</li>
</ol>
.
