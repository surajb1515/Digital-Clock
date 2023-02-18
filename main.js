// const dayname = document.querySelector('')

function updateClock() {
    const dayName = new Date().getDay()
    const monthName = new Date().getMonth()
    const dateNum = new Date().getDate()
    const yearNum = new Date().getFullYear()
    var hr = new Date().getHours()
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    var ampm = "AM"

    if (hr == 0) hr = 12
    if (hr > 12) {
        hr = hr - 12
        ampm = "PM"
    }


    // Number.prototype.pad = function(digits){
    //     for(var n = this.toString(); n.length < digits; n = 0 + n);
    //     return n;
    // }


    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // const idsArry = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]

    let values = [week[dayName], month[monthName], dateNum, yearNum, hr, min, sec, ampm]

    
    document.getElementById('dayname').innerText = values[0]
    document.getElementById('month').innerText = values[1]
    document.getElementById('daynum').innerText = values[2]
    document.getElementById('year').innerText = values[3]
    document.getElementById('hour').innerText = values[4] < 10 ? '0' + values[4] : values[4]
    document.getElementById('minutes').innerText = values[5] < 10 ? '0' + values[5] : values[5]
    document.getElementById('seconds').innerText = values[6] < 10 ? '0' + values[6] : values[6]
    document.getElementById('period').innerText = values[7]
}



window.addEventListener('DOMContentLoaded', (e) => {
    setInterval(() => {
        updateClock()
    }, 1000);
});