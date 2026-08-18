class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const items = new Map();

        for(let i = 0; i < strs.length; i++){
            let tempStr = strs.at(i);
            let arr = new Array(26).fill(0);

            for(let j = 0; j < tempStr.length; j++){
                arr[tempStr.charCodeAt(j)-97]++;
            }

            const strID = arr.join(',');

            if(items.has(strID)){
                let tempArr = items.get(strID);
                tempArr.push(tempStr);
                items.set(strID, tempArr);
                continue;
            } 

            let tempArr = new Array();
            tempArr.push(tempStr);
            items.set(strID, tempArr);
        }
        
        return Array.from(items, ([key, value]) => {return value; });     
    }
}
