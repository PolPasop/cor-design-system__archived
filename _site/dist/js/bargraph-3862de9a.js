function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function r(n,e){return(r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,e,t){return(a=o()?Reflect.construct:function(n,e,t){var o=[null];return o.push.apply(o,e),n=new(Function.bind.apply(n,o)),t&&r(n,t.prototype),n}).apply(null,arguments)}function i(n){var e="function"==typeof Map?new Map:void 0;return(i=function(n){function o(){return a(n,arguments,t(this).constructor)}if(null===n||-1===Function.toString.call(n).indexOf("[native code]"))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,o)}return o.prototype=Object.create(n.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r(o,n)})(n)}function c(n){var e=o();return function(){var r=t(n);if(e){var o=t(this).constructor;r=Reflect.construct(r,arguments,o)}else r=r.apply(this,arguments);if(!r||"object"!=typeof r&&"function"!=typeof r){if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");r=this}return r}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var u=document.createElement("template");u.innerHTML="\n  <style>\n  :host {\n    display: block;\n    contain: content;\n  }\n\n  ul {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    line-height: 2.5rem;\n    list-style: none;\n    padding: 0;\n  }\n  \n  li:nth-child(2n+1) {\n    --color: #181;\n  }\n\n  li:nth-child(3n+1) {\n    --color: #33a;\n  }\n\n  li:nth-child(4n+1) {\n    --color: #c38;\n  }\n\n  li {\n    --size: calc(var(--number) * 0.08rem);\n\n    color: var(--color);\n    line-height: var(--size);\n    list-style: none;\n    font-size: max( 1rem, var(--size));\n    padding: 0.125rem 0.25rem;\n  }\n  \n  \n\n  </style>\n  <ul>\n    ".concat([{name:"nine",number:10},{name:"wax",number:15},{name:"abaft",number:20},{name:"shiver",number:25},{name:"consist",number:30},{name:"butter",number:35},{name:"cup",number:40},{name:"plausible",number:45},{name:"delight",number:50},{name:"stiff",number:2},{name:"capable",number:3},{name:"big",number:100},{name:"way",number:88},{name:"continue",number:63},{name:"polish",number:42},{name:"illegal",number:21},{name:"drown",number:11},{name:"scrape",number:96}].map((function(n){return'<li data-number="'.concat(n.number,'" style="--number:').concat(n.number,';">').concat(n.name,"</li>")})).join(""),"\n  </ul >\n  ");var s=function(t){function r(){n(this,r);var e=o.call(this);return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(u.content.cloneNode(!0)),e}e(r,i(HTMLElement));var o=c(r);return r}();customElements.define("cor-word-cloud",s);var f=document.createElement("template");f.innerHTML='\n  <style>\n    span {\n      align-items: center;\n      background: white;\n      border: solid 1px green;\n      color: white;\n      display: flex;\n      height: 50px;\n      padding-left: 2rem;\n      position: relative;\n      z-index: 0;\n    }\n\n    @keyframes slideInFromLeft {\n      0% {\n        transform: translateX(-100%);\n      }\n      100% {\n        transform: translateX(0);\n      }\n    }\n\n    span:after {\n      background: green;\n      content: "";\n      display: block;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      transition: 1s;\n      transform: scaleX(calc(var(--value) * 1%));\n      width: calc(var(--value) * 1%);\n      z-index: -1;\n    }\n  </style>\n  <slot></slot>\n';var m=function(t){function r(){n(this,r);var e=o.call(this);return e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(f.content.cloneNode(!0)),e}e(r,i(HTMLElement));var o=c(r);return r}();function p(n){var e=Array.isArray(n)?l(n):void 0;if(e||(e="undefined"!=typeof Symbol&&Symbol.iterator in Object(n)?Array.from(n):void 0),!e)n:{if(n){if("string"==typeof n){e=l(n,void 0);break n}if("Object"===(e=Object.prototype.toString.call(n).slice(8,-1))&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e){e=Array.from(n);break n}if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)){e=l(n,void 0);break n}}e=void 0}if(!(n=e))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");return n}customElements.define("cor-bar-graph",m);export{p as _};
//# sourceMappingURL=bargraph-3862de9a.js.map
