var dataqas = document.querySelectorAll("[id]");

// DIV selector
var divs = document.getElementsByTagName("DIV");

// Applying styles and making some stuff for the QA elements found in DOM
for (var i = 0; i < dataqas.length; i++) {
  var d = dataqas[i];
  var id = d.getAttribute("id");
  var qaBoxTxt;
  if (id) {
    qaBoxTxt = id;
  }
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var qabox =
    '<div class="qa-box" style="z-index:100000;opacity:0.9;position:absolute;font-family:monospace;">' +
    '<div style="position:relative;background-color:' +
    randomColor +
    '">' +
    qaBoxTxt +
    "</div>" +
    "</div>";
  var elems = ["SELECT", "TEXTAREA", "INPUT", "BUTTON", "SPAN"];
  d.style.border = "2px inset " + randomColor;
  // d.style.position = "absolute";
  // d.parentElement.style.position = "relative";
  d.className += " qa-bg";

  d.insertAdjacentHTML("beforebegin", qabox);
}

// Visual fix for qa highlighters
for (var i = 0; i < divs.length; i++) {
  divs[i].style.overflow = "visible";
}
