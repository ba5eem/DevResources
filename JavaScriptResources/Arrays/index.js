// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];
nameArray.push("Baseem","Missaghi");

genericNumberArray.push(6,7,8,9,10);


var popResult = colors.pop(3);

scrambledWords.reverse('');
phoneNumber.reverse();

var nextOrder = orderQueue.shift();

mixedNums.sort();
mixedWords.sort();

var notFruit = fruitCollection.splice(1,3);

gemBox.splice(5,2);
gemBox.splice(6,4);

upToTen.splice(0,4);
upToTen.unshift(1,2,3,4,5,6,7,8,9,10);

brownOnly.splice(1,5, "brown", "brown", "brown");
console.log(brownOnly);

orderedValues.splice(0,7);
var orderedValuesNewLength = orderedValues.unshift(1,2,3,4,5,6,7,8,9,10);

var randomThingsArray = genericNumberArray.concat(colors);

var updatedOrders = orderQueue.concat({ takeOut: 'Poke' }, { takeOut: 'Pizza'});

var sentence = scrambledWords.join(' ');
var myFruits = fruitCollection.join(' + ');

var favoriteFriends = friends.slice(1,3);
var owesMoney = friends.slice(3,6);

var monthNameString = monthNames.toString();

var favoriteColor = colors.indexOf('Red');

var favoriteEvenNumber = mixedNums.indexOf(76);

var lastNine = bulkNumbers.lastIndexOf(9);

var lastFive = bulkNumbers.lastIndexOf(5,9);

















