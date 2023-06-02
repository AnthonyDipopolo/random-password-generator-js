//Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", writePassword);



function writePassword() {
  

  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];
  
  var combine = [];

  var password = '';

  amount = +prompt('Amount of characters');
  includeLowerCase = confirm('Would you like lowecase?');
  includeUpperCase = confirm('Would you like uppercase?');
  includeNumbers = confirm('Would you like numbers?');
  includesSpecial = confirm('Would you like special characters?');

 

  if (includeLowerCase) {
    combine = combine.concat(lowercase);
  }
  if (includeUpperCase) {
    combine = combine.concat(uppercase);
  }
  if (includesSpecial) {
    combine = combine.concat(specialCharacters);
  }
  if (includeNumbers) {
    combine = combine.concat(numbers);
  }

  var includesSpecial = writePassword[4];
  var includeNumbers = writePassword[3];
  var includeUpperCase = writePassword[2];
  var includeLowerCase = writePassword[1];



  // Write password to the #password input

  for (var count = 0; count < amount; count++) {
    var randomIndex = Math.floor(Math.random() * combine.length);
    password += combine[randomIndex];
  }

  console.log(password);

  // Add event listener to generate button
  passwordText.value = password;

}

