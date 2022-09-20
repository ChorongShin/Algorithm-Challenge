function likes(names) {
  /*if there is no one in the list,
  return 'no one likes this
  if there is one person in the list,
  return 'name of the person likes this'
  if there are two people in the list,
  return 'name and name like this'
  if there are three people in the list,
  return 'name, name and name like this'
  if there are more than or equal to 4 people in the list,
  return 'name, name and remaining number of people like this'
*/

  if (names.length === 0) return 'no one like this';
  if (names.length === 1) return `${names[0]} like this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`
}

//Use the switch statement
/*
function likes(name) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} like this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -2 } like this`
  }
}
 */

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Peter', 'Mark', 'John']))
console.log(likes(['Peter', 'Mark', 'John', 'brave', 'Raven']))
