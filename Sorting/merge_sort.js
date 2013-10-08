function mergeSort(arr) {
	var arrLen = arr.length,
		left,
		mid,
		right;

	if (arrLen <= 1) {
		return arr;
	}

	mid = Math.floor(arrLen / 2);
	left = arr.slice(0, mid);
	right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var aux = [],
		iL = 0,
		iR = 0,
		leftLen = left.length,
		rightLen = right.length;

	while (iL < leftLen && iR < rightLen) {
		if (left[iL] <= right[iR]) {
			aux.push(left[iL++]);
		}
		else {
			aux.push(right[iR++]);
		}
	}
	return aux.concat(left.slice(iL).concat(right.slice(iR)));
}

module.exports = mergeSort;
