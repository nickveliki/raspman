(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{195:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(39),o=t(9),c=t(28),i=t(32),u=t(6),s=t(7);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,r,l=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(l.push(a.value),!n||l.length!==n);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==t.return||t.return()}finally{if(c)throw r}}return l}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var h=function(e){return r.a.createElement(o.a,{load:function(){return Promise.all([t.e(1),t.e(9)]).then(t.bind(null,191))}},(function(n){return n?r.a.createElement(n,e):r.a.createElement(s.a,null)}))},d=function(e){return r.a.createElement(o.a,{load:function(){return t.e(11).then(t.bind(null,184))}},(function(e){return e?r.a.createElement(e,{allInputsClass:"marginSmall",className:"register",buttonClass:"white noborder pointer mTextbtnback marginMedium",passwordPlaceholder:"neues Passwort",confirmStringPlaceholder:"Passworthinweis",changePassword:function(e,n){var t,a;null!=(t=window.location.href,a={},t.split("?")[1].split("&").forEach((function(e){var n=m(e.split("="),2),t=n[0],r=n[1];a[t]=r})),a).uid&&e.length}}):r.a.createElement(s.a,null)}))},p=function(e){return r.a.createElement(o.a,{load:function(){return t.e(13).then(t.bind(null,185))}},(function(e){return e?r.a.createElement(e,{className:"register",lognameClass:"marginMedium",placeholder:"Name",buttonClass:"white noborder pointer mTextbtnback",submit:function(e){}}):r.a.createElement(s.a,null)}))},b=Object(u.b)()((function(e){var n=Object(c.f)();return r.a.createElement(o.a,{load:function(){return t.e(14).then(t.bind(null,186))}},(function(a){return a?r.a.createElement(a,{className:"register",buttonClass:"white noborder pointer mTextbtnback",namePlaceholder:"Name",emailPlaceholder:"Passworthinweis",passwordPlaceholder:"Passwort, min 8 Zeichen",passwordrepPlaceholder:"Password wiederholen",buttonAndCheckboxClass:"infofield inputwidth",allInputsClass:"marginSmall",register:function(a,r,l,o,c){c&&a.length>0&&r.length>0&&l.length>7&&l==o&&t.e(0).then(t.bind(null,43)).then((function(t){(0,t.register)(a,l,r).then((function(){n.push("/")}),(function(n){e.dispatch({type:"seterror",error:n})}))}))}}):r.a.createElement(s.a,null)}))})),E=Object(u.b)((function(e){return e}))((function(e){return r.a.createElement(o.a,{load:function(){return t.e(12).then(t.bind(null,187))}},(function(n){return n?r.a.createElement(n,{className:"register",buttonClass:"white noborder pointer mTextbtnback",namePlaceholder:"Name",passwordPlaceholder:"Passwort, min 8 Zeichen",passwordrepPlaceholder:"Password wiederholen",emailrepPlaceholder:"Passworthinweis",buttonAndCheckboxClass:"infofield inputwidth",patch:function(n,a,r,l){var o=!0;n||a||r||(o=!1),a&&!a.length&&(o=!1),r&&(r.length<8||r!=l)&&(o=!1),o&&t.e(0).then(t.bind(null,43)).then((function(t){(0,t.patch)(n,r,a,e.state.token).then((function(){n&&e.dispatch({type:"setname",name:n})}),(function(n){e.dispatch({type:"seterror",error:n})}))}))},allInputsClass:"marginSmall"}):r.a.createElement(s.a,null)}))})),w=function(){return r.a.createElement(o.a,{load:function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,194))}},(function(e){return e?r.a.createElement(e,null):r.a.createElement(s.a,null)}))},g=function(){return r.a.createElement(o.a,{load:function(){return Promise.all([t.e(5),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,190))}},(function(e){return e?r.a.createElement(e,null):r.a.createElement(s.a,null)}))},P=function(){return r.a.createElement(o.a,{load:function(){return Promise.all([t.e(2),t.e(3),t.e(7)]).then(t.bind(null,193))}},(function(e){return e?r.a.createElement(e,null):r.a.createElement(s.a,null)}))};n.default=Object(u.b)((function(e){return e}))((function(e){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"fill"},r.a.createElement("div",{className:"title"},"Home, sweet Home!"),r.a.createElement(o.a,{load:function(){return Promise.all([t.e(1),t.e(2),t.e(10)]).then(t.bind(null,192))}},(function(e){return e?r.a.createElement(e,null):r.a.createElement(s.a,{size:"small"})})),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",component:h,exact:!0}),r.a.createElement(c.a,{path:"/Registrieren",component:b,exact:!0}),r.a.createElement(c.a,{path:"/Passwortvergessen",component:p,exact:!0}),r.a.createElement(c.a,{path:"/Changepw",component:d,exact:!0}),r.a.createElement(c.a,{path:"/Profile",component:function(){return e.state.token?r.a.createElement(E,e):l.a}}),r.a.createElement(c.a,{path:"/ShoppingCart",component:w,exact:!0}),r.a.createElement(c.a,{path:"/Passman",component:P,exact:!0}),r.a.createElement(c.a,{component:l.a}))),e.state.token&&r.a.createElement(g,null))}))},39:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(32);n.a=function(){return r.a.createElement("div",null,"404! - ",r.a.createElement(l.b,{to:"/"},"Go Home"))}}}]);