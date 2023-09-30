import { Comparator } from "./comparator";

export class Sort {
    constructor(origCB) {
    
    }

    static initSortingCb(origCB) {
        const cbs = origCB | {};
        const stubCb =  () => {};

        cbs.compare = cbs.compareCb | undefined;
        cbs.visitingCB = cbs. visitingCB | undefined;

        return cbs;
    }
}