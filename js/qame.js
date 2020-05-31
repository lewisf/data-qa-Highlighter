var dataqas = document.querySelectorAll("[id]");

// DIV selector
var divs = document.getElementsByTagName("DIV");

// Applying styles and making some stuff for the QA elements found in DOM
for (var i = 0; i < dataqas.length; i++) {
  var d = dataqas[i];
  var id = d.getAttribute("id");
  var dataReactClass = d.getAttribute("data-react-class");
  var qaBoxTxt;
  if (id || dataReactClass) {
    qaBoxTxt = id || dataReactClass;
  }
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var qabox =
    '<div class="qa-box" style="z-index:100000;opacity:0.8;position:absolute;font-family:monospace;">' +
    '<div class="qa-text" style="font-size:0.8rem;position:relative;background-color:' +
    randomColor +
    '">' +
    qaBoxTxt +
    "</div>" +
    "</div>";
  var elems = ["SELECT", "TEXTAREA", "INPUT", "BUTTON", "SPAN"];
  d.style.border = "2px solid " + randomColor;
  // d.style.position = "absolute";
  // d.parentElement.style.position = "relative";
  d.className += " qa-bg";

  d.insertAdjacentHTML("beforebegin", qabox);
}

// Visual fix for qa highlighters
for (var i = 0; i < divs.length; i++) {
  divs[i].style.overflow = "visible";
}
