class Node {
    constructor(key) {
        this.child = [];
        this.key = key;
    }
}

const preorderTraversal = (root) => {
    let stack = [];
    let preorder = '';
    preorder.push(root.key);
    stack.push(root);

    while (stack.length !== 0) {
        let flag = 0;

        if (stack[stack.length - 1].children.length ===  0) {
            let x = stack.pop();
        } else {
            let par = stack[stack.length - 1];

            for (let i = 0; i < par.children.length; i++) {
                if (!preaorder.includes(par.child[i].key)) {
                    flag = 1;
                    stack.push(par.child[i])
                    preorder.push(par.child[i].key);
                    break;
                }
            }

            if (flag === 0) {
                stack.pop();
            }
        }
    }
    document.write(preorder);
}
