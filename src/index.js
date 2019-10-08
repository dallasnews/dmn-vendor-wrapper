import "./assets/scss/normalize.scss";
import "./assets/scss/grid.scss";
import "./assets/scss/utilities.scss";
import "./assets/scss/fonts.scss";
import Masthead from "./masthead";
import Nav from "./nav";
import Footer from "./footer";

const addTemplate = (el, markup) => {
  try {
    const div = document.createElement("div");
    div.innerHTML = markup;
    document.getElementById(el).appendChild(div);
    // Do nothing
  } catch (err) {}
};

document.addEventListener("DOMContentLoaded", () => {
  addTemplate("dmn-header", Masthead());
  addTemplate("dmn-header", Nav());
  addTemplate("dmn-footer", Footer());
});
