function filter_list(l) {
    var array = l.slice(0);
    return array.filter((element)=> {
    return (parseInt(element) === element);
    });
    
    
  }