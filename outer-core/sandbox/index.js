require('../lib/main.js');

AppContext.setAttr("app", "Fumoffu App");

console.log(AppContext.getAttr("app").trim());

var fullName = function() {
    return `${fullName.firstName.trim()} ${fullName.lastName.trim()}`;
}

fullName.firstName = "Alan";
fullName.lastName = "Marquez";

console.log(String.isNullOrWhiteSpace("  A"));

console.log(String.toCamelCase("memento mori"));