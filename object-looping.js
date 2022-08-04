//*********** Array vs Object ***8*****//
//array
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 34, 45, 23, 29, 23];
// object
var friendsAge = {
    rahim: 12,
    karim: 34,
    samad: 45,
    abol: 23,
    bokor: 29,
    robi: 23
}

var shoppingCart = {
    books: 7,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 25,
    shoes: 2,
}
const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}