function wave (str) {
  return [...str].map((letter, index) => {
    return str.slice(0, index) + letter.toUpperCase() + str.slice(index + 1)
  }).filter(word => word !== str)
}


const wave = str => [...str].map((letter, index) => {
  return str.slice(0, index) + letter.toUpperCase() + str.slice(index + 1)
}).filter(word => word !== str)


//Examples
wave('hello') // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
wave('two words') // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
