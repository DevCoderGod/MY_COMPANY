menu.onclick=function burgerClick(){
	var x=document.getElementById('topnav')
	x.classList.toggle("header__topnav-responsive")
	document.body.classList.toggle("lock")
}
 topnav.onclick=function navClick(){
	var x=document.getElementById('topnav')
	x.classList.toggle("header__topnav-responsive")
	document.body.classList.toggle("lock")
 }

// 	if(x.className==='header__topnav'){
// 		x.className+=' header__topnav-responsive'
// 	}
// 	else{x.className='header__topnav'}
// }
// topnav.onclick=function navClick(){
// 	var x=document.getElementById('topnav')

// 	if(x.className==='header__topnav header__topnav-responsive'){
// 		x.className='header__topnav'
// 	}
// }