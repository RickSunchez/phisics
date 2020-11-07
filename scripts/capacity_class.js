class Capacity {
	constructor(ctx, x=0, y=0, s=0, d=0, e=0, v=0) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.d = d;
		this.e = e;
		this.v = v;
		this._ctx = ctx;
		this._ctx_W = ctx.canvas.clientWidth;
		this._ctx_H = ctx.canvas.clientHeight;
	}

	draw() {
		let mW = 40; // min width
		let w  = this.s + mW,
			h  = w / 2,
			sh = w / 4,
			c  = this._ctx,
			d  = this.d,
			e  = 255 - this.e,
			x  = this._ctx_W/2 - (mW + 1.5*this.s)/2,
			y  = this._ctx_H/2 - h/2;

		c.clearRect(0,0, c.canvas.clientWidth, c.canvas.clientHeight);
		// bootom plate
		c.beginPath();
			c.fillStyle = "white";
			c.strokeStyle = "black";

			c.moveTo(x+sh,y+d/2);
			c.lineTo(x+sh+w,y+d/2);
			c.lineTo(x+w,y+h+d/2);
			c.lineTo(x,y+h+d/2);
			c.lineTo(x+sh,y+d/2);
			c.moveTo(x+(w+sh)/2,y+h/2+d/2); //
			c.lineTo(x+(w+sh)/2,y+2*h+d/2);
			
			c.stroke();
			c.fill();
		c.closePath();

		// fill material
		c.beginPath();
			c.moveTo(x,y+h-d/2);
			c.lineTo(x+w,y+h-d/2);
			c.lineTo(x+w+sh,y-d/2);
			c.lineTo(x+w+sh,y+d/2);
			c.lineTo(x+w,y+h+d/2);
			c.lineTo(x,y+h+d/2);
			c.lineTo(x,y+h-d/2);
			c.fillStyle = "rgba("+e+","+e+","+e+",0.8)"
			c.fill();
		c.closePath();

		// top plate
		c.beginPath();
			c.fillStyle = "white";
			c.strokeStyle = "black";

			c.moveTo(x+sh,y-d/2);
			c.lineTo(x+sh+w,y-d/2);
			c.lineTo(x+w,y+h-d/2);
			c.lineTo(x,y+h-d/2);
			c.lineTo(x+sh,y-d/2);
			c.moveTo(x+(w+sh)/2,y+h/2-d/2); //
			c.lineTo(x+(w+sh)/2,y-h-d/2);
			
			c.fill();
			c.stroke();
		c.closePath();
	}
}