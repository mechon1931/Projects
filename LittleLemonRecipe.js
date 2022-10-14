// Given variables
const dishData = [
  {
      name: "Italian pasta",
      price: 9.55
  },
  {
      name: "Rice with veggies",
      price: 8.65
  },
  {
      name: "Chicken with potatoes",
      price: 15.55
  },
  {
      name: "Vegetarian Pizza",
      price: 6.45
  },
]
const tax = 1.20;
// first argument in the call
// Implement getPrices()
function getPrices(taxBoolean) {
    // Iterate over the dishData array. 
  for (var dish of dishData) {
    var finalPrice;
        // when calling an argument and is true multiply tax& dish price to finalprice
        if (taxBoolean == true) {
            finalPrice = tax * dish.price;
        } 
        // when false does nothing, but adds dish.price to variable.
        else if (taxBoolean == false) {
            finalPrice = dish.price;
        } 
        // prints out onto console in no argument is inputted.
        else {
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
    console.log(`Dish: ${dish.name} Price: $${finalPrice}\n`);
  }
}
//second argument in the call
// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  // typeof cheachs the operator and returns a string of what it is. guests is always a number
  var conditions = typeof (guests) == 'number' && guests > 0 && guests < 30;
   // guests returns a number to conditions another if statement is added.
    if (conditions == true) {
        var discount = 0;
        // guests less than 5 discount is 5%
        if (guests < 5) {
            discount = 5; 
        } 
        // if guest is more than 5 discount is 10%
        else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}\n`);
    }
    // if second argument is greater than 30
    else {
        console.log("The second argument must be a number between 0 and 30\n"); 
    }
    
    }
    



getDiscount(true,31)
