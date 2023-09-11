'use strict';
//
// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
//
// const { sat, ...weekdays } = restaurant.openingHours;
//
// ///////////////////////////////////////
// // Coding Challenge #1
//
// /*
// We're building a football betting app (soccer for my American friends 😅)!
//
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
//
//
//
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
//
// GOOD LUCK 😀
// */
//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//
// // 1. Create one player array for each team (variables 'players1' and 'players2')
// let players1 = game.players[0];
// const players2 = game.players[1];
//
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// let [gk1, ...fieldPlayers1] = players1;
// let [gk2, ...fieldPlayers2] = players2;
//
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// let { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
//
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored!`);
// }
//
// printGoals('Bobby Jean', 'Billy Funk');
//
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
//
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!




GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//
// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
//
// for (const scorer of game.scored.entries()) {
//   console.log(`Goal ${scorer[0] + 1}: ${scorer[1]}`);
// }
//
// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let oddAvg = 0;
// for (const odd of Object.values(game.odds)) {
//   oddAvg += odd;
// }
// oddAvg = oddAvg / Object.values(game.odds).length;
// console.log(oddAvg);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// //
//
// for (const team of Object.keys(game.odds)) {
//   console.log(`Odd of victory for ${game[team]}: ${game.odds[team]}`);
// }

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//       Hummels: 1,
//     Lewandowski: 2
// }

///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//
// console.log(gameEvents.values());

// const events = new Set();
// for (const [key, value] of gameEvents) {
//   events.add(value);
// }
//
// events.delete('🔶 Yellow card');
// console.log(events);
//
// for (const [key, value] of gameEvents) {
//   console.log(
//     key < 45
//       ? `[FIRST HALF] ${key}: ${value}`
//       : `[SECOND HALF] ${key}: ${value}`
//   );
// if (key < 45) {
//   console.log(`[FIRST HALF] ${key}: ${value}`);
// } else {
//   console.log(`[SECOND HALF] ${key}: ${value}`);
// }
// }
// console.log(events);
