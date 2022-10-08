function countSmileys(arr) {
  let count = 0;

  const smileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"];

  for (let i = 0; i < arr.length; i++) {
    if (smileys.includes(arr[i])) {
      count++;
    }
  }
  return count;
}

countSmileys([':)', ';(', ';}', ':-D']) // 2
countSmileys([';->' , ';o>' , ':~(' , ':)' , ':-(' , ':o)' , ';D']) // 2
