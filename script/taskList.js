// Define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
laodEventListeners()

function laodEventListeners() {
    // add task event 
    form.addEventListener('submit', addTask)
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }
    // Creat li element
    const li = document.createElement('li')
    // Add class name 
    li.className = 'collection-item'

    e.preventDefault()
}
