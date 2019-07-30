/* A linked list is a sequence of data structures, which are connected together via links.

Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array. Following are the important terms to understand the concept of Linked List.

    Link − Each link of a linked list can store a data called an element.
    Next − Each link of a linked list contains a link to the next link called Next.
    LinkedList − A Linked List contains the connection link to the first link called First.


    Simple Linked List − Item navigation is forward only.
    Doubly Linked List − Items can be navigated forward and backward.
    Circular Linked List − Last item contains link of the first element as next and the first element has a link to the last element as previous.

 
    Double Linked List
Properties:
    
    a) Head 
    b) Tail 
    c) Node - wil contain data - (this will have reference for a node before and after nodes)
 
    */
class Node {
	constructor(prev, value, next) {
		this.prev = prev;
		this.value = value;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(input) {
		const newNode = new Node(null, input, this.head);
		if (this.head) {
			this.head.prev = newNode;
		} else {
			this.tail = newNode;
		}
		this.head = newNode;
	}
}

const ll = new LinkedList();
console.log(ll);

ll.addToHead(100);
console.log(ll);
