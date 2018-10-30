
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

//Capitalize first letter
function uppercase(str)
{
    var a1 = str.split(' ');
    var a2 = [];
    
    for(var x = 0; x < a1.length; x++){
        a2.push(a1[x].charAt(0).toUpperCase()+a1[x].slice(1));
    }
    return a2.join(' ');
}
console.log(uppercase("say hello"));
alert(uppercase('say hello'));

//Chunk Array
function chunkArray(myArray, chunk_size){
    var results = [];
    console.log()
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 2 items
var result = chunkArray([1,2,3,4,5,6,7,8], 2);

console.log(result);

//FizzBuzz
for (var i=1; i <= 100; i++){
    if (i % 3 == 0){
         console.log("Fizz");
        }
     else if(i % 5 == 0) {
          console.log("Buzz");
        }
     else
      console.log(i);
 }