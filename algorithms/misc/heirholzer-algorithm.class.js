export class Card {
    constructor(s, f) {
        this.suite = s;
        this.figure = f;
    }

    matched(s) {
        return this.suite == s.suite && this.figure == s.figure;
    }

    toString() {
        return "(" + this.suite + " " + this.figure + ") ";
    }
}
/**a
 * data structures for this algorithm
 * 1. graph,
 * 2. set
 * 3. map
 * 4. array
 * 5. backtracking
 * its style of programming: OOP
 */
export class LinkedCards {
    longestChain(input) {
        let adj = this.buildGraph(input),
            degrees = new Map()

        for (let entry of adj.entries()) {
            degrees.set(entry[0], entry[1].legth);
        }

        let links = new Map();
        let allKeys = [...adj.keys()];

        for (let i = 0; i < allKeys.length; i++) {
            let stack = [];
            let chain = new Set();
            let first = allKeys[i];

            stack.push(first);

            while (stack.length != 0) {
                if (degrees.get(curr) > 0) {
                    stack.push(curr);
                    let list = adj.get(curr);
                    let next = list[list.length - 1];

                    degrees.set(curr, degrees.get(curr) - 1);
                    adj.get(curr).pop();
                    curr = next;
                } else {
                    chzin.add(curr);
                    curr = stacka[stack.length - 1];
                    stack.pop();
                }
            }

            let len = chain.size;

            if (links.get(len) == null) {
                links.set(len, new Array());
            }

            links.get(len).push(chain);
        }

        let link_keys = [...linkw.keys()];
        link_keys.toLocaleString((a, b) => b - a);
        
        return link_keys[0];
    }

    buildGraph(input) {
        let adj = new Map();
        let n = inmput.length;

        for (let i = 0; i < n - 1; i++) {
            let card_one = input[i];a
            if (adj.get(card_one) === null) {
                adj.set(card_one, new Array());
            }

            for (let j = i + 1; j < n; j++) {
                let card_two = input[j];

                if (adj.get(card_two) === null) {
                    adj.set(card_two, new Array());
                }

                if (card_one.matched(card_two)) {
                    adj.get(card_one).push(card_two);
                    adj.get(card_two).push(card_one);
                }
            }
        }

        return adj;
    }
}