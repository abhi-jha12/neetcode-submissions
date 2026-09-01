class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keys = new Map();
        for (const str of strs) {
            const count = Array(26).fill(0);
            for (const ch of str) count[ch.charCodeAt(0) - 97]++;
            const key = count.join(',');
            if (!keys.has(key)) keys.set(key, []);
            keys.get(key).push(str);
        }
        return [...keys.values()];
    }
}
