import "./assets/scss/normalize.scss";
import "./assets/scss/grid.scss";
import "./assets/scss/utilities.scss";
import "./assets/scss/fonts.scss";
import Masthead from "./masthead";
import Nav from "./nav";
import Footer from "./footer";

import "./_buttons.scss";

import users from "./header/example.json";

import Header from "./header";

const addTemplate = (el, markup) => {
  try {
    const div = document.createElement("div");
    div.innerHTML = markup;
    document.getElementById(el).appendChild(div);
    // Do nothing
  } catch (err) {}
};

document.addEventListener("DOMContentLoaded", () => {
  // add templates
  addTemplate("dmn-header", Header());
  //addTemplate("dmn-header", Nav());
  addTemplate("dmn-footer", Footer());

  // example of post install
  // const names = users.map((user) => user.name);
  // document.getElementsByClassName("nav")[0].innerHTML = names;
  // console.log("done did it");
});
