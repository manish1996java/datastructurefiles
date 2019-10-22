const BST = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
BST.prototype.insert = function(value){
    if(value<=this.value){
        if(!this.left) this.left = new BST(value)
        else this.left.insert(value);
    }else{
        if(!this.right) this.right = new BST(value)
        else this.right.insert(value)
    }
}

BST.prototype.contains = function(value){
    if(this.value === value) return true;
    else if(value > this.value){
        if(!this.right) return false;
        else return this.right.contains(value);
    } else if(this.value > value){
        if(!this.left) return false;
        else return this.left.contains(value);
    }
}