//variables for timer
let year = 2021;
const month = 12;
const day = 31;

const dd = new Date();
const yy = dd.getFullYear();

while(year<yy){
  year +=1;
}

document.querySelector("#year").innerHTML = year;//update year

const deadline = year + "-" + month + "-" + day;

function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)), 
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60 % 60)),
            seconds = Math.floor((t / 1000) % 60); 

            return {
                'total': t,
                'days': days,
                'hours':hours,
                'minutes': minutes,
                'seconds': seconds
            };
  
}

function setClock(selector, endtime) {
    const   timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds; 

            if (t.total <= 0) {
              clearInterval(timeInterval);
                
            }
        }
    }

    setClock('.timer', deadline);

