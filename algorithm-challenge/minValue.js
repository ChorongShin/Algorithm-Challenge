function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a- b).join(''));
}

//Examples
minValue([1, 3, 1]) // 13
minValue([4, 7, 5, 7]) //457
minValue([5, 7, 9, 5, 7]) //579
