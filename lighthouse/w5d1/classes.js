
//class Pizza

class Pizza {
  constructor(size, crust, time) {
    this.size = size;
    this.crust = crust;
    this.time = time;
    this.toppings = ["cheese"];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
  set Size(size) {
       if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }else{
      return `type a real size`;
    }
  }
  // get size() {
  //   return this.size;
  // }
    get Price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}
let pizza = new Pizza();
pizza.addTopping('more 1');
pizza.price;
pizza.Size = 'm';

console.log(pizza.size, pizza.Price);
// Creating a new Object from a class 
// let pizza1 = new Pizza(); // Is an Instance of the Pizza class
// Even though pizza1 and pizza2 are both instances of the Pizza class,
// They are different form each other

// const pizza1 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// };
// const pizza2 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// };

// let pizza2 = new Pizza(); // Is  an instance of the Pizza class
// Even though pizza1 and pizza2 are both instances of the Pizza class,
// They are different form each other

// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings, pizza1.toppings);



// console.log(pizza1 === pizza2); // false! 
// Pizza.addTopping();
