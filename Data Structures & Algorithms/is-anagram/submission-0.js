class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let track = new Map()
        if (s.length !== t.length) return false
        for (const char of s){
            track.set(char,(track.get(char)||0)+1)
        }
        for (const char of t){
            if (!track.has(char)) return false
            track.set(char,track.get(char)-1)
            if (track.get(char)<0)return false
        }
        return true
    }
}
