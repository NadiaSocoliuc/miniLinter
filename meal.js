// Create an object, called manu, that contains a property called _courses. 
// _coursers is a object inside the menu object that has 3 properties (Nested objects)
//Inside the _courses object created getter and setter methods for the each properties.
const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
      
      get appetizers() {
        return this._appetizers;
      },
      set appetizers(appetizers) {
        this._appetizers = appetizers;
      },
      get mains() {
        return this._mains;
      },
      set mains(mains) {
        this._mains = mains;
      },
      get desserts() {
        return this._desserts;
      },
      set desserts(desserts) {
        this._desserts = desserts;
      },
    },
    
// Inside the menu object, created a getter method, called get courses(), for the _courses properties
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
  },
    
  // Inside the menu object, created a method called .addDishToCourse(). 
  //The method takes in three parameters: the courseName, the dishName, the dishPrice
  // After, created an object, called dish, which has a name and price which it gets from the parameters.
  // The method 'push' this dish object into the appropriate array in the menu‘s _courses object based on what courseName was passed in.

    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      
      this._courses[courseName].push(dish);
    },
    
// Inside the menu object, created a method called getRandomDishFromCourse() wich takes a parameter - courseName.
// created a variable called dishes 
// Generated a random index (created a variable const randomInde) by multiplying Math.random() by the length of the dishes array 
// Return the dish located at that index in dishes
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
// create a .generateRandomMeal() function which will automatically generate a three-course meal for us.
// created 3 variables for each property which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
// created a variable totalPrice - Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal.

    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is  ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice} Euro.`;
    }       
};

// create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function.
menu.addDishToCourse('appetizers', 'salad', 5.00);
menu.addDishToCourse('appetizers', 'canape', 6.00);
menu.addDishToCourse('appetizers', 'Bruschetta', 3.00);

menu.addDishToCourse('mains', 'Beef Stroganoff', 8.00);
menu.addDishToCourse('mains', 'Lasagna', 6.00);
menu.addDishToCourse('mains', 'Spaghetti Aglio e Olio', 7.00);

menu.addDishToCourse('desserts', 'Peanut Butter Pie', 5.00);
menu.addDishToCourse('desserts', 'Tiramisu', 6.00);
menu.addDishToCourse('desserts', 'Lemon Bars', 4.00);

// created a variable meal to generate a meal by using the .generateRandomMeal() function on the menu.
let meal = menu.generateRandomMeal();

// printed out the meal variable
console.log(meal);









