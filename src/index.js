import "./styles.css";

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

let me = twoSum([2, 1, 1, 3, 4, 4, 5]);
document.getElementById("app").innerHTML = me;

///[2,5,1,2,3,5,1,2,4]
