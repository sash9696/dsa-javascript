
class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }
    push(element){
         this.items[this.count] = element
         this.count += 1
        //  console.log(`${element} is pushed`)
    }
    isEmpty(){
        if(this.count == 0){
            console.log('Stack is empty')
        }
    }
    pop(){
        // console.log(this.count)
        let deleteItem = this.items[this.count - 1]
        this.count --
        // console.log(`${deleteItem} is deleted`)
        return this.items.pop()
    }
    peek(){
        return this.items[this.count - 1]
    }

}

const stack = new Stack()

var notBalanced = false

function matches(open, close){
    const matchTable = {
        "(" : ')',
        "[" : "]",
        "{" : "}"
    }
    return close === matchTable[open];
}
function isOpening(value){
    const open = ['(', '{', '[']
    return open.indexOf(value) > -1
}
function isClosing(value){
    const close =[')', '}', ']']
    return close.indexOf(value) > -1
}
function checkParenthesis(stack, str){
    for(let i = 0; i < str.length; i++){
        if(isOpening(str[i])){
            stack.push(str[i])
        }
        else if(isClosing(str[i])){
            // console.log('stack.peek', stack.peek())
            // console.log('str' ,str[i])
            // console.log(matches(stack.peek(),str[i] ))
            if(matches(stack.peek(),str[i] )){
                stack.pop()
            }
            else{
                console.log('It is not balanced')
                notBalanced = true
                break;
            }

        }
    }
    if(!notBalanced)
        console.log('Balanced')
        
    
}

// console.log('stack1', stack)
checkParenthesis(stack,'(())}}}}}')
// console.log('stack2', stack)
