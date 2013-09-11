function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

// List type FIFO. Same as Queue.
function DoublyLinkedList() {
    this.size = 0;
    this.first = null;
    this.last = null;
}

DoublyLinkedList.prototype =  {
    // Removes an item at the beginning of the list.
    pop: function() {
        var oldFirst;

        if (this.size === 0) {
            console.log('This list is already empty.');
        }

        oldFirst = this.first;
        this.first = this.first.next;
        this.first.prev = null;

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
                this.last.prev = this.first;
                this.first.next = this.last;
            }
            else {
                this.last.next = node;
                node.prev = this.last;
                this.last = node;
            }
        }
        this.size += 1;
    },

    isEmpty: function() {
        return this.first === null;
    }
};
