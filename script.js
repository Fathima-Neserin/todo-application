
function validateLogin(callback) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("login-message");

    if (username === "admin" && password === "12345") {
        messageElement.style.color = "green";
        messageElement.innerHTML = "Login successful!";
        callback();
    } else {
        messageElement.style.color = "red";
        messageElement.innerHTML = "Invalid username or password. Please try again.";
    }
    
    
}
function handleLogin(){
    window.location.href="home.html";
}
function loadTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => displayTodoList(todos))
        .catch(error => console.error('Error fetching todo list:', error));
}

function displayTodoList(todos) {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ''; 

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} >
            <label>${todo.title}</label>
        `;
        todoContainer.appendChild(todoItem);
    });

    const completedTodos = todos.filter(todo => todo.completed).length;

    
    const promise = new Promise((resolve) => {
        if (completedTodos >= 5) {
            setTimeout(() => {
                resolve(completedTodos);
            }, 1000);
        } else {
            resolve(completedTodos);
        }
    });

    promise.then((completedCount) => {
        if (completedCount >= 5) {
            alert(`Congrats. ${completedCount} Tasks have been Successfully Completed`);
        }
    });
}

function logout() {

    alert('Logout clicked. Add your logout logic here.');
}


window.onload = loadTodoList;




