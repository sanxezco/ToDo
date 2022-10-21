// Info Date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Task Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();;
    dateNumber.textContent = date.toLocaleString('pt-BR', {day: 'numeric' });
    dateText.textContent = date.toLocaleString('pt-BR', {weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('pt-BR', {month: 'short' });
    dateYear.textContent = date.toLocaleString('pt-BR', {year: 'numeric' });
}; setDate();

const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText; 
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( item => {
        item.classList.contains('done') ? done.push(item) : toDo.push(item)
    })
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(item => tasksContainer.appendChild(item))
};


