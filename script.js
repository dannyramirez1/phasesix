// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
a = document.getElementById("first-row");
b = document.getElementById("second-row");
c = document.getElementById("third-row");
d = document.getElementById("fourth-row");
var goodSound = document.getElementById('you-win');
var badSound = document.getElementById('wrong-answer');

function nextImage(el){
	if (el.src.match("images/lamp1.png")){
		 el.src = "images/lamp2.png";
	} else if ( el.src.match("images/lamp2.png")){
		 el.src = "images/lamp3.png";
	} else if (el.src.match("images/lamp3.png")){
		 el.src = "images/lamp4.png";
	} else if (el.src.match("images/lamp4.png")){
		 el.src = "images/lamp5.png";
	} else if (el.src.match("images/lamp5.png")){
		 el.src = "images/lamp6.png";
	} else if (el.src.match("images/lamp6.png")){
		 el.src = "images/lamp7.png";
	} else if (el.src.match("images/lamp7.png")){
		 el.src = "images/lamp8.png";
	} else if (el.src.match("images/lamp8.png")){
		 el.src = "images/lamp9.png";
	} else if (el.src.match("images/lamp9.png")){
		 el.src = "images/lamp1.png";
	} else {
		// do nothing
	}
}
function nextImage2(el){
	if (el.src.match("images/up.jpg")){
		 el.src = "images/toystory.jpg";
	} else if ( el.src.match("images/toystory.jpg")){
		 el.src = "images/coco.jpg";
	} else if (el.src.match("images/coco.jpg")){
		 el.src = "images/inside.jpg";
	} else if (el.src.match("images/inside.jpg")){
		 el.src = "images/incredibles.jpg";
	} else if (el.src.match("images/incredibles.jpg")){
		 el.src = "images/brave.jpg";
	} else if (el.src.match("images/brave.jpg")){
		 el.src = "images/nemo.jpg";
	} else if (el.src.match("images/nemo.jpg")){
		 el.src = "images/cars.jpg";
	} else if (el.src.match("images/cars.jpg")){
		 el.src = "images/monster.jpg";
	} else if (el.src.match("images/monster.jpg")){
		 el.src = "images/bugs.jpg";
	} else if (el.src.match("images/bugs.jpg")){
		 el.src = "images/rat.jpg";
	} else if (el.src.match("images/rat.jpg")){
		 el.src = "images/walle.jpg";
	} else if (el.src.match("images/walle.jpg")){
		 el.src = "images/up.jpg";
	} else {
		// do nothing
	}
}
function checkMovie(el){
	if (a.src.match("toystory.jpg") && b.src.match("nemo.jpg") && c.src.match("walle.jpg") && d.src.match("incredibles.jpg")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		goodSound.play();
		el.src = "images/mickey.png";
		
		console.log("YOU WIN!");

	} else{
		badSound.play();
	}
}
