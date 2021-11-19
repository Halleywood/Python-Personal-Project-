console.log("connected")
const rangedate = new Date();
const range = rangedate.toISOString().slice(0, 10).replace(/-/g, "")


Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
var variable = new Date()
rangeplusdays = variable.addDays(30)

const endrange = rangeplusdays.toISOString().slice(0, 10).replace(/-/g, "")


// handles mailing list form//
var work = document.getElementById('WORK')
work.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("form submitted");

    var formData = new FormData(work);

    fetch('add_user', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['status'] === 400) {
                warning = document.querySelector('#emails')
                warning.innerText = `ENTER A VALID NAME AND EMAIL`
            }
        })
})




//fetch data from API 
async function data_from_api() {
    const response = await fetch(`searchcategory/${range}/${endrange}`)
    const data = await response.json()
    console.log(data)
    console.log("this is from the data_from_api_function")
}
let output2 = document.querySelector('.displaydata2')
let output = document.querySelector('.displaydata')
let displayheader = document.getElementById('displayheader')


silverbtn = document.getElementById('silver-btn')
silverbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Silver</u> Futures in The Next 30 Days"
    console.log("silver")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Econ') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})

//displays specific button data from API/
goldbtn = document.getElementById('gold-btn')
goldbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Gold</u> Futures In The Next 30 Days"
    console.log("gold")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Econ') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})
copperbtn = document.getElementById('copper-btn')
copperbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Copper</u> Futures In The Next 30 Days"
    console.log("copper")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displaydata.innerText = data
        })
})

crudebtn = document.getElementById('crude-btn')
crudebtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Crude Oil</u> Futures In The Next 30 Days"
    console.log("crude")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var count = Object.keys(data.results).length
            console.log(count)
            let variable = "econ"
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Energy') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})

cottonbtn = document.getElementById('cotton-btn')
cottonbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Cotton</u> Futures In The Next 30 Days"
    console.log("cotton")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            output.innerHTML ="No Pending Reports in the Next 30 Days"
        })
})

cornbtn = document.getElementById('corn-btn')
cornbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Corn</u> Futures In The Next 30 Days"
    console.log("corn")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Ag') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})
soybeanbtn = document.getElementById('soybean-btn')
soybeanbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Soybean</u> Futures  In The Next 30 Days"
    console.log("soybeans")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Ag') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})
mealbtn = document.getElementById('meal-btn')
mealbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Soybean Meal</u> Futures In The Next 30 Days"
    console.log("soybean meal")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Ag') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})

wheatbtn = document.getElementById('wheat-btn')
wheatbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Wheat</u> Futures In The Next 30 Days"
    console.log("wheat")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Ag') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})
oatsbtn = document.getElementById('oats-btn')
oatsbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Oat</u> Futures In The Next 30 Days"
    console.log("oats")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            var count = Object.keys(data.results).length
            console.log(count)
            for (var i = 0; i < count; i++) {
                if (data.results[i].category === 'Ag') {
                    output.innerHTML += `<li id="events">${data.results[i].event}</li><li id="date">${data.results[i].date}<li>`
                }
            }
        })
})

hogsbtn = document.getElementById('hogs-btn')
hogsbtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Hog</u> Futures In The Next 30 Days"
    console.log("hogs")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            output.innerHTML ="No Pending Reports in the Next 30 Days"
        })
})
cattlebtn = document.getElementById('cattle-btn')
cattlebtn.addEventListener("click", function () {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerHTML = "Upcoming Reports Affecting <u>Cattle</u> Futures In The Next 30 Days"
    console.log("cattle")
    fetch(`searchcategory/${range}/${endrange}`)
        .then(response => response.json())
        .then(data => {
            output.innerHTML ="No Pending Reports in the Next 30 Days"
        })
})


databydate = document.getElementById('by_date')
async function data(El) {
    displayheader.innerText = ""
    output.innerText = ""
    displayheader.innerText = "All Reports Released Today"
    const range = El.getAttribute("date")
    const response = await fetch(`search/${range}`)
    const data = await response.json()
    var count = Object.keys(data.results).length
    for (let i = 0; i < count; i++) {
        thisDate = new Date()
        newData = data.results[i].date
        newDataString = new Date().toDateString()
        if (thisDate = newDataString) {
            output.innerHTML += `<div class="displaydata">${data.results[i].report}${data.results[i].event}`
            console.log("working")
        }
        else { "not working" }
    }
}

