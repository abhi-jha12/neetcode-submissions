class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freq = new Map();
        let hfreq = nums[0];
        for (const num of nums) {
            if ((!num) in freq) {
                freq.set(num, 1);
            }
            freq.set(num, (freq.get(num) || 0) + 1);
            if (freq.get(num) > freq.get(hfreq)) {
                hfreq = num;
            }
        }
        return hfreq
    }
}
