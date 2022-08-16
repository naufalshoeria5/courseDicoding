// Impure Function
// Contoh 1
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// Contoh 2
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */
// End Impure Function

// Pure Function
// Contoh 1
const hitungLuasLingkaran2 = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Contoh 2
const createPersonWithAge2 = (age, person) => {
  return { ...person, age };
};

const person2 = {
  name: "Bobo",
};

const newPerson2 = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */

// End Pure Function
