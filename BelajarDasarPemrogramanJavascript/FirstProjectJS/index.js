import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const makeCoffe = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log("Kopi Berhasil Dibuat!");
  } else {
    console.log("Biji Kopi Tidak Cukup!");
  }
};

makeCoffe("robusta", 100);

console.log(stock);
console.log(isCoffeeMachineReady);
