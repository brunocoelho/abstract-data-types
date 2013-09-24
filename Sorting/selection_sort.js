function SelectionSort(arr) {
	var i,
		j,
		arrLen = arr.length,
		min,
		swap;

	for (i = 0; i < arrLen; i++) {
		min = i;
		for (j = i + 1; j < arrLen; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		swap = arr[i];
		arr[i] = arr[min];
		arr[min] = swap;
	}
	return arr;
}

module.exports = SelectionSort;

/*
var a = new SelectionSort([5, 4, 3, 2, 1]);
[1, 2, 3, 4, 5]

Selection sort uses ~N2/2 compares and N exchanges to sort an array of length N.
*/