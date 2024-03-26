/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const IsTwice = () => {
    const arr = new Array(105);
    return (n) => {
      if (arr[n]) return true;
      arr[n] = 1;
      return false;
    }
  }
  
  const isTwice = IsTwice();
  
  return nums.filter(isTwice)
};
