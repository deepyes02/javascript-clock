const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds()/60;
  setRotation(secondHand, secondsRatio);
  const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
  setRotation(minuteHand, minutesRatio);
  const hoursRatio = (minutesRatio+ currentDate.getHours())/12;
  setRotation(hourHand, hoursRatio);  
}

function setRotation(hands, rotationSpeed){
  hands.style.setProperty('--rotation', rotationSpeed*360);
}
setInterval(setClock, 1000)
setClock();