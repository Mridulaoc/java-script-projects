const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

const date = targetDate.getDate();
const month = targetDate.getMonth(); // 0 is January, so we must add 1
const year = targetDate.getFullYear();
const day = targetDate.getDay();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const endDate = `${days[day]}, ${date}  ${months[month]}  ${year} `;
document.querySelector(".endDate").innerHTML = endDate;

const lastDate = `${date}  ${months[month]}  ${year} 11:30:00 AM`;


const clock=() => {
    const endDate = new Date(lastDate);
    const now = new Date();
    const diff = (endDate - now) / 1000;

    if (diff < 0) return;

    document.querySelector(".days").innerHTML = Math.floor(diff / 3600 / 24);
    document.querySelector(".hours").innerHTML = Math.floor(diff / 3600) % 24;
    document.querySelector(".minutes").innerHTML = Math.floor(diff / 60) % 60;
    document.querySelector(".seconds").innerHTML = Math.floor(diff) % 60;

}

clock();

setInterval(function () {
    clock();
},1000)




