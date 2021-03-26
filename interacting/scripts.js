/* INTERACTING */

function toggle(clickTarget, toggleTarget, toggleClass) {
	if (document.querySelector(clickTarget) && document.querySelector(toggleTarget)) {
		let ct = document.querySelector(clickTarget)
		let tt = document.querySelector(toggleTarget)
		let tc = toggleClass.replace('.', '')
		ct.addEventListener('click', () => {
			tt.classList.toggle(tc)
		})
	}
}

/* Call the function and pass your selectors into it
   for example: 

   toggle('.button', 'body', '.invert')
*/

