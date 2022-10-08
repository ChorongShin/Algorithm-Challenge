function friend(friends) {
  return friends.filter(friend => friend.length === 4);
}

//Examples
friend("Ryan", "Kieran", "Mark") //["Ryan", "Mark"]
