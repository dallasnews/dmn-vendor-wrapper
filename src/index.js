import "./css/normalize.css";
import "./css/grid.css";
import "./css/utilities.css";
import "./css/fonts.css";
import Masthead from "./masthead";
import Nav from "./nav";
import Footer from "./footer";

console.log("Web bundle loaded.");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired.");

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
