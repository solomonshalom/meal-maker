const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
  
    },
    set appetizers(appetizers) {
  
    },
    get mains() {
  
    },
    set mains(mains) {
      
    },
    get desserts() {
  
    },
    set desserts(desserts) {
      
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice,
        };
        this._courses[courseName].push(dish);
      },
      
      getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the price is $${totalPrice}.`;}
  
};
//appetizers
menu.addDishToCourse('appetizers', 'Caesar Salad', 14.25);
menu.addDishToCourse('appetizers', 'French Onion Soup', 12.25);
menu.addDishToCourse('appetizers', 'Shrimp Cocktail', 20.25);
//mains
menu.addDishToCourse('mains', 'Wagyu Steak', 80.50);
menu.addDishToCourse('mains', 'Swordfish', 50.25);
menu.addDishToCourse('mains', 'Parmesan Chicken', 40.25);
//desserts
menu.addDishToCourse('desserts', 'Creme Brulle', 20.25);
menu.addDishToCourse('desserts', 'Ice Cream', 14.25);
menu.addDishToCourse('desserts', 'Chocolate Cake', 24.25);
  
const meal = menu.generateRandomMeal();
console.log(meal);
