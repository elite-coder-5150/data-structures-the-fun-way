/**
 * detect a cycle within a graph
 * @param {*} n - the number of cycles found.
 * @returns 
 */
export const cycles = (n) => {
    let fact = 1, result = 0

    result = n - 1
    let i = result

    while (i > 0) {
        fact = fact * i
        i--
    }

    return fact / 2
}