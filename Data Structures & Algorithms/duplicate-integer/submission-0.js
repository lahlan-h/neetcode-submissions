class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        const numsSize = nums.length;

        for(let i = 0; i < numsSize; i++){
            if(map.has(nums[i])) continue;
            map.set(nums[i]);
        }

        return numsSize !== map.size;
    }
}
