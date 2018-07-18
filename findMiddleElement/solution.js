var gimme = function (inputArray) {
    let newArr = inputArray.slice(0)
    newArr.sort(function(a,b) {
    return a - b;});
    return inputArray.indexOf(newArr[1]);
  };