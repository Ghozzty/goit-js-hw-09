!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("h6c0i");i.Notify.init({position:"center-center"});var o=document.querySelector(".form"),u=0;document.querySelector("input[name=amount]").addEventListener("input",(function(e){u=Number(e.currentTarget.value)}));var a=0,c=document.querySelector("input[name=delay]");c.addEventListener("input",(function(e){a=Number(e.currentTarget.value)}));var l=0;function d(e,n){return new Promise((function(t,r){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector("input[name=step]").addEventListener("input",(function(e){return l=Number(e.currentTarget.value)})),o.addEventListener("submit",(function(e){if(e.preventDefault(),!function(){return!(a<0||l<0||u<1)}())return i.Notify.failure("Please set correct values");for(var n=1,t=0;t<u;t+=1)d(n,a).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=1,a+=l;a=Number(c.value)}))}();
//# sourceMappingURL=03-promises.743c5907.js.map