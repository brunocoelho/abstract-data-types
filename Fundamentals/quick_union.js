var QuickUnion = (function(arrLength) {

	var arr = [],
	    i = 0;

	for(; i < arrLength; i += 1) {
		arr[i] = i;
	}

	var union = function union(p, q) {
		var rootP = find(p),
		    rootQ = find(q);

		if(rootP !== rootQ) {
			arr[rootP] = rootQ;
		}
	};

	var find = function find(p) {
		while(p !== arr[p]) {
			p = arr[p];
		}
		return p;
	};

	var connected = function connected(p, q) {
		return find(p) === find(q);
	};

	var print = function print() {
		console.log(arr);
	};

	return {
		union: union,
		find: find,
		connected: connected,
		print: print
	};
}(10));

QuickUnion.union(1,2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
QuickUnion.union(2,3); // [0, 2, 3, 3, 4, 5, 6, 7, 8, 9]
QuickUnion.union(5,2); // [0, 2, 2, 3, 4, 3, 6, 7, 8, 9]

