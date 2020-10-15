!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("Input",[],r):"object"==typeof exports?exports.Input=r():e.Input=r()}(window,(function(){return function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=20)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("styled-components")},function(e,r,n){"use strict";n.r(r),n.d(r,"Colors",(function(){return o})),n.d(r,"ColorTheme",(function(){return t})),n.d(r,"Theme",(function(){return a}));var o={white:{normal:"#f8f8f8"},black:{normal:"#0e0e10"},grey:{_15:"#f8f8f8",lighter:"#e6e6e6",light:"#c2c2c2",lightNormal:"#a1a1a1",normal:"#7F7F7F",dark:"#4C4C4C",darker:"#191919"},blue:{light:"#86B2DE",normal:"#4588CD",_150:"#236FB5",dark:"#265C96",_250:"#1E4579",darker:"#1B3059"},green:{light:"#66C430",normal:"#42801F",dark:"#0A5405",darker:"#21400F"},yellow:{light:"#FFE478",normal:"#FFD630",dark:"#FFBF05"},orange:{light:"#FFB56C",normal:"#FF8E1D",dark:"#FF710B"},red:{light:"#FF441F",normal:"#BF3317",dark:"#80220F",darker:"#401108"}},t={spinner:{background:o.grey.light,foreground:o.green.normal},alerts:{success:{background:o.green.normal,foreground:o.white.normal},error:{background:o.red.dark,foreground:o.white.normal},warning:{background:o.yellow.normal,foreground:o.black.normal},info:{background:o.blue.dark,foreground:o.white.normal}},login:{text:"#000",screenBackgroundColor:"#01cafc",illustrationContrastColor:"#005063",footerTextColor:"#ffffff",footerBackgroundColor:"#000000",languageSelectActiveColor:"#ffffff",languageSelectInactiveColor:"#000000"},alertBox:{error:{top:o.red.normal,background:"rgba(242,110,115,0.34)",text:o.black.normal},success:{top:o.green.normal,background:"rgb(210,210,210)",text:o.black.normal},warning:{top:o.orange.normal,background:o.yellow.light,text:o.black.normal},info:{top:o.yellow.normal,background:"rgb(210,210,210)",text:o.black.normal}},input:{borderBottomColor:o.grey.dark,label:o.grey.dark},checkbox:{color:o.green.light},background:{light:o.green.light,normal:o.green.normal,dark:o.green.dark,darker:o.green.darker},navbar:{background:o.green.light,font:o.black.normal},sidebar:{hoverBackground:"#d5d5d5",hoverFont:o.black.normal,background:"#fafafa",activeMenu:"#f0f0f0",activeMenuitem:"#d5d5d5",staticItem:"#f0f0f0",staticItemFont:o.black.normal,font:o.black.normal,border:"#e5e5e5",insetShadow:"#707070"},font:{headline:"#4c4c4d",subheadline:"#4c4c4d",caption:"#4c4c4d",textlink:"#4c4c4d",text:"#4c4c4d",tiny:o.grey.light},button:{normal:{text:"white",background:"#4c4c4d",hover:"#212121",disabled:o.grey.light},abort:{text:o.black.normal,background:o.grey.light,hover:o.grey.normal,disabled:o.grey.light},icon:{background:"transparent",hover:o.grey.lighter,active:o.grey.light}},searchable:{primary25:"rgb(211,211,211)",primary50:"rgb(189,189,189)",primary75:"rgb(163,163,163)",primary:"rgb(115,115,115)"},severity:{info:o.blue.normal,warning:o.orange.normal,high:o.red.normal,critical:o.red.dark},error:{color:"#F65656",background:o.white.normal},bordered:!1,base:"#7EC14B"},a={default:{color:o.grey.dark,font:"DroidSans, sans-serif",background:"#fafafa"},info:{backgroundColor:o.blue.light,foregroundColor:"#FFF"},success:{backgroundColor:o.green.normal,foregroundColor:"#FFF"},warning:{backgroundColor:o.orange.normal,foregroundColor:"#FFF"},error:{backgroundColor:o.red.normal,foregroundColor:"#FFF"},action:{backgroundColor:t.background.dark,foregroundColor:"#FFF"},severity:{info:t.severity.info,warning:t.severity.warning,high:t.severity.high,critical:t.severity.critical}}},function(e,r){e.exports=require("core-js/modules/es.array.slice")},function(e,r){e.exports=require("@material-ui/core")},function(e,r){e.exports=require("core-js/modules/es.symbol")},function(e,r){e.exports=require("core-js/modules/es.object.freeze")},,,,,,,,,,,,,,function(e,r,n){e.exports=n(30)},function(e,r){e.exports=require("core-js/modules/es.array.filter")},function(e,r){e.exports=require("core-js/modules/es.array.for-each")},function(e,r){e.exports=require("core-js/modules/es.array.index-of")},function(e,r){e.exports=require("core-js/modules/es.array.map")},function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},function(e,r){e.exports=require("core-js/modules/es.object.keys")},function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")},,function(e,r,n){"use strict";n.r(r),n.d(r,"Form",(function(){return x})),n.d(r,"Input",(function(){return P}));n(5),n(21),n(22),n(23),n(24),n(3),n(6),n(25),n(26),n(27),n(28);var o=n(0),t=n.n(o),a=n(4),l=n(1),i=n.n(l),u=n.p+"assets/check.cfba8aca.svg",c=n.p+"assets/clear.f0c2df69.svg",d=n(2);function f(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function s(){var e=k(["\n        color: ",";\n      "]);return s=function(){return e},e}function p(){var e=k(["\n      input, label {\n      ","\n    }\n\n\n  .MuiInput-underline, .MuiFilledInput-underline {\n    &:after{\n       border-color: ",";\n    }\n\n    &:hover {\n      border-bottom: none;\n    }\n\n    &:hover:not(:disabled):before{\n      border-color: ",";\n    }\n\n  }\n\n  .MuiFormLabel-root.Mui-focused {\n    color: ",";\n  }\n"]);return p=function(){return e},e}function m(){var e=k(["\n   & {display: flex;\n  flex-grow: 1;\n  margin: 0;\n  font-family: 'DroidSans', Arial, sans-serif;\n\n  /* All following elements with the same selector - https://developer.mozilla.org/de/docs/Web/CSS/Adjacent_sibling_selectors*/\n  & + & {\n    margin-left: 1.25rem;\n  }\n\n  width: 100%;\n  margin-bottom: 1rem;}\n"]);return m=function(){return e},e}function b(){var e=k(["\n  height: 1.00rem;\n"]);return b=function(){return e},e}function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){h(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function h(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function v(){var e=k(["\n  box-sizing: border-box;\n"]);return v=function(){return e},e}function k(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var F=i.a.form(v());function x(e){return t.a.createElement(F,y({},e),e.children)}var j=i.a.img(b()),O=i()(a.FormControl)(m()),w=i()(a.TextField)(p(),(function(e){return e.readonly&&Object(l.css)(s(),(function(e){var r,n;return(null==e||null===(r=e.theme)||void 0===r||null===(n=r.font)||void 0===n?void 0:n.text)||d.ColorTheme.font.text}))}),(function(e){var r,n;return(null==e||null===(r=e.theme)||void 0===r||null===(n=r.input)||void 0===n?void 0:n.borderBottomColor)||d.ColorTheme.input.borderBottomColor}),(function(e){var r,n;return(null==e||null===(r=e.theme)||void 0===r||null===(n=r.input)||void 0===n?void 0:n.borderBottomColor)||d.ColorTheme.input.borderBottomColor}),(function(e){var r,n;return(null==e||null===(r=e.theme)||void 0===r||null===(n=r.input)||void 0===n?void 0:n.label)||d.ColorTheme.input.label})),C=function(e){var r=t.a.createRef(),n=e.isValid,o=e.adornment,l=e.helperText,i=e.readOnly,d=e.disabled,s=f(e,["isValid","adornment","helperText","readOnly","disabled"]);return"string"!=typeof l&&(l=void 0),!0===n?t.a.createElement(w,y(y({readOnly:i,disabled:d||i,inputRef:e.inputRef,InputLabelProps:{style:{fontFamily:"'DroidSans', Arial, sans-serif"}},helperText:l},s),{},{InputProps:{endAdornment:t.a.createElement(a.InputAdornment,{position:"end"},t.a.createElement(j,{src:u})),startAdornment:o,style:{fontFamily:"'DroidSans', Arial, sans-serif"},inputRef:function(n){e.inputRef&&e.inputRef(n),r=n}}})):null==n?t.a.createElement(w,y({readOnly:i,disabled:d||i,inputRef:e.inputRef,InputLabelProps:{style:{fontFamily:"'DroidSans', Arial, sans-serif"}},InputProps:{style:{fontFamily:"'DroidSans', Arial, sans-serif"},startAdornment:o,inputRef:function(n){e.inputRef&&e.inputRef(n),r=n}},helperText:l},s)):(("string"==typeof n||t.a.isValidElement(n))&&(l=n),Array.isArray(n)&&(l=t.a.createElement(t.a.Fragment,null,n.map((function(e){return t.a.createElement("div",{style:{marginBottom:"5px"},key:e},e)})))),t.a.createElement(w,y(y({readOnly:i,disabled:d||i,inputRef:e.inputRef,InputLabelProps:{style:{fontFamily:"'DroidSans', Arial, sans-serif"}},FormHelperTextProps:{component:"div"},helperText:l,error:!0},s),{},{InputProps:{endAdornment:t.a.createElement(a.InputAdornment,{position:"end"},t.a.createElement(j,{src:c,onClick:function(e){if(r)try{var n=r;Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set.call(n,"");var o=new Event("input",{bubbles:!0});n.dispatchEvent(o)}catch(e){}}})),startAdornment:o,style:{fontFamily:"'DroidSans', Arial, sans-serif"},inputRef:function(n){e.inputRef&&e.inputRef(n),r=n}}})))};function P(e){return t.a.createElement(O,null,t.a.createElement(C,y({},e)))}}])}));
//# sourceMappingURL=Input.js.map