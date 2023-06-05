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
            arrayOfTodos = todos; // Store todos in the arrayOfTodos variable
            console.log(JSON.stringify(arrayOfTodos))
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';
            arrayOfTodos.forEach(todo => {
                const li = document.createElement('li');
                // li.textContent = todo.title;

                const statusElement = document.createElement('span');
                statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
                statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

                const todoTextElement = document.createElement('span');
                todoTextElement.textContent = todo.title;

                li.appendChild(statusElement);
                li.appendChild(todoTextElement);
                todoList.appendChild(li);
            });


        });
}

const getUserID = () => {
    const userIdInput = document.getElementById('user-id-input');
    return parseInt(userIdInput.value);
}

let filteredTodos = [];
// filteredTodos = todos.filter(todo => todo.userId === getUserID());

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
    const completedBtn = document.getElementById('completed-todos-btn');
    const notCompletedBtn = document.getElementById('not-completed-todos-btn');
    completedBtn.style.display = filteredTodos.length > 0 ? 'inline' : 'none';
    notCompletedBtn.style.display = filteredTodos.length > 0 ? 'inline' : 'none';
}


const showCompletedTodos = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    const completedTodos = filteredTodos.filter(todo => todo.completed);
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
    const notCompletedTodos = filteredTodos.filter(todo => !todo.completed);
    notCompletedTodos.forEach(todo => {
        const li = document.createElement('li');

        const statusElement = document.createElement('span');
        statusElement.classList.add(todo.completed ? 'checkmark' : 'x-mark');
        statusElement.textContent = todo.completed ? '\u2714' : '\u2716';

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todo.title;

        li.appendChild(statusElement);
        li.appendChild(todoTextElement);

        // li.textContent = todo.title;
        todoList.appendChild(li);
    });
}
