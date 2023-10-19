class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.head==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        const current = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            current.prev = null;
        }
        this.length--;
        return current;
    }

    shift(){
        if(this.length===0){
            return undefined
        }
        const oldHead = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// console.log(list.pop());
console.log(list.shift());
console.log(list);
