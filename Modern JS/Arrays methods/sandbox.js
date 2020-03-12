const scores = [10, 30, 15, 60, 50, 20];

// Filter an array

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

// Map an array

const items = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const mappedProds = items.filter(prods => prods.price > 30).map(prods => prods.price / 2);

  console.log(mappedProds);