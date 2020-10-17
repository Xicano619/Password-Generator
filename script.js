// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create ALL-characters variable. 
const allChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
 // User input variable for confirms
  console.log(allChar[0].split(","));
// Write password to the #password input
function writePassword() {
  console.log(allChar[0].split(","));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", myFunction);
 

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var passwordEq = prompt("How many characters would you like your password to contain?");
    console.log(passwordEq);
    passwordEq = parseInt(passwordEq);
    console.log(passwordEq);
   if (passwordEq < 8 || passwordEq > 128 || isNaN(passwordEq)) {
       alert("Incorrect password length.");
       return;
   }
   var upperChar = confirm("Would you like upper case characters?");
   var lowerChar = confirm("Would you like lower case characters?");
   var specChar = confirm("Would you like special characters?");
   var numChar = confirm("Would you like number characters?");

   if (upperChar !== true && lowerChar !== true && specChar !== true && numChar !== true) {
     alert("You must have at least 1 type of characters.")
     return;
   }
   var emptyArr = [];
   var passwordResult = "";

   if (upperChar === true){
     emptyArr = emptyArr.concat(allChar[0].split(","));
     console.log(emptyArr);
   }
   if (lowerChar === true){
     emptyArr = emptyArr.concat(allChar[1].split(","));
   }
   if (numChar === true){
    emptyArr = emptyArr.concat(allChar[2].split(","));
  }
  if (specChar === true){
    emptyArr = emptyArr.concat(allChar[3].split(","));
  }
  for (i=0; i< passwordEq; i++){
    
  }
}
    


