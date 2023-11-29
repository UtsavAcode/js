// the firs thing to do is to list out all the ui that will take part in the event 

const form = document.querySelector('#task-form');
const input = document.querySelector('#entry');
const taskList = document.querySelector('.collection');
const clear = document.querySelector('#clear');


//loading the eventListeners

loadEventListener();

//creating the events 

function loadEventListener(){
    form.addEventListener('submit', addTask);
}

function addTask(e){

    if(input === ''){
        alert("Add a task");
    }

    //createt a td element to display the added task 

    const td = document.createElement('td');

    //give the element a className
    td.className = "collection-item";

    //create a text node and append to td 
    text_node = document.createTextNode(input.value);
    td.appendChild(text_node);

    //create a new link element 
    const link = document.createElement('a');

    //add class to the element 
    link.className='clear';

    //if you want to add a new html element
    link.innerHTML = "<i class='clear bi bi-x-lg'></i>";

    // append the created element to td 
    td.appendChild(link);

    //append td to tr 

    taskList.appendChild(td);

 
    //clear the input field 

    input.value = '';


    e.preventDefault();
}