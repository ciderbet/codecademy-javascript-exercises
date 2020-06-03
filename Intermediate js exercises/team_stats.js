const team = {
  _players: [
    {
      firstName: 'Rob',
      lastName: 'Kennedy',
      age: 36
    },
    {
      firstName: 'Mattia',
      lastName: 'Zavone',
      age: 33
    },
    {
      firstName: 'Daniel',
      lastName: 'Smith',
      age: 34
    }
  ],
  _games: [
    {
      opponent: 'Liverpool',
      teamPoints: 36,
      opponentPoints: 98
    },
    {
      opponent: 'Drag Queens',
      teamPoints: 52,
      opponentPoints: 25
    },
    {
      opponent: 'Cats',
      teamPoints: 102,
      opponentPoints: 1
    }
  ],
  get firstName () {
    return this._players.firstName
  },
  get lastName () {
    return this._players.lastName
  },
  get age () {
    return this._players.age
  },
  get opponent () {
    return this._players.opponent
  },
  get teamPoints () {
    return this._players.teamPoints
  },
  get opponentPoints () {
    return this._players.opponentPoints
  },
  addPlayer (firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player)
  },
  addGame (opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(game)
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('Dracula', 55, 77)
team.addGame('Werewolf', 38, 12)
team.addGame('Ghost', 2, 25)

console.log(team._games)
