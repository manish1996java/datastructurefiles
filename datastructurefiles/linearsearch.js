
// 1. there is no need of shorting the array

const linearsearch = function(array,value){
    for(let key in array){
        if(array[key] == value) return parseInt(key);
    }
    return -1;
}
