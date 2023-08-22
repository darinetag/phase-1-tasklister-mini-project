document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById('create-task-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      addTaskToList();
    });
    function addTaskToList() {
      const inputField = document.getElementById('new-task-description');
      const taskDescription = inputField.value;
    
      if (taskDescription.trim() === '') {
        return; 
      }
    
      const taskList = document.getElementById('tasks');
      const newItem = document.createElement('li');
      newItem.textContent = taskDescription;
      taskList.appendChild(newItem);
    
      inputField.value = '';
    }
    
  });
  
 

