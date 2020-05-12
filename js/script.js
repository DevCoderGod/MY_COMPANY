onclick=function(event){
	if(event.target===burger){
		document.getElementById('nav').classList.toggle("header__nav--responsive")
		document.body.classList.toggle("lock");
}
	else{
		document.getElementById('nav').classList.remove("header__nav--responsive")
		document.body.classList.remove("lock");
		let link=document.getElementById(event.target.innerHTML);
		if(link!=null){
			link.scrollIntoView(true);
			//далее ниндзя код :-)
			window.scrollBy(0,(-parseInt(this.getComputedStyle(document.getElementsByClassName("header")[0]).height,10))+2)
			//
			//let a=document.getElementsByClassName("header");
			//let z=getComputedStyle(a[0]).height;
			//let q=parseInt(z,10);
			//let s=window.scrollBy(0,-q+2);
		}
	}
}