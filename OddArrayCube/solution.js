function cubeOdd(arr) {
    let solution = arr.map(x=>Math.pow(x,3))
    .filter(x=> x % 2 !== 0)
    .reduce(function(sum,current){
    return sum + current;},0)
    if(isNaN(solution)){
    return undefined
    }
    else {return solution
    }
    }