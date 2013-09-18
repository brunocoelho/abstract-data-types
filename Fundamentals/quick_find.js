function QuickFind(arrLength) {

    this.arr = [];
    this.arrLength = arrLength;

    var i = 0;

    for(; i < this.arrLength; i += 1) {
        this.arr[i] = i;
    }
}

QuickFind.prototype = {
    union: function union(p, q) {
        var pid = this.arr[p],
            i = 0;

        if(!this.connected(p, q)) {
            for(; i < this.arrLength; i += 1) {
                if (this.arr[i] === pid) {
                  this.arr[i] = this.arr[q];
                }
            }
        }
    },

    root: function root(p) {
        return this.arr[p];
    },

    connected: function connected(p, q) {
        return this.arr[p] === this.arr[q];
    },

    print: function print() {
        console.log(this.arr);
    }
};

module.exports = QuickFind
