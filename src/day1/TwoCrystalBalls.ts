export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpSize = Math.floor(Math.sqrt(breaks.length))

    let i = jumpSize
    for (; i < breaks.length; i += jumpSize){
        if(breaks[i]){
            break;
        }
    }
    
    i = i - jumpSize

    for (; i < breaks.length; i ++){
        if ( breaks[i]){
            return i
        }
    }

    return -1
}