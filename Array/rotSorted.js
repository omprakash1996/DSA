// Search in Rotated Sorted Array
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // custom floor function using bitwise operator
    function floor(num) {
        return num >> 0; // converts to 32-bit int = floor for positive numbers
    }

    while (left <= right) {
        let mid = floor((left + right) / 2);

        // If found
        if (nums[mid] === target) {
            return mid;
        }

        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {

            // Target in left sorted range
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else {
            // Right half is sorted

            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
console.log(search([4,5,6,7,0,1,2], 0));
