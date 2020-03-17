localStorage.setItem('name','mario');

let name = localStorage.getItem('name');

//localStorage.removeItem('name');
localStorage.clear();

const todos = [
    {text: 'play mario', author: "mario"},
    {text: 'play luigi', author: 'luigi'}
];

//console.log(JSON.stringify(todos));
localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
localStorage.clear();