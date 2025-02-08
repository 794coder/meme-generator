function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}
function printNTimes(n, value) {
  for (let i = 0; i < n; i++) {
    // console.log("Value:", value); common way of debugging
    console.log(value);
  }
}
document.addEventListener("click", () => {
  console.log("Clicked");
});
debugger;
printName("The", "Ace");
printNTimes(5, "Hi");
