// Imperatif
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/
// End Imperatif

// Deklaratif
const namesDeklaratif = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMarkDeklratif = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);

/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */
// EndDeklaratif
