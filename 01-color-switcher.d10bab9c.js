const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;const n=document.body;t.addEventListener("click",(()=>{t.disabled=!0,o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.d10bab9c.js.map
