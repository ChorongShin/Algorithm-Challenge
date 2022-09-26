function filter_list(l) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      result.push(l[i]);
    }
  }
  return result;
}


//Alternative Solution:
function filter_list(l) {
  return l.filter(char => typeof char === 'number');
}


//Example:
filter_list([1,2,"aasf","1","123",123]);
