var QuickUnion = function QuickUnion(arrLength) {

    this.arr = [];

    var i = 0;

    for(; i < arrLength; i += 1) {
        this.arr[i] = i;
    }
};

QuickUnion.prototype = {

    union: function union(p, q) {
        var rootP = this.root(p),
            rootQ = this.root(q);

        if(rootP !== rootQ) {
            this.arr[rootP] = rootQ;
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
        console.log(this.arr);
    }
};

var q = new QuickUnion(10);

q.union(1, 2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
q.union(2, 3); // [0, 2, 3, 3, 4, 5, 6, 7, 8, 9]
q.union(5, 2); // [0, 2, 2, 3, 4, 3, 6, 7, 8, 9]
q.connected(5, 2); // true

