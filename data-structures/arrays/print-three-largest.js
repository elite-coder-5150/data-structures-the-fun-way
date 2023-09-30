const print_three_largest = (arr, arr_size) => {
    let first, second, third;

    if (arr_size < 3) {
        document.write(" Invalid Input ");
        return;
    }

    third = first = second = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr_size; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third) {
            third = arr[i];
        }
    }

    document.write("Three largest elements are " + first + " " + second + " " + third);
}

let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;

print_three_largest(arr, n);

