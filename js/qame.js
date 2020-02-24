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
  var qabox =
    '<div class="qa-box" style="overflow:relative;z-index:100000;background-color:yellow;padding:8px;opacity:0.75;position:relative">' +
    qaBoxTxt +
    "</div>";
  var elems = ["SELECT", "TEXTAREA", "INPUT", "BUTTON", "SPAN"];
  d.style.border = "2px red solid";
  d.style.position = "relative";
  d.parentElement.style.position = "relative";
  d.className += " qa-bg";

  /* We differentiate between form elements and other types of elements, for getting better positioning results. 
    This is, rather, something specific for the proyect we are working */
  if (elems.indexOf(d.tagName) !== -1) {
    d.insertAdjacentHTML("afterend", qabox);
  } else {
    d.insertAdjacentHTML("afterbegin", qabox);
  }
}

// Visual fix for qa highlighters
for (var i = 0; i < divs.length; i++) {
  divs[i].style.overflow = "visible";
}
