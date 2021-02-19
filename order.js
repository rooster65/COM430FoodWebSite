//This will be used to add price calculation and move objects within HTMl.

//This is to add the Total phrase at bottom right.
document.getElementById("Price").style.position="absolute";
document.getElementById("Price").style.left="1500px";

document.getElementById("Item").style.position="absolute";
document.getElementById("Item").style.top="150px";
document.getElementById("Item").style.left="1500px";

//This is to setup variables to store item price.
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;

//This is to setup listeners to listen for add button click. 
const z = document.getElementById("1");
z.addEventListener("click", displayPrice1);

//This is to setup listeners to listen for remove button click.
const zz = document.getElementById("12");
zz.addEventListener("click", displayPrice12);


const y = document.getElementById("2");
y.addEventListener("click", displayPrice2);

const yy = document.getElementById("22");
yy.addEventListener("click", displayPrice22);


const x = document.getElementById("3");
x.addEventListener("click", displayPrice3);

const xx = document.getElementById("32");
xx.addEventListener("click", displayPrice32);


const w = document.getElementById("4");
w.addEventListener("click", displayPrice4);

const ww = document.getElementById("42");
ww.addEventListener("click", displayPrice42);


const v = document.getElementById("5");
v.addEventListener("click", displayPrice5);

const vv = document.getElementById("52");
vv.addEventListener("click", displayPrice52);


const u = document.getElementById("6");
u.addEventListener("click", displayPrice6);

const uu = document.getElementById("62");
uu.addEventListener("click", displayPrice62);


const t = document.getElementById("7");
t.addEventListener("click", displayPrice7);

const tt = document.getElementById("72");
tt.addEventListener("click", displayPrice72);


const s = document.getElementById("8");
s.addEventListener("click", displayPrice8);

const ss = document.getElementById("82");
ss.addEventListener("click", displayPrice82);


const r = document.getElementById("9");
r.addEventListener("click", displayPrice9);

const rr = document.getElementById("92");
rr.addEventListener("click", displayPrice92);

//This function here is called to display each item price. 
function displayPrice1(){
  a = 10;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Item").innerText = "Burger";
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice12(){
  a = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice2(){
  b = 12;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Item").innerText = "Meat Balls";
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice22(){
  b = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice3(){
  c = 8;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice32(){
  c = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice4(){
  d = 3;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice42(){
  d = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice5(){
  e = 3;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice52(){
  e = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice6(){
  f = 2;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice62(){
  f = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice7(){
  g = 2;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice72(){
  g = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice8(){
  h = 2;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice82(){
  h = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}


function displayPrice9(){
   i = 8;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}

function displayPrice92(){
  i = 0;
  var total = a+b+c+d+e+f+g+h+i;
  document.getElementById("Price").innerText = "Total" + " " + total;
}
