myTopnav.onclick=function burgerClick(){
	
	var x=document.getElementById('myTopnav')

	if(x.className==='header__topnav'){
		x.className+=' header__topnav-responsive'
	}
	else{x.className='header__topnav'}
}
