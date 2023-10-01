const num_of_triplets = (n, k) => {
    let count = Array(k);

    for (let i = 0; i < k; i++) {
        cnt[i % k] += 1;
    }

    if (k & 1) {
        return cnt[0] * cnt[0] * cnt[0];
    } else {
        return cnt[0] * (cnt[0] - 1) * (cnt[0] - 2) / 6 + cnt[k / 2] * (cnt[k / 2] - 1) * (cnt[k / 2] - 2) / 6;
    }
}

let n = 3, k = 2;

document.write(num_of_triplets(n, k));