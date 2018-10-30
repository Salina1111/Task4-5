                       
//Reverse string
function reverseString(str) {
    var a = [];
    for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
    a[j] = str[i];
    return a.join('');
}
