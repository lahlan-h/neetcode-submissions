class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const items = new Map();

        for(let i = 0; i < strs.length; i++){
            let tempStr = strs.at(i).split('').sort().join('');
            let arr = new Array();

            if(items.has(tempStr)){
                let tempArr = items.get(tempStr);
                tempArr.push(strs.at(i));
                items.set(tempStr, tempArr);
                continue;
            }

            arr.push(strs.at(i));
            items.set(tempStr, arr);
        }
        
        return Array.from(items, ([str, arr]) => { return arr; });
    }
}
