class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sArray = [...s].sort();
        let tArray = [...t].sort();

        for(let i = 0; i < s.length; i++){
            if (sArray[i] !== tArray[i]) return false;
        }
        
        return true;
    }
}
