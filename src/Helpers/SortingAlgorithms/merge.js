// main function that sorts array[start..end] using merge()
function mergeSort(array, start, end) {
	// base case
	if (start < end) {
		// find the middle point
		let middle = Math.floor((start + end) / 2)

		mergeSort(array, start, middle) // sort first half
		mergeSort(array, middle + 1, end)  // sort second half

		// merge the sorted halves
		merge(array, start, middle, end)
	}
}

// merges two subarrays of array[]
function merge(array, start, middle, end) {
	// create temp arrays
	let leftArrayLength = middle - start + 1
	let rightArrayLength = end - middle

	let leftArray = []
	let rightArray = []

	// fill in left array
	for (let i = 0; i < leftArrayLength; ++i)
		leftArray[i] = array[start + i]

	// fill in right array
	for (let i = 0; i < rightArrayLength; ++i)
		rightArray[i] = array[middle + 1 + i]

	// merge the temp arrays

	// initial indexes of first and second subarrays
	let leftIndex = 0, rightIndex = 0

	// the index we will start at when adding the subarrays back into the main array
	let currentIndex = start;

	// compare each index of the subarrays adding the lowest value to the currentIndex
	while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
		if (leftArray[leftIndex] <= rightArray[rightIndex])
		array[currentIndex] = leftArray[leftIndex++]
		else
		array[currentIndex] = rightArray[rightIndex++]
		currentIndex++
	}

	// copy remaining elements of leftArray[] if any
	while (leftIndex < leftArrayLength) array[currentIndex++] = leftArray[leftIndex++]

	// copy remaining elements of rightArray[] if any
	while (rightIndex < rightArrayLength) array[currentIndex++] = rightArray[rightIndex++]
}

export default mergeSort;
