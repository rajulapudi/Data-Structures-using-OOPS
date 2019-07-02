/* Queue operations may involve initializing or defining the queue, 
utilizing it, and then completely erasing it from the memory.
Here we shall try to understand the basic operations associated with queues −

enqueue() − add (store) an item to the queue.
dequeue() − remove (access) an item from the queue.

Few more functions are required to make the above-mentioned queue operation efficient. These are −

fpeek() − Gets the element at the front of the queue without removing it.
rpeek() - Gets the element at the rear
isfull() − Checks if the queue is full.
isempty() − Checks if the queue is empty. */

class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(value){
    this.items.push(value)
    }
    dequeue(){
        return (this.items.length===0)? "Queue is empty" : this.items.pop()
    }
    fpeek(){
        return this.items[this.items.length-1]
    }
    rpeek(){
        return this.items[0]
    }
}

