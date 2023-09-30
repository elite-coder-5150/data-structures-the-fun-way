export const TreeNode = (val) => {
    this.val = val;
    this.left = this.right = null;
}

export const max_path_sum = (root) => {
    let max_sum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));

        const curr = node.val + left + right;
        max_sum = Math.max(max_sum, curr);

        return node.val + Math.max(left, right);
    }

    dfs(root);
    return max_sum;
}