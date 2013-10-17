var shuffling = function(arr) {
	var arrLen = arr.length,
		i,
		random,
		swap;

	for (i = 0; i < arrLen; i++) {
		random = Math.floor(Math.random() * i);
		swap = arr[i];
		arr[i] = arr[random];
		arr[random] = swap;
	}

	return arr;
};

module.exports = shuffling;

// console.log(shuffling([1,2,3,4,5,6,7,8,9]));
