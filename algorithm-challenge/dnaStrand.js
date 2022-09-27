function DNAStrand(dna){
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      newDNA += 'T';
    } else if(dna[i] === 'T') {
      newDNA += 'A';
    } else if (dna[i] === 'G') {
      newDNA += 'C';
    } else if (dna[i] === 'C') {
      newDNA += "G"
    }
  }
  return result;
}

//Examples:
DNAStrand('ATTGC'); // 'TAACG'
DNAStrand('GTAT'); // 'CATA'
