/* PERSONAL HOMEPAGE */

console.log('Welcome to my personal homepage!')

/* OFFSCREEN MENU */

function nav(tgl = 'toggle', cls = 'nav-active') {
	if (document.querySelector(`.${tgl}`)) {
		document.querySelector(`.${tgl}`).addEventListener('click',
			() => { document.body.classList.toggle(cls) }
		)
	}
}
nav()


