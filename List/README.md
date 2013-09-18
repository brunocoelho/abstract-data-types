#Singly Linked List

```
var LinkedList = require('./List/singly_linked_list');

var list = new LinkedList();
list.push(1);
list.push(2);
list.isEmpty(); // false
list.pop();     // { value: 1, next: { value: 2, next: null } }
list.size;      // 1
```

#Doubly Linked List

```
var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.isEmpty(); // false
list.size;      // 2
list.pop();     // { value: 1, next: { value: 2, next: null, prev: null }, prev: null }

```