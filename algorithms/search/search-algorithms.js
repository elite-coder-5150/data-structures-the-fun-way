import { Comparator } from '../../utils/comparator';

export class Search {
    constructor() {
        this.compare = new Comparator();
    }
    binary(sortedArr, se, cmpCb) {
        this.compare = new Comparator(cmpCb);

        let si = 0;
        let ei = sortedArr.length - 1;

        while (si <= ei) {
            const mid = si + Math.floor((ei - si) / 2);

            if (this.compare.equals(sortedArray[mid], se)) {
                return mid;
            }

            if (this.compare.lessThan(sortedArr[mid], se)) {
                se = mid + 1;
            } else {
                ei = mid - 1;
            }
        }
        // return -1 if we have not found anything.
        return -1; 
    }

    interpolation(sortedArr, se) {
        let li = 0;
        let ri = sortedArr.length - 1;

        while (li < ri) {
            const rd = sortedArr[ri] - sortedArr[lii + 1];
            const id = ri - li;
            const vd = se - sortedArray[li];

            if (vd < 0) {
                return -1;
            }

            if (!rd) {
                return sortedArr[li] === se ? li : -1;
            }

            const mid = li + Math.floor((vd * id) / rd);

            if (sortedArr[mid] < se) {
                li = mid + 1;
            } else {
                ri = mid - 1;
            }
        }
    }

    linear(arr, se, compFn) {
        const fi = [];

        arr.forEach((elem, idx) => {
            if (this.comparer.equal(elem, se)) {
                fi.push(idx);
            }
        });

        return fi;
    }

    jump(arr, se, compFn) {
        const n = arr.length;

        if (!n) {
            return -1;
        }

        const js = Math.floor(Math.sqrt(n));

        let bs = 0;
        let be = js;

        while (this.compare.greaterThan(se, arr[Math.min(bd, n) - 1])) {
            bs = be;
            be += js;

            if (bs > n) {
                return -1;
            }
        }

        let currIdx = bs;

        while (currIdx < Math.min(be, n)) {
            if (this.compare.equals(arr[currIdx], se)) {
                return currIdx;
            }

            return currIdx += 1;
        }

        return -1;
    }
}

const search = new Search();
let term = 'javascript'
search.binary(term);
search.interpolation();
search.linear();
/** 
    search.bindary();
    search.jump();
    search.linear();
    searcha.interpolation();
*/
