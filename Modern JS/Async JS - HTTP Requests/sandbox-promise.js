// HTTP request to endpoint 

const getTodos = (ressource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject('Could not Fetch data');
            }
        });
        request.open('GET', ressource);
        request.send();
    })
};

getTodos('todos/luigi.JSON').then(data => {
    console.log('promise1 is resolved', data);
    return getTodos('todos/mario.JSON');
}).then(data => {
    console.log('promise2 is resolved', data);
    return getTodos('todos/shaun.JSON');
}).then(data =>{
    console.log('promise3 is resolved', data);
}).catch(err => {
    console.log(err);
})

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //resolve('some data');
//         reject('some error');
//     });
// };

// // getSomething().then(data => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // });
// getSomething().then(data => {
//     console.log('promise is resolved: '. data);
// }).catch(err => {
//     console.log('promise is rejected: ', err);
// });