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
        //If there is no nodes in the list, return undefined
        if(!this.head){
            return undefined;
        }
        //Loop through the list until you reach the tail
        //Set the next property of the 2nd to last node to be null
        let current = this.head;
        let secondLast = current;
        while(current.next){
            secondLast = current;
            current = current.next;
        }
        //Set the tail to be the 2nd to the last node
        this.tail = secondLast;
        this.tail.next = null;
        //Decrement the length of the list by 1
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //Return the value of the node removed
        return current;
    }
    shift(){
        //If there are no nodes, return undefined
        if(!this.head){
            return undefined;
        }
        //Store the current head property in a variable
        let current = this.head;
        //Set the head property to be the current head's next property
        this.head = current.next;
        //Decrement the length by 1
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //Return the value of the node removed
        return current;
    }
    //unshift function should accept a value - val
    unshift(val){
        //Create a new node using the value passed to the function
        const newNode = new Node(val);
        //If there is no head property on the list, set the head and tail to be the newly created node
        //Otherwise set the newly created node's next property to be the current head property on the list
        //Set the head property on the list to be that newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        //Increment the length of list by 1
        this.length++;
        //Return the linked list
        return this;
    }
    //Get function should accept an index - index
    get(index){
        if(index<0 || index>=this.length){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        const setNode = this.get(index);
        if(setNode){
            setNode.val = val;
            return true;
        } else {
            return false;
        }
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
// console.log(list.shift());
// console.log(list);
list.unshift("AYEEE");
console.log(list.set(1,"So Long"));
console.log(list);