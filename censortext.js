var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
	for(idx in censoredWords){
		inStr=inStr.replace(censoredWords[idx],"****");
	}
	for (idx ins customCensoredWords) {
		inStr=inStr.replace(customCensoredWords[idx],"****");
	}
	return inStr;
}


function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredwords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredwords=getCensoredwords;
