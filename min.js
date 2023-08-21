// let date = new Date();

// let day = date.getDay();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// let currentDate = `${day}-${month}-${year}`

let currentDate = new Date().toJSON().slice(0, 10);

document.getElementById("date").innerHTML = currentDate;