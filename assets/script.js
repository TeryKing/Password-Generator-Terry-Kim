
//using finalpassword and characters to track the length and user inputs of how the password ends up
let characters = "";
let finalpassword = '';

var generateBtn = document.querySelector("#generate");
//function to generate script to get user input and putting a value of the final result
function writePassword() 
{
  var statement = "How long do you want your password to be? (Min: 8 Max: 128)";
  var passwordLength = generatePasswordlength(statement);
  console.log(passwordLength);
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
//First windows prompt on asking length of password with min and max.
function generatePasswordlength(statement)
{
  let character = window.prompt(statement);
  let characterlength = parseInt(character);
  if(characterlength >= 8 && characterlength <= 128)
  {
    return characterlength;
  }
  else{
    const incorrect = generatePasswordlength("Invalid amount of characters. Please try again.");
    return incorrect;
  }
 
}

//second prompt to whether user wants capitals or not using if statement.
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

//third prompt to whether user wants lowercase letters
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

//fourth script to ask if they want special characters
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
    characters += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
}

  
}

//fifth prompt asking if user wants numbers
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

//function to generate a string to get all of the user inputs from previous to randomize letters, numbers, and special characters and fit to length.
function generateString(finalpassword,length) {
  let result = '';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) 
  {
    result += finalpassword.charAt(Math.floor(Math.random() * charactersLength));
  }
  characters = "";
  return result;
}

//generic button to start the function writePassword on click.
generateBtn.addEventListener("click", writePassword);
