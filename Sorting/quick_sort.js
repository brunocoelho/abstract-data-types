function quicksort(arr) {
	var arrLen = arr.length,
		left,
		middle,
		right;

	if (arrLen <= 1) {
		return arr;
	}

	middle = partition(arr);

	left = arr.slice(0, middle);
	right = arr.slice(middle + 1, arrLen);

	return Array.prototype.concat.call([], quicksort(left), arr[middle], quicksort(right));
}

function partition(arr) {
	var i = 1,
		j = arr.length - 1,
		pivot = arr[0];

	function swap(i, j) {
		var temp;
		temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	while (true) {
		while (arr[i] < pivot) {
			i++;
		}

		while (arr[j] > pivot) {
			j--;
		}

		if (i > j) {
			swap(0, j);
			break;
		}
		else {
			swap(i, j);
			i++;
			j--;
		}
	}
	return j;
}

/*
	var shuffling = require('./shuffling'),
		arr = shuffling([1,2,2,4,5,6,7,8,9,10,10,12,13,15,15,16,17,18,20,20]);

	console.log(arr);
	console.log(quicksort(arr));
*/
