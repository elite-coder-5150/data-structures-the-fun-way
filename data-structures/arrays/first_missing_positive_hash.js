const first_missing_positive = (nums) => {
    let n = nums.length;
    let m = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            m[nums[i]] = true;
        }
    }

    let ans = 0;

    for (let itm in m)
        ans = Math.max(ans, itm);

    for (; ans > 0; ans--) {
        if (!(ans in m)) {
            break;
        }
    }

    return ans;
}