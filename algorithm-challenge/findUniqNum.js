function findUniqNum(arr) {
  return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

function findUniqNum(arr) {
  let repeatNum = arr.filter((item, index) =>  arr.indexOf(item) !== index);
  return arr.filter(item => item !== repeatNum[0])[0]
}

//Examples
findUniqNum([ 1, 1, 1, 2, 1, 1 ]) // --> 2
findUniqNum([ 0, 0, 0.55, 0, 0 ]) // --> 0.55
