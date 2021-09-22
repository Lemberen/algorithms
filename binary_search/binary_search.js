"use strict";
/**
 * Given a sorted array and a number, uses binary search to try and find that number in the array.
 *
 * @param {number[]} sortedArray - A sorted array of numbers in ascending order.
 * @param {number} userNumber - The number that is going to be searched in `sortedArray`.
 * @returns {(number | null)} If `userNumber` is found, returns the position where it's located in the array. Otherwise, returns null.
 */
const binarySearch = (sortedArray, userNumber) => {
    let low = 0;
    let high = sortedArray.length - 1;
    if (sortedArray.length === 0)
        return null;
    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        if (sortedArray[mid] === userNumber)
            return mid;
        else if (sortedArray[mid] < userNumber)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return null;
};
