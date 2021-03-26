/* INTERACTING */

function toggle(clickTarget, toggleTarget, toggleClass) {
	if (document.querySelector(clickTarget) && document.querySelector(toggleTarget)) {
		let ct = document.querySelector(clickTarget)
		let tt = document.querySelector(toggleTarget)
		let tc = toggleClass.replace('.', '')
		ct.addEventListener('click', () => {
			tt.classList.toggle(tc)
		})
	} else {
		if (!document.querySelector(clickTarget) && !document.querySelector(toggleTarget)) {
			console.error(`Unable to find ${clickTarget} and ${toggleTarget}, check your code.`)
		} else if (!document.querySelector(clickTarget)) {
			console.error(`Unable to find ${clickTarget}`)
		} else {
			console.error(`Unable to find ${toggleTarget}`)
		}
	}
}

/* Call the function and pass your selectors into it
   for example: 

   toggle('.button', 'body', '.invert')
*/

/*
toggle('.image', 'body', '.show-text')

toggle('.text', '.blob', '.active')

toggle('.blob', '.blob', '.active')
*/





/* Game stuff */

toggle('.door-1', 'body', '.selected-door-1')
toggle('.door-2', 'body', '.selected-door-2')
toggle('.answer-2', 'body', '.show-question-2')



/* Audio */

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

/* Links */

var randomlinks=new Array()

randomlinks[0]="https://en.wikipedia.org/wiki/Forest"
randomlinks[1]="https://fsc.org/en"
randomlinks[2]="https://www.globalforestwatch.org/"
randomlinks[3]="https://ucmp.berkeley.edu/exhibits/biomes/forests.php"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}


