class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let win=0
        const olength = nums.length
        const nev =[]
        for(let rin=0;rin<olength;rin++){
            if (nums[rin]!==val){
                nums[win]=nums[rin]
                win++
            }

        }
        return win
    }
}
