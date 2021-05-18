class Helldog {
	constructor() {
		let columnCount = 12;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopColumn = true;
		let scale = 1;

		this.tiledImage = new TiledImage("../../../images/hell-doggy.png", columnCount, rowCount,
							refreshDelay, loopColumn, scale, null);

		this.tiledImage.changeRow(0);
		this.tiledImage.changeMinMaxInterval(0,12);

		//this.tiledImage.addImage("../../../images/doggy-jump.png");
		this.x = 150;
		this.y = 135;



	}
	ctx = canvas.getContext("2d");
	
	tick () {
		if (this.x <=0 || this.tiledImage.flipped == true) {
			console.log(this.x + " "+ canvas.width + " gauche");
			this.x++;
			this.tiledImage.setFlipped(true);
		}
		if(this.tiledImage.flipped == false || this.x >= canvas.width ){
			this.x--;
			this.tiledImage.setFlipped(false);
		}
		
		this.tiledImage.tick(this.x, this.y, ctx);


		return true;
	}
}