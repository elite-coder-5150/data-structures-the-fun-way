export const naive_zero_mover = (arr) => {
    let l = arr.length;

    for (let i = 0; i < l; i++) {
        if (arr[i] == 0) {
            arr.push(0);
        }
    }

    j = 0;
    c = 0;

    while (c < 1) {
        if (arr[j] != 0) {
            j += 1
        } else {
            arr.pop(j);
        }
    }

    return arr;
}

export const swap_move = (arr) => {
    let z = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !=  0) {
            arr[i], arr[z] = arr[z], arr[i];;
            z++
        }
    }

    return arr;
}

 export const one_liner_move = (arr, reverse = false) => {
    arr.sort(key, reverse)
    return arr
 }

 console.log(one_liner_move(harr));