const add = (num1,num2) => {
    return num1 + num2;
};

function hello(name) {
    return name;
}

function User(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}

function Item(title,price) {
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${this.price} 원 입니다.`);
    
    }

}




export {add,hello,User,Item};