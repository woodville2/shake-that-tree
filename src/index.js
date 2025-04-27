"use strict";

import "../src/styles/styles.css";

import { createHeader } from "./components/Header.js";

const header = createHeader();

async function init() {
document.body.appendChild(header);
}
init()