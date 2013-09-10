function WeightedQuickUnion(arrLength) {

    this.arrLength = arrLength;
    this.arr = [];
    this.sizes = [];

    var i = 0;

    for(; i < arrLength; i += 1) {
        this.arr[i] = i;
        this.sizes[i] = 1;
    }
}

WeightedQuickUnion.prototype = {

    union: function union(p, q) {
        var rootP = this.root(p),
            rootQ = this.root(q);

        if(rootP !== rootQ) {
            if(this.sizes[rootP] >= this.sizes[rootQ]) {
                this.arr[rootQ] = rootP;
                this.sizes[rootP] += this.sizes[rootQ];
            }
            else {
                this.arr[rootP] = rootQ;
                this.sizes[rootQ] += this.sizes[rootP];
            }
        }
    },

    root: function root(p) {
        while(p !== this.arr[p]) {
            p = this.arr[p];
        }
        return p;
    },

    connected: function connected(p, q) {
        return this.root(p) === this.root(q);
    },

    print: function print() {
        console.log('Arr: ' + this.arr);
        console.log('Sizes: ' + this.sizes);
    }
};

var w = new WeightedQuickUnion(10);

w.union(1, 2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
w.union(2, 3); // [0, 2, 2, 2, 4, 5, 6, 7, 8, 9]
w.union(8, 9); // [0, 2, 2, 2, 4, 5, 6, 7, 9, 9]
w.union(5, 2); // [0, 2, 2, 2, 4, 2, 6, 7, 9, 9]
w.connected(8, 9); // true

