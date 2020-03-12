const form = document.querySelector('.quiz-form ');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

console.log(result);
form.addEventListener('submit', e => {
    e.preventDefault();
    let res = 0;  
    if (e.target.elements.q1[0].checked)
        res += 25;
    if (e.target.elements.q2[1].checked)
        res += 25;
    if (e.target.elements.q3[1].checked)
        res += 25;
    if (e.target.elements.q4[0].checked)
        res += 25;
    scrollTo(0,0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        score.textContent = `${output}%`;
        if (output === res)
            clearInterval(timer);
        else
            output++;
    }, 10);
    
    
});

