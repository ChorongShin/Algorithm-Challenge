function indexOfMiddleElement(triplet) {
  let order = [...triplet];
  order = order.sort(function(a, b) {
    return a - b;
  })
  return triplet.indexOf(order[1])
}

//Examples
indexOfMiddleElement([2, 1, 3]) //--> 0
indexOfMiddleElement([5, 10, 14]) //--> 1
