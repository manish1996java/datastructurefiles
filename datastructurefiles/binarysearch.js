const binarysearch = function(array,ele,start,end){
    if(start>end) return false;
    var mid = Math.floor((start+end)/2);
    if(array[mid] == ele) return mid;
    if(array[mid] > ele) return binarysearch(array,ele,start,array[mid]-1);
    else return binarysearch(array,ele,array[mid]-1,end);
}