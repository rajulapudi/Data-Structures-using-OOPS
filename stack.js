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
         return (this.items.length===0)? "Stack is empty" : this.items.pop()
     }
     peek(){
        return this.items[this.items.length-1]
    }
    length(){
        return this.items.length
    }
    traverse(){
    for(let i = this.items.length-1; i>=0; i--){
        return this.items[i]
    } 
    }
    search(value){
    for(let i = this.items.length-1; i>=0; i--){
        if(this.items[i]=== value){
            return `This ${value} is present in the Stack`
        }else continue
    }
    return `this ${value} is not there`
    }
 }

 const stack = new Stack();
 stack.push(88);
 stack.push(22);
 stack.push(44);
 stack.push(33);
 stack.push(31);

 console.log(stack.items)

 stack.pop()
console.log(stack.items)
console.log (stack.peek())
console.log (stack.length())
console.log(stack.search(22))

