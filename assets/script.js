// Assignment code here
let characters = "";
let finalpassword = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var statement = "How long do you want your password to be? (Min: 8 Max: 128)";
  var passwordLength = generatePasswordlength(statement);
  var secondstatement = "Do you want capital letters?(Yes/No)";
  generateCapitals(secondstatement);
  var thirdstatement = "Do you want lower-case letters?(Yes/No)";
  generateLower(thirdstatement);
  var fourthstatement = "Do you want special characters?(Yes/No)";
  generateSpecial(fourthstatement);
  var fifthstatement = "Do you want numbers?(Yes/No)";
  generateNumbers(fifthstatement);
  var create = generateString(characters,passwordLength);


  var passwordText = document.querySelector("#password");

  passwordText.value = create;
}

function generatePasswordlength(statement)
{
  let character = window.prompt(statement);
  let characterlength = parseInt(character);
  if(characterlength >= 8 && characterlength <= 128)
  {
    return characterlength;
  }
  else{
    generatePasswordlength("Invalid amount of characters. Please try again.");
  }
 
}

function generateCapitals(secondstatement)
{
  let capital = window.prompt(secondstatement);
  if(capital !== 'yes' && capital !== 'Yes' && capital !== 'No' && capital !== 'no')
  {
    generateCapitals("Invalid answer. Please try again.");

  }
else
{
  if(capital === "Yes" || capital === "yes")
  {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  console.log(capital);
}

}

function generateLower(thirdstatement)
{
  let lower = window.prompt(thirdstatement);
  if(lower !== "yes" && lower !== "Yes" && lower !== "No" && lower !== "no")
  {
    generateLower("Invalid answer. Please try again.");

  }
  else
{
  if(lower === "Yes" || lower === "yes")
  {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  console.log(lower);
}
}

function generateSpecial(fourthstatement)
{
  let special = window.prompt(fourthstatement);
  if(special !== "yes" && special !== "Yes" && special !== "No" && special !== "no")
  {
    generateSpecial("Invalid answer. Please try again.");

  }
  else
{
  if(special === "Yes" || special === "yes")
  {
    characters += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  console.log(special);
}

  
}

function generateNumbers(fifthstatement)
{
  let numbers = window.prompt(fifthstatement);
  if(numbers !== "yes" && numbers !== "Yes" && numbers !== "No" && numbers !== "no")
  {
    generateNumbers("Invalid answer. Please try again.");

  }
  else
  {
    if(numbers === "Yes" || numbers === "yes")
    {
      characters += "1234567890";
    }
    console.log(numbers);
  }
}

function generateString(finalpassword,length) {
  let result = '';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) 
  {
      result += finalpassword.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(characters);
  characters = "";
  return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
