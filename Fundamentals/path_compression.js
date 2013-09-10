function PathCompression(arrLength) {

    this.arr = [];
    this.sizes = [];

    var i = 0;

    for(; i < arrLength; i += 1) {
        this.arr[i] = i;
        this.sizes[i] = 1;
    }
}

PathCompression.prototype = {

    union: function union(p, q) {
        var rootP = this.root(p),
            rootQ = this.root(q);

        if(rootP !== rootQ) {
            if(this.sizes[rootP] <= this.sizes[rootQ]) {
                this.arr[rootP] = rootQ;
                this.sizes[rootQ] += this.sizes[rootP];
            }
            else {
                this.arr[rootQ] = rootP;
                this.sizes[rootP] += this.sizes[rootQ];
            }
        }
    },

    root: function root(p) {
        while(p !== this.arr[p]) {
            this.arr[p] = this.arr[arr[p]];
            p = this.arr[p];
        }
        return p;
    },

    connected: function connected(p, q) {
        return this.root(p) === this.root(q);
    },

    print: function print() {
        console.log('Arr: ' + this.arr);
    }
};

var p = new PathCompression(10);
p.union(1, 2); // [0, 2, 2, 3, 4, 5, 6, 7, 8, 9]
p.union(2, 3); // [0, 2, 2, 2, 4, 5, 6, 7, 8, 9]
p.union(8, 9); // [0, 2, 2, 2, 4, 5, 6, 7, 9, 9]
p.union(5, 2); // [0, 2, 2, 2, 4, 2, 6, 7, 9, 9]

