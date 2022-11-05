function longestConsec(strarr, k) {
  if (strarr.length === 0 || strarr.length < k || k <= 0) {
    return '';
  }

  let longest = '';

for (let i = 0; i < strarr.length; i++) {
  let joinedString = strarr.slice(i, i + k).join('');
  if (joinedString.length > longest.length) {
    longest = joinedString;
  }

}
  return longest;
}

//Examples
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // --> 'abigailtheta'
longestConsec(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) //--> ''
