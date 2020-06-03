// Takes in characteristics of the dog and returns them in an object
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name () {
      return this._name
    },
    set name (newName) {
      this._name = newName
    },
    get breed () {
      return this._breed
    },
    set breed (newBreed) {
      this._breed = newBreed
    },
    get weight () {
      return this._weight
    },
    set weight (newWeight) {
      this._weight = newWeight
    },
    bark () {
      return 'ruff! ruff!'
    },
    eatTooManyTreats () {
      this.weight++
    }
  }
}

const fido = dogFactory('Fido', 'Alsation', 10)
console.log(fido)
console.log(fido.bark())
fido.eatTooManyTreats()
console.log(fido)
