this.wp=this.wp||{},this.wp.dom=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=227)}({1:function(e,t){!function(){e.exports=this.lodash}()},227:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"find",function(){return l});var o={};function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(o),n.d(o,"isTabbableIndex",function(){return f}),n.d(o,"find",function(){return v});var a=["[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",");function u(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function l(e){return i(e.querySelectorAll(a)).filter(function(e){return!!u(e)&&("AREA"!==e.nodeName||function(e){var t=e.closest("map[name]");if(!t)return!1;var n=document.querySelector('img[usemap="#'+t.name+'"]');return!!n&&u(n)}(e))})}var c=n(1);function d(e){var t=e.getAttribute("tabindex");return null===t?0:parseInt(t,10)}function f(e){return-1!==d(e)}function s(e,t){return{element:e,index:t}}function g(e){return e.element}function p(e,t){var n=d(e.element),r=d(t.element);return n===r?e.index-t.index:n-r}function v(e){return l(e).filter(f).map(s).sort(p).map(g).reduce((t={},function(e,n){var r=n.nodeName,o=n.type,i=n.checked,a=n.name;if("INPUT"!==r||"radio"!==o||!a)return e.concat(n);var u=t.hasOwnProperty(a);if(!i&&u)return e;if(u){var l=t[a];e=Object(c.without)(e,l)}return t[a]=n,e.concat(n)}),[]);var t}var m=window.getComputedStyle,b=window.Node,h=b.TEXT_NODE,C=b.ELEMENT_NODE,N=b.DOCUMENT_POSITION_PRECEDING,E=b.DOCUMENT_POSITION_FOLLOWING;function w(e){var t=e.anchorNode,n=e.focusNode,r=e.anchorOffset,o=e.focusOffset,i=t.compareDocumentPosition(n);return!(i&N)&&(!!(i&E)||(0!==i||r<=o))}function y(e,t){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.selectionStart===e.selectionEnd&&(t?0===e.selectionStart:e.value.length===e.selectionStart);if(!e.isContentEditable)return!0;var n=window.getSelection(),r=n.getRangeAt(0).cloneRange();n.isCollapsed||r.collapse(!w(n));var o,i=r.startContainer;if(o=t?0:i.nodeValue?i.nodeValue.length:i.childNodes.length,r["".concat(t?"start":"end","Offset")]!==o)return!1;for(var a=t?"previous":"next";i!==e;){for(var u=i["".concat(a,"Sibling")];u&&u.nodeType===h&&""===u.data;)u=u["".concat(a,"Sibling")];if(u)return!1;i=i.parentNode}return!0}function S(e,t){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return y(e,t);if(!e.isContentEditable)return!0;var n=window.getSelection();if(!n.isCollapsed&&w(n)===t)return!1;var r=n.rangeCount?n.getRangeAt(0):null;if(!r)return!1;var o=T(r);if(!o)return!1;var i=e.getBoundingClientRect(),a=window.getComputedStyle(e).lineHeight,u=parseInt(a,10)/2;return!(t&&o.top-u>i.top)&&!(!t&&o.bottom+u<i.bottom)}function T(e){if(!e.collapsed)return e.getBoundingClientRect();var t=e.getClientRects()[0];if(!t){var n=document.createTextNode("​");e.insertNode(n),t=e.getClientRects()[0],n.parentNode.removeChild(n)}return t}function R(e){if(e.isContentEditable){var t=window.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;if(n)return T(n)}}function O(e,t){if(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.focus(),void(t?(e.selectionStart=e.value.length,e.selectionEnd=e.value.length):(e.selectionStart=0,e.selectionEnd=0));if(e.focus(),e.isContentEditable){var n=e[t?"lastChild":"firstChild"];if(n){var r=window.getSelection(),o=document.createRange();o.selectNodeContents(n),o.collapse(!t),r.removeAllRanges(),r.addRange(o)}}}}function A(e,t,n,r){r.style.zIndex="10000";var o=function(e,t,n){if(e.caretRangeFromPoint)return e.caretRangeFromPoint(t,n);if(!e.caretPositionFromPoint)return null;var r=e.caretPositionFromPoint(t,n);if(!r)return null;var o=e.createRange();return o.setStart(r.offsetNode,r.offset),o.collapse(!0),o}(e,t,n);return r.style.zIndex=null,o}function P(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e)if(n&&e.isContentEditable){var o=n.height/2,i=e.getBoundingClientRect(),a=n.left,u=t?i.bottom-o:i.top+o,l=A(document,a,u,e);if(!l||!e.contains(l.startContainer))return!r||l&&l.startContainer&&l.startContainer.contains(e)?void O(e,t):(e.scrollIntoView(t),void P(e,t,n,!1));if(l.startContainer.nodeType===h){var c=l.startContainer.parentNode,d=c.getBoundingClientRect(),f=t?"bottom":"top",s=parseInt(m(c).getPropertyValue("padding-".concat(f)),10)||0,g=t?d.bottom-s-o:d.top+s+o;u!==g&&(l=A(document,a,g,e))}var p=window.getSelection();p.removeAllRanges(),p.addRange(l),e.focus(),p.removeAllRanges(),p.addRange(l)}else O(e,t)}function I(e){try{var t=e.nodeName,n=e.selectionStart,r=e.contentEditable;return"INPUT"===t&&null!==n||"TEXTAREA"===t||"true"===r}catch(e){return!1}}function x(){if(I(document.activeElement))return!0;var e=window.getSelection(),t=e.rangeCount?e.getRangeAt(0):null;return t&&!t.collapsed}function j(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.nodeName))return 0===e.selectionStart&&e.value.length===e.selectionEnd;if(!e.isContentEditable)return!0;var t=window.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;if(!n)return!0;var r=n.startContainer,o=n.endContainer,i=n.startOffset,a=n.endOffset;if(r===e&&o===e&&0===i&&a===e.childNodes.length)return!0;var u=e.lastChild,l=u.nodeType===h?u.data.length:u.childNodes.length;return r===e.firstChild&&o===e.lastChild&&0===i&&a===l}function _(e){if(e){if(e.scrollHeight>e.clientHeight){var t=window.getComputedStyle(e).overflowY;if(/(auto|scroll)/.test(t))return e}return _(e.parentNode)}}function U(e){for(var t;(t=e.parentNode)&&t.nodeType!==C;);return t?"static"!==m(t).position?t:t.offsetParent:null}function B(e,t){F(t,e.parentNode),D(e)}function D(e){e.parentNode.removeChild(e)}function F(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function H(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function M(e,t){for(var n=e.ownerDocument.createElement(t);e.firstChild;)n.appendChild(e.firstChild);return e.parentNode.replaceChild(n,e),n}function V(e,t){t.parentNode.insertBefore(e,t),e.appendChild(t)}n.d(t,"focus",function(){return X}),n.d(t,"isHorizontalEdge",function(){return y}),n.d(t,"isVerticalEdge",function(){return S}),n.d(t,"getRectangleFromRange",function(){return T}),n.d(t,"computeCaretRect",function(){return R}),n.d(t,"placeCaretAtHorizontalEdge",function(){return O}),n.d(t,"placeCaretAtVerticalEdge",function(){return P}),n.d(t,"isTextField",function(){return I}),n.d(t,"documentHasSelection",function(){return x}),n.d(t,"isEntirelySelected",function(){return j}),n.d(t,"getScrollContainer",function(){return _}),n.d(t,"getOffsetParent",function(){return U}),n.d(t,"replace",function(){return B}),n.d(t,"remove",function(){return D}),n.d(t,"insertAfter",function(){return F}),n.d(t,"unwrap",function(){return H}),n.d(t,"replaceTag",function(){return M}),n.d(t,"wrap",function(){return V});var X={focusable:r,tabbable:o}}});