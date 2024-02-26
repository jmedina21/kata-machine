export default function bubble_sort(arr: number[]): void {
    let count = arr.length
    while (count >= 1){
        for (let i = 0; i < count; i ++){
            let current = arr[i]
            if(current > arr[i + 1]){
                arr[i] = arr[i + 1]
                arr[i + 1] = current
            }
        }
        count --
    }
} 