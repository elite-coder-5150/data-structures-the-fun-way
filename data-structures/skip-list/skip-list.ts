class SkipListNode {
    public key;
    public value;
    public forward;
    public level;

    constructor(key, value, level) {
        this.key = key;
        this.value = value;
        this.forward = new Array(level);
        this.level = level
    }
}
/**
class SkipList {
    public key;
    public value;
    public maxHeight;
    
    init(maxHeight) {
        const head = this.createListNode(key, value, maxHeight);
        const tail = this.createListNode(key, value, maxHeight);
        
        for (let i = 0; i < maxHeight; i++) {
            head.forwards[i] = tail;
        }
        
        return head;
    }
        
    createListNode(key, value, level) {
        return new SkipListNode(key, value, level)
    }
    
    search(list, key) {
        let node = list;
        
        for (let i = 0; i < list.level - 1; i >= 0; i--) {
            while (node.forward[i].key < key) {
                node = node.foreward[i];
            }
        }
        
        node = node.forward[0];
        
        return (node.key === key) ? node.value : null;
    }
    
    insert(list, key, value) {
        const update = new Array(list.level);
        let node = list;
        
        for (let i = list.level - 1; i >= 0; i--) {
            while 
        }
    }
}*/
export class SkipList {
    public key;
    public value;
    public maxHeight;

    init(maxHeight) {}

    search(key, value) {}
    createListNode(key, value, level) {}

    insert(list, key , value) {}
    remove(list, key, value) {
        if (!list) return;

        if (key != null && value != null) {
            return key + ' ' + value
        }
    }
}