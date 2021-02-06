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
    // Remove task event 
    taskList.addEventListener('click', removeTask)
    // Clear Task event
    clearBtn.addEventListener('click', clearTasks)
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
    // Cleare input 
    taskInput.value = ''

console.log(li)

    e.preventDefault()
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            
            e.target.parentElement.parentElement.remove()
        }
       
    }
    

}


function clearTasks() {
    // taskList.innerHTML = ''

    // Fasster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}