var btn = document.getElementById("clear");
var pic = document.getElementById("svg");

var clear = function(e){
    while(pic.hasChildNodes()){
        pic.removeChild(pic.firstChild);
    }
}

var circle = function(e){
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX + "");
    c.setAttribute("cy", e.offsetY + "");
    c.setAttribute("r", "25");
    c.setAttribute("fill", "black");
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    c.addEventListener("click",change);
    
}

var change = function(e){
    e.target.setAttribute("fill", "red");
    c.addEventListener("click",newcircle, true);
    e.stopPropagation();

}

var newcircle = function(e){
    pic.removeChild(e.target);
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", Math.floor(Math.random() * 451) + 25 + "");
    c.setAttribute("cy", Math.floor(Math.random() * 451) + 25 + "");
    c.setAttribute("r", "25");
    c.setAttribute("fill", "black");
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    c.addEventListener("click",change);
}

pic.addEventListener("click", circle);
btn.addEventListener("click",clear);
