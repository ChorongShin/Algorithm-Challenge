function findShort(s) {
  s = s.split(' ');

  const short = s.reduce((a, b) => a.length <= b.length ? a : b);
  return short;
}

//Example
findShort("bitcoin take over the world maybe who knows perhaps") //3
