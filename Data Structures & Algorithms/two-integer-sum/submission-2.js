class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            const complement = target - nums.at(i);
            if(map.has(complement)) return [map.get(complement), i];
            map.set(nums.at(i), i);
        }
    }
}
