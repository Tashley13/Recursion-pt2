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

let newArr=[]
function reverse(str, count=str.length) {
  if (count=>0) {
    return newArr.join("")
  }
  return newArr.push(str, count--)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
