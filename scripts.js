let arrayOfTodos = [];

const fetchTodos = () => {
    console.log('fetchTodos')
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
            console.log('assigning to array')
            arrayOfTodos = todos;
            console.log(JSON.stringify(arrayOfTodos))
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';

            arrayOfTodos.forEach(todo => {
                const li = document.createElement('li');

                const statusElement = document.createElement('span');
                statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
                statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

                const todoTextElement = document.createElement('span');
                todoTextElement.textContent = todo.title;

                li.appendChild(statusElement);
                li.appendChild(todoTextElement);
                todoList.appendChild(li);
            });
            const completedBtn = document.getElementById('completed-todos-btn');
            const notCompletedBtn = document.getElementById('not-completed-todos-btn');
            document.getElementById('completed-todos-btn').style.display = 'inline';
            document.getElementById('not-completed-todos-btn').style.display = 'inline';
        });


}

const getUserID = () => {
    const userIdInput = document.getElementById('user-id-input');
    return parseInt(userIdInput.value);
}

let filteredTodos = [];

const filterTodos = () => {
    const userID = getUserID()
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    filteredTodos = arrayOfTodos.filter(todo => todo.userId === userID);
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');

        const statusElement = document.createElement('span');
        statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
        statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todo.title;

        li.appendChild(statusElement);
        li.appendChild(todoTextElement);
        todoList.appendChild(li);
    });
}


const showCompletedTodos = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    let completedTodos


    if (filteredTodos > 0) {
        completedTodos = filteredTodos.filter(todo => todo.completed);
    } else {
        completedTodos = arrayOfTodos.filter(todo => todo.completed);
    }

    completedTodos.forEach(todo => {
        const li = document.createElement('li');

        const statusElement = document.createElement('span');
        statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
        statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todo.title;

        li.appendChild(statusElement);
        li.appendChild(todoTextElement);
        todoList.appendChild(li);
    });
}

const showNotCompletedTodos = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    let notCompletedTodos


    if (filteredTodos > 0) {
        notCompletedTodos = filteredTodos.filter(todo => !todo.completed);
    } else {
        notCompletedTodos = arrayOfTodos.filter(todo => !todo.completed);
    }

    notCompletedTodos.forEach(todo => {
        const li = document.createElement('li');

        const statusElement = document.createElement('span');
        statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
        statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todo.title;

        li.appendChild(statusElement);
        li.appendChild(todoTextElement);
        todoList.appendChild(li);
    });
}
