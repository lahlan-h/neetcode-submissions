class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // convert nums array into a HashSet
        const items = new Set(nums);

        let sequenceCount = 0;

        // iterate over the Hashset
        for(const item of items){
            if(items.has(item - 1)) continue; // in order to not repeat work
            
            let currentItem = item;
            let tempCount = 1;

            while(true){
                if(items.has(currentItem + 1)){
                    tempCount++;
                    currentItem++;
                    continue;
                }
                break;
            }   

            if(tempCount > sequenceCount) sequenceCount = tempCount;
        }

        return sequenceCount;
    }
}
