function myfunction(){
    document.write("This is attribute.js file");
    document.getElementById("demo").setAttribute("title","This is attribute.js file");
}

function onClick(){
    console.log("This is onclick event");
}
function onMouseover(){
    console.log("This is onmouseover event");
}
function onMouseout(){
    console.log("This is onmouseout event");
}
function onMousedown(){
    console.log("This is onmousedown event");
}
function onMouseup(){
    console.log("This is onmouseup event");
}
function onLoad(){
    alert("This is onload event");
}