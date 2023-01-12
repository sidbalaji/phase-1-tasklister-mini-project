document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector('#create-task-form')
  taskForm.addEventListener('submit',(event)=>{
    // these are the first 3 deliverables
    event.preventDefault()
    const descriptionFld = document.querySelector('#new-task-description')
    const taskList = document.querySelector("#tasks")
    
    // finding the list where the tasks are output
    const newTask = document.createElement('li')
    newTask.textContent = descriptionFld.value
    
    const priority =document.querySelector('#priority')

    if (priority.value === 'High'){
      newTask.classList.add('red')
    }
    else if (priority.value === 'Med'){
      newTask.classList.add('yellow')
    }
    else if (priority.value === 'Low'){
      newTask.classList.add('green')
    }
    
    console.log(newTask.classList)
    //next deliverable is adding a delete button
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    
    delBtn.addEventListener('click',(event)=>{newTask.remove()})
    
    
    
    newTask.append(delBtn)
    taskList.append(newTask)
    
    
  })
});
