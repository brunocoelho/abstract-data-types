var WeightedQuickUnion = (function(arrLength) {

	var arr = [],
      sizes = [],
	    i = 0;

	for(; i < arrLength; i += 1) {
		arr[i] = i;
    sizes[i] = 1;
	}

	var union = function union(p, q) {
		var rootP = root(p),
		    rootQ = root(q);

		if(rootP !== rootQ) {
			if(sizes[rootP] <= sizes[rootQ]) {
        arr[rootP] = rootQ;
        sizes[rootQ] += sizes[rootP];
      }
      else {
        arr[rootQ] = rootP;
        sizes[rootP] += sizes[rootQ];
      }
		}
	};

	var root = function root(p) {
		while(p !== arr[p]) {
			p = arr[p];
		}
		return p;
	};

	var connected = function connected(p, q) {
		return root(p) === root(q);
	};

	var print = function print() {
		console.log("Arr: " + arr);
		console.log("Sizes: " + sizes);
	};

	return {
		union: union,
		root: root,
		connected: connected,
		print: print
	};
}(10));

WeightedQuickUnion.union(1,2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
WeightedQuickUnion.union(2,3); // [0, 2, 2, 2, 4, 5, 6, 7, 8, 9]
WeightedQuickUnion.union(8,9); // [0, 2, 2, 2, 4, 5, 6, 7, 9, 9]
WeightedQuickUnion.union(5,2); // [0, 2, 2, 2, 4, 2, 6, 7, 9, 9]

