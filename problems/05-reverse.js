/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
/*
bc: empty string
rc:
rs:
default parameter: 0
*/


function reverse(str, count=str.length, newArr=[]) {

  if (count>0) {//rc
    count --//rs
    newArr.push(str[count])
    reverse(str, count, newArr)
  }
  return newArr.join("")//base case
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
// reverse("atom"); // "mota"
// reverse("q"); // "q"
// reverse("id"); // "di"
// reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
