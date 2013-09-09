var Node = function Node(value) {
    this.value = value;
    this.next = null;
};

// List type FIFO. Same as Queue.
var LinkedList = function LinkedList() {
    this.size = 0;
    this.first = null;
    this.last = null;
};

LinkedList.prototype =  {
    // Removes an item at the beginning of the list.
    pop: function() {
        var oldFist;

        if (this.size === 0) {
            console.log('Nothing in the list to pop');
        }

        oldFirst = this.first;
        this.first = this.first.next;

        this.size -= 1;
        return oldFirst;
    },

    // Adds an item to the end of the list.
    push: function(value) {
        var node = new Node(value);

        if (this.first === null) {
            this.first = node;
            this.last = node;
        }
        else {
            if (this.first.next === null) {
                this.last = node;
                this.first.next = this.last;
            }
            else {
                this.last.next = node;
                this.last = node;
            }
        }
        this.size += 1;
    },

    isEmpty: function() {
        return this.first === null;
    }
};

