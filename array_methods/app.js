const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredNumbers = scores.filter((num) => {
  return num > 20;
});

const fruits = [
  { name: "apple", premium: true },
  { name: "orange", premium: false },
  { name: "banana", premium: true },
  { name: "peach", premium: true },
];

const premiumFruits = fruits.filter((fruit) => {
  return fruit.premium;
});

const prices = [100, 300, 150, 250, 500, 400, 50];
const salePrices = prices.map((price) => {
  return price / 2.0;
});

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2.0 };
  } else {
    return product;
    // return { name: product.name, price: product.price };
  }
});

const saleProduct = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2.0 };
  } else {
    return { name: product.name, price: product.price };
  }
});

console.log(saleProduct);
console.log(saleProducts);
//filter and map methods are non destructive

const reducedScores = [10, 20, 60, 40, 70, 90, 30];

const numericResult = reducedScores.reduce((acc, current) => {
  if (current > 50) {
    acc++;
  }
  return acc;
}, 0);

console.log(numericResult);

const playerScores = [
  { player: "Metroid", score: 500 },
  { player: "Mario", score: 250 },
  { player: "Ryo", score: 530 },
  { player: "Ryo", score: 510 },
];

const ryoTotal = playerScores.reduce((acc, current) => {
  if (current.player === "Ryo") {
    acc += current.score;
  }
  return acc;
}, 0);

console.log(ryoTotal);

//find returns the first thing that's true

const foundScores = [10, 20, 50, 300, 400, 500];
const firstHighScore = foundScores.find((score) => {
  return score > 50;
});
console.log(firstHighScore);

//sort method is destructive
const names = ["Apples", "Bananas", "Cantolopes", "Dates", "Figs"];
names.sort();
names.sort().reverse(); //reversed alphabetical order

const newNumbers = [100, 200, 500, 1000, 30, 100, 400];

newNumbers.sort(); //only looks at first number
newNumbers.sort((a, b) => a - b);

const renewedProducts = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

// renewedProducts.sort((a, b) => {
//   if (a.price > b.price) {
//     return -1;
//   } else if (a.price < b.price) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

renewedProducts.sort((a, b) => a.price - b.price);

console.log(renewedProducts);
console.log(newNumbers);



//filter returns an array, map works on an array. They can be chained. 
const filteredProducts = renewedProducts.filter(product => product.price > 20)  
const promotions = filteredProducts.map(product => {    
  return `The ${product.name} is $${product.price / 2}`
})