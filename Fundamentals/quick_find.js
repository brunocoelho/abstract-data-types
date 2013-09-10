var QuickFind = function QuickFind(arrLength) {

    this.arr = [];
    this.arrLength = arrLength;

    var i = 0;

    for(; i < this.arrLength; i += 1) {
        this.arr[i] = i;
    }
};

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

var q = new QuickFind(10);

q.print();        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
q.union(4, 3);    // [0, 1, 2, 3, 3, 5, 6, 7, 8, 9]
q.connected(4,3); // true
q.connected(4,2); // false
q.union(6, 1);    // [0, 1, 2, 3, 3, 5, 1, 7, 8, 9]

