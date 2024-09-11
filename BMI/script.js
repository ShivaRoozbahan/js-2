const weight = Number(prompt("plz enter weight:"));
const height = Number(prompt("plz enter height:"));

let BMI = (height * height) / weight;
// console.log(BMI);

if (BMI < 18.5) {
  console.log(`BMI: ${BMI} = underweight`);
} else if (18.5 <= BMI < 25) {
  console.log(`BMI: ${BMI} = normal weight`);
} else if (25 <= BMI < 30) {
  console.log(`BMI: ${BMI} = overweight`);
} else if (BMI >= 30) {
  console.log(`BMI: ${BMI} = obese`);
} else {
  console.log("plz nter a positive number!!");
}
