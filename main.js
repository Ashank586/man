canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

key_type_x = 100;
key_type_y = 100;

key_type_width = 300
key_type_height = 100;

var key_pressed_image;

function add() {
	pressed_key_image= new Image(); 
	pressed_key_image.onload = uploading_key_type_image; 
	pressed_key_image.src = key_pressed_image;   
}

function uploading_key_type_image() {
    ctx.drawImage(pressed_key_image, key_type_x, key_type_y, key_type_width, key_type_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
var ASCII_code=e.keyCode;
console.log(ASCII_code);
    if((ASCII_code>=97 && ASCII_code<=122)||(ASCII_code>=65 && ASCII_code<=90)){
        aplhabetkey()
		console.log("The key you have pressed is a alphabet.")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed a alphabet key."
		}
	if(ASCII_code>=48 && ASCII_code<=57){
		numberkey()
		console.log("The key you have pressed is a number.")
		document.getElementById("type_of_key_displayer").innerHTML="You have pressed a number key."
		}
}

function aplhabetkey(){
key_pressed_image="Alphabet key.png"
add();
}
function numberkey(){
key_pressed_image="Number key.png"
add();
}
function arrowkey(){
key_pressed_image="Arrow key.png"
add();
}
function specialkey(){
key_pressed_image="Special key.png"
add();
}
function otherkey(){
key_pressed_image="Other key.png";
add();
}
	
