var QuickFind = (function(arrLength) {

  var arr = [],
      i = 0;

	for(; i < arrLength; i += 1) {
		arr[i] = i;
	}

	var union = function union(p, q) {
		var pid = arr[p],
		    i = 0;

		if(!connected(p, q)) {
			for(; i < arrLength; i += 1) {
				if (arr[i] === pid) {
					arr[i] = arr[q];
				}
			}
		}
	};

	var root = function root(p) {
		return arr[p];
	};

	var connected = function connected(p, q) {
		return arr[p] === arr[q];
	};

	var print = function print() {
		console.log(arr);
	};

	return {
		union: union,
		root: root,
		connected: connected,
		print: print
	};
}(10));

QuickFind.print();        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
QuickFind.union(4, 3);    // [0, 1, 2, 3, 3, 5, 6, 7, 8, 9]
QuickFind.connected(4,3); // true
QuickFind.connected(4,2); // false
QuickFind.union(6, 1);    // [0, 1, 2, 3, 3, 5, 1, 7, 8, 9]

