const leftRotate = (arr, d, s) => {
    for (let i = 0; i < d; i++) {
        leftRotateByOne();
    }
}

const leftRotateByOne = (arr, n) => {
    let i, temp = arr[0];

     for (i  = 0; i < n - 1; i++) {
         arr[i] = arr[i  + 1];
     }

      arr[n - 1] = temp;
}

const printArr = (arr, size) => {
    for (let i = 0; i <  size; i++) {
          document.write(arr[i] + " ");
    }
}
let arr = [1,3,5,7,9];
let n = arr.length;
let k = 2;

leftRotate(arr, k, n);
printArr(arr, n);
