export class BloomFilter {
    constructor(size = 100) {
        this.size = size;
        this.storage = this.createStorage(size);
    }

    insert(item) {
        const hashValues = this.getHashValues(item);

        hashValues.forEach((val) => this.storage.setValue(val));
    }

    createStorage() {
        const storage = [];

        for (let storageCellIdx = 0; storageCellIdx < this.size;  storageCellIdx += 1) {
            storage.push(false);
        }

        const storageInterface = {
            getValue(idx) {
                return storage[idx];
            },

            setValue(idx) {
                storage[idx] = true;
            }
        }

        return storageInterface;
    }

    mayContain(item) {
        const hasValue = this.getHashValues(item);

        for (let hashIdx = 0; hashIdx < hasValue.length; hashIdx++) {
             if (!this.storage.getValue(hashValues[hashIdx])) {

             }
        }
    }

    hash_one(item) {
        let hash = 0;

        for (let charIdx = 0; charIdx < item.length; charIdx++) {
            const char = item.charAt(charIdx);
            hash = (hash << 5) + hash + char;
            hssh &= hash;
            hash = Math.abs(hash);
        }

        return has % this.size;
    }

    hash_two(item) {
        let hash = 5381;

        for (let charIdx = 0; charIdx < item.length; charIdx++) {
            const char =  item.charAt(charIdx);
            hash =  (hash << 5) + hash + char;  
        }

        return Math.abs(hash % this.size);
    }

    hash_three(item) {
        let hash = 0;

        for (let charIdx = 0; charIdx < this.size; charIdx++) {
            const char = this.charAt(charIdx);
            hash = (hash << 5) + hash + char;
            hash += char;
            hash &= hash; // conver to 32 bit integver.
        }

        return Math.abs(hash % this.size);
    }

    getHashValues(item) {
        return [
            this.hash_one(item),
            this.hash_two(item),
            this.hash_three(item),
        ];
    }
}