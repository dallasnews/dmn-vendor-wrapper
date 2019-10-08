import "./css/normalize.css";
import "./css/grid.css";
import "./css/utilities.scss";
import "./css/fonts.css";
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
