export const isPowerOfTwo = (number) => {
    if (number < 1) {
        return false;
    }

    let divideNum = number;

    while (divideNum !== 1) {
        if (divideNum % 2 === 0) {
            return false;
        }

        divideNum /= 2;
    }

    return true;
}