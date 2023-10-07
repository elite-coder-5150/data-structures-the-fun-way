const fiskerYatesShuffle = (arr) => {
    const shuffledArr = arr.slice();

    for (let i = shuffledArr.length - 1; i > 0; i--) {
         const randomIdx =  Math.floor(Math.random() * (i + 1));

         const temp = shuffledArr[i];
         shuffledArr[i] = shuffledArr[randomIdx];
         shuffledArr[randomIdx] = temp;
    }

    return shuffledArr
}

const arr = [1,2,3,4,5];
const sArr = fiskerYatesShuffle(arr);
console.log(sArr); // outputs a random permutation of the original array.
