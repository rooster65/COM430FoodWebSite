//This will be used to add price calculation and move objects within HTMl.

//This is to add the Total phrase at bottom right.
document.getElementById("Price").style.position="absolute";
document.getElementById("Price").style.left="1500px";

//This is to setup a variable carrying the event listening properties. 
const x = document.getElementById("1");
x.addEventListener("click", displayPrice);

//This function here is called to display the burger price. 
function displayPrice(){
  document.getElementById("Price").innerText = "Total" + " " + "$10";
}
