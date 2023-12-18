class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const lessThanX = new ListNode(0);
    const greaterThanOrEqualX = new ListNode(0);
    let lessThanXPointer = lessThanX;
    let greaterThanOrEqualXPointer = greaterThanOrEqualX;

    let current = head;

    while (current !== null) {
        if (current.val < x) {
            lessThanXPointer.next = current;
            lessThanXPointer = current;
        } else {
            greaterThanOrEqualXPointer.next = current;
            greaterThanOrEqualXPointer = current;
        }

        current = current.next;
    }

    greaterThanOrEqualXPointer.next = null;
    lessThanXPointer.next = greaterThanOrEqualX.next;

    return lessThanX.next;
};
