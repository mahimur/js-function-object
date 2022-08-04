var shoppingCart = {
    books: 7,
    sunglass: 1,
    keyboard: 5,
    mouse: 2,
    pen: 25
}

// when you know the specific property name, use dot notation to get the value
var penCount = shoppingCart.pen;

// alternate system when you know the specific property
var penCount2 = shoppingCart['pen'];
console.log(shoppingCart);
console.log(penCount);
console.log(penCount2);

// another method
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// To get property of any object
var properties = Object.keys(shoppingCart);
console.log(properties);

// To know value of the property of any object
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

// set property value
console.log(shoppingCart);
// 1.
shoppingCart.mouse = 15;
console.log(shoppingCart);
// 2.
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
// 3.
shoppingCart[propertyName];
console.log(shoppingCart);