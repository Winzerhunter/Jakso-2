
//MOUSEOVER button etsi -------------------------------------------------------------
const näytäFiltteriE = () =>{
  document.getElementById("etsi").className = "etu_blokki hover";
  document.getElementById("filtteri").className = "show";
  document.getElementById("lisää").className = "etu_blokki hoverE";
  document.querySelector("#lisää > p").className = "hoverE";
};
const piilotaFiltteriE = () =>{
  document.getElementById("etsi").className = "etu_blokki";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("lisää").className = "etu_blokki";
  document.querySelector("#lisää > p").className = ""
};
document.getElementById("etsi").addEventListener("mouseover", näytäFiltteriE);
document.getElementById("etsi").addEventListener("mouseout", piilotaFiltteriE);

//MOUSEOUT button lisää -------------------------------------------------------------
const näytäFiltteriL = () =>{
  document.getElementById("lisää").className = "etu_blokki hover";
  document.getElementById("filtteri").className = "show";
  document.getElementById("etsi").className = "etu_blokki hoverE";
  document.querySelector("#etsi > p").className = "hoverE"
};
const piilotaFiltteriL = () =>{
  document.getElementById("lisää").className = "etu_blokki";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("etsi").className = "etu_blokki";
  document.querySelector("#etsi > p").className = ""
};
document.getElementById("lisää").addEventListener("mouseover", näytäFiltteriL);
document.getElementById("lisää").addEventListener("mouseout", piilotaFiltteriL);

//CLICK button etsi ----------------------------------------------------------------
const NäytäPopupE = () => {
  document.querySelector("#EPopup").className = "Popup show";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("filtteri2").className = "show";
};

const suljePopupE = () => {
  document.querySelector("#EPopup").className = "Popup hidden";
  document.getElementById("filtteri2").className = "hidden";
  document.getElementById("Dropdown_menu").className = "hidden";
};

document.getElementById("etsi").addEventListener("click", NäytäPopupE, 1000);
document.getElementById("Eclose").addEventListener("click", suljePopupE);

//CLICK button Lisää ---------------------------------------------------------------
const NäytäPopupL = () => {
  document.querySelector("#LPopup").className = "Popup show";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("filtteri2").className = "show";
};
const suljePopupL = () => {
  document.querySelector("#LPopup").className = "Popup hidden";
  document.getElementById("filtteri2").className = "hidden";
};

document.getElementById("lisää").addEventListener("click", NäytäPopupL);
document.getElementById("Lclose").addEventListener("click", suljePopupL);


//Näytä kuva ennen latausta --------------------------------------------------------
let loadImage = (event) => {
  let output = document.getElementById("Preview");
  output.src = URL.createObjectURL(event.target.files[0]);
};

//Dropdown menu säätö --------------------------------------------------------------
const NäytäDDmenu = () => {
  document.getElementById("Dropdown_menu").className = "show";
};

const ValitseCity = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "City";
};
const ValitseLandscape = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "Landscape";
};
const ValitseFantasy = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "Fantasy";
};

document.getElementById("Dropdown_button").addEventListener("click", NäytäDDmenu);
document.getElementById("City").addEventListener("click", ValitseCity);
document.getElementById("Fantasy").addEventListener("click", ValitseFantasy);
document.getElementById("Landscape").addEventListener("click", ValitseLandscape);

// PicScreen täyttö ---------------------------------------------------------------
const RandomTäyttö = () => {
  document.getElementById("PicScreen").innerHTML = "";
  for(i=0; i < 6; i++){
    let flexdiv = document.createElement("div");
    let image = document.createElement("img");
    flexdiv.appendChild(image);
    document.getElementById("PicScreen").appendChild(flexdiv);
    let randimg = Math.floor((Math.random() * 150) + 100);
    image.setAttribute("src", "http://placekitten.com/150/" + randimg)
  };
};

document.getElementById("Random").addEventListener("click", RandomTäyttö);
