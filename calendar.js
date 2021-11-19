//gets the date
const date = new Date();
var rightNow = date.toISOString().slice(0,10).replace(/-/g,"")

const renderCalendar = () => {
    date.setDate(1);
//targets days class
    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;
//create array of months
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    //h1 tage in date class...date.getMonth will get index # in array months instead of hard coding an index#
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    //targets p tag in date class...newDate().todat string will format it "Wednesdday Nov 17th 2021"
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() && //sets i to whatever today # is. nov 17th, i=17
            date.getMonth() === new Date().getMonth() //and
        ) {
            days += `<div class="today click" date="${rightNow}">${i}</div>`; //if i equals toays date put in DIV TODAY
        } else {
            days += `<div class="click" date="${i}">${i}</div>`;//else put i in days. 
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

    var allclicks = document.querySelectorAll(".click")
    for (const click of allclicks) {
        click.addEventListener("click", function(){
            data(this)
        })
    }

};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

