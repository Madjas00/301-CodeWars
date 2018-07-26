function mutateMyStrings(stringOne, stringTwo){
    var arrOne = stringOne.split('')
    var arrTwo = stringTwo.split('')
    var answer = stringOne +"\n";
    for(let i = 0; i < arrOne.length; i++){
      if(arrTwo[i] !== arrOne[i]) {
        arrOne[i] = arrTwo[i];
        answer = answer + arrOne.join('')+"\n"
      }
    };
    return answer;
    }