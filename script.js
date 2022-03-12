// Assignment Code

var generateBtn = document.querySelector("#generate");
function generatePassword(){
var passwordLength=prompt ("how long do you want your password?")
var charlower= "abcdefghjklmnopqrstuvwxyz"
var charUpper="ABCDEFGHJKLMNOPQRSTUVWXYZ"
var numbers="1234567890"
var symbols="!$^+-_?@#%&*()="
var allChars=" ";
// for(var i=0;i<password;i++){
  // password=password+allChars.charAt(Math.floor(Math.random()*allChars.length))
// }
var lowerconfirm =confirm("lowercase ok?")
if(lowerconfirm){
  allChars+=charlower;

}
var upperConfirm=confirm( "uppercase ok?")
if(upperConfirm){
  allChars+=charUpper;

}
var numbersConfirm=confirm("numbers ok?")
if (numbersConfirm){
(allChars+=numbers)
}

var symbolsConfirm =confirm("symbols ok?")
if(symbolsConfirm){
  (allChars+=symbols)
}


password=" "
for (i=0;i <passwordLength;i++){
var randomIndex=Math.floor(Math.random()*allChars.length);
var randomChar=allChars[randomIndex];
password+=randomChar
}
return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
