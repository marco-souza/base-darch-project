webpackJsonp([0],{1329:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return Object.getPrototypeOf(e)[t].apply(e,n)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),p=o(l),f=n(3),s=n(149),d=o(s),y=n(1334),b=o(y),h=new f.LoggerFactory("app.page"),m=function(e){function t(){var e,n,o,u,c;r(this,t);for(var l=arguments.length,p=Array(l),f=0;f<l;f++)p[f]=arguments[f];return n=u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(p))),u.componentDidMount=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i(u,"componentDidMount",t)},o=n,u.render=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i(u,"render",t)},c=o,a(u,c)}return u(t,e),c(t,[{key:"componentDidMount",value:function(){if(h.create("componentDidMount").info("enter"),window.appReady=!0,window.resourcesReady){var e=document.getElementById("loader-overlay");e&&(e.style.display="none"),window.appLoaded=!0}}},{key:"render",value:function(){return p.default.createElement("div",{className:b.default.page},this.props.children,p.default.createElement(d.default,null))}}]),t}(p.default.Component);m.displayName="app.page",m.defaultProps={},m.propTypes={},t.default=m,e.exports=t.default},1332:function(e,t,n){t=e.exports=n(5)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"styles.styl",sourceRoot:""}])},1334:function(e,t,n){var o=n(1332);"string"==typeof o&&(o=[[e.i,o,""]]);n(6)(o,{});o.locals&&(e.exports=o.locals)}});