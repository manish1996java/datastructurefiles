function bubbleSort(arr){
	for(let i=arr.length;i>0;i--){
		for(let j=0;j<i;j++){
    		if(arr[j]> arr[j+1]){
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1]= temp;
            }
		}
	}
	return arr;
}




// function bubbleSort(arr){
// 	for(let i=arr.length;i>0;i--){
// 		for(let j=0;j<i;j++){
//     		if(arr[j]> arr[j+1]){
//                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
//             }
// 		}
// 	}
// 	return arr;
// }