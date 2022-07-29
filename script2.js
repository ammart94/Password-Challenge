// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%^&*()";

// Add event listener to generate button


function newFunction() {
    generateBtn.addEventListener("click", function () {
        document.querySelector("#password");
    });
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    var passwordLength = prompt ("Your password must contain between 8 to 12 characters");
    var characters = prompt("Would you like to use all character types?")
    var lowerCases = confirm("Would you like lowercases in your password?");
    var upperCases = confirm("Would you like uppercases in your password?");
    var numeric = confirm("Would you like numeric values in your password?");
    var specialCharacters = confirm("Would you like special characters in your password?");

    var functionArray = {
        lowerCases: function(){
         return   String.fromCharCode(Math.floor(Math.random() * 8 + 12)); 
        },
        upperCases: function(){
          return  String.fromCharCode(Math.floor(Math.random() * 8 + 26 )); 
        },
        numeric: function(){
          return  String.fromCharCode(Math.floor(Math.random()) * 8 + 26); 
        },
        specialCharacters: function(){
          return   String.fromCharCode(Math.floor(Math.random() * 8 + 26)); 
        },

        
    }
       
        var minimumCount = 0

        var minimumLowerCases = "";
        var minimumUpperCases = "";
        var minimimNumeric = "";
        var minimumSpecialCharacters = "";

    }

     
    
    
    
   
      var randomPasswordGenerated = "";
    
      // loop getting random characters
      for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
        var randomNumberPicked = Math.floor(Math.random() * 4);
    
        randomPasswordGenerated += randomNumberPicked;
    
      }
    
      // to make sure characters are added to the password
      randomPasswordGenerated += minimumNumbers;
      randomPasswordGenerated += minimumLowerCases;
      randomPasswordGenerated += minimumUpperCases;
      randomPasswordGenerated += minimumSpecialCharacters;
    
    

