/****************************************************************************************************
*** File Name:      meal_maker.js
*** Description:    JavaScript to randomize a full meal from menu 
*** Author:         Trevor Carson
*** Date:           2021-08-31
*****************************************************************************************************/

/// Main object for menu
const menu = {
    _courses: {             // Contains mapping for each course and dishes available to order in that course
        appetizers: [],     // Appetizers innitialized to an empty array
        mains: [],          // Main courses innitialized to an empty array
        desserts: []        // Desserts innitialized to an empty array
    },
    get appetizers() { return this._courses.appetizers },                       // Getter method for appetizers array
    get mains() { return this._courses.mains },                                 // Getter method for mains array
    get desserts() { return this._courses.desserts },                           // Getter method for desserts array
    set appetizers(appetizersIn) { this._courses.appetizers = appetizersIn },   // Setter method for appetizers array
    set mains(mainsIn) { this._courses.mains = mainsIn },                       // Setter method for mains array
    set desserts(desertsIn) { this._courses.desserts = desertsIn },             // Setter method for desserts array
    // Getter method for courses property
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };                                                                  // Returns key/value pairs for the _courses property
    },
    // Method to add new dish to specified course
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {                                                      // Variable to hold the dishName and dishPrice that were passed in as parameters
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);                        // Returns/pushes the dish to _courses based on what courseName was passed in
    },
    // Method to get a random dish from specified course
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];                           // Variable to store the array of dishNames based on courseName
        const randomDish = Math.floor(Math.random() * dishes.length);       // Variable generate a random index from the course array
        return dishes[randomDish];                                          // Returns the dish located at the index in dishes
    },
    // Method to generate a three course meal from the menu                                                                    
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");       // Variable to store a random appetizer from the array
        const main = this.getRandomDishFromCourse("mains");                 // Variable to store a random main from the array
        const dessert = this.getRandomDishFromCourse("desserts");           // Variable to store a random dessert from the array
        const totalPrice = appetizer.price + main.price + dessert.price;    // Variable to hold the total cost of the randomized meal
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`;  // Returns a three course meal with total price
    }
};

/// Test data for menu object
menu.addDishToCourse("appetizers", "Jack's Cheese Garlic Pan Bread", 9.99);
menu.addDishToCourse("appetizers", "Lobster & Crab Dip", 16.97);
menu.addDishToCourse("appetizers", "Fresh Guacamole", 9.99);
menu.addDishToCourse("mains", "Thai Coconut Curry Chicken", 21.47);
menu.addDishToCourse("mains", "Chicken Parmigiana", 21.49);
menu.addDishToCourse("mains", "Mexican Chicken Bowl", 19.43);
menu.addDishToCourse("desserts", "My Cookie Ate Your Brownie", 6.52);
menu.addDishToCourse("desserts", "The Ultimate Chocolate Cake", 10.98);
menu.addDishToCourse("desserts", "World's Most Ridiculously Small Brownie", 3.99);

let meal = menu.generateRandomMeal();
console.log(meal);
