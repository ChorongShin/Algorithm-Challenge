function totalPoints(games) {
  let sum = 0;
  games.forEach(game => {
    const score = game.split(':');
    let x = Number(score[0]);
    let y = Number(score[1]);

    if (x > y) {
      sum += 3;
    } else if (x < y) {
      sum += 0;
    } else if (x === y) {
      sum += 1;
    }
  })
  return sum;
}

//Examples
totalPoints(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);
//--> 30

totalPoints(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']);
//--> 10

totalPoints(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']);
//--> 0
