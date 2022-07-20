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
  var passwordcapital = generateCapitals(secondstatement);
  var thirdstatement = "Do you want lower-case letters?(Yes/No)";
  var passwordlower = generateLower(thirdstatement);
  var fourthstatement = "Do you want special characters?(Yes/No)";
  var passwordspecial = generateSpecial(fourthstatement);
  var fifthstatement = "Do you want numbers?(Yes/No)";
  var passwordnumbers = generateNumbers(fifthstatement);
  var create = generateString(characters,passwordLength);


  var passwordText = document.querySelector("#password");

  passwordText.value = create;
}
//blank still pushes to the next one need to fix still
function generatePasswordlength(statement)
{
  let character = window.prompt(statement);
  let characterlength = parseInt(character);
  if(characterlength < 8 || characterlength > 128)
  {
    generatePasswordlength("Invalid amount of characters. Please try again.");
  }
  return characterlength;
  
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
  }
}

function generateString(finalpassword,length) {
  let result = '';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) 
  {
      result += finalpassword.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//need clear when repressing generate .

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
