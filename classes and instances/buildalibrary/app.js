// parent class of Media

class Media {
  constructor (title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title () {
    return this._title
  }

  get isCheckedOut () {
    return this._isCheckedOut
  }

  get ratings () {
    return this._ratings
  }

  set isCheckedOut (newCheckedOut) {
    this._isCheckedOut = newCheckedOut
  }
  // Switches the checked out status between true and false

  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut
  }

  // CHECK should it be ratings or _ratings?

  getAverageRating () {
    const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
    const lengthOfArray = this._ratings.length
    return (ratingsSum / lengthOfArray)
  }

  addRating (rating) {
    this.ratings.push(rating)
  }
}

// Child book class

class Book extends Media {
  constructor (author, title, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }

  get author () {
    return this._author
  }

  get pages () {
    return this._pages
  }
}

// Child Movie class

class Movie extends Media {
  constructor (director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director () {
    return this._director
  }

  get runTime () {
    return this._runTime
  }
}

// Adding a new instance to the Book class

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

// Toggling status of checked out of new Book instance, then logging the status

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

// Adding new ratings to the instance and logging the average rating

historyOfEverything.addRating(2)
historyOfEverything.addRating(4)
historyOfEverything.addRating(6)
console.log(historyOfEverything.getAverageRating())

// Adding a new instance to the Movie class, then toggling checked out status and adding ratings

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(5)
speed.addRating(2)
speed.addRating(1)
console.log(speed.getAverageRating())
