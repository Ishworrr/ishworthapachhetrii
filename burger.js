
class Burger {
    #isMeatless = false;
    #isCooked = false;
    toppings = [];
  
    constructor(_isMeatless = false, ...toppings) {
      this.#isMeatless = _isMeatless;
      this.toppings = toppings;
    }
  
    get toppings() {
      return [...toppings];
    }
  
    isVeggie() {
      return this.#isMeatless;
    }
  
    static cookBurger(burger) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          burger.#isCooked = true;
          console.log('burger is cooked');
          resolve();
        }, 2000);
      });
    }
  }
  
  export default Burger;
  
  //Example usage of the class.
  let b = new Burger(false, 'cheese', 'lettuce', 'tomato', 'onion');
  console.log(b.toppings);
  console.log(b.isVeggie());
  Burger.cookBurger(b);