const score = 60;

if (90 <= score && score <= 100) {
  console.log(`${score}: +A`);
} else if (80 <= score && score <= 89) {
  console.log(`${score}: A`);
} else if (70 <= score && score <= 79) {
  console.log(`${score}: +B`);
} else if (60 <= score && score <= 69) {
  console.log(`${score}: B`);
} else if (50 <= score && score <= 59) {
  console.log(`${score}: C`);
} else if (50 > score) {
  console.log(`${score}: D`);
} else {
  console.log("plz nter a positive number!!");
}
