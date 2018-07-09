function abbrevName(name){

    var result = name.split (" ");
    return result[0].charAt(0).toUpperCase() + "." + result[1].charAt(0).toUpperCase();

}