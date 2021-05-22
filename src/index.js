import "./styles.css";

//Check if the number repeated in array
var twoSum = function (nums) {
  let mat = {};
  if (nums?.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (!mat[nums[i]]) {
        mat[nums[i]] = nums[i];
      } else {
        return nums[i];
      }
    }
    return undefined;
  }
};

//Check sum of two numbers
let me = twoSum([2, 1, 1, 3, 4, 4, 5]);
var twoSum1 = function (nums, sum) {
  let mat = [];
  let finalArray = [];
  if (nums?.length > 0 && sum) {
    for (let i = 0; i < nums.length; i++) {
      if (!mat.includes(nums[i])) {
        mat.push(sum - nums[i]);
      } else {
        finalArray.push(nums.indexOf(sum - nums[i]));
        if (sum - nums[i] !== nums[i]) {
          finalArray.push(nums.indexOf(nums[i]));
        } else {
          finalArray.push(nums.indexOf(nums[i], 1));
        }

        break;
      }
    }
  }
  console.log(finalArray);
};

twoSum1([2, 7, 11, 15], 9);
twoSum1([3, 2, 4], 6);
twoSum1([3, 3, 4, 3, 6], 6);

//Sort and merge two Arrays
const mergeSortedArrays = (arr1, arr2) => {
  if (arr1?.length > 0 && arr2?.length > 0) {
    return sorted(sorted(arr1).concat(sorted(arr2)));
  }
};

const sorted = (ar) => {
  return ar.sort((a, b) => a - b);
};
let merge = mergeSortedArrays([0, 4, 3, 1], [14, 6, 61]);

document.getElementById("app").innerHTML = me + " ** " + merge;
