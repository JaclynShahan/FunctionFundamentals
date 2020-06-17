// 1.Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
 const result = number + 7
 return result
}
add7(8)

// 2.Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    const result = num1 * num2
    return result
  }
  
  multiply(3, 4)
// 3.Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str) {
let strCap = str.charAt(0).toUpperCase() + str.slice(1)
return strCap
}
capitalize("jaclyn")
// 4.Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
let last = str.charAt(str.length-1)
return last
}
lastLetter("hamburger")
// 5.lastLetter("abcd") should return "d"
function lastLetter(str) {
    let last = str.charAt(3)
    return last
}
lastLetter("abcd")