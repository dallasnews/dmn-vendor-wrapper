import "./css/normalize.css";
import "./css/grid.css";
import "./css/utilities.scss";
import "./css/fonts.css";
import Masthead from "./masthead";
import Nav from "./nav";
import Footer from "./footer";

const appendMarkup = (el, markup) => {
  try {
    const div = document.createElement("div");
    div.innerHTML = markup;
    document.getElementById(el).appendChild(div);
  } catch (err) {
    // do nothing
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // appendMarkup("nav", Masthead());
  // appendMarkup("nav", Nav());
  // appendMarkup("footer", Footer());
  
  const masthead = document.createElement("div");
  masthead.innerHTML = Masthead();
  document.getElementById("nav").appendChild(masthead);

  const nav = document.createElement("div");
  nav.innerHTML = Nav();
  document.getElementById("nav").appendChild(nav);

  const footer = document.createElement("div");
  footer.innerHTML = Footer();
  document.getElementById("footer").appendChild(footer);
});
