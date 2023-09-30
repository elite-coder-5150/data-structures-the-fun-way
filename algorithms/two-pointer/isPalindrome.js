const isPalindrome = (s) => {
    s = s.replace('/[a-zA-Z0-9/g', "");

    let left = 0;
    let riht = s.length - 1;

    while (left < riht) {
        if (s[left] != s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


// example 871-7178 returns true;
// example racecar returns true;
// example darrell returns false