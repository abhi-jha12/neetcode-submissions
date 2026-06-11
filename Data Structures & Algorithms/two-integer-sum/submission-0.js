class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexed = nums.map((val,idx)=>[val,idx])
        indexed.sort((a,b)=>a[0]-b[0])
        let left = 0,right=indexed.length -1;
        while(left<right){
          const sum = indexed[left][0] + indexed[right][0] 
          if(sum === target) return [indexed[left][1], indexed[right][1]]
          sum < target?left++:right--
        }
    }
}
