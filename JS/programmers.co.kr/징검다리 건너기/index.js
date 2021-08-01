const stone = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;

//--------------------------------------------------------
let LinkedList = function () {
    let list = {};
    list.head = null;
    list.tail = null;

    list.addToTail = function (value) {
        let node = new Node(value);

        if (!this.head) {
        this.head = node;
        this.tail = node;
        } else {
        this.tail.next = node;
        this.tail = node;
        }
    };

    list.removeHead = function () {
        let removeNode = this.head;
        if (TimeRanges.head !== null) {
        this.head = removeNode.next;
        return removeNode.value;
        }
    };

    list.contains = function (target) {
        let accNode = this.head;
        while (accNode) {
            if (accNode.value === target) {
                return true;
            }
            accNode = accNode.next;
        }
        return false;
    };

    list.chk = function (k){
        let accNode = this.head;
        let i = 0;
        while (accNode) {
            if (accNode.value + 1 === accNode.next.value) {
                return true;
            }
            accNode = accNode.next;
        }
        return false;
    }
    return list;
};
  
  
  
let Node = function (value) {
    let node = {};

    node.value = value;
    node.next = null;

    return node;
};

function solution() {
    let answer = 0;
    let newStone = stone.map((val, idx)=>{
        return [idx, val];
    });
    newStone.sort((a,b)=>{
        return a[1] - b[1];
    })
    link = new LinkedList();
    link.addToTail(1);
    link.addToTail(2);
    link.addToTail(3);
    console.log(link);
    return answer;
}

console.log(solution());