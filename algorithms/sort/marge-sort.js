import { swap } from '../../util/swap';
const merge_sort = (arr) => {
   if (arr.length <= 1) {
       return arr;
   }

   mid = arr.length / 2;
   let left = merge_sort(arr.slice(0, mid - 1));
   let right = merge_sort(arr.slice(mid, arr.length - 1));

   return merge(left, right);
}

const merge = (arr, l, m, r) => {
    let result = [];

    while (l.length > 0 && r.length > 0) {
        if (l[0] < r[0]) {
            result.push(l.shift());
        } else {
            result.push(r.shift());
        }
    }

    result.extend(l);
    result.extend(r);

    return result;
}
