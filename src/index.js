var uniqueRandomArray = requrie ('unique-random-array');
var starWarsName = require ('./starwars-names');

module.exports = {
  all: starWarsName,
  random: uniqueRandomArray (starWarsName),
};
