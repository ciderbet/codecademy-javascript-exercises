const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  // I don't think setter method is correct here, it should probably replace the existing appetizer with the new one rather than pushing it onto the array. See dogfactory file for example of that
  get appetizers () {
    return this._courses.appetizers
  },
  set appetizers (appetizer) {
    this._courses.appetizers.push(appetizer)
  },
  get mains () {
    return this._courses.mains
  },
  set mains (main) {
    this._courses.mains.push(main)
  },
  get desserts () {
    return this._courses.desserts
  },
  set desserts (dessert) {
    this._courses.desserts.push(dessert)
  },
  get courses () {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.mains
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName]
    const randomDishIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomDishIndex]
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const bill = appetizer.price + main.price + dessert.price
    return (`Your appetizer is ${appetizer.name}, your main is ${main.name} and your dessert is ${dessert.name}. The total bill is ${bill}`)
  }
}

menu.addDishToCourse('appetizers', 'bruschetta', 5)
menu.addDishToCourse('appetizers', 'peanuts', 6)
menu.addDishToCourse('appetizers', 'olives', 4)
menu.addDishToCourse('mains', 'carbonara', 15)
menu.addDishToCourse('mains', 'spicy soup', 12)
menu.addDishToCourse('mains', 'pasta', 11)
menu.addDishToCourse('desserts', 'rice pudding', 5)
menu.addDishToCourse('desserts', 'trifle', 5)
menu.addDishToCourse('desserts', 'ice cream', 5)

const meal = menu.generateRandomMeal()
console.log(meal)
