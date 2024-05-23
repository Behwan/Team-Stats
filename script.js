const team = {
  _players: [{firstName: 'Cristianno', lastName: 'Ronaldo', age: 39}, {firstName: 'Gareth', lastName: 'Bale', age: 34}, {firstName: 'Karim', lastName: 'Benzema', age: 36} ],

  _games: [{opponent: 'FC Barcelona', teamPoints: 3, opponentPoints: 1}, {opponent: 'Bayern Munich', teamPoints: 8, opponentPoints: 2}, {opponent: 'Paris Saint Germain', teamPoints: 2, opponentPoints: 5}],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
        const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge,
        };
        this._players.push(player);
    },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this['_games'].push(game);
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Titans', 100, 98);
console.log(team.games);
