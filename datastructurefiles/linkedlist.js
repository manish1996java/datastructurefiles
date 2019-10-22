// 1. constant big O(1) time of adding and removing 
// because we don't need to itrate we already have head or tail node
// 2. Big O(n) in searching because we need to iterate the list
// 3. Memory efficent because they don't need be store togater 



const LinkedList = function(){
    this.head = null;
    this.tail = null;
}

const Node = function(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.insertToHead = function(value){
    let newNode = new Node(value,this.head,null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}
LinkedList.prototype.insertToTail = function(value){
    let newNode = new Node(value,null,this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeFromHead = function(){
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next; 
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val;
}

LinkedList.prototype.removeFromTail = function(){
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev; 
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
}

LinkedList.prototype.searchFromHead = function(value){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value == value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}

LinkedList.prototype.searchFromHead = function(value){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value == value){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}

LinkedList.prototype.indexOf = function(value){
    var indexes = [];
    var currentNode = this.head;
    var index = 0;
    while(currentNode){
        if(currentNode.value == value){
            indexes.push(index);
        }
        index++;
        currentNode = currentNode.next;
    }
    return indexes;
}