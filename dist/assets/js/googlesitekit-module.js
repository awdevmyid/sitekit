!function(e){function t(t){for(var n,a,l=t[0],u=t[1],c=t[2],d=0,p=[];d<l.length;d++)a=l[d],o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={12:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({6:"chunk-googlesitekit-setup-wrapper"}[e]||e)+".js"}(e),i=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,r[1](a)}o[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([190,0,1]),r()}({17:function(e,t){e.exports=React},190:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),i=r(3),a=r.n(i),l=r(4),u=r.n(l),c=r(5),s=r.n(c),d=r(6),p=r.n(d),m=(r(8),r(27)),f=r(23),g=r(17),v=(r(7),wp.element.Component),h=wp.components.withFilters,y=function(e){function t(){return o()(this,t),u()(this,s()(t).apply(this,arguments))}return p()(t,e),a()(t,[{key:"render",value:function(){return null}}]),t}(v),w=h("googlesitekit.ModuleApp-"+googlesitekitCurrentModule.slug)(y),k=wp.i18n.setLocaleData,b=wp.hooks,E=b.doAction,_=b.applyFilters,R=wp.element,S=R.Component,P=R.render,M=R.Fragment,j=wp.element,O=j.Suspense,x=j.lazy;O||(O=g.Suspense),x||(x=g.lazy);var N=function(e){function t(e){var r;o()(this,t),(r=u()(this,s()(t).call(this,e))).state={hasError:!1},k(googlesitekit.locale,"google-site-kit");var n=googlesitekit.setup.showModuleSetupWizard;return r.state={showModuleSetupWizard:n},r}return p()(t,e),a()(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,info:t})}},{key:"render",value:function(){var e=this.state,t=e.hasError,n=e.error,o=e.info,i=e.showModuleSetupWizard;if(t)return React.createElement(f.a,{id:"googlesitekit-error",key:"googlesitekit-error",title:n,description:o.componentStack,dismiss:"",isDismissable:!1,format:"small",type:"win-error"});var a=googlesitekit.admin.currentAdminPage,l=_("googlesitekit.moduleHasSetupWizard",!0,a);if(i&&l){window.googlesitekit&&window.googlesitekit.publicPath&&(r.p=window.googlesitekit.publicPath);var u=x(function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,146))});return React.createElement(O,{fallback:React.createElement(M,null,React.createElement("div",{className:"googlesitekit-setup"},React.createElement("div",{className:"mdc-layout-grid"},React.createElement("div",{className:"mdc-layout-grid__inner"},React.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},React.createElement("div",{className:"googlesitekit-setup__wrapper"},React.createElement("div",{className:"mdc-layout-grid"},React.createElement("div",{className:"mdc-layout-grid__inner"},React.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},React.createElement(m.a,null))))))))))},React.createElement(u,null))}return React.createElement(w,null)}}]),t}(S);wp.domReady(function(){var e=document.getElementById("js-googlesitekit-module");null!==e&&(P(React.createElement(N,null),e),E("googlesitekit.moduleLoaded","Single",googlesitekitCurrentModule))})},44:function(e,t){e.exports=ReactDOM},8:function(e,t){e.exports=void 0}});