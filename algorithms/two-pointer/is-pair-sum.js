export const isPairSum = (a, n, target) => {
    let i = j = 0;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < i; j++) {
            if (i === j) 
                continue

            if (a[i] + a[j] == target)
                return 1;   
            

            if (a[i] + a[j] > target) 
                break;
        }
    }

    return 0;
}