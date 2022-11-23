function receivesAFunction(arg) {
  arg();
  return "anything";
}
function returnsANamedFunction() {
  return sayHi;
}
function sayHi() {}

function returnsAnAnonymousFunction() {
  return function () {};
}
