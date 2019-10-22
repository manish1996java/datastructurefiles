const HashTable = function(size){
    this.buckets = Array(size);
    this.numBucket = this.buckets.length;
}

const Node = function(key,value,next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    var total = 0;
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i);
    }
    var bucket = total%this.numBucket;
    return bucket;
}

HashTable.prototype.insert = function(key,value){
    var index = this.hash(key);
    if(!this.buckets[index]) this.buckets[index] = new Node(key,value,null);
    else if(this.buckets[index].key === key){
        this.buckets[index].value = value;
    }
    else {
        var currentNode = this.buckets[index];
        while(currentNode.next){
            if(currentNode.next[key] === key){
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(key,value,null);
    }
}


