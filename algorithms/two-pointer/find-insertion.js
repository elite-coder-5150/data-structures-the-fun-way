/**
 * finds an intersection between two points and
 * returns the intersection.
 * @param {*} a 
 * @param {*} b 
 */
export const findInterection = (a, b) => {
    let i = j = 0;
    const result = [];

    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++;
            j++;
        } else if (a[i] < b[j]) {
            j++;
        } else {
            j++;
        }
    }
}