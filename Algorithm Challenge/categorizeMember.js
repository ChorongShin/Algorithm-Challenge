function openOrSenior(data) {
  const membership = [];

  data.forEach(member => {
    (member[0] >= 55 && member[1] > 7) ? membership.push("Senior") : membership.push("Open");
  });
  return membership;
}


//Example:
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
//Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]
