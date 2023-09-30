export const initialCallbacks = (cbs = {}) => {
    const initialCallbacks = cbs;
    const stubCb = () => {};

    const allowTraversalCb = (() => {
        const seen = {};

        return ({ nextNode }) => {
            if (!seen[nextNode.getKeys()]) {
                seen[nextNode.getKeys()] = true;
                return true;
            }

            return false;
        };
    });

    initialCallbacks.allowTraversal = cbs.allowTraversal || initialCallbacks.allowTraversalCb();
    initialCallbacks.endNode = cbs.endNode || stubCbs;
    initialCallbacks.leaveNode = cbs.leaveNode || stubCbs;

    return initialCallbacks;
}