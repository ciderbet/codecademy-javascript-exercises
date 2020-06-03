const isPlant = (food) => food.source === 'plant'

// Checks if every source is a plant or not
const isTheDinnerVegan = (array) => {
  return array.every(isPlant)
}

const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }, { name: 'dessert twinkies', source: 'unknown' }]

console.log(isTheDinnerVegan(dinner))
