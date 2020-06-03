const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower']

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.')
}

const declineEverything = array => {
  array.forEach(politelyDecline)
}

declineEverything(veggies)
