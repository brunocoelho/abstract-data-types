var Node = function Node(value) {
    this.value = value;
    this.next = null;
};

var LinkedList = function LinkedList() {
    this.size = 0;
    this.first = null;
};

LinkedList.prototype =  {
    // Removes an item at the beginning of the list.
    pop: function() {
        if (this.size === 0) {
          //throw { 'Nothing in the Queue to pop' };
        }

        var oldFirst = this.first;
        this.first = this.first.next;

        this.size -= 1;
        return oldFirst;
    },

    // Adds an item to the end of the list.
    push: function(node) {
        var temp;

        if (this.first === null) {
            this.first = node;
        }
        else {
            temp = this.first;
            while (temp.next !== null) {
              temp = temp.next;
            }
            temp.next = node;
        }
        this.size += 1;
    },

    isEmpty: function() {
        return this.first === null;
    }
};

