!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function d(e,t,n){const d=e,o=t,c=n;return{attachToParent:function(e){const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("h2"),a=document.createElement("p"),r=document.createElement("span");n.textContent=d,a.textContent=o,r.textContent=c,t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}}}!function(){const e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("div");t.classList.add("heading");const n=document.createElement("h1");n.textContent="Larry's Pizza";const d=document.createElement("p");d.textContent="THE BEST PIZZA IN THE CITY!",t.appendChild(n),t.appendChild(d);const o=document.createElement("nav");o.classList.add("footer-nav");const c=document.createElement("ul"),a=document.createElement("li");a.classList.add("home-link");const r=document.createElement("li");r.classList.add("menu-link");const l=document.createElement("li");l.classList.add("locations-link");const i=document.createElement("li");i.classList.add("contact-link");const u=document.createElement("a"),s=document.createElement("a"),m=document.createElement("a"),p=document.createElement("a");u.textContent="Home",s.textContent="Menu",m.textContent="Locations",p.textContent="Contact Us",u.setAttribute("href","#"),s.setAttribute("href","#"),m.setAttribute("href","#"),p.setAttribute("href","#"),a.appendChild(u),r.appendChild(s),l.appendChild(m),i.appendChild(p),c.appendChild(a),c.appendChild(r),c.appendChild(l),c.appendChild(i),o.appendChild(c),e.appendChild(t),e.appendChild(o),document.querySelector("#content").appendChild(e)}();const o=document.querySelector(".overlay"),c=document.querySelector(".menu-link"),a=document.querySelector(".home-link"),r=document.querySelector(".locations-link"),l=document.querySelector(".contact-link");function i(){o.childNodes.length>2&&o.removeChild(o.childNodes[2])}c.addEventListener("click",()=>{i(),function(){const e=document.createElement("div");e.classList.add("menu");const t=d("Pizza","Have a taste of our world famous pizza. Freshly baked New York style pizza.","$15.99"),n=d("Cheesesteak","Freshly cooked Philly Cheesesteak with the toppings of your choice.","$12.99"),o=d("Cheese Burger","100% pure beefy goodness on a bun.","$7.99"),c=d("French Fries","Curly, plain, spicey or cheese. You name it and we have it!","$4.99");t.attachToParent(e),n.attachToParent(e),o.attachToParent(e),c.attachToParent(e),document.querySelector(".overlay").appendChild(e)}()}),a.addEventListener("click",()=>{i()}),l.addEventListener("click",()=>{i(),function(){const e=document.createElement("div");e.classList.add("contact-div");const t=document.createElement("h2");t.textContent="Contact Us";const n=document.createElement("form"),d=document.createElement("div"),o=document.createElement("label"),c=document.createElement("input"),a=document.createElement("div"),r=document.createElement("label"),l=document.createElement("input"),i=document.createElement("div"),u=document.createElement("label"),s=document.createElement("textarea"),m=document.createElement("button");o.setAttribute("for","name-field"),o.textContent="Name: ",c.setAttribute("id","name-field"),c.setAttribute("type","text"),c.required=!0,r.setAttribute("for","email-field"),r.textContent="Email: ",l.setAttribute("id","email-field"),l.setAttribute("type","email"),l.required=!0,u.setAttribute("for","message-field"),u.textContent="Message: ",s.setAttribute("id","message-field"),s.required=!0,m.textContent="Submit",d.appendChild(o),d.appendChild(c),a.appendChild(r),a.appendChild(l),i.appendChild(u),i.appendChild(s),n.appendChild(d),n.appendChild(a),n.appendChild(i),n.appendChild(m),e.appendChild(t),e.appendChild(n),document.querySelector(".overlay").appendChild(e),m.addEventListener("click",t=>{t.preventDefault(),document.querySelector(".overlay").removeChild(e);const n=document.createElement("div");n.classList.add("message-div");const d=document.createElement("h2");d.textContent="Your Message Was Sent";const o=document.createElement("span");o.textContent="X",n.appendChild(d),n.appendChild(o),document.querySelector(".overlay").appendChild(n),o.addEventListener("click",()=>{document.querySelector(".overlay").removeChild(n)})})}()}),r.addEventListener("click",()=>{i(),function(){const e=document.createElement("div");e.classList.add("location-div");const t=document.createElement("img"),n=document.createElement("p");t.src="img/construction.png",n.textContent="Sorry, this page is under construction.",e.appendChild(t),e.appendChild(n),document.querySelector(".overlay").appendChild(e)}()})}]);