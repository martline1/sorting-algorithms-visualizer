const partition = (items, left, right) => {
    const pivot = items[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (items[left] < pivot) left++;

        while (items[right] > pivot) right--;

        if (left <= right) {
            // Swap items
            [items[left], items[right]] = [items[right], items[left]];

            left++;
            right--;
        }
    }

    return left;
};

const quickSort = (items, left, right) => {
    const index = partition(items, left, right);

    // More elements on either side, repeat the process for that side.
    if (left < index - 1) {
        quickSort(items, left, index -1);
    }

    if (index < right) {
        quickSort(items, index, right);
    }

    return items;
};

export default function defaultQuickSort(arr) {
    const sortedArray = [...arr];

    return quickSort(sortedArray, 0, sortedArray.length - 1);
};
