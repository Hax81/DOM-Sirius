// Code here!

//1. Byt namn på första hoodien från Ash till Potato.

const hoodieAsh = document.querySelector(".art-1 h3"); //En variabel skapas som heter "hoddieAsh. Queryselector visar var den är"
hoodieAsh.innerText = "Potato";                        //Efter att variabeln deklarerats kan den ändras. 

//2. Byt *namn* på *Home* till *Start*


const navHome1 = document.querySelector("nav a");
navHome1.innerText = "Start";

const navHome2 = document.querySelector("footer a:first-of-type");
navHome2.innerText ="Start";

//3. Byt *namn* på *Contact* till *Mail Us*

const navContactHeader = document.querySelectorAll("nav a"); //querySelectorAll måste här användas, 
navContactHeader[2].innerText = "Mail Us"; //den returnerar en nodelist. Man kan specificera plats i nodelist med [] som i en array.

const navContactFooter = document.querySelectorAll("footer a");
navContactFooter[2].innerText = "Mail Us";

//4. Byt ut informationen om *Sinus Hoodie  - Fire*.

const hoodieFire = document.querySelector(".art-2 p");
hoodieFire.innerText = "En röd hoodie";

//5. Byt *bakgrundsfärg* och *text* på en knapp

const buyButton1 =  document.querySelector(".art-1 button");
buyButton1.style.backgroundColor = "red";
buyButton1.innerText = "Köp";

//6.Byt bakgrundsfärg på någon av produkterna

const prodBackgrnd1 = document.querySelector("main article figure");
prodBackgrnd1.style.backgroundColor = "purple";

//7. Byt ut adressen på sidan

const newAdress = document.querySelector("footer article p");
newAdress.innerText = "Tröjgatan 7, Hoodiestan";

//8. Byt färg på samtliga ```<p>``` //Metoden querySelectorAll returnerar en "NodeList" av element. 
                                    //Man kan inte applicera styling direkt på hela nodelistan.
                                    //Man behöver istället lopa igenom varje element (forEach) på nodelistan och applicera stylingen på respektive element.

const allPtags = document.querySelectorAll("p");
allPtags.forEach ( p=> {
  
  p.style.color = "brown"; 

} 

);

//9. Ändra text på samtliga knappar till *add to cart*

const allButtons = document.querySelectorAll("button");  //Samma lösning som ovan.
allButtons.forEach ( button=> {

  button.innerText = ("add to cart");

}

);

//10. Lägg till classen *active* på menyalternativet *home

const addActive = document.querySelector("nav a:first-of-type");
addActive.classList.add("active");

//11. Ta bort classen *logo* på logotypen

const removeLogoClass = document.querySelector("header .logo");
removeLogoClass.classList.remove("logo");

//12. Lägg till ett nytt menyalternativ

const newItem1 = document.createElement("a");
newItem1.innerText = "Ett nytt menyalternativ i header";
newItem1.href = "#";
const nav = document.querySelector("header nav");
nav.appendChild(newItem1);

const newItem2 = document.createElement("a");
newItem2.innerText = "Ett nytt menyalternativ i footer";
newItem2.href = "#";
const foot = document.querySelector("footer article");
foot.appendChild(newItem2);

//13. Lägg till en ny produkt med följande info:

/*|el|beskrivning|
|---|---|
|img |hoodie-forrest.png|
|h2 | Sinus Hoodie |
|h3 |Forrest|
|p|Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores. */

const newProduct = document.createElement("article");
newProduct.classList.add("art-4");
const figure = document.createElement("figure");

const img = document.createElement("img");
img.src = "img/hoodie-forrest.png";
img.alt = "Sinus Hoodie Forrest"; // alt text om bilden ej laddar

figure.appendChild(img);


const h2 = document.createElement("h2");
h2.innerText = "Sinus Hoodie";

const h3 = document.createElement("h3");
h3.innerText = "Forrest";

const p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";

newProduct.appendChild(figure);
newProduct.appendChild(h2);
newProduct.appendChild(h3);
newProduct.appendChild(p);

const main = document.querySelector("main");
main.appendChild(newProduct);

//OBS! FÖRSTÅR EJ NR 13 ORDENTLIGT! REPETERA DEN!


//14. Lyssna efter ett klick på logotypen (```.logo```).  
//När den registrerar ett klick skall du console.log:a "found you!";

//document.querySelector("logo").addEventListener("click", find);

//function find() {

//console.log("Found you!");


//}

//OBS! FICK EJ 14 att fungera! Fråga om denna. Kan ej hitta felet!

//15. Lyssna efter klick på samtliga produkter ( ```<article>```). 
//När den registrerar ett klick skall du console.log:a 
//"Hi, Im article Fire / Ash / Water".

document.querySelector(".art-1").addEventListener("click", find1);

function find1() {

console.log("Hi! I am article Ash");

}

document.querySelector(".art-2").addEventListener("click", find2);

function find2() {

console.log("Hi! I am article Fire");

}

document.querySelector(".art-3").addEventListener("click", find3);

function find3() {

console.log("Hi! I am article Water");

}