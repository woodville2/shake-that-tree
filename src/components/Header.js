"use strict";

export function createHeader() {
  const header = document.createElement("header");

  header.style.backgroundColor = "#800080";

  const h1 = document.createElement("h1");
  h1.textContent = "Shake Shake Shake";
  header.appendChild(h1);

  return header;
}
