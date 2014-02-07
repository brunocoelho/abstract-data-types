function Heap() {
	this.heap = [undefined];
}

Heap.prototype.add = function(data) {
	var lastPositionIndex = this.heap.push(data) - 1;
	this._bubbleUp(lastPositionIndex);
};

Heap.prototype.delete = function() {
	var lastPositionIndex = this.heap.length - 1;

	this.heap[1] = this.heap[lastPositionIndex];
	this.heap.splice(this.heap.length - 1);

	this._bubbleDown();
};

Heap.prototype.top = function() {
	return this.heap[1];
};

Heap.prototype._swap = function(lastPositionIndex, parentIndex) {
	var temp = this.heap[lastPositionIndex];
	this.heap[lastPositionIndex] = this.heap[parentIndex];
	this.heap[parentIndex] = temp;
};

Heap.prototype._bubbleUp = function(lastPositionIndex) {
	var lastData = this.heap[lastPositionIndex],
		parentIndex = Math.floor(lastPositionIndex / 2),
		temp;

	while (lastData > this.heap[parentIndex]) {
		this._swap(lastPositionIndex, parentIndex);
		lastPositionIndex = parentIndex;
		parentIndex = Math.floor(temp / 2);
	}
};

Heap.prototype._bubbleDown = function() {
	var index = 1,
		firstData = this.heap[index];

	while (this._hasChild(index) && this._lesserThanAnyChild(index)) {
		this._swapBiggerChild(index);
	}
};

Heap.prototype._hasChild = function(index) {
	return this.heap[index * 2] || this.heap[(index * 2) + 1];
};

Heap.prototype._lesserThanAnyChild = function(index) {
	var firstChild = this.heap[index * 2],
		parent = this.heap[index];
		secondChild = this.heap[(index * 2) + 1];

	return parent < firstChild || parent < secondChild;
};

Heap.prototype._swapBiggerChild = function(index) {
	var firstChildIndex = index * 2,
		firstChild = this.heap[firstChildIndex],
		secondChildIndex = (index * 2) + 1,
		secondChild = this.heap[secondChildIndex];

		firstChild > secondChild ?
			this._swap(firstChildIndex, index) :
			this._swap(secondChildIndex, index);
};

Heap.prototype.print = function() {
	console.log(this.heap.slice(1));
};

exports.Heap = Heap;
