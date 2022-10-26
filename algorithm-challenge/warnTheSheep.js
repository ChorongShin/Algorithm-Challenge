function warnTheSheep(queue) {
  const total = queue.length;
  for (let i = 0; i < total; i++) {
    if (queue[i] === 'wolf' && queue[i+1] === 'sheep') {
      return `Oi! Sheep number ${total - i - 1}! You are about to be eaten by a wolf!`
    } else if (queue[i] === 'wolf' && queue[i + 1] === undefined) {
      return 'Pls go away and stop eating my sheep'
    }
  }
}

//Other solution:
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');

  return position === 0 ? 'Pls go away and stop eating my sheep'; : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

//Examples
warnTheSheep(['sheep', 'sheep', 'wolf']) //--> 'Pls go away and stop eating my sheep'
warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']) //--> 'Oi! Sheep number 1! You are about to be eaten by a wolf!'
