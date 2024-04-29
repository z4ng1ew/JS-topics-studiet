
getInfo('https://jsonplaceholder.typicode.com/todos/3')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
