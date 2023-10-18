//piece of data - val
//reference to the next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push function should accept a value - val
    push(val){
        //Create a new node using the value passed to function
        const newNode = new Node(val);
        // If there is not head property on the list, set the head and tail to newly created node
        // Otherwise set the next property on the tail to be the new node and set tail property on the list to newly created node
        //Increment length by one
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    pop(){
        if(!this.head){
            return undefined;
        }

        let current = this.head;
        let secondLast = current;
        while(current.next){
            secondLast = current;
            current = current.next;
        }
        this.tail = secondLast;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
        }
    }

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

const list = new SinglyLinkedList()
list.push("Hello");
list.push("Goodbye");
list.push("!");
// console.log(list);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list.pop());
// console.log(list);
