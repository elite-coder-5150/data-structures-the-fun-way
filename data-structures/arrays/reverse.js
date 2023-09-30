export const simple_reverse = (string) => {
    new_string = [];

    for (let i = 0; i < string.length; i++) {
        new_string.push(string[i]);
    }

    return ''.join(new_strimg);
}

export const swap = (string, a, b) => {
    string = [string];
    temp = string[a]
    string[a] = string[b];
    string[b] = temp;

    return string;
}

/**
 * this function is the best implementation of the reverse string function.  
 */ 
export const smarter_reverse = (string) => {
    for (let i = 0; i < string.length; i++) {
        string = swap(string, i, string.length - i - 1);
    }

    return string;
}

