function InsertionSort(arr) {
	var i,
		j,
		len = arr.length,
		swap;

	for (i = 0; i < len; i++) {
		for (j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				swap = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = swap;
			}
			else {
				break;
			}
		}
	}
	return arr;
}

module.exports = InsertionSort;

/*

new InsertionSort([5, 4, 3, 2, 1]);
# [1, 2, 3, 4, 5]

For randomly ordered arrays of length N with with distinct keys,
insertion sort uses ~N2/4 compares and ~N2/4 exchanges on the average.
The worst case is ~ N2/2 compares and ~ N2/2 exchanges and
the best case is N-1 compares and 0 exchanges.

*/