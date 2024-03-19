// 1. Install Node.js, TypeScript, and VS Code on your computer.
// (Instructions are external and not part of the TypeScript code.)
// 2. Personal Message:
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// 3. Name Cases:
var personNameCase = "John Doe";
console.log(personNameCase.toLowerCase()); // print lowercase
console.log(personNameCase.toUpperCase()); // print uppercase
console.log(personNameCase.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })); // print titlecase
// 4. Famous Quote:
var quote = 'A person who never made a mistake never tried anything new.';
var author = 'Albert Einstein';
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// 5. Famous Quote 2:
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
// 6. Stripping Names:
var nameWithWhitespace = "  John\tDoe\n  ";
console.log(nameWithWhitespace); // with whitespace
console.log(nameWithWhitespace.trim()); // without whitespace
// 7. Number Eight:
console.log(4 + 4); // addition
console.log(10 - 2); // subtraction
console.log(4 * 2); // multiplication
console.log(16 / 2); // division
// 8. Four Lines with Number 8:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 9. Favorite Number:
var favoriteNumber = 7;
console.log("My favorite number is ".concat(favoriteNumber, "."));
// 10. Adding Comments:
// Program 1: Personal Message
// Greets a person stored in a variable.
// Program 2: Name Cases
// Prints a person's name in lowercase, uppercase, and titlecase.
// 11. Names:
var names = ["John", "Alice", "Bob"];
names.forEach(function (name) { return console.log(name); });
// 12. Greetings:
var greetings = "Hello, ";
names.forEach(function (name) { return console.log("".concat(greetings).concat(name, "!")); });
// 13. Your Own Array:
var transportation = ["car", "motorcycle", "bicycle"];
transportation.forEach(function (item) { return console.log("I would like to own a ".concat(item, ".")); });
// 14. Guest List:
var guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
// 15. Changing Guest List:
var unableToAttend = guests.pop();
guests.push("Isaac Newton");
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
console.log("".concat(unableToAttend, " cannot make it to the dinner."));
// 16. More Guests:
console.log("We found a bigger dinner table!");
guests.unshift("Nikola Tesla"); // Add to beginning
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei"); // Add to middle
guests.push("Charles Darwin"); // Add to end
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are invited to dinner.")); });
// 17. Shrinking Guest List:
console.log("We can invite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
guests.forEach(function (guest) { return console.log("Dear ".concat(guest, ", you are still invited to dinner.")); });
guests.splice(0); // Empty the list
console.log(guests); // Check if the list is empty
// 18. Seeing the World:
var placesToVisit = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
console.log("Original Order:");
console.log(placesToVisit.join(", "));
console.log("Alphabetical Order:");
console.log(placesToVisit.slice().sort().join(", "));
console.log("Original Order Again:");
console.log(placesToVisit.join(", "));
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse().join(", "));
console.log("Original Order Again:");
console.log(placesToVisit.join(", "));
console.log("Reversed Order:");
console.log(placesToVisit.reverse().join(", "));
console.log("Original Order Again:");
console.log(placesToVisit.join(", "));
console.log("Alphabetical Order:");
console.log(placesToVisit.sort().join(", "));
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse().join(", "));
// 19. Dinner Guests:
console.log("We are inviting ".concat(guests.length, " people to dinner."));
// 20. Think of something you could store in an array:
var mountains = ["Everest", "K2", "Kangchenjunga"];
// 21. Think of something you could store in a TypeScript Object:
var car = {
    manufacturer: "Toyota",
    model: "Corolla",
    color: "blue",
    year: 2020
};
// 22. Intentional Error:
// Uncomment below line to produce an index error
// console.log(names[10]);
// 23. Conditional Tests:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// More tests can be added here
// 24. More Conditional Tests:
// Tests for equality and inequality with strings
console.log("Test for equality with strings:");
var fruit = "apple";
console.log(fruit == "apple"); // True
console.log(fruit != "banana"); // True
// Tests using the lower case function
console.log("Test using the lower case function:");
var word = "HELLO";
console.log(word.toLowerCase() == "hello"); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical tests:");
var number = 10;
console.log(number == 10); // True
console.log(number != 5); // True
console.log(number > 5); // True
console.log(number < 15); // True
console.log(number >= 10); // True
console.log(number <= 10); // True
// Tests using "and" and "or" operators
console.log("Tests using 'and' and 'or' operators:");
console.log(number == 10 && fruit == "apple"); // True
console.log(number == 5 || fruit == "banana"); // True
// Test whether an item is in an array
console.log("Test whether an item is in an array:");
var favoriteFruits = ["apple", "banana", "orange"];
console.log(favoriteFruits.includes("banana")); // True
// Test whether an item is not in an array
console.log("Test whether an item is not in an array:");
console.log(!favoriteFruits.includes("grapes")); // True
// 25. Alien Colors #1:
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
// 26. Alien Colors #2:
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// 27. Alien Colors #3:
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
// 28. Stages of Life:
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 29. Favorite Fruit:
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
// 30. Hello Admin:
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
// 31. No Users:
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// 32. Checking Usernames:
var current_users = ["user1", "user2", "user3", "admin", "guest"];
var new_users = ["User1", "User2", "Admin", "Guest", "User5"];
new_users.forEach(function (new_user) {
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(new_user.toLowerCase())) {
        console.log("Sorry, ".concat(new_user, ", you will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
// 33. Ordinal Numbers:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinal;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
});
// 34. Pizzas:
var favorite_pizzas = ["pepperoni", "margherita", "vegetarian"];
favorite_pizzas.forEach(function (pizza) { return console.log("I like ".concat(pizza, " pizza.")); });
console.log("I really love pizza!");
// 35. Animals:
var common_animals = ["dog", "cat", "rabbit"];
common_animals.forEach(function (animal) { return console.log("A ".concat(animal, " would make a great pet.")); });
console.log("Any of these animals would make a great pet!");
// 36. T-Shirt:
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and it says \"").concat(message, "\"."));
}
make_shirt("Large", "Hello World!");
// 37. Large Shirts:
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is ".concat(size, " and it says \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello!");
// 38. Cities:
function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("New York");
describe_city("Karachi", "Pakistan");
describe_city("London", "UK");
// 39. City Names:
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// 40. Album:
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist1", "Album1", 10));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3", 15));
// 41. Magicians:
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
show_magicians(["Harry Houdini", "David Copperfield", "Penn & Teller"]);
// 42. Great Magicians:
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var great_magicians = make_great(["Harry Houdini", "David Copperfield", "Penn & Teller"]);
show_magicians(great_magicians);
// 43. Unchanged Magicians:
var original_magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
var modified_magicians = make_great(original_magicians.slice());
show_magicians(original_magicians);
show_magicians(modified_magicians);
// 44. Sandwiches:
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly");
// 45. Cars:
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
console.log(car_info("Toyota", "Camry", "color: red", "sunroof: yes"));
