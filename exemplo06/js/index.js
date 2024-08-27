import { loadShows, searchShows } from "./views/TVShowView.js";

//Salva o endereço origem do dominio do site
const location = window.location;
const {host} = location;
//localStorage.setItem("origin", origin);

const previusURL = document.referrer;
if (previusURL.startsWith(`${origin}/details.html`)) {
 loadShows();  
}
 

const form = document.querySelector("#form-area");
form.onsubmit = (e) => {
  e.preventDefault();

  searchShows();
};