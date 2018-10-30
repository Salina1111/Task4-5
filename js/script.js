                       
//Reverse string
function reverseString(str) {
    var a = [];
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
    a[j] = str[i];
    return a.join('');
}
//Palindriome
function reverseString(str) {
    var a = [];
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
    a[j] = str[i];
    b = a.join('');
     
    if(b===str ){
       alert(str+" " +"is palindrome");

    }else{
      alert(str+" "+"is not palindrome");
    }
return b;
}
reverseString("salina");

//Integer reversal
function reverse(num) {
    let r = 0;
    
    while (num) { 
        r = r * 10;
        r = r + num % 10;
        num = Math.floor(num / 10);
    }
    
    return r;
}

console.log(reverse(12345));

alert(reverse(12345));
