function QuickUnion(arrLength) {

    this.arr = [];

    var i = 0;

    for(; i < arrLength; i += 1) {
        this.arr[i] = i;
    }
}

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

module.exports = QuickUnion
