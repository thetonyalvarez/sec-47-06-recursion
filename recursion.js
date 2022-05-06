/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	return nums.length === i ? 1 : nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, max = "", i = 0) {
	if (words.length === i) return max.length;

	if (words[i].length > max.length) max = words[i];

	return longest(words, max, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, output = "", i = 0) {
	if (str.length === i) return output;

	if (i % 2 === 0) output = output + str[i];

	return everyOther(str, output, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	let fwdOutput = "";
	let revOutput = "";

	function _fwd(str, i) {
		if (str.length === i) return;
		fwdOutput = fwdOutput + str[i];
		return _fwd(str, i + 1);
	}

	function _rev(str, i) {
		if (i < 0) return;
		revOutput = revOutput + str[i];
		return _rev(str, i - 1);
	}

	_fwd(str, 0);
	_rev(str, str.length - 1);

	return fwdOutput == revOutput ? true : false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (arr.length == i) return -1;

	if (arr[i] == val) {
		return i;
	} else {
		return findIndex(arr, val, i + 1);
	}
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	let output = "";

	function _rev(str, i) {
		if (i < 0) return;
		output = output + str[i];
		return _rev(str, i - 1);
	}

	_rev(str, str.length - 1);

	return output;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let output = [];

	for (let key in obj) {
		if (typeof obj[key] === "string") output.push(obj[key]);
		if (typeof obj[key] === "object")
			output.push(...gatherStrings(obj[key]));
	}

	return output;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
	function _binarySearch(arr, val, low = 0, high = arr.length - 1) {
		if (low > high) return -1;

		let mid = Math.floor((low + high) / 2);

		if (arr[mid] == val) return mid;

		if (val > arr[mid]) return _binarySearch(arr, val, mid + 1, high);
		if (val < arr[mid]) return _binarySearch(arr, val, low, mid - 1);
	}

	return _binarySearch(arr, val, 0);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
