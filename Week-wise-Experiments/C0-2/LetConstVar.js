if (true) {
	  var leaked = "I escaped!";
}
console.log(leaked); 
// let stays inside its block
if (true) {
  let safe = "I am block-scoped";
  console.log(safe); // Works here
}
safe="I am outside";
console.log(safe);
// const — cannot be reassigned
const PI = 3.14159;
console.log("PI is: " + PI);
// PI = 3;  // would throw an error

