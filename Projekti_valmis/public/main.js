'use strict';

//MOUSEOVER button etsi -------------------------------------------------------------
const naytaFiltteriE = () =>{
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
document.getElementById("etsi").addEventListener("mouseover", naytaFiltteriE);
document.getElementById("etsi").addEventListener("mouseout", piilotaFiltteriE);

//MOUSEOUT button lisää -------------------------------------------------------------
const naytaFiltteriL = () =>{
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
document.getElementById("lisää").addEventListener("mouseover", naytaFiltteriL);
document.getElementById("lisää").addEventListener("mouseout", piilotaFiltteriL);

//CLICK button etsi ----------------------------------------------------------------
const NaytaPopupE = () => {
  document.querySelector("#EPopup").className = "Popup show";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("filtteri2").className = "show";
};

const suljePopupE = () => {
  document.querySelector("#EPopup").className = "Popup hidden";
  document.getElementById("filtteri2").className = "hidden";
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("PicScreen").innerHTML = "";
};

document.getElementById("etsi").addEventListener("click", NaytaPopupE,);
document.getElementById("Eclose").addEventListener("click", suljePopupE);

//CLICK button Lisää ---------------------------------------------------------------
const NaytaPopupL = () => {
  document.querySelector("#LPopup").className = "Popup show";
  document.getElementById("filtteri").className = "hidden";
  document.getElementById("filtteri2").className = "show";
};
const suljePopupL = () => {
  document.querySelector("#LPopup").className = "Popup hidden";
  document.getElementById("filtteri2").className = "hidden";
};

document.getElementById("lisää").addEventListener("click", NaytaPopupL);
document.getElementById("Lclose").addEventListener("click", suljePopupL);


//Näytä kuva ennen latausta --------------------------------------------------------
let loadImage = (event) => {
  let output = document.getElementById("Preview").value;
  output.src = URL.createObjectURL(event.target.files[0]);
};

//Dropdown menu säätö --------------------------------------------------------------
const NaytaDDmenu = () => {
  document.getElementById("Dropdown_menu").className = "show";
};

const ValitseCity = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "City";
  document.querySelector("#mediaform3").setAttribute("action", "/City");
};
const ValitseLandscape = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "Landscape";
  document.querySelector("#mediaform3").setAttribute("action", "/Landscape");
};
const ValitseFantasy = () => {
  document.getElementById("Dropdown_menu").className = "hidden";
  document.getElementById("Choose").innerText = "Fantasy";
  document.querySelector("#mediaform3").setAttribute("action", "/Fantasy");
};

document.getElementById("Dropdown_button").addEventListener("click", NaytaDDmenu);
document.getElementById("City").addEventListener("click", ValitseCity);
document.getElementById("Fantasy").addEventListener("click", ValitseFantasy);
document.getElementById("Landscape").addEventListener("click", ValitseLandscape);

// updateeeeeeeeminen -----------------------------------------------------------

const LisaaT = (event) => {
  event.preventDefault();
  fetch('/update').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
  });
};

// PicScreen random täyttö ---------------------------------------------------------------
const RandomTaytto = (event) => {
  event.preventDefault();
  fetch('/rand').then((response) => {
    return response.json();
  }).then((json) => {
    document.getElementById("PicScreen").innerHTML = "";
    for (let i = 0; i < 6; i++) {
      let flexdiv = document.createElement("div");
      let image = document.createElement("img");
      let liket = document.createElement("p");
      let thumb = document.createElement("button");
      let formi = document.createElement("form");
      flexdiv.appendChild(image);
      flexdiv.appendChild(formi);
      formi.appendChild(thumb);
      formi.appendChild(liket);
      document.getElementById("PicScreen").appendChild(flexdiv);
      let randimg = Math.floor((Math.random() * (json.length - 1)));
      let Filenimi = json[randimg].filename;
      image.setAttribute("src", "uploads/" + Filenimi);
      liket.innerHTML = json[i].likes;
      liket.setAttribute("class", "liket");
      thumb.setAttribute("class", "thumb");
      thumb.setAttribute("type", "submit");
      formi.setAttribute("action", "/update");
      formi.setAttribute("id", Filenimi);
      document.getElementById(Filenimi).addEventListener("submit", LisaaT);
    }
  });
};

document.getElementById("mediaform2").addEventListener("submit", RandomTaytto);

// PicScreen category täyttö -----------------------------------------------------
/**
 * @property {string} likes
 */


const selectTaytto = (event) => {
  event.preventDefault();
  let selector = "/" + document.querySelector("#Choose").innerHTML;
  console.log(selector);
  fetch(selector).then((response) => {
    return response.json();
  }).then((json) => {
    document.getElementById("PicScreen").innerHTML = "";
    for (let i = 0; i < json.length; i++) {
      let flexdiv = document.createElement("div");
      let image = document.createElement("img");
      let liket = document.createElement("p");
      let thumb = document.createElement("button");
      let formi = document.createElement("form");
      flexdiv.appendChild(image);
      flexdiv.appendChild(formi);
      formi.appendChild(thumb);
      formi.appendChild(liket);
      document.getElementById("PicScreen").appendChild(flexdiv);
      let Filenimi = json[i].filename;
      image.setAttribute("src", "uploads/" + Filenimi);
      liket.innerHTML = json[i].likes;
      liket.setAttribute("class", "liket");
      thumb.setAttribute("class", "thumb");
      thumb.setAttribute("type", "submit");
      formi.setAttribute("action", "/update");
      formi.setAttribute("id", Filenimi);
      document.getElementById(Filenimi).addEventListener("submit", LisaaT);
    }
  });
};

document.getElementById("mediaform3").addEventListener("submit", selectTaytto);

// submittiiiiiii ----------------------------------------------------------------

const submitForm = (event) => {
  event.preventDefault();
  const fd = new FormData(event.target);
  const setting = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', setting).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
  });
};

const frm = document.querySelector("#mediaform");
frm.addEventListener('submit', submitForm);

// imaget uploadista -------------------------------------------------------------

