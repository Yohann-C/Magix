let spriteList = [];
let ctx = null;

let leftArrowOn = false;
let rightArrowOn = false;

window.addEventListener("load", () => {

	ctx = document.getElementById("canvas").getContext("2d");
 

	spriteList.push(new Helldog());

	window.requestAnimationFrame(tick());
});



const tick = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.0)';
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < spriteList.length; i++) {
		let alive = spriteList[i].tick();


	}

	window.requestAnimationFrame(tick);
}

const applyStyles = iframe => {
	let styles = {
		fontColor : "#ffffff",
		backgroundColor : "rgba(105, 55, 77, 0.5)",
		//fontGoogleName : "Sofia",
		fontSize : "20px",
		hideIcons : false,
		inputBackgroundColor : "rgba(107, 99, 71, 0.5)",
		inputFontColor : "white"
	}
	
	iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	

}

function redirect(){


}