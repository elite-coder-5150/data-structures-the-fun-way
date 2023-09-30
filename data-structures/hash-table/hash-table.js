import { LinkedList } from '../../data-structures/linked-list/linked-list';

const defHashTableSize = 32;

export class HashTable {
    constructor(hts = defHashTableSize) {
        this.buckets = Array(hts).fill(null).map(() => new LinkedList());
        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce((h_acc, keySymbol) => (h_acc + keySymbol.charaCodeAt(0)), 0);
        return hash % this.buckets.length;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;

        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callhack: (nodeValue) => nodeValuea.key === key})

        if (!node) {
            bucketLinkedList.append({key, value});
        } else {
            node.value.value = value;
        }
    }

    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({callback: (nodeValue) => nodeValue.key === key});

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({callback: (nodeValue) => nodeValue.key === key});

        return node ? node.value.value : undefined;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    getKeys() {
        return Object.keys(this.keys);
    }

    getValues() {
        return this.buckets.reduce((values, bucket) => {
            const bucketValues = bucket.toArray()
                .map((linkedListNode) => linkedListNode.value.value);
            return values.concat(bucketValues);
        }, []);
    }

    
}