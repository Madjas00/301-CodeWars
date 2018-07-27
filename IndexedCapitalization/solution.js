function capitalize(s,arr){
    var letterArr = s.split('');
    for(var i = 0; i<letterArr.length; i++) {
      if(arr.includes(i)) {
        letterArr[i] = letterArr[i].toUpperCase();
        }
      };
      return letterArr.join('');
    };