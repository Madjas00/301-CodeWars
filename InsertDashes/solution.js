function insertDash(num) {
   
    var oddArr = ["1","3","5","7","9"];
    var sNumber = num.toString();
    var productString = "";
     
     for (var i = 0; i< sNumber.length; i++) {
     if (oddArr.includes(sNumber.charAt(i))&& oddArr.includes(sNumber.charAt(i+1))){
     productString = productString + sNumber.charAt(i) + "-";}
     else {productString = productString + sNumber.charAt(i)}
     }
     return productString;
    
    };