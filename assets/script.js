//Assignment Code

//these query selectors are used to generate a variable that links the js to id in html 
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//the eventListener is used to make sure the function only runs when the button is clicked, hence the click and  function name in the ()
generateBtn.addEventListener("click", writePassword);


//the function is created to run the code block 
function writePassword() {
  
//these are the characters that the user will use to create a password all stored in individual arrays 
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];
  
  //this is an empty array created to store the combined true character once the user selects them 
  var combine = [];

  //this is an empty string that is created to store the password eventually after the user info is input and the for loop runs
  var password = '';

  //the amount variable is here to prompt the user to enter an amount of characters they would like to use 
  amount = +prompt('Amount of characters');
  //the confirm elements are here to ask the user if they would like to use these character types, the confirm element creates a true or false value that is used later
  includeLowerCase = confirm('Would you like lowecase?');
  includeUpperCase = confirm('Would you like uppercase?');
  includeNumbers = confirm('Would you like numbers?');
  includesSpecial = confirm('Would you like special characters?');

 //this conditional statement is created to tell the user that they must select an amount of characters between 8 and 128, if they do not an alert will be triggered 
  if (amount <= 8 || amount > 128){
    alert("Amount of characters must be atleast 8 and less than 128");
    return;

  } 
  //this conditional statement is created to alert the user that they must select one of the character types, if not the return element will stop the function before the loop runs
  if (!includeLowerCase && !includeUpperCase && !includesSpecial && !includeNumbers){
    alert ("You must select atleast one character type");
    return;
  }
  //these conditonal statements are created to concat or combine the character arrays that are created above, if the user selects yes to a character type the true boolean will trigger the concat to create a new array called combine
  //the concat creates new arrays it doesnt mutate the old array therefore anytime a true value is selected by the user the character array stored above will add to the new combine array to create our users selected character array 
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

  //this code is used to assign the variables the correct array value
  var includesSpecial = writePassword[4];
  var includeNumbers = writePassword[3];
  var includeUpperCase = writePassword[2];
  var includeLowerCase = writePassword[1];



  // Write password to the #password input

  //this is the for loop that is used to generate the random value and stop at the correct amount of characters that the user input 
  //amount is the amount of characters the user set so the loop should not exceed that, Math.floor is used to round to the lowest whole number this way index 0 is always a posibility 
  //Math.random is used to generate a random number between 0 and 1 and we multiple is by the combine.lenth to generate a index number other than 0-1, which we round down through the Math.floor element 
  //the last line of code in the for loop is to concat the the new randomIndex array that we created into the empty password string that was created earlier
  for (var count = 0; count < amount; count++) {
    var randomIndex = Math.floor(Math.random() * combine.length);
    password += combine[randomIndex];
  }

  

  // Add event listener to generate button

  //this code is used to tell the password that we just generated where to go in the html document
  //the passwordText variable was created at the top of the code and connected through the querySelector and id that was in the html to specify the area that the password will enter the html 
  passwordText.value = password;

}

