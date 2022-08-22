// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};

// ARROW FUNCTION
// function expression
const sayHello = (greet) => {
  console.log(`${greet}!`);
};

const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};

// Kalau function tidak memiliki lebih dari 1 parameter
if (functionParameter > 1) {
  const sayName = (name) => {
    console.log(`Nama saya ${name}`);
  };

  sayName("Leia");

  /* output
    Nama saya Leia
     */
}

if (functionParameter == null) {
  const sayHello = () => {
    console.log("Selamat pagi semuanya!");
  };

  sayHello();

  /* output
    Selamat pagi semuanya!
     */
}

if (lineBodyFunction === "1 Line") {
  const sayName = (name) => console.log(`Nama saya ${name}`);
  sayName("Leia");

  const sayHello = () => console.log("Selamat pagi semuanya!");
  sayHello();

  /* output
Nama saya Leia
Selamat pagi semuanya!
 */

  // Tidak Perlu Menggunakan return
  const multiply = (a, b) => a * b;
  console.log(multiply(3, 4));

  /* output
12
 */
}
