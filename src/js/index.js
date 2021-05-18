let spriteList = [];

window.addEventListener("load", () => {
    let startTime = Date.now();
    tick();
    addThunder();

   
})

let page = document.querySelector("html");

function addThunder (){
    let x = Math.floor(Math.random() * 1700); 
    let y = Math.floor(Math.random() * 700); 

    console.log('aaaaaaa');
    spriteList.push(new Square(x, y));
    playSound();
    setTimeout(addThunder, 5000);
}

page.onclick = e => {
    playSound();
    let x = e.pageX;
    let y = e.pageY;
    console.log(x);
    console.log(y);
    spriteList.push(new Square(x, y));
}

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}

class Square {
    constructor(x, y) {
        this.node = document.createElement("div");
        this.node.className = "square";
        this.node.style.left = x + "px";
        this.node.style.top = y + "px";
        this.lifeTime = 1;
        this.startTime = Date.now();


        document.body.append(this.node);
    }

    tick() {
        let alive = true;
        var elapsedTime = Date.now() - this.startTime;
        if (elapsedTime > 400) {
            alive = false;
            this.node.remove();
        }
        return alive;
    }
}

function muteSound(){
    console.log("ddd");
    if(document.getElementById('un-mute').checked){
        document.getElementById("rain_audio").muted = true;
        document.getElementById("thunder_audio").muted = true;
    }
    else{
        document.getElementById("rain_audio").muted = false;
        document.getElementById("thunder_audio").muted = false;
    }
}

function playSound(){
    document.getElementById("rain_audio").play();
    document.getElementById("thunder_audio").play();
}