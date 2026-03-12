class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    
    constructor(){
        this.head=null
        this.size=0
    }
    
    append(value){
        let node= new Node(value)
        if(this.size==0){
            this.head=node
        }else{
            let curr=this.head
            
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
           this.size++
        }
        
     
    
    
    prepend(value){
        let node = new Node(value)
        
        if(this.size==0){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        
        this.size++
    }
    
    print(){
        let curr=this.head
        let arr=[]
        while(curr){
            arr.push(curr.value)
            curr=curr.next
        }
        
        console.log(arr)
    }

    reverse(){
        let curr=this.head
        let prev=null

        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }

        this.head=prev
    }

    remove(value){

        if(!this.size){
            return null
        }

        if(this.head.value==value){
            this.head=this.head.next
               this.size--
        }else{

            let curr=this.head
            while(curr.next&& curr.next.value!=value){
                curr=curr.next
            }

            if(curr.next){
                curr.next=curr.next.next
                   this.size--
            }
        }



     
    }
}

const list=  new LinkedList()

list.append(40)
list.append(30)
list.prepend(100)

list.reverse()
list.remove(40)
list.print()