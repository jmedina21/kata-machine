export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length
    let low = 0
    
    while (low < high){
        let mid = Math.floor(low + (high - low)/2)
        if (haystack[mid] === needle) {
            return true
        }
        if (haystack[mid] > needle){
            high = mid
        }else{
            low = mid + 1
        }
    }
    return false
}