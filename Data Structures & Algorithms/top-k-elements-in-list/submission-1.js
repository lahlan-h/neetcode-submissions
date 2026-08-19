class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const items = new Map();
        const arr = Array.from({ length: nums.length + 1 }, () => []);

        for(let i = 0; i < nums.length; i++){
            const current = nums[i];            
            items.set(current, (items.get(current) ?? 0) + 1);
        }

        for (const [key, value] of items) {
            arr[value].push(key);
        }

        const returnArr = [];
        let j = 0;

        for(let i = arr.length - 1; i > 0; i--){
            const currentBucket = arr[i];
            
            if(currentBucket.length === 0) continue;

            for(const number of currentBucket){
                returnArr.push(number);
                j++;
                if(j === k) return returnArr;
            }
        }
        
        return returnArr;
    }    
}
