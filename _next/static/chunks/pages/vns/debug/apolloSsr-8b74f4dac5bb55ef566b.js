_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[40],{"18Rt":function(r,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vns/debug/apolloSsr",function(){return e("ryM8")}])},"8oxB":function(r,n){var e,t,o=r.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(r){if(e===setTimeout)return setTimeout(r,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(r,0);try{return e(r,0)}catch(n){try{return e.call(null,r,0)}catch(n){return e.call(this,r,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(r){e=i}try{t="function"===typeof clearTimeout?clearTimeout:c}catch(r){t=c}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!l){var r=a(p);l=!0;for(var n=s.length;n;){for(u=s,s=[];++f<n;)u&&u[f].run();f=-1,n=s.length}u=null,l=!1,function(r){if(t===clearTimeout)return clearTimeout(r);if((t===c||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(r);try{t(r)}catch(n){try{return t.call(null,r)}catch(n){return t.call(this,r)}}}(r)}}function h(r,n){this.fun=r,this.array=n}function b(){}o.nextTick=function(r){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new h(r,n)),1!==s.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(r){return[]},o.binding=function(r){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(r){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Qetd:function(r,n,e){"use strict";var t=Object.assign.bind(Object);r.exports=t,r.exports.default=r.exports},jT3O:function(r,n,e){"use strict";function t(r,n){return n||(n=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(n)}}))}e.d(n,"a",(function(){return t}))},lTCR:function(r,n,e){var t=e("EMzn").parse;function o(r){return r.replace(/[\s,]+/g," ").trim()}var i={},c={};var a=!0;function u(r,n){var e=Object.prototype.toString.call(r);if("[object Array]"===e)return r.map((function(r){return u(r,n)}));if("[object Object]"!==e)throw new Error("Unexpected input.");n&&r.loc&&delete r.loc,r.loc&&(delete r.loc.startToken,delete r.loc.endToken);var t,o,i,c=Object.keys(r);for(t in c)c.hasOwnProperty(t)&&(o=r[c[t]],"[object Object]"!==(i=Object.prototype.toString.call(o))&&"[object Array]"!==i||(r[c[t]]=u(o,!0)));return r}var s=!1;function l(r){var n=o(r);if(i[n])return i[n];var e=t(r,{experimentalFragmentVariables:s});if(!e||"Document"!==e.kind)throw new Error("Not a valid GraphQL document.");return e=u(e=function(r){for(var n,e={},t=[],i=0;i<r.definitions.length;i++){var u=r.definitions[i];if("FragmentDefinition"===u.kind){var s=u.name.value,l=o((n=u.loc).source.body.substring(n.start,n.end));c.hasOwnProperty(s)&&!c[s][l]?(a&&console.warn("Warning: fragment with name "+s+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),c[s][l]=!0):c.hasOwnProperty(s)||(c[s]={},c[s][l]=!0),e[l]||(e[l]=!0,t.push(u))}else t.push(u)}return r.definitions=t,r}(e),!1),i[n]=e,e}function f(){for(var r=Array.prototype.slice.call(arguments),n=r[0],e="string"===typeof n?n:n[0],t=1;t<r.length;t++)r[t]&&r[t].kind&&"Document"===r[t].kind?e+=r[t].loc.source.body:e+=r[t],e+=n[t];return l(e)}f.default=f,f.resetCaches=function(){i={},c={}},f.disableFragmentWarnings=function(){a=!1},f.enableExperimentalFragmentVariables=function(){s=!0},f.disableExperimentalFragmentVariables=function(){s=!1},r.exports=f},ryM8:function(r,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return d}));var t=e("jT3O"),o=e("q1tI"),i=e.n(o),c=e("+TN3"),a=e("lTCR"),u=e.n(a),s=e("ynF0"),l=i.a.createElement;function f(){var r=Object(t.a)(["\n  query {\n    character(id: 2) {\n      name\n    }\n  }\n"]);return f=function(){return r},r}var p=u()(f()),d=!0;n.default=function(r){var n=r.initialApolloState,e=Object(s.a)({graphqlUri:"https://rickandmortyapi.com/graphql"});Object(s.b)(e,n);var t=Object(c.a)(p,{client:e}),o=t.data,i=t.loading,a=t.error,u="";return i?u="loading":a?u="error":o&&(u="data: ".concat(JSON.stringify(o))),l("div",null,u)}},ynF0:function(r,n,e){"use strict";e.d(n,"a",(function(){return g})),e.d(n,"b",(function(){return w})),e.d(n,"c",(function(){return y}));var t=e("q1tI"),o=e("Nlz5"),i=e("VX74"),c=e("MMh5"),a=e("lX80"),u=e("zC+P"),s=e("3S/s"),l=e("ABJ/"),f=e.n(l);function p(r){return new s.a((function(n,e){return new f.a((function(t){var o,i,c;try{o=e(n).subscribe({next:function(o){o.errors&&(c=r({graphQLErrors:o.errors,response:o,operation:n,forward:e}))?i=c.subscribe({next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)}):t.next(o)},error:function(o){(c=r({operation:n,networkError:o,graphQLErrors:o&&o.result&&o.result.errors,forward:e}))?i=c.subscribe({next:t.next.bind(t),error:t.error.bind(t),complete:t.complete.bind(t)}):t.error(o)},complete:function(){c||t.complete.bind(t)()}})}catch(a){r({networkError:a,operation:n,forward:e}),t.error(a)}return function(){o&&o.unsubscribe(),i&&o.unsubscribe()}}))}))}!function(r){function n(n){var e=r.call(this)||this;return e.link=p(n),e}Object(u.c)(n,r),n.prototype.request=function(r,n){return this.link.request(r,n)}}(s.a);var d,h=p((function(r){var n=r.graphQLErrors,e=r.networkError;n&&n.forEach((function(r){var n=r.message,e=r.locations,t=r.path;console.log("[GraphQL error]: Message: ".concat(n,", Location: ").concat(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(r){var n=r.column,e=r.line;return"line ".concat(e,", col ").concat(n)})).join(";")}(e),", Path: ").concat(t))})),e&&console.log("[Network error]: ".concat(e))})),b=e("PE4B"),m=e.n(b),v=!0;function g(r){var n=r.graphqlUri,e=r.crossDomainGraphqlUri;return new o.a({ssrMode:!1,connectToDevTools:v,link:Object(i.from)([h,new c.a({uri:n,credentials:e?"include":"same-origin"})]),cache:new a.a})}var w=function(r,n){if(n){var e=r.extract(),t=m()(n,e);r.cache.restore(t)}};function y(r,n){return Object(t.useMemo)((function(){return function(){var r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,t=null!==(r=d)&&void 0!==r?r:g(e);return w(t,n),d||(d=t),t}(r,n)}),[r,n])}}},[["18Rt",0,1,6,9]]]);