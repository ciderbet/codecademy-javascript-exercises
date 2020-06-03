const speciesArray = [{ speciesName: 'shark', numTeeth: 50 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }]

// Sorts the array in ascending order by number of teeth
const sortSpeciesByTeeth = array => array.sort(function (a, b) { return a.numTeeth - b.numTeeth })

console.log(sortSpeciesByTeeth(speciesArray))
