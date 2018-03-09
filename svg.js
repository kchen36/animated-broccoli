var btn = document.getElementById("clear");
var pic = document.getElementById("svg");

var clear = function(e){
    while(pic.hasChildNodes()){
        pic.removeChild(pic.firstChild);
    }
}

var newcircle = function(a,b){
    var obj = {
	x: a,
	y: b,
	c: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	color: "black",
	r: 25,
	display: function(){
	    this.c.setAttribute("cx", this.x + "");
	    this.c.setAttribute("cy", this.y + "");
	    this.c.setAttribute("r", this.r);
	    this.c.setAttribute("fill", this.color);
	    this.c.setAttribute("stroke", this.color);
	    this.c.addEventListener("click",this.changecolor);
	    pic.appendChild(this.c);
	},
	changecolor: function(e) {
	    console.log(this.c);
	    if (this.getAttribute("fill") == "black") {
		this.setAttribute("fill", "red");
	    } else {
		this.remove(e);
		var newElement = newcircle(Math.floor(Math.random() * 451) + 25 + "",Math.floor(Math.random() * 451) + 25 + "");
		newElement.display();
	    }
	    e.stopPropagation();
	}
    }
    return obj;
}
var newobj= function(e){
    var a = new newcircle(e.offsetX, e.offsetY);
    a.display();
}

pic.addEventListener("click", newobj);
btn.addEventListener("click",clear);
