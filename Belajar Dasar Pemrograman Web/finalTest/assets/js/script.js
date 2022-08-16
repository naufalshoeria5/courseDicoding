document.getElementById("button-action").addEventListener("click", darkMode);
function darkMode() {
  //   Deklarasi variable class
  const classDarkPrimary = "dark-mode-primary";
  const classDarkSecondary = "dark-mode-secondary";
  const classDarkModeThird = "dark-mode-third";

  // Deklarasi variable
  var jumbotron = document.getElementById("jumbotron");
  var btnAction = document.getElementById("button-action");
  var navbar = document.getElementsByTagName("nav")[0];
  var main = document.getElementsByTagName("main")[0];
  var visi = document.getElementById("visi");
  var telahDipercaya = document.getElementById("telah-dipercaya");
  var aside = document.getElementsByTagName("aside")[0];
  var footer = document.getElementsByTagName("footer")[0];

  var a = document.getElementsByClassName(classDarkPrimary);

  if (a.length != 0) {
    console.log(a.length);
    var b = document.getElementsByClassName(classDarkSecondary);
    var c = document.getElementsByClassName(classDarkModeThird);
    while (a.length) {
      a[0].classList.remove(classDarkPrimary);
    }
    while (b.length) {
      b[0].classList.remove(classDarkSecondary);
    }
    while (c.length) {
      c[0].classList.remove(classDarkModeThird);
    }
    // main.classList.remove(classDarkSecondary);
    // navbar.classList.add(classDarkSecondary);
    // btnAction.classList.add(classDarkPrimary);
    // jumbotron.classList.add(classDarkPrimary);
    // visi.classList.add(classDarkPrimary);
    // telahDipercaya.classList.add(classDarkPrimary);
    // aside.classList.add(classDarkPrimary);
    // footer.classList.add(classDarkModeThird);
  } else {
    main.classList.add(classDarkSecondary);
    navbar.classList.add(classDarkSecondary);
    btnAction.classList.add(classDarkPrimary);
    jumbotron.classList.add(classDarkPrimary);
    visi.classList.add(classDarkPrimary);
    telahDipercaya.classList.add(classDarkPrimary);
    aside.classList.add(classDarkPrimary);
    footer.classList.add(classDarkModeThird);
    console.log("masuk bank");
  }
}
