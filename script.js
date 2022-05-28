const currentDayDisplay = document.getElementById("current-day");
currentDayDisplay.innerText = moment().format('dddd Do MMMM YYYY');

const momentTester = document.getElementById('moment-test-element');

const liveTime = setInterval(function() {
    const currentSecond = moment().format('HH:mm:ss');
    const currentHour = parseInt(moment().format('HH'));
    momentTester.innerText = `${currentSecond}`;

    if (currentHour < 9) {
        document.getElementById('prehours').style.backgroundColor = "Blue";
    } else if (currentHour > 17) {
        document.getElementById('after-hours').style.backgroundColor = "Blue";
    } else if (currentHour >= 9 && currentHour <= 17) {
        console.log(currentHour);
        document.getElementById(`hour${currentHour}`).style.backgroundColor = "Green";
    } 
}, 1000);

/*
// while (moment().format('HH') <= 9)
*/
function checkHour() {
    if (moment().format('HH') >= 15) {
        document.getElementById('hour15').style.backgroundColor = "Green";
    }
}


checkHour();
console.log(parseInt(moment().format('HH')) + 6)