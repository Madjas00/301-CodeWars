function capitalize(s){

    let wordEven = s.split("");
    for (var i = 0; i< wordEven.length; i++) {
    if (i % 2 === 0) {
    wordEven[i] = wordEven[i].toUpperCase()
    }
    };
    
    let wordOdd = s.split("");
    for (var i = 0; i< wordOdd.length; i++) {
    if (i % 2 !== 0) {
    wordOdd[i] = wordOdd[i].toUpperCase()
    }
    };
      
      return [wordEven.join(""), wordOdd.join("")];
    };