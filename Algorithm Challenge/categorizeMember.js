function openOrSenior(data) {
  const membership = [];

  data.forEach(member => {
    (member[0] >= 55 && member[1] > 7) ? membership.push("Senior") : membership.push("Open");
  });
  return membership;
}
