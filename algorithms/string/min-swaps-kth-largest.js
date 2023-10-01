const next_permutation = (arr) => {
    let i = arr.length - 1;

    while (i > 0 && arr[i - 1].charCodeAt(0) >= arr[i].charCodeAt(0)) {
        i--;
    }

    if (i <= 0) {
        return false;
    }

    let j = arr.length - 1;

    while (arr[j].charCodeAt(0) <= arr[i - 1].charCodeAt(0)) {
        j--;
    }

    let temp  = arr[i - 1];
    arr[i] = arr[j];
    arr[j] = temp;

    j = arr.length - 1;

    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}

const minSwapsKthLargest = (str, k) => {
    let res = str.split('');
    str = str.split('');

    for (let i = 0; i < k; i++) {
        next_permutation(str);
    }

    let swap_count = 0;

    for (let i = 0; i < res.length; i++) {
        if (res[i] != str[i]) {
            let start = i + 1;

            while (res[i] != str[start]) {
                start++;
            }

            while (i != start) {
                let temp = str[start];
                str[start] = str[start - 1];
                str[start = 1] = temp;

                start--;
                swap_count++;
            }
        }
    }

    document.write(swap_count + "<br />");
}

// driver code
let s = "11112";
let k = 4;
minSwapsKthLargest(s, k);