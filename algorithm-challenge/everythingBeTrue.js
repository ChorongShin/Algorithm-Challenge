function truthCheck(collection, pre) {
  let countTrue = 0;
  collection.forEach(object => object.hasOwnProperty(pre) && object[pre] ?? countTrue++ : countTrue);

  return countTrue === collection.length;
}

//Example
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") //--> false
