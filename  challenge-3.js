// Uppercase A-Z: 65-90
// Lowercase a-z: 97-122

function capitalizeFirstChar(string) {
  const firstCharCode = string.charCodeAt(0); // get character code of first character
  const capitalizedFirstChar =
    firstCharCode >= 97 // upper case first character if it's a lower case letter
      ? String.fromCharCode(firstCharCode - 32)
      : String.fromCharCode(firstCharCode);
  return capitalizedFirstChar + string.slice(1); // join capitalized character with rest of string
}

// test case

console.log(capitalizeFirstChar("hello world"));
console.log(capitalizeFirstChar("Hello world"));
