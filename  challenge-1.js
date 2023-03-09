function isNumberEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}

// test case

console.log("1 is", isNumberEven(1));
console.log("2 is", isNumberEven(2));
console.log("100 is", isNumberEven(100));
console.log("101 is", isNumberEven(101));
