let is_prime = new Array(2000010);

const sieveOfEratosthenes = (n) => {
    is_prime.fill(true);
    is_prime[0] = is_prime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (let i = p * p; i <= n; i += p) {
                is_prime[i] = false;
            }
        }
    }
}
// TODO: FIX THE WHILE LOOP, ITS NOT WORKING
const k_prime = (arr, n, k) => {
    sieveOfEratosthenes(2000000);
    let cnt = new Map();
    let result = -1;

    for (let i = 0, j = -1; i < n; i++) {
        let x = arr[i];

        if (is_prime[x]) {
            if (cnt.has(x)) {
                cnt.set(x, cnt.get(x) + 1);
            } else {
                cnt.set(x, 1);
            }

            if (cnt.get(x) === 1) {
                k--;
            }
        }

        while (k < 0) {
            x = arr[++j];

            if (is_prime[x]) {
                if (cnt.has(x)) {
                    cnt.set(x, cnt.get(x) - 1);
                } else {
                    cnt.set(x, -1);
                }

                if (cnt.get(x) === 0) {
                    k++;
                }
            }

            return result;
        }
    }
}

// driver code
let arr = [11, 23, 32, 41, 52, 61, 73, 84, 97];
let k = 3;
let n = arr.length;

document.write(k_prime(arr, n, k));
