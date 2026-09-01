class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length).fill(1);
        let prefix = 1;
        let postfix = 1;

        // prefix traversal
        for(let i = 0; i < nums.length; i++){
            // multiply output.at(i) with prefix
            output[i] = output.at(i) * prefix;

            // multiply prefix with nums.at(i) 
            prefix *= nums.at(i);
        }   

        console.log(output);

        // postfix traversal
        for(let i = nums.length - 1; i >= 0; i--){
             // multiply output.at(i) with postfix
            output[i] = output.at(i) * postfix;

            // multiply postfix with nums.at(i)
            postfix *= nums.at(i);
        }
            
        return output; 
    }
}
