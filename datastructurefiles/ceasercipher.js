function ceaserCipher(str,num){
	let lowerstr = str.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let newstr = '';
	for(let i=0;i<lowerstr.length;i++){
    	var currentletter = lowerstr[i];
		if(currentletter === ' '){
			newstr+= currentletter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentletter);
		newstr += alphabet[currentIndex+num];
	}
	return newstr;
}