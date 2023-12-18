class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current) {
        let hasDuplicate = false;

        while (current.next && current.val === current.next.val) {
            current = current.next;
            hasDuplicate = true;
        }

        if (hasDuplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }

        current = current.next;
    }

    return dummy.next;
};
