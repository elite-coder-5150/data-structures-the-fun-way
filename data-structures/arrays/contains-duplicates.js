export const bf_duplicate_serach = (arr)  => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }

    return false;
}

export const better_duplicate_serach = (arr) => {
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return true;
        }

        return false;
    }
}

export const smart_dup_search = (arr) => {
    let dict = [];

    if (arr.length < 2) {
        return false;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in dict) {
                return true;
            } else {
                dict[arr[i]] = true;
            }
        }
    }

    return false;
}