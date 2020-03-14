const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const html = `
    <span> ${h} </span>
    <span> ${m} </span>
    <span> ${s} </span>
    `
    clock.innerHTML = html;
};

setInterval(tick, 1000);

const now1 = new Date();

console.log(dateFns.isToday(now1));
// formatting options
console.log(dateFns.format(now1, 'YYYY'));
console.log(dateFns.format(now1, 'MMMM'));
console.log(dateFns.format(now1, 'dd'));
console.log(dateFns.format(now1, 'dddd Do MMMM YYYY'));

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now1, before, {addSuffix: true}));