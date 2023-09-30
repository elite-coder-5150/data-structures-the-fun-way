const solution = (n) => {
    const userInput = prompt('Please enter any number');
    const sum = 0;

    if (userInput.length === 0) {
        console.log('a number is required');
    }
    if (userInput) {
        for (let i = 0; i < n; i++) {
            if (n % 2 === 0) {
                return sum + i;
            }
        }

        console.log(sum);
    }
}

const _solution = (nums) => {
    let left = 0;
    let max_length = 0;
    let distinctCount = 0;
    const frequencyMap = {};

    for (let right = 0; right < nums.length; right++) {
        const currElem = nums[right];

        if (frequencyMap[currElem]) {
            frequencyMap[currElem]++;
        } else {
            frequencyMap[currElem] = 1;
            distinctCount++;
        }

        while (distinctCount > 2) {
            const leftElem = nums[left];
            frequencyMap[leftElem]--;

            if (frequencyMap[leftElem] === 0) {
                delete frequencyMap[leftElem];
                distinctCount--;
            }

            left++;
        }
        max_length = Math.max(max_length, right - left + 1);
    }

    return max_length;
}

const lengthOfLIS = (nums) => {
    const n = nums.length;

    if (n === 0) {
        return 0;
    }
    const dp = new Array(n).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let maxLIS = 1;

    for (let i = 0; i < n; i++) {
        maxLIS = Math.max(maxLIS, dp[i]);
    }

    return maxLIS;
}