class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans = strs[0];
        if (ans =="") return ""
        for (let i = 1; i < strs.length; i++) {
            const str = strs[i];
            let j=0;
            while(j<str.length && j<ans.length){
                if(str[j]==ans[j]){
                    j++
                }
                else break
            }
            ans = ans.slice(0,j);
        }
        return ans
    }
}
