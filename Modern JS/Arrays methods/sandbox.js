// Filter an array / object
const scores = [10, 30, 15, 60, 50, 20, 90, 70];
const array = scores.filter((score) => {
    return score > 20;
});

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

const filteredUser = users.filter(user => {
    return user.premium == true;
});

console.log(filteredUser);

// Map an array / object

const items = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const mappedProds = items.filter(prods => prods.price > 30).map(prods => prods.price / 2);

  console.log(mappedProds);

  // Reduce an array / Object

  const result = scores.reduce((acc, curr) => {
    curr > 50 ? acc++ : 0;
    return acc;
  }, 0);

  console.log(result);

  const gamescores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];

  let gameresult = gamescores.reduce((acc, curr)=>{
    if (curr.player === 'mario')
        acc += curr.score;
    return acc;
  }, 0);
  
  console.log(gameresult);
  
  // Find in an array

  const firstHighscore = scores.find(score => score > 50);
  console.log(firstHighscore);

  // Sort an array

  const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

  names.sort();
  console.log(names);

  scores.sort();

  const items_to_sort = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  items_to_sort.sort((a, b) => b.price - a.price);
  console.log(items_to_sort);
  console.log(document);