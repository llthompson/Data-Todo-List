// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

// const fetchTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( (response) => response.json())
//     .then( (json) => arrayOfTodos = json)
// }

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos');
}

const logFetchTodos = () => console.log(fetchTodos());

const logTodos = () => {
    fetchTodos()
        .then(res => res.json())
        .then(json => console.log(json))
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    fetchTodos()
        .then(res => res.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';

            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;
                todoList.appendChild(li);
            });
        })
}