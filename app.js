
const playPauseVideoBg = document.querySelector('.play-pause-video__wrapper');
const video = document.querySelector('video');
const section2 = document.querySelector('.find-your-bmw__wrapper');
const redCar = document.querySelectorAll('.red-bmw');
// const  notificationBtn = document.querySelector('.button');
// const  notificationBox = document.querySelector('.notification__container');


const scrollImageWrapper = document.querySelectorAll('.scroll-image-wrapper');


// --- notification button ---

 playPauseVideoBg.addEventListener('click', playPauseMe)

 function playPauseMe() {
 	if(video) {
//  		notificationBtn.addEventListener('click', e=> {
// 		notificationBox.style.opacity = '1';
// })
 		video.pause();
 	}
 }



 // --- rotating the car ---



window.addEventListener('scroll', e=> {
	let scroller = window.pageYOffset;
	// let speed = element.dataset.speed;

	// console.log(scroll);
		
	
	redCar.forEach(element => {
		let speed = element.dataset.speed;
		element.style.transform = `translate(${scroller * speed}px)`;
	})

	
	scrollImageWrapper.forEach(imageWrapper => {
		let speed = imageWrapper.dataset.speed;
		imageWrapper.style.transform = `translate(${scroller * speed}px)`
	})

})


 // --- type-writer effect --- 

 const textDisplay = document.getElementById("text");

const phrases = ['Save fuel.', 'Save time.', 'Save money.', 'With BMW.'];

let isDeleting = false;
let i= 0;
let j = 0;
let currentPhrase = []
let isEnd = false;


loop()

function loop() {
let isEnd = false;

	textDisplay.innerHTML = currentPhrase.join('');


	if(i < phrases.length) {
	
		if (!isDeleting && j <= phrases[i].length) {
			currentPhrase.push(phrases[i][j])
			j++;
		}


	if(isDeleting && j <= phrases[i].length) {
		currentPhrase.pop(phrases[i][j])

			j--;
	}


	

		if(j == phrases[i].length) {
			isEnd = true;
		isDeleting = true;

	}

	if(isDeleting && j === 0) {
		currentPhrase = []

		isDeleting = false;
		i++

		if(i == phrases.length) {
			i = 0;
		}
	}



}
	const spedUp = Math.random() * (80-50) + 50;

	const normalSpeed = Math.random() * (300-200) + 200;

	const time = isEnd? 2000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(loop, time);

}



// --- the burger menu ---

// .slice-top {
// 	transform: rotate(45deg) translate(12px, 10px);
// }

// .slice-btm {
// 	transform: rotate(-45deg) translate(8px, -15px);
// }

const burgerGroup = document.querySelector('.burger-group');
let openMenu = document.querySelector('.open-menu-btn');
let closeMenu = document.querySelector('.close-menu-btn');
let sideWrapper = document.querySelector('.side-wrapper');

openMenu.addEventListener('click', e=> {
	sideWrapper.style.display = 'flex';
	openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', e=> {
	sideWrapper.style.display = 'none';
	openMenu.style.display = 'block';
})