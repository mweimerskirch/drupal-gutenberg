this.wp=this.wp||{},this.wp.formatLibrary=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=369)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},11:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},123:function(t,e,n){"use strict";var r=n(5),o=n(19),c=n(0);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.icon,n=t.size,a=void 0===n?24:n,l=Object(o.a)(t,["icon","size"]);return Object(c.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:a,height:a},l))}},13:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(34);var o=n(27),c=n(35);function i(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,c=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(t,e)||Object(o.a)(t,e)||Object(c.a)()}},15:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},16:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},17:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(36),o=n(8);function c(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(o.a)(t):e}},181:function(t,e,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M16 4h2v9H7v3l-5-4 5-4v3h9V4z"}));e.a=c},183:function(t,e,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(o.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));e.a=c},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(40);function o(t,e){if(null==t)return{};var n,o,c=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},2:function(t,e){!function(){t.exports=this.lodash}()},22:function(t,e){!function(){t.exports=this.wp.keycodes}()},24:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},256:function(t,e,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(o.Path,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"}));e.a=c},26:function(t,e){!function(){t.exports=this.wp.richText}()},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(24);function o(t,e){if(t){if("string"==typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},28:function(t,e){!function(){t.exports=this.wp.url}()},3:function(t,e){!function(){t.exports=this.wp.components}()},30:function(t,e){!function(){t.exports=this.wp.dom}()},330:function(t,e,n){"use strict";var r=n(0),o=n(7),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"}));e.a=c},34:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},35:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},36:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},369:function(t,e,n){"use strict";n.r(e);var r=n(19),o=n(26),c=n(0),i=n(1),a=n(6),l=n(7),u=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"})),s=Object(i.__)("Bold"),b={name:"core/bold",title:s,tagName:"strong",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,i=t.onFocus;function l(){r(Object(o.toggleFormat)(n,{type:"core/bold"}))}return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RichTextShortcut,{type:"primary",character:"b",onUse:l}),Object(c.createElement)(a.RichTextToolbarButton,{name:"bold",icon:u,title:s,onClick:function(){l(),i()},isActive:e,shortcutType:"primary",shortcutCharacter:"b"}),Object(c.createElement)(a.__unstableRichTextInputEvent,{inputType:"formatBold",onInput:l}))}},f=n(256),p=Object(i.__)("Inline Code"),m={name:"core/code",title:p,tagName:"code",className:null,__unstableInputRule:function(t){var e=t,n=e.start,r=e.text;if("`"!==r.slice(n-1,n))return t;var c=r.slice(0,n-1).lastIndexOf("`");if(-1===c)return t;var i=c,a=n-2;return i===a?t:(t=Object(o.remove)(t,i,i+1),t=Object(o.remove)(t,a,a+1),t=Object(o.applyFormat)(t,{type:"core/code"},i,a))},edit:function(t){var e=t.value,n=t.onChange,r=t.onFocus,i=t.isActive;return Object(c.createElement)(a.RichTextToolbarButton,{icon:f.a,title:p,onClick:function(){n(Object(o.toggleFormat)(e,{type:"core/code"})),r()},isActive:i})}},O=n(5),h=n(16),v=n(15),j=n(8),d=n(18),g=n(11),y=n(17),w=n(3),E=n(22),k=n(181);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(O.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var _=["image"],P=Object(i.__)("Inline image"),T=function(t){return t.stopPropagation()};function A(){var t=window.getSelection();return t.rangeCount?t.getRangeAt(0):null}var R={name:"core/image",title:P,keywords:[Object(i.__)("photo"),Object(i.__)("media")],object:!0,tagName:"img",className:null,attributes:{className:"class",style:"style",url:"src",alt:"alt"},edit:function(t){Object(y.a)(r,t);var e,n=(e=r,function(){var t,n=Object(g.a)(e);if(S()){var r=Object(g.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(d.a)(this,t)});function r(){var t;return Object(h.a)(this,r),(t=n.apply(this,arguments)).onChange=t.onChange.bind(Object(j.a)(t)),t.onKeyDown=t.onKeyDown.bind(Object(j.a)(t)),t.openModal=t.openModal.bind(Object(j.a)(t)),t.closeModal=t.closeModal.bind(Object(j.a)(t)),t.anchorRef=null,t.state={modal:!1},t}return Object(v.a)(r,[{key:"onChange",value:function(t){this.setState({width:t})}},{key:"onKeyDown",value:function(t){[E.LEFT,E.DOWN,E.RIGHT,E.UP,E.BACKSPACE,E.ENTER].indexOf(t.keyCode)>-1&&t.stopPropagation()}},{key:"openModal",value:function(){this.setState({modal:!0})}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"componentDidMount",value:function(){this.anchorRef=A()}},{key:"componentDidUpdate",value:function(t){(!t.isObjectActive&&this.props.isObjectActive||t.activeObjectAttributes.url!==this.props.activeObjectAttributes.url)&&(this.anchorRef=A())}},{key:"render",value:function(){var t=this,e=this.props,n=e.value,r=e.onChange,l=e.onFocus,u=e.isObjectActive,s=e.activeObjectAttributes;return Object(c.createElement)(a.MediaUploadCheck,null,Object(c.createElement)(a.RichTextToolbarButton,{icon:Object(c.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(w.Path,{d:"M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z"})),title:P,onClick:this.openModal,isActive:u}),this.state.modal&&Object(c.createElement)(a.MediaUpload,{allowedTypes:_,onSelect:function(e){var c=e.id,i=e.url,a=e.alt,u=e.width;t.closeModal(),r(Object(o.insertObject)(n,{type:"core/image",attributes:{className:"wp-image-".concat(c),style:"width: ".concat(Math.min(u,150),"px;"),url:i,alt:a}})),l()},onClose:this.closeModal,render:function(t){return(0,t.open)(),null}}),u&&Object(c.createElement)(w.Popover,{position:"bottom center",focusOnMount:!1,anchorRef:this.anchorRef},Object(c.createElement)("form",{className:"block-editor-format-toolbar__image-container-content",onKeyPress:T,onKeyDown:this.onKeyDown,onSubmit:function(e){var o=n.replacements.slice();o[n.start]={type:"core/image",attributes:C({},s,{style:"width: ".concat(t.state.width,"px;")})},r(C({},n,{replacements:o})),e.preventDefault()}},Object(c.createElement)(w.TextControl,{className:"block-editor-format-toolbar__image-container-value",type:"number",label:Object(i.__)("Width"),value:this.state.width,min:1,onChange:this.onChange}),Object(c.createElement)(w.Button,{icon:k.a,label:Object(i.__)("Apply"),type:"submit"}))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.activeObjectAttributes.style;return n===e.previousStyle?null:n?{width:n.replace(/\D/g,""),previousStyle:n}:{width:void 0,previousStyle:n}}}]),r}(c.Component)},M=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M12.5 5L10 19h1.9l2.5-14z"})),F=Object(i.__)("Italic"),N={name:"core/italic",title:F,tagName:"em",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,i=t.onFocus;function l(){r(Object(o.toggleFormat)(n,{type:"core/italic"}))}return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RichTextShortcut,{type:"primary",character:"i",onUse:l}),Object(c.createElement)(a.RichTextToolbarButton,{name:"italic",icon:M,title:F,onClick:function(){l(),i()},isActive:e,shortcutType:"primary",shortcutCharacter:"i"}),Object(c.createElement)(a.__unstableRichTextInputEvent,{inputType:"formatItalic",onInput:l}))}},L=n(28),D=n(60),V=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),B=n(183),z=n(14),H=n(2);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(O.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var G=Object(w.withSpokenMessages)((function(t){var e=t.isActive,n=t.activeAttributes,r=t.addingLink,l=t.value,u=t.onChange,s=t.speak,b=t.stopAddingLink,f=Object(c.useMemo)(H.uniqueId,[r]),p=Object(c.useState)(),m=Object(z.a)(p,2),O=m[0],h=m[1],v=Object(c.useMemo)((function(){var t=window.getSelection();if(t.rangeCount){var n=t.getRangeAt(0);if(r&&!e)return n;var o=n.startContainer;for(o=o.nextElementSibling||o;o.nodeType!==window.Node.ELEMENT_NODE;)o=o.parentNode;return o.closest("a")}}),[r,l.start,l.end]),j=U({url:n.url,opensInNewTab:"_blank"===n.target},O);return Object(c.createElement)(w.Popover,{key:f,anchorRef:v,focusOnMount:!!r&&"firstElement",onClose:b,position:"bottom center"},Object(c.createElement)(a.__experimentalLinkControl,{value:j,onChange:function(t){t=U({},O,{},t);var n=j.opensInNewTab!==t.opensInNewTab&&j.url===t.url,r=n&&void 0===t.url;if(h(r?t:void 0),!r){var c=Object(L.prependHTTP)(t.url),a=function(t){var e={type:"core/link",attributes:{url:t.url}};return t.opensInNewWindow&&(e.attributes.target="_blank",e.attributes.rel="noreferrer noopener"),e}({url:c,opensInNewWindow:t.opensInNewTab});if(Object(o.isCollapsed)(l)&&!e){var f=t.title||c,p=Object(o.applyFormat)(Object(o.create)({text:f}),a,0,f.length);u(Object(o.insert)(l,p))}else{var m=Object(o.applyFormat)(l,a);m.start=m.end,m.activeFormats=[],u(m)}n||b(),!function(t){if(!t)return!1;var e=t.trim();if(!e)return!1;if(/^\S+:/.test(e)){var n=Object(L.getProtocol)(e);if(!Object(L.isValidProtocol)(n))return!1;if(Object(H.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(e))return!1;var r=Object(L.getAuthority)(e);if(!Object(L.isValidAuthority)(r))return!1;var o=Object(L.getPath)(e);if(o&&!Object(L.isValidPath)(o))return!1;var c=Object(L.getQueryString)(e);if(c&&!Object(L.isValidQueryString)(c))return!1;var i=Object(L.getFragment)(e);if(i&&!Object(L.isValidFragment)(i))return!1}return!(Object(H.startsWith)(e,"#")&&!Object(L.isValidFragment)(e))}(c)?s(Object(i.__)("Warning: the link has been inserted but may have errors. Please test it."),"assertive"):s(e?Object(i.__)("Link edited."):Object(i.__)("Link inserted."),"assertive")}},forceIsEditingLink:r}))}));function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var W=Object(i.__)("Link"),Q={name:"core/link",title:W,tagName:"a",className:null,attributes:{url:"href",target:"target"},__unstablePasteRule:function(t,e){var n=e.html,r=e.plainText;if(Object(o.isCollapsed)(t))return t;var c=(n||r).replace(/<[^>]+>/g,"").trim();return Object(L.isURL)(c)?(window.console.log("Created link:\n\n",c),Object(o.applyFormat)(t,{type:"core/link",attributes:{url:Object(D.decodeEntities)(c)}})):t},edit:Object(w.withSpokenMessages)(function(t){Object(y.a)(r,t);var e,n=(e=r,function(){var t,n=Object(g.a)(e);if(K()){var r=Object(g.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(d.a)(this,t)});function r(){var t;return Object(h.a)(this,r),(t=n.apply(this,arguments)).addLink=t.addLink.bind(Object(j.a)(t)),t.stopAddingLink=t.stopAddingLink.bind(Object(j.a)(t)),t.onRemoveFormat=t.onRemoveFormat.bind(Object(j.a)(t)),t.state={addingLink:!1},t}return Object(v.a)(r,[{key:"addLink",value:function(){var t=this.props,e=t.value,n=t.onChange,r=Object(o.getTextContent)(Object(o.slice)(e));r&&Object(L.isURL)(r)?n(Object(o.applyFormat)(e,{type:"core/link",attributes:{url:r}})):r&&Object(L.isEmail)(r)?n(Object(o.applyFormat)(e,{type:"core/link",attributes:{url:"mailto:".concat(r)}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1}),this.props.onFocus()}},{key:"onRemoveFormat",value:function(){var t=this.props,e=t.value,n=t.onChange,r=t.speak;n(Object(o.removeFormat)(e,"core/link")),r(Object(i.__)("Link removed."),"assertive")}},{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.activeAttributes,r=t.value,o=t.onChange;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(c.createElement)(a.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),e&&Object(c.createElement)(a.RichTextToolbarButton,{name:"link",icon:V,title:Object(i.__)("Unlink"),onClick:this.onRemoveFormat,isActive:e,shortcutType:"primaryShift",shortcutCharacter:"k"}),!e&&Object(c.createElement)(a.RichTextToolbarButton,{name:"link",icon:B.a,title:W,onClick:this.addLink,isActive:e,shortcutType:"primary",shortcutCharacter:"k"}),(this.state.addingLink||e)&&Object(c.createElement)(G,{addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:e,activeAttributes:n,value:r,onChange:o}))}}]),r}(c.Component))},$=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"})),q=Object(i.__)("Strikethrough"),J={name:"core/strikethrough",title:q,tagName:"s",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,i=t.onFocus;return Object(c.createElement)(a.RichTextToolbarButton,{icon:$,title:q,onClick:function(){r(Object(o.toggleFormat)(n,{type:"core/strikethrough"})),i()},isActive:e})}},X={name:"core/underline",title:Object(i.__)("Underline"),tagName:"span",className:null,attributes:{style:"style"},edit:function(t){var e=t.value,n=t.onChange,r=function(){n(Object(o.toggleFormat)(e,{type:"core/underline",attributes:{style:"text-decoration: underline;"}}))};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RichTextShortcut,{type:"primary",character:"u",onUse:r}),Object(c.createElement)(a.__unstableRichTextInputEvent,{inputType:"formatUnderline",onInput:r}))}},Y=n(4),Z=n(123),tt=n(330),et=n(13),nt=n(30);function rt(t,e,n){var r=Object(o.getActiveFormat)(e,t);if(r){var c=r.attributes.style;if(c)return c.replace(new RegExp("^color:\\s*"),"");var i=r.attributes.class;if(i){var l=i.replace(/.*has-(.*?)-color.*/,"$1");return Object(a.getColorObjectByAttributeValues)(n,l).color}}}var ot=function(t){var e=t.addingColor,n=Object(r.a)(t,["addingColor"]),o=Object(c.useMemo)((function(){var t=window.getSelection(),n=t.rangeCount>0?t.getRangeAt(0):null;if(n){if(e)return Object(nt.getRectangleFromRange)(n);var r=n.startContainer;for(r=r.nextElementSibling||r;r.nodeType!==window.Node.ELEMENT_NODE;)r=r.parentNode;var o=r.closest("span");return o?o.getBoundingClientRect():void 0}}),[]);return o?Object(c.createElement)(a.URLPopover,Object(et.a)({anchorRect:o},n)):null},ct=function(t){var e=t.name,n=t.value,r=t.onChange,i=Object(Y.useSelect)((function(t){var e=t("core/block-editor").getSettings;return Object(H.get)(e(),["colors"],[])})),l=Object(c.useCallback)((function(t){if(t){var c=Object(a.getColorObjectByColorValue)(i,t);r(Object(o.applyFormat)(n,{type:e,attributes:c?{class:Object(a.getColorClassName)("color",c.slug)}:{style:"color:".concat(t)}}))}else r(Object(o.removeFormat)(n,e))}),[i,r]),u=Object(c.useMemo)((function(){return rt(e,n,i)}),[e,n,i]);return Object(c.createElement)(a.ColorPalette,{value:u,onChange:l})},it=Object(w.withSpokenMessages)((function(t){var e=t.name,n=t.value,r=t.onChange,o=t.onClose,i=t.isActive,a=t.addingColor;return Object(c.createElement)(ot,{value:n,isActive:i,addingColor:a,onClose:o,className:"components-inline-color-popover"},Object(c.createElement)(ct,{name:e,value:n,onChange:r}))})),at=Object(i.__)("Text Color"),lt=[];var ut={name:"core/text-color",title:at,tagName:"span",className:"has-inline-color",attributes:{style:"style",class:"class"},edit:function(t){var e=t.value,n=t.onChange,r=t.isActive,i=t.activeAttributes,l=Object(Y.useSelect)((function(t){var e,n=t("core/block-editor");return e=n&&n.getSettings?n.getSettings():{},{colors:Object(H.get)(e,["colors"],lt),disableCustomColors:e.disableCustomColors}})),u=l.colors,s=l.disableCustomColors,b=Object(c.useState)(!1),f=Object(z.a)(b,2),p=f[0],m=f[1],O=Object(c.useCallback)((function(){return m(!0)}),[m]),h=Object(c.useCallback)((function(){return m(!1)}),[m]),v=Object(c.useMemo)((function(){var t=rt("core/text-color",e,u);if(t)return{backgroundColor:t}}),[e,u]),j=!Object(H.isEmpty)(u)||!0!==s;return j||r?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RichTextToolbarButton,{key:r?"text-color":"text-color-not-active",className:"format-library-text-color-button",name:r?"text-color":void 0,icon:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(Z.a,{icon:tt.a}),r&&Object(c.createElement)("span",{className:"format-library-text-color-button__indicator",style:v})),title:at,onClick:j?O:function(){return n(Object(o.removeFormat)(e,"core/text-color"))}}),p&&Object(c.createElement)(it,{name:"core/text-color",addingColor:p,onClose:h,isActive:r,activeAttributes:i,value:e,onChange:n})):null}},st=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"})),bt=Object(i.__)("Subscript"),ft={name:"core/subscript",title:bt,tagName:"sub",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,i=t.onFocus;return Object(c.createElement)(a.RichTextToolbarButton,{icon:st,title:bt,onClick:function(){r(Object(o.toggleFormat)(n,{type:"core/subscript"})),i()},isActive:e})}},pt=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(l.Path,{d:"M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"})),mt=Object(i.__)("Superscript");[b,m,R,N,Q,J,X,ut,ft,{name:"core/superscript",title:mt,tagName:"sup",className:null,edit:function(t){var e=t.isActive,n=t.value,r=t.onChange,i=t.onFocus;return Object(c.createElement)(a.RichTextToolbarButton,{icon:pt,title:mt,onClick:function(){r(Object(o.toggleFormat)(n,{type:"core/superscript"})),i()},isActive:e})}}].forEach((function(t){var e=t.name,n=Object(r.a)(t,["name"]);return Object(o.registerFormatType)(e,n)}))},4:function(t,e){!function(){t.exports=this.wp.data}()},40:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},5:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},6:function(t,e){!function(){t.exports=this.wp.blockEditor}()},60:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},7:function(t,e){!function(){t.exports=this.wp.primitives}()},8:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))}});