const todoList = [{
    name: 'make diner',
    dueDate:'12-27-2023'
 }, {
    name: 'wash dishes',
    dueDate: '12-27-2023'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';


    todoList.forEach(function(todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
          <div>${name}</div>
          <div>${dueDate}</div> 
          <button onclick="
             todoList.splice(${index}, 1);
             renderTodoList();
           " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
        });
        
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    }

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}