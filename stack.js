/* STACK - DS

we use arrays to modify our stacks

methods in stacks

1. Push 
2. POP 
3. PEEK
4. LENGTH
5. TRAVERSE
6. SEARCH

 */

 class Stack {
     constructor(){
         this.items = [];
     }
     push(value){
        this.items.push(value)
     }
     pop(){
        this.items.pop()
     }
 }

 const stack = new Stack();
 stack.push(88);
 stack.push(22);
 stack.push(44);
 stack.push(33);
 stack.push(21);

 console.log(stack.items)
