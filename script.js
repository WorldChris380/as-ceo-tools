// Elemente auswählen
const mainMenu = document.getElementById("as-navbar-main-collapse");
const leftMainMenu = mainMenu.querySelector("ul.navbar-nav");

// Neue Elemente erstellen
const liToolMenu = document.createElement("li");
const aManagerLounge = document.createElement("a");
const ulToolMenu = document.createElement("ul");
const liDropdown = document.createElement("li");
const aAbout = document.createElement("a");
const spanCaret = document.createElement("span");

// Text für die neuen Links festlegen
aManagerLounge.textContent = "Manager Lounge";
aAbout.textContent = "About";

// Klassen für Bootstrap hinzufügen
liToolMenu.classList.add("nav-item", "dropdown");
aManagerLounge.classList.add("nav-link", "dropdown-toggle");
ulToolMenu.classList.add("dropdown-menu");
liDropdown.classList.add("nav-item");

// Attribut für Bootstrap hinzufügen
aManagerLounge.setAttribute("href", "#");
aManagerLounge.setAttribute("role", "button");
aManagerLounge.setAttribute("data-toggle", "dropdown");
aManagerLounge.setAttribute("aria-haspopup", "true");
aManagerLounge.setAttribute("aria-expanded", "false");

// Inhalt für das Dropdown-Menü
spanCaret.classList.add("caret");
aManagerLounge.appendChild(spanCaret);

// Link für "About" dem Dropdown-Menü hinzufügen
aAbout.setAttribute("href", "about.html"); // Hier der relative Pfad zur about.html im Wurzelverzeichnis der Erweiterung
liDropdown.appendChild(aAbout);

// Links und Dropdown-Menü dem Listenelement hinzufügen
liToolMenu.appendChild(aManagerLounge);
ulToolMenu.appendChild(liDropdown);
liToolMenu.appendChild(ulToolMenu);

// Listenelement dem Hauptmenü hinzufügen
leftMainMenu.appendChild(liToolMenu);

console.log("1st step sucessfull");