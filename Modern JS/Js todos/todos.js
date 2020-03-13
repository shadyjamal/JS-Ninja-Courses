const search = document.querySelector('.search');
const addform = document.querySelector('.add');
const ul = document.querySelector('ul');
const dlt = document.querySelector('.delete');

//Add Todos

addform.addEventListener('submit', e => {
    e.preventDefault();
    if (addform.add.value)
    {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"> 
                            <span>${addform.add.value.trim()}</span> 
                            <i class="far fa-trash-alt delete"></i> 
                        </li>`;
        addform.reset();
    }
    
})

//Delete Todos

ul.addEventListener('click', e => {
    if (e.toElement.classList.value.search('delete') != -1)
        e.target.parentNode.remove();
})

//Search Todos