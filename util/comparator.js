export class Comparator {
    constructor(cmpFn) {
        this.compare = cmpFn || Comparator.defaultCmpFn;
    }

    /**
     * default comparison function
     * @param {string | number} a 
     * @param {string | number} b 
     * @returns {number}
     */
    static defaultCmpFn(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    /**
     * checks if two variables are equal
     * @param {*} a 
     * @param {*} b 
     * @returns {boolean}
     */
    equals(a, b) {
        return this.compare(a, b) === 0;
    }

    /**
     * checks if a is less then b
     * @param {*} a 
     * @param {*} b 
     * @returns {boolean}
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0
    }
    
    lessThenOrEquals(a, b) {
        return this.lessThan(a, b) < 0 || this.equals(a, b);
    }

    greaterThanOrEquals(a, b) {
        return this.greaterThanOrEquals(a, b) || this.equals(a, b);
    }
}