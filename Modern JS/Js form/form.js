const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const pattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener('submit', e => {
    e.preventDefault();
    let result = pattern.test(form.username.value);
    if (result)
    {
        feedback.style.color = 'green';
        feedback.textContent = "Username is valid";
    }
    else
    {
        feedback.style.color = 'red';
        feedback.textContent = "Wrong Username";
    }
});

form.username.addEventListener('keyup', e => {
    if (pattern.test(e.target.value))
        form.username.setAttribute('class', 'success');
    else
        form.username.setAttribute('class', 'failure');
});