#Quick Find

```
var q = new QuickFind(10);

q.print();        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
q.union(4, 3);    // [0, 1, 2, 3, 3, 5, 6, 7, 8, 9]
q.connected(4,3); // true
q.connected(4,2); // false
q.union(6, 1);    // [0, 1, 2, 3, 3, 5, 1, 7, 8, 9]
```

#Quick Union

```
var q = new QuickUnion(10);

q.union(1, 2); 		// [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
q.union(2, 3); 		// [0, 2, 3, 3, 4, 5, 6, 7, 8, 9]
q.union(5, 2); 		// [0, 2, 2, 3, 4, 3, 6, 7, 8, 9]
q.connected(5, 2);  // true
```

#Weighted Quick Union

```
var w = new WeightedQuickUnion(10);

w.union(1, 2); 		// [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
w.union(2, 3); 		// [0, 2, 2, 2, 4, 5, 6, 7, 8, 9]
w.union(8, 9); 		// [0, 2, 2, 2, 4, 5, 6, 7, 9, 9]
w.union(5, 2); 		// [0, 2, 2, 2, 4, 2, 6, 7, 9, 9]
w.connected(8, 9);  // true
```

#Path Compression

```
var p = new PathCompression(10);

p.union(1, 2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
p.union(2, 3); // [0, 2, 2, 2, 4, 5, 6, 7, 8, 9]
p.union(8, 9); // [0, 2, 2, 2, 4, 5, 6, 7, 9, 9]
p.union(5, 2); // [0, 2, 2, 2, 4, 2, 6, 7, 9, 9]
```