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

search.addEventListener('keyup', e => {
    let li = document.querySelectorAll('LI');
    li.forEach(item => {
        if (item.textContent.search(e.target.value) == -1)
        {
            item.classList.remove('d-flex');
            item.classList.add('d-none');
        }
        else
        {
            item.classList.remove('d-none');
            item.classList.add('d-flex');
        }
    })
});