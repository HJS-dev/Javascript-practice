// Define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
laodEventListeners()

function laodEventListeners() {
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)
    // add task event 
    form.addEventListener('submit', addTask)
    // Remove task event 
    taskList.addEventListener('click', removeTask)
    // Clear Task event
    clearBtn.addEventListener('click', clearTasks)
    // Filter Tasks event
    filter.addEventListener('keyup', filterTasks)
}
// Get tasks from las 
function getTasks() {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task) {
        // Creat li element
        const li = document.createElement('li')
        // Add class name 
        li.className = 'collection-item'
        // Create text node and append to li 
        li.appendChild(document.createTextNode(task))
        // Create new link element 
        const link = document.createElement('a')
        // Add class anme
        link.className = 'delete-item secondary-content'
        // Add icon html 
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append the link to li 
        li.appendChild(link)
        // Append li to ul 
        taskList.appendChild(li)
    })
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }
    // Creat li element
    const li = document.createElement('li')
    // Add class name 
    li.className = 'collection-item'
    // Create text node and append to li 
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element 
    const link = document.createElement('a')
    // Add class anme
    link.className = 'delete-item secondary-content'
    // Add icon html 
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link to li 
    li.appendChild(link)
    // Append li to ul 
    taskList.appendChild(li)
    // Store in LS
    storeTaskInLocalStoreage(taskInput.value)

    // Cleare input 
    taskInput.value = ''

    console.log(li)

    e.preventDefault()
}

function storeTaskInLocalStoreage(task) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {

            e.target.parentElement.parentElement.remove()
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)

        }
    }
}
function removeTaskFromLocalStorage(taskItem) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem(index, 1)

}

function clearTasks() {
    // taskList.innerHTML = ''

    // Fasster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

function filterTasks(e) {

    const text = e.target.value.toLowerCase()

    document.querySelectorAll('.collection-item').forEach

        (function (task) {
            console.log(task)
            const item = task.firstChild.textContent

            if (item.toLowerCase().indexOf(text) != -1) { task.style.display = 'block' }

            else { task.style.display = 'none' }
        }
        )
}


