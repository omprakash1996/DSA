// 3Sum
function threeSum(nums) {
    var n = nums.length;
    var result = [];

    // --- Step 1: Manual sort (Bubble Sort for simplicity) ---
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    // --- Step 2: Iterate through array ---
    for (var i = 0; i < n - 2; i++) {
        // Skip duplicate values for i
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        var left = i + 1;
        var right = n - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a triplet
                var triplet = [nums[i], nums[left], nums[right]];
                result.push(triplet);

                // Skip duplicates for left
                var leftVal = nums[left];
                while (left < right && nums[left] === leftVal) {
                    left++;
                }

                // Skip duplicates for right
                var rightVal = nums[right];
                while (left < right && nums[right] === rightVal) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// --- Test Cases ---
console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]));          // []
console.log(threeSum([0,0,0]));          // [[0,0,0]]
