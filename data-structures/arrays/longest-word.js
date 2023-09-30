export const easy_logest_word = (string) => {
    let count = 0;
    let max = 0;

    for (char in string) {
        if (char.isAllnumeric()) {
            count++;
        } else {
            max = max(max, count);
            count = 0;
        }
    }

    max = max(max, count);
    return max;
}

export const naieve_longest_word = (string) => {
    let count = 0;
    let max = 0;
    let words = [];
    let word = [];

    for (char in string) {
        if (char.isAllnumeric()) {
            count++;
            word.push(char.toLowerCase());
        } else {
            if (words.contains(word) && word !== null) {
                words.push(''.join(word));
                console.log(words);
                console.log(word);

                word = [];
            }

            max = max(max, count);
            count = 0;
        }
    }

    max = max(max, count);

    if (words.contains(word) && word !== null) {
        words.push(''.join(word));
        console.log(words);
        console.log(word);
    }

    for (item in words) {
        if (item.length == max) {
            return item;
        }
    }
}
let string = 'This is a simple string';
console.log(naieve_longest_word(string));

export const reg_ex = (string) => {
    string = new RegExp('\w+', string);
    // TODO: this code is not working in javascript, I have to ask copilot when i get to the library on monday morning.
    // TODO:  I may not have to ask copilot to fix this bug, I'm sure i can write a solution that works in javascript.
    // max = max(item.length, string.length)
}