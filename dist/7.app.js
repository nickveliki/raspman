(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(6),o=n(31),l=n(27),s=n(39);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=c(Object(r.useState)(""),2),i=t[0],o=t[1],l=c(Object(r.useState)(!1),2),s=l[0],u=l[1];return!e.myKey&&e.encrypted_pw&&e.iv&&!i&&n.e(0).then(n.bind(null,43)).then((function(t){(0,t.decryptLocal)(e.encrypted_pw,e.iv,e.target_pw_id,e.sharer_id).then(o,console.error)})),a.a.createElement("div",{className:window.innerWidth<465?"fill-w":"grid-5",style:{alignItems:"center"}},a.a.createElement("label",{style:{wordBreak:"break-all"}},e.target_pw_id),!e.myKey&&!e.target_temp_pub&&a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n.e(0).then(n.bind(null,43)).then((function(t){(0,t.acceptPW)(e.token,e.sharer_id,e.target_pw_id,e.sharer_temp_pub).then(console.log,console.error)}))},className:"white noborder mTextbtnback pointer"},"accept")),e.myKey&&e.target_temp_pub&&!e.encrypted_pw&&a.a.createElement("div",null,a.a.createElement("button",{className:"white noborder mTextbtnback pointer",onClick:function(){n.e(0).then(n.bind(null,43)).then((function(t){var n=t.sendEncryptedPW;e.passwordDecrypt().then((function(t){n(e.token,e.target_id,e.target_pw_id,e.target_temp_pub,t)}))}))}},"send encrypted key")),!e.myKey&&e.encrypted_pw&&a.a.createElement("div",null,a.a.createElement("label",{onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},s?i:new Array(i.length).fill("*").join(""))),i&&a.a.createElement("div",null,a.a.createElement("button",{className:"white noborder mTextbtnback pointer marginSmall",onClick:function(){navigator.clipboard.writeText(e.decrypted).then(console.log,console.log)}},"→clipboard")),i&&a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n.e(0).then(n.bind(null,43)).then((function(t){(0,t.setPassword)(e.target_pw_id,e.hash,i,e.token).catch(console.log)}))},className:"white noborder mTextbtnback pointer"},"import to db")))},f=n(37),p=n(33),h=n(30);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){var t=m(Object(r.useState)(!1),2),i=t[0],o=t[1],l=m(Object(r.useState)([]),2),s=l[0],c=l[1],u=m(Object(r.useState)(void 0),2),d=u[0],f=u[1];return a.a.createElement("div",{className:window.innerWidth<465?"fill-w":"grid-5",style:{alignItems:"center"}},a.a.createElement("label",{style:{wordBreak:"break-all"}},e.id),e.decrypted?a.a.createElement("label",null,e.decrypted):a.a.createElement("div",null,a.a.createElement("button",{onClick:e.decrypt,className:"white noborder mTextbtnback pointer marginSmall"},"Decrypt")),e.decrypted&&a.a.createElement("div",null,a.a.createElement("button",{className:"white noborder mTextbtnback pointer marginSmall",onClick:function(){navigator.clipboard.writeText(e.decrypted).then(console.log,console.log)}},"→clipboard")),a.a.createElement("div",null,a.a.createElement("button",{className:"white noborder mTextbtnback pointer marginSmall",onClick:function(){i||n.e(0).then(n.bind(null,43)).then((function(t){(0,t.getpwmanusers)(e.token).then((function(e){c(e),e.length&&f(e[0].id)}))})),o(!i)}},i?"don't ":"","share key")),i&&a.a.createElement("div",{className:"login marginSmall"},a.a.createElement("select",{className:"white",onChange:function(e){f(s[e.target.selectedIndex].id)}},s.map((function(e){var t=e.name;return a.a.createElement("option",{key:t},t)}))),a.a.createElement("button",{className:"white noborder pointer login",onClick:function(){n.e(0).then(n.bind(null,43)).then((function(t){(0,t.sharePW)(e.token,d,e.id)}))}},a.a.createElement("img",{className:"btnimg",src:p.a}))))},E=n(41);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t=g(Object(r.useState)(""),2),n=t[0],i=t[1],s=g(Object(r.useState)(""),2),c=s[0],u=s[1];return a.a.createElement("div",null,a.a.createElement(l.a,{onChange:u,value:c,placeholder:"password id"}),a.a.createElement(l.a,{onChange:i,value:n,placeholder:"password"}),a.a.createElement("button",{onClick:function(){i(Object(o.f)(12))},className:"white noborder pointer login"},a.a.createElement("img",{className:"tinybtnimg",src:E.a})),a.a.createElement("button",{onClick:function(){e.setPassword(c,n),i(""),u("")},className:"white noborder pointer login"},a.a.createElement("img",{className:"tinybtnimg",src:f.a})))};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=Object(i.b)((function(e){return e}))((function(e){var t=R(Object(r.useState)(""),2),i=t[0],c=t[1],u=R(Object(r.useState)(""),2),m=u[0],y=u[1],E=Object(o.b)(e.state.token,"pwman");e.state.token&&!e.state.error&&!e.state.passwords&&E&&n.e(0).then(n.bind(null,43)).then((function(t){(0,t.getPasswords)(e.state.token).then((function(t){e.dispatch({type:"setPasswords",passwords:t})}))}));var g=function(){n.e(0).then(n.bind(null,43)).then((function(t){var n=t.setMasterPassword,r=t.unsetMasterKey,a=t.stopSharedPWsQuerys,o=t.getSharedPWs;n(e.state.token,i).then((function(t){var n=t.hash,i=t.salt;e.dispatch({type:"setMasterPasswordData",MasterKeyConfirmed:!0,passwords:[].concat(K(e.state.passwords),[{id:"Master",hash:n,salt:i}])}),o(e.state.token,e.dispatch),setTimeout((function(){r(),a(),e.dispatch({type:"unsetMasterKeyConfirmed",MasterKeyConfirmed:!1,passwords:e.state.passwords.map((function(e){return{id:e.id,salt:e.salt}}))}),c("")}),3e5)}),(function(t){e.dispatch({type:"setError",error:"string"==typeof t?t:JSON.stringify(t)})}))}))},v=function(){n.e(0).then(n.bind(null,43)).then((function(t){var n=t.checkMasterKey,r=t.unsetMasterKey,a=t.stopSharedPWsQuerys,o=t.getSharedPWs,l=e.state.passwords.find((function(e){return"Master"==e.id})).salt;n(i,l,e.state.token).then((function(t){e.dispatch({type:"setMasterKeyConfirmed",passwords:[].concat(K(e.state.passwords.filter((function(e){return"Master"!=e.id}))),[C(C({},e.state.passwords.find((function(e){return"Master"==e.id}))),{},{hash:t})]),MasterKeyConfirmed:!0,error:"Master Password successfully confirmed"}),o(e.state.token,e.dispatch),setTimeout((function(){r(),a(),e.dispatch({type:"unsetMasterKeyConfirmed",MasterKeyConfirmed:!1,passwords:e.state.passwords.map((function(e){return{id:e.id,salt:e.salt}}))}),c("")}),3e5)}),(function(t){e.dispatch({type:"setError",error:"string"==typeof t?t:JSON.stringify(t)})}))}))};return e.state.passwords&&e.state.passwords.sort((function(e,t){return e.id<t.id?-1:1})),E?a.a.createElement(h.a,{fill:!0,panelHead:a.a.createElement("div",{className:"grid-2"},"Password Manager ",e.state.passwords&&!e.state.passwords.find((function(e){return"Master"==e.id}))?a.a.createElement("div",{className:"login"},a.a.createElement(l.a,{onChange:c,value:i,placeholder:"set master password",onEnter:g}),a.a.createElement("button",{onClick:g,className:"white noborder pointer login"},a.a.createElement("img",{className:"tinybtnimg",src:f.a}))):!e.state.MasterKeyConfirmed&&a.a.createElement("div",{className:"login"},a.a.createElement(l.a,{onChange:c,value:i,onEnter:v,placeholder:"enter your master password"}),a.a.createElement("button",{className:"noborder login pointer white",onClick:v},a.a.createElement("img",{className:"tinybtnimg",src:p.a})))),innerClassName:"fill overflow",all:"marginMedium",components:e.state.MasterKeyConfirmed?[a.a.createElement(l.a,{placeholder:"search id",onChange:y,value:m}),!(!e.state.sharedpws||!e.state.sharedpws.length)&&a.a.createElement(h.a,{fill:!0,panelHead:"shared passwords",innerClassName:"overflow",components:e.state.sharedpws.map((function(t){return a.a.createElement(d,S({},t,{token:e.state.token,myKey:Object(o.d)(e.state.token)==t.sharer_id,hash:e.state.passwords.find((function(e){return"Master"==e.id})).hash,passwordDecrypt:function(){return new Promise((function(r,a){Object(o.d)(e.state.token)==t.sharer_id?n.e(0).then(n.bind(null,43)).then((function(n){(0,n.decryptPW)(t.target_pw_id,e.state.passwords.find((function(e){return"Master"==e.id})).hash,e.state.token).then(r,a)})):a("not my password")}))}}))}))}),!!e.state.passwords&&a.a.createElement(h.a,{fill:!0,panelHead:"stored passwords",innerClassName:"overflow",components:e.state.passwords.filter((function(e){var t=e.id;return"Master"!=t&&(!m.length||t.match(new RegExp(m,"i")))})).map((function(t){return a.a.createElement(b,S({token:e.state.token},t,{decrypt:function(){n.e(0).then(n.bind(null,43)).then((function(n){(0,n.decryptPW)(t.id,e.state.passwords.find((function(e){return"Master"==e.id})).hash,e.state.token).then((function(n){e.dispatch({type:"setDecodedPW",passwords:[].concat(K(e.state.passwords.filter((function(e){return e.id!=t.id}))),[C(C({},t),{},{decrypted:n})])})}),(function(t){console.error(t),e.dispatch({type:"seterror",error:"string"==typeof t?t:JSON.stringify(t)})}))}))}}))}))}),a.a.createElement(h.a,{panelHead:"create new password",component:a.a.createElement(w,{setPassword:function(t,r){n.e(0).then(n.bind(null,43)).then((function(n){var a=n.setPassword;"all"!=t&&"Master"!=t&&a(t,e.state.passwords.find((function(e){return"Master"==e.id})).hash,r,e.state.token).then((function(n){var a=n.salt,i=n.crypt;e.dispatch({type:"addPW",passwords:[].concat(K(e.state.passwords),[{id:t,salt:a,crypt:i,decrypted:r}])})}),(function(t){e.dispatch({type:"seterror",error:"string"==typeof t?t:JSON.stringify(t)})}))}))}})})]:[]}):a.a.createElement(s.a,null)}))},27:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=Object(r.forwardRef)((function(e,t){return a.a.createElement("div",{className:e.className||"labeledInput",ref:t,style:e.style?e.style.div:{}},a.a.createElement("label",{className:e.labelClass||"labeledInputLabel",style:e.style?e.style.label:{}},e.label),a.a.createElement("input",{className:e.inputClass||"labeledInputInput",style:e.style?e.style.input:{},type:e.type||"text",placeholder:e.placeholder,value:e.value,onChange:function(t){e.onChange(t.target.value)},onKeyUp:function(t){"Enter"==t.key&&e.onEnter&&e.onEnter()}}))}))},30:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=Object(r.forwardRef)((function(e,t){return a.a.createElement("div",{style:e.style,className:"panel-back".concat(e.margin?" margin"+e.margin:"").concat(e.fill?" fill":"").concat(e.modal?e.visible?" groupchats":" modal_hidden":"").concat(e.modal&&e.layer?" "+e.layer+"layer":"").concat(e.nooverflow?" overflowNo":"")},a.a.createElement("div",{className:"panel".concat(e.fill||e.modal?" fill":"").concat(e.className?" "+e.className:"")},e.panelHead&&!e.h&&a.a.createElement("h3",null,e.panelHead),e.panelHead&&1==e.h&&a.a.createElement("h1",null,e.panelHead),e.panelHead&&2==e.h&&a.a.createElement("h2",null,e.panelHead),e.panelHead&&4==e.h&&a.a.createElement("h4",null,e.panelHead),e.panelHead&&5==e.h&&a.a.createElement("h5",null,e.panelHead),e.panelHead&&6==e.h&&a.a.createElement("h6",null,e.panelHead),a.a.createElement("div",{className:e.innerClassName,ref:t,style:e.innerStyle},e.component||e.components.map((function(t,n){return a.a.createElement("div",{className:e.all?e.all:e.nthclass&&e.nthclass.find((function(e){return e.i==n}))?e.nthclass.find((function(e){return e.i==n})).class:void 0,key:n},t)})))))}))},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return a}));var r=function(e){return!!e&&JSON.parse(atob(e.split(".")[1])).scopes.includes("admin")},a=function(e){return e?JSON.parse(atob(e.split(".")[1])).id:""},i=function(e){if(!e)return!1;var t=Array.from(arguments).slice(1).filter((function(e){return"string"==typeof e})),n=JSON.parse(atob(e.split(".")[1])).scopes;return n.includes("admin")||0==t.filter((function(e){return!n.includes(e)})).length},o=function(e){switch(Math.floor(Math.log(e)/Math.log(Math.pow(2,10)))){case 1:return"KiBi";case 2:return"MiBi";case 3:return"GiBi";case 4:return"TiBi";case 5:return"PiBi";case 6:return"EiBi";case 7:return"ZiBi";case 8:return"YiBi"}},l=function(e){return e?(e/Math.pow(2,10*Math.floor(Math.log(e)/Math.log(Math.pow(2,10))))).toFixed(1):0};function s(e){return Array.isArray(e)||(e=Array.from(arguments)),"/"+e.map((function(e){return e.split("/").filter((function(e){return e.length}))})).flat().join("/")}var c=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(0==t)return n;var r=Math.ceil(93*Math.random())+32;return e(t-1,n+String.fromCharCode(r))}},37:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAM46vb06xcU6xdY6vf//tbU6zv//zpxC1q1Czv//e///jP//Y///pf//xc4xtaU6zv/33qVC1v//c5RC3v//nN46tf/374RC3pw61vf/UrVCvaU6va3Fra2U5ubOe2O9WmO9nGO9GYSMnK2Urd4p3lpjWjpjWuYI3t4xpRkQ7zoQYxkQxRAQY7WUQrWUEGMQY4RrWoSUWjrv3jrvWjqUWjqU3jrvnDrvGTqUGTqUnBCUWhCU3hCUGRCUnBDv3hDvWjpr3hDvnBDvGTprGTprnBBrWhBr3hBrGRBrnGOUnGPv3nNCEGPvWmOU3mPvnGPvGWOUGWNrnGNr3mNrGXNC5oRC5tactaWce71a5oS93nMQMYS9WoS9nIS9GQApIUJCIUoQ7zoQlEoQxRAQlOaUQuaUEGMQlBlC7zpCYxlCxRBCY2NCY63W5sXmQrW1QrW1EMXmEOYpc4QQY7Upa7Vra7VrELUpEJxCvaXmQqXmEOYIc7UIa7VKa7VKELUIEK0I5tac5qXOe9bOteaMe1qMWoTv3nNCMYTvWoSU3oTvnITvGYSUGYRrnIRr3oRrGe/O5kpC7zpClEpCxRBClGNClCEQEK215vectcWce+a1Qua1EIQQlOZra+ZrEOYpEOYQnOZKa+ZKEOYIELUpnIRCY7VrnLVrQrUpQu/mKbUInLVKnLVKQrUIQu/mCNbO73tCxebv76Vj5t73e60Zva0p5vec5sXOe/fOteate973tbX35q33e633tSFCEOZr7+ZrnIRClOZrQuYpQnsp7zq97zq9azq9rTq9KeZrxXspxRC97xC9axC9rRC9KSEQMWO974QQEO/eSkIQEOZK7+ZKnOZKQuYIQnsI7zq9zjq9Sjq9jDq9COZKxXsIxRC9zhC9ShC9jBC9CGO9zmMQEOYhtSFCMUIQMb1jvaVjvbU65s4QtQAAIaVC75RKxb06zpw673NK3u86tf/vzv/va//vpf/vtf/ve//vjL06tcU6tZxCzggAAM46tdY6tQAAAEEYt5sAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAo8ElEQVR4XrWdQXIbSZJFJRWHBaiqmxy0Cip2USuW0UxLzV2ks+gCfQYdQ0PTru+jbcuqtmVGzX//u0dmgiAJihpPIDMBZEb4i+8eEZkApSdf/5/s1cW/3jw9Ojk68jOby/+5eFUff3f7fwC5uMTv7eftyfbkyI9r7W2P9Ph8barLizr0O9r3BRHDydG1XJf/tq1eaeW9MuPp1Xem+X4gF3LwxP5PsTQ2rISkbQGdbGHdfj+Y7wRySdNv1dCKILd+KLKOTfuEmbecc3RZRTzSvgeIKHBezi0cf/r0qB8279aHfSgKfR+WR4NcEDFy5nq4dtT+N0F28+jXGGeqDVzAo2PscSCvLt0f2RXsJN4PghtWnxZZCag2UMJcPq5nfgzIhfpTHMEfCxGA2zEWFpiYS9iePEaWbwdxL8U4YT/s1cEQbT4DErJM0j6iF/tWECW4GcpuI/ihHiw89hgwMgpj0PzWxP82kAt1tKrZCf70eh+Fff+Bpx9+pXdr/4aBQmFS5htV+RYQBRWh4HhAiwVHfG5/7fyHD3kFivfy2cxcCpr4+U0oDwd5VSHltSNjsslLrcuefnz58mP2esURWc+MNkmxJyfbh/dgDwaREIQVGEsx4l6WuV29lF31m8XhnTp6GM1SLEfbqu5geyDIBSkeRRZalFM8YmMHDOxZvR62h2SgkHwPjK+HgYxp7XYvx/BehuN6PmuSL/1OmY+tk6oUTKVmjqCKqtLD7CEgksMMqmeJEXdkzxrlGQzPfnj25UNxvPygV/1uHVRWBbSp7LLrh4jyABBGrIRVVWkrT/BFhqd2WE9WSvS2j1/6XcMUTRRZkIDC7IVHVX2AHQzyezCixkCBAgJTYPGxUL440duuwIiZQ2vAbfAsWGTM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"}}]);