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

module.exports = WeightedQuickUnion
