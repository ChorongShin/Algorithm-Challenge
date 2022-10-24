function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//Example
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) //--> ["Eyes", "Glasses", "Monocles", "Telescopes"]
