 /*
1
function reverseNumber(num){
var num= num+"";
    return reverseNumber = num.split("").reverse().join("");
}
console.log(reverseNumber(12435));*/



/*
2
function palindrome (string){
var string = string+"";
string = string.toLowerCase();
var string2 = string.split("").reverse().join("");
var palindrome2="";
if(string === string2){
    
    console.log(string + " Is palindrome")
    
}else{
    console.log(string + " Is not palindrome") 
}
return palindrome2;
}
console.log (palindrome("Amir"));
console.log (palindrome("Madam"));
*/




/*
3
function combination(str){
    var listString = []
    for(var i = 0; i < str.length; i++){
        for(var j =i+ 1; j < str.length+1; j++)
        {
         listString.push(str.slice(i,j));
        }
        }
        return listString
        
    }
    console.log(combination("dog"));
*/



/*
4
function alphaOrd(string){
var string= string+"";
    string= string.split("").sort().join("");
    return string;
}
console.log(alphaOrd("web development"));
*/




/*
5
 function capitalize(string){
  var str =  string+"";
  str = str.split(" ");
  for(var i = 0; i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }return str.join(" ")
  
}
console.log(capitalize("the quick brown fox"))
*/




/*
6
function finLongWord(str) {
    var strSplit = str.split(" ");
    strSplit.sort(function(a, b){return b.length - a.length});
    
    return strSplit[0]
}
console.log(finLongWord("Web Development Tutorial "));
*/
 




/*
7
function countVowel(str){
var vowelList = "aeiouAEIOU";
var vowCount = 0;
for (var i = 0; i<str.length; i++){
    if (vowelList.indexOf(str[i]) !== -1){
        vowCount += 1;
    }
}
return vowCount;
}
console.log(countVowel("i am abdul Rasheed"));
*/



/*
8
function isPrime (num){
    var num2="";
    var num;

    for(var i = 2; i < num; i++){
        if (num%i === 0){
            console.log( num + " Is not prime number");
           break;
            
        }else{
        console.log( num + " Is prime number");
        break;
        
    }
    }return num2;
}
console.log(isPrime(2))
/





/*
9
function type(word){
var word1 =typeof(word);
return word1
}
console.log (type(true))
*/



/*
10
function secGreatestLowest (num){
    num.sort();
    var numLength = num.length;
    var smallNum = num[1];
    var greatestNum = num[numLength-2]
    console.log("Second Smallest Number is " + smallNum +
     "\n Second Greatest Number Is " + greatestNum)
}
secGreatestLowest([41,18,27,16,39]);
*/

