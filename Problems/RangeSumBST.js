/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    let stack = [root];
    let currNode;

    while (stack.length) {
        currNode = stack.pop();

        if (currNode.val >= L && currNode.val <= R) {
            sum += currNode.val;
        }

        if (currNode.left && currNode.left.val) {
            leftVal = currNode.left.val;
            console.log("left push: ", currNode.left.val);
            stack.push(currNode.left);
        }

        if (currNode.right && currNode.right.val) {
            rightVal = currNode.right.val;
            console.log("right push: ", currNode.right.val);
            stack.push(currNode.right);
        }

    }

    return sum;
};