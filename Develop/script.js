// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function
function generatePassword() {
  // Define character sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var password = "";

  // Prompt user for length of password
  var passwordLength = prompt("How many characters would you like your password to contain?");

  // Validate user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  // Prompt user for character types to include
  var includeLowercase = confirm("Click OK to confirm including lowercase characters");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters");
  var includeNumeric = confirm("Click OK to confirm including numeric characters");
  var includeSpecial = confirm("Click OK to confirm including special characters");

  // Validate user input
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Must select at least one character type");
    return;
  }

  // Generate password based on user input
  for (var i = 0; i < passwordLength; i++) {
    if (includeLowercase && password.length < passwordLength) {
      password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    if (includeUppercase && password.length < passwordLength) {
      password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    if (includeNumeric && password.length < passwordLength) {
      password += numeric.charAt(Math.floor(Math.random() * numeric.length));
    }
    if (includeSpecial && password.length < passwordLength) {
      password += special.charAt(Math.floor(Math.random() * special.length));
    }
  }

  return password;
}
