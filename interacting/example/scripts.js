/* FAKE STUDIO */

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

toggle('.info-title', '.info', '.active')
toggle('.work-title', '.work', '.active')