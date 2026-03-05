
class Product{
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
    displayproduct(){
        console.log (`Product Name: ${this.name} , Price: ${this.price}`);
    }
    total(salestax){
        return this.price + (this.price * salestax/100);
    }

}
const salestax = 5;
const product1 = new Product ("Laptop", 50000);
product1.displayproduct();
console.log (`Total price after tax: ${product1.total(salestax)}`);