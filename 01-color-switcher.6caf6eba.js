!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("[color-display]"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));document.body.style.backgroundColor=t,n.textContent=t}),1e3),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.6caf6eba.js.map
