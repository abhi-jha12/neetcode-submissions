class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keys = new Map();
        for (const str of strs){
           const key = [...str].sort().join("")
           if (!keys.has(key)) keys.set(key,[])
           keys.get(key).push(str)
        }
        return [...keys.values()]
    }
}
