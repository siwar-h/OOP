class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

class ShoppingCartItem extends Product {
    constructor(id, name, price, quantity) {
      super(id, name, price)
      this.quantity = quantity;
    }
totalPrice(){
      return this.price * this.quantity
    }
  
  }  

class ShoppingCart{
    constructor(){
      this.items = []

    }
totalItems() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
  }


addItem() {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        this.items.push(new ShoppingCartItem)
    }
}


removeItem() {
    this.items = this.items.filter(item => item.product.id !== productId);
}
TotalItems() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
}

displayCartItems() {
    if (this.items.length === 0) {
        return "Your cart is empty"
    }
    else{

    this.items.forEach(item => {
        return (`${item.product.name} , Quantity: ${item.quantity} ,  Price: ${item.price}`);
    })}
}


TotalCartPrice() {
    return this.items.reduce((total, item) => total + item.totalPrice(), 0);
}
}



const product1 = new Product(1, 'Pizza', 15);
const product2 = new Product(2, 'Crêpe', 10);
const product3 = new Product(3, 'Salad', 8);

const cart = new ShoppingCart();

cart.addItem(product1, 2); 
cart.addItem(product2, 3); 
cart.addItem(product1, 1); 


cart.displayCart();


cart.removeItem(2); 


cart.displayCart();


cart.TotalItems();
