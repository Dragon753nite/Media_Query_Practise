window.onload = screen;
window.onresize = screen;

function screen(){
    myWidth = window.innerWidth;
    document.getElementById("size").innerHTML = "Width: " + myWidth + "px"
}