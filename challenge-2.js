function average(marks) {
  let sum = 0;
  for (const mark of marks) {
    sum += mark;
  }
  return sum / marks.length;
}

// test case

const marks = [10, 11, 13, 15, 16, 20];
console.log("The average mark is equal to :", average(marks));
