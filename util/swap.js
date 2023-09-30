//? this is proof that i can write algorithms in multiple languages.
export const swap = (temp,  arr, currIdx, gapShiftedIdx) => {
    temp = arr[currIdx];
    arr[currIdx] = arr[gapShiftedIdx];
    arr[gapShiftedIdx] = temp; 
}