//var count;
//document.write("Starting the loop");
//for(count=0;count<10;count++){
   //document.write("Current count is: " + count);
  // document.write("<br>");
//}
//document.write("Loop ended");
let person={
      name:"John",
      age:30,
      city:"New York"

}
for(let key in person){
   console.log(key + ": " + person[key]);
}