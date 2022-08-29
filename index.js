function receivesAFunction(cakeRecipe) {
  //   console.log(cakeRecipe());
  cakeRecipe();
}

// function grandmasChocolateCake() {
//   return "mmm tasty chocolate cake";
// }

// receivesAFunction(grandmasChocolateCake());

// no arguments
// returns a named function
function returnsANamedFunction() {
  function jabberwocky() {
    return "jabberwocky! from inside this place";
  }

  return jabberwocky;
}

// take no arguments
//
function returnsAnAnonymousFunction() {
  // return function () {};
  return () => {};
}
