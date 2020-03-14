// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() =>{
//     console.log('Callback func');
// }, 2000);

// console.log(4);
// console.log(5);

// HTTP request to endpoint 

const getTodos = (ressource, callback) => {
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    }
    else if (request.readyState === 4){
        callback('Could not Fetch data', undefined);
    }
});
request.open('GET', ressource);
request.send(); 
};

console.log(1);
console.log(2);
getTodos('todos/luigi.JSON', (err, data) => {
    console.log(data);
    getTodos('todos/mario.JSON', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.JSON', (err, data) => {
            console.log(data);
       });
   });
});
console.log(3);
console.log(4);
