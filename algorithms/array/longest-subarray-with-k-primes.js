const isPrime = (n, primes) => {
    for (let p of prims) {
        if (p * p > n) {
            break;
        }

        if (n % p === 0) {
            return false;
        }
    }

    return n > 1;
}

const longestSubarrayWithKPrimes = (arr, k) => {
    let limit = Math.max(...arr);
    let primes = [];

    for (let p = 2; p <= limit; p++) {
        if (isPrime(p, primes)) {
            primes.push(p);
        }
    }

    let count = new Map();
    let left = 0;
    let maxLen = -1;

    for (let right = 0; right < arr.length; right++) {
        if (isPrime(arr[right], primes)) {
            if (!count.has(arr[right])) {
                  count.set(arr[right], 0);
            }

            count.set(arr[right], count.get(arr[right]) + 1);
        }


        while (count.size > k) {
            if (isPrime(arr[left], primes)) {
                count.set(arr[left], count.get(arr[left]) - 1);

                if (count.get(arr[left]) === 0) {
                    count.delete(arr[left]);
                }
            }

            left++;
        }

        if (count.size === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen;
}

// driver code
let arr = [4, 5, 7, 1, 2, 9, 8, 4, 3, 1];
let k = 1;
console.log(longestSubarrayWithKPrimes(arr, k));

arr = [4, 5, 7, 1, 2, 9, 8, 4, 3, 1];
k = 3;
console.log(longestSubarrayWithKPrimes(arr, k));
