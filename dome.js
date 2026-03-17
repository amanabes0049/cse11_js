const result=document.getElementById("para");
result.innerHTML="hello world";
result.innerText="<b>hello world</b>"
result.title="This is dome.js file";
document.write("This is dome.js file");
const a=document.getElementsByClassName("p1");
a[0].innerHTML="This is array file";
const b=document.getElementsByTagName("p");
b[0].innerHTML="This is file";
b[1].style.color="red";
b[2].innerText="bold";
const d=document.querySelector("#para");
const c=document.querySelectorAll("ul li");
for(x in c){
    c[x].style.color="blue";
    c[x].style.backgroundColor="yellow";
    c[x].style.color="green";
}

