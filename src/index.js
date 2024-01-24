
import {hello , add, User,Item} from "./util";
import "./style.css";
import "./header.css";
import logo from "./images/lineageM.jpg";

const text = hello("<h1>나는 좀비다</h1>");
const num = add(1,3);
const img = `<img src="${logo}" alt="logo" />`;

let user1 = new User('test',30);
let user2 = new User('test2',40);
let user3 = new User('test3',50);

user1.sayName();
user2.sayName();
user3.sayName();


const item1 = new Item('핸드폰',1000);
const item2 = new Item('사전',2000);
const item3 = new Item('가방',3000);

console.log(item1,item2,item3);
item1.showPrice();
const item4 = Object.assign({},item1);

console.log(Object.keys(item4));
console.log(Object.values(item4));
console.log(Object.entries(item4));



console.log(item4);
item4.showPrice();


document.getElementById("root").innerHTML = img+text;
