// Takes a number, a lower limit and and upper limit. If the number is below the lower limit, it returns the lower limit. If above upper limit, returns upper. If in between lower and upper returns the number.

const _ = {
  clamp (number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower)
    const clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },

  // Takes a number and the start and end of a range of numbers. Returns true if the number is within the range and false if not. if no end value provided, start value is set to 0 and end value is set to the original start value.

  inRange (number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    } else if (start > end) {
      const temp = start
      start = end
      end = temp
    }
    return (number >= start && number < end)
  },

  // Splits a string into an array of words

  words (string) {
    const words = string.split(' ')
    return words
  },

  // Takes a string and length, and adds spaces evenly to either side of the string to reach the desired string length. Extra padding for odd string lengths is added to the end padding.

  pad (string, length) {
    if (length < string.length) {
      return string
    }
    const startPaddingLength = Math.floor((length - string.length) / 2)
    const endPaddingLength = length - (startPaddingLength + string.length)
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString
  },

  // Checks if the provided object has a value at the specified key, returns true if so and false if not.

  has (object, key) {
    const hasValue = (object[key] !== undefined)
    return hasValue
  },

  // Iterates through each key / value pair in the object and swaps the key and value

  invert (object) {
    const invertedObject = {}
    for (const key in object) {
      const originalValue = object[key]
      invertedObject[originalValue] = key
    }
    return invertedObject
  },

  // Iterates through an object and calls the given predicate function with each value. Returns the first key that returns a truthy value.

  findKey (object, predicate) {
    for (const key in object) {
      const value = object[key]
      const predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      }
      return undefined
    }
  },

  // Removes a specified number of items from the beginning of an array

  drop (array, n) {
    if (n === undefined) {
      n = 1
    }
    const droppedArray = array.slice(n)
    return droppedArray
  },

  // Creates a new copy of a supplied array, dropping elements from the beginning of the array until an element causes a given predicate function to return a falsy value

  dropWhile (arr, predicate) {
    const dropNumber = arr.findIndex(function (el, index, arr) {
      return !(predicate(el, index, arr))
    })
    const droppedArray = this.drop(arr, dropNumber)
    return droppedArray
  },

  // Breaks a given array down into arrays of a specified size

  chunk (array, size) {
    if (size === undefined) {
      size = 1
    }
    const arrayChunks = []
    for (let i = 0; i < array.length; i + size) {
      const arrayChunk = array.slice(i, i + size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks
  }
}

// Do not write or modify code below this line.
module.exports = _
