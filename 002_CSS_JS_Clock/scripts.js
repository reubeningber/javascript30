const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(secondsHand, minsHands, hoursHand) {
	const now = new Date();
	
	//Set Seconds
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90; 
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	//Set Minutes
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	//Set Hours
	const hours = now.getHours();
	const hoursDegrees = ((hours / 60) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
};

setInterval(setDate(secondsHand, minsHand, hoursHand), 1000);

