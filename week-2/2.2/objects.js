const games = prompt ("pick a number between 1 and 3 to learn about a new game1");

const myGames = 
[ {game: "Catan", type: "Board", numberOfPlayers: 4, rating: "4", description: "Settlers of Catan is a combination of strategy and resource management. You need the right materials to build houses and roads and gain victory points. The luck of the die throw drives these resources and determines how many settlements and roads you can build, which in turn accrue more resources."},
{game: "Chameleon", type: "Board", numberOfPlayers: 8, rating: "3", description: "To unmask the Chameleon without giving away the secret word. If you are the Chameleon then your mission is to blend in with the other players, avoid detection and work out the secret word."},
{game: "Secret Hitler", type: "Lying", numberOfPlayers: 10, rating: "5", description: "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. ... Each round, players elect a President and a Chancellor who will work together to enact a law from a random deck."},
];

console.log(
    "You selected " + myGames[games -1].game + " which is a " + myGames[games - 1].type + " game " + "that allows for " + myGames[games - 1].numberOfPlayers + " players. It is rated " + myGames[games- 1].rating + " out of 5. " + " Here's the overview: "+ myGames[games- 1].description 
);