(()=>{"use strict";var n={434:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"html {\r\n    box-sizing: border-box;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  *, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  body, #main {\r\n    width: 100%;\r\n    height: 100%;\r\n  }",""]);const c=i},772:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),c=e(667),s=e.n(c),d=new URL(e(4),e.b),l=i()(o()),p=s()(d);l.push([n.id,"@font-face {\r\n    font-family: 'Merriweather';\r\n    src: url("+p+") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n:root {\r\n    --mainfont: 'Merriweather';\r\n    background-color: #ececec;\r\n    height: 100%;\r\n    width: 100%;\r\n    cursor: default;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: var(--mainfont);\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    width: 100vw; \r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:#3498db;\r\n    font-family: var(--mainfont);\r\n    font-size: 1rem;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    gap: 10px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n#new-task-form {\r\n    display: flex;\r\n    gap: 10px;\r\n    font-family: var(--mainfont);\r\n}\r\n\r\n#new-task {\r\n    color: #333333;\r\n    outline: none;\r\n    border: 2px solid #CCCCCC;\r\n    justify-self: center;\r\n}\r\n\r\n#new-task, #new-task-submit{\r\n    border-radius: 7px;\r\n    padding: 5px;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n#new-task-submit {\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: #3498db;\r\n    color: #FFFFFF;\r\n    font-family: var(--mainfont);\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 100%;\r\n}\r\n\r\n#project-list {     \r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    position: relative;\r\n    padding: 10px;\r\n    font-family: var(--mainfont);\r\n    font-size: 1rem;\r\n    box-shadow: 0px 0px 5px -2px black ;\r\n    border-radius: 7px;\r\n    margin: 10px;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n#projects-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 10px;\r\n    width: 200px;\r\n}\r\n\r\n#add-project-btn {\r\n    display: block;\r\n    position: absolute;\r\n    font-size: 24px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    right: 10px;\r\n\r\n}\r\n\r\n#new-proj-form {\r\n    display: flex;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#new-proj-submit {\r\n    cursor: pointer;\r\n    border: none;\r\n    color: #000000;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    height: fit-content;\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-family: var(--mainfont);\r\n    font-size: 1rem;\r\n    box-shadow: 0px 0px 5px -2px black ;\r\n    border-radius: 7px;\r\n    margin-bottom: 10px;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.project:hover {\r\n    background: #DAE9F5;\r\n}\r\n\r\n.material-symbols-outlined {\r\n    font-variation-settings:\r\n    'FILL' 0,\r\n    'wght' 350,\r\n    'GRAD' 0,\r\n    'opsz' 24;\r\n    font-size: 20px;\r\n    user-select: none;\r\n}\r\n\r\n.material-symbols-outlined:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 75vw;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n\r\n#tasks {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: fit-content;\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-family: var(--mainfont);\r\n    font-size: 1rem;\r\n    box-shadow: 0px 0px 5px -2px black ;\r\n    border-radius: 7px;\r\n    margin-bottom: 10px;\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.task:hover {\r\n    background: #DAE9F5\r\n}\r\n\r\n.task > .text {\r\n    padding: 5px;\r\n    padding-left: 10px;\r\n    border: none;\r\n    border-radius: 15px;\r\n    background-color: inherit;\r\n    font: inherit;\r\n    cursor: default;\r\n    flex-grow: 2;\r\n    width: fit-content;\r\n    color: #333333;\r\n}\r\n\r\n.task > .text:not(:read-only) {\r\n    color: black;\r\n    background-color: #ececec;\r\n}\r\n\r\n.task > .text:focus {\r\n    outline: none;\r\n}\r\n\r\n.task > .actions {\r\n    padding: 5px;\r\n    margin-right: 0;\r\n    color: #333333;\r\n\r\n}\r\n\r\n.task > .actions:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task > .checked {\r\n    text-decoration: line-through;\r\n    color: #666666;\r\n}\r\n\r\n.task.checked {\r\n    background-color: #A3D9A5;\r\n}\r\n\r\n.custom-checkbox {\r\n    align-self: center;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n}",""]);const u=l},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},4:(n,r,e)=>{n.exports=e.p+"1f7dea9c1371f0863d1b.ttf"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(434),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=e(772),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),r()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;let g=[],v=[],b="";function y(n){b=n,v.forEach((function(n){n.projectid==b&&(g=n.tasks,A())}))}const k=document.querySelector("#new-task-form"),w=document.querySelector("#new-task"),j=document.querySelector("#tasks"),F=document.querySelector("#projects");function E(n){j.innerHTML="",n.forEach((function(n){const r=n.completed,e=n.name,t=document.createElement("li");t.classList.add("task"),t.setAttribute("data-key",n.id);const o=document.createElement("input");o.type="checkbox",r?(o.setAttribute("checked",!0),t.classList.add("checked")):(o.removeAttribute("checked"),t.classList.remove("checked")),o.addEventListener("click",(n=>{var r;r=t.getAttribute("data-key"),g.forEach((function(n){n.id==r&&(n.completed=!n.completed)})),T(g),E(g)})),document.createElement("span").classList.add("custom-checkbox");const a=document.createElement("input");a.type="text",a.classList.add("text"),r?a.classList.add("checked"):a.classList.remove("checked"),a.value=e,a.setAttribute("readonly","readonly"),a.addEventListener("click",(n=>{}));const i=document.createElement("div");i.innerText="Edit",i.classList.add("actions"),i.addEventListener("click",(n=>{a.hasAttribute("readonly")?(a.removeAttribute("readonly"),i.innerText="Save",a.focus()):(a.setAttribute("readonly","readonly"),i.innerText="Edit",T(t.getAttribute("data-key"),a.value))}));const c=document.createElement("div");c.innerText="Delete",c.classList.add("actions"),c.addEventListener("click",(()=>{var n;n=t.getAttribute("data-key"),g.forEach((function(r){r.id==n&&(g.splice(g.indexOf(r),1),E(g),A())})),E(g)})),t.append(o),t.append(a),n.completed||t.append(i),t.append(c),j.append(t)}))}function L(n){F.innerHTML="",null!==n&&n.forEach((function(n){const r=n.projectname,e=n.projectid,t=document.createElement("li"),o=document.createElement("span");t.classList.add("project"),t.setAttribute("data-key",e),t.setAttribute("id",e),t.innerHTML=r,t.addEventListener("click",(n=>{y(e),S()})),e==b&&t.classList.add("selected-project"),o.classList.add("material-symbols-outlined"),o.innerText="delete",o.addEventListener("click",(()=>{var n;n=t.getAttribute("data-key"),v.forEach((function(r){r.projectid==n&&(v.splice(v.indexOf(r),1),n==b&&0!==v.length&&y(v[0].projectid),A(),S())})),L(v),A(),S()})),t.append(o),F.append(t)}))}function A(){localStorage.setItem("projectsList",JSON.stringify(v)),localStorage.setItem("activeProjId",b),localStorage.setItem("activeTasks",JSON.stringify(g))}function S(){const n=localStorage.getItem("projectsList");if(v.length>0){null==b&&(b="default-project");const r=localStorage.getItem("activeProjId");v=JSON.parse(n),L(v),v.forEach((function(n){n.projectid==r&&(g=n.tasks,E(g))}))}else v=[{projectid:"default-project",projectname:"Default",tasks:[]}],y("default-project"),g=[],A(),L(v),E(g)}function T(n,r){g.forEach((function(e){e.id==n&&(e.name=r,A())}))}document.querySelector("#add-project-btn").addEventListener("click",(n=>{let r=prompt("Enter New Project Name");null!==r&&""!==r&&(function(n){const r={projectid:Date.now(),projectname:n,tasks:[]};v.push(r),A(),y(r.projectid)}(r),S())})),k.addEventListener("submit",(n=>{n.preventDefault(),function(n,r){v.forEach((function(e){if(e.projectid==b&&""!==n){const t={id:Date.now(),name:n,completed:!1};e.tasks.push(t),g=e.tasks,A(),S(),r.value=""}}))}(w.value,w),E(g)})),window.addEventListener("DOMContentLoaded",S())})()})();