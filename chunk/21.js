/*! For license information please see 21.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"144":function(e,t,r){"use strict";e.exports=r(147)},"145":function(e,t,r){"use strict";var o=r(27),n=r.n(o),c=r(60),a=r.n(c),i=r(17),s=r.n(i),u=r(35),l=r.n(u),f=r(36),p=r.n(f),d=r(148),b=r.n(d),O=r(150),j=r.n(O),y=r(152),v=r.n(y),h=r(61),m=r.n(h),x=r(22),w=r.n(x);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=v()(e);if(t){var n=v()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}w.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(m()(a),m()(c))).join(" ")}(c,o,n):a}t.a=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return l()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(x.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===s()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(x.createElement)(e,n,r)}}]),Index}(w.a.Component);return w.a.forwardRef((function(e,r){return w.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"147":function(e,t,r){"use strict";r(52);var o=r(22),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},u=null,l=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"148":function(e,t,r){var o=r(149);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t,r){var o=r(17).default,n=r(151);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"151":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"152":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"154":function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"s",(function(){return s})),r.d(t,"u",(function(){return u})),r.d(t,"v",(function(){return l})),r.d(t,"A",(function(){return f})),r.d(t,"f",(function(){return p})),r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"x",(function(){return O})),r.d(t,"a",(function(){return j})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return h})),r.d(t,"h",(function(){return m})),r.d(t,"l",(function(){return x})),r.d(t,"m",(function(){return w})),r.d(t,"n",(function(){return _})),r.d(t,"p",(function(){return g})),r.d(t,"q",(function(){return P})),r.d(t,"t",(function(){return k})),r.d(t,"w",(function(){return S})),r.d(t,"y",(function(){return E})),r.d(t,"b",(function(){return A})),r.d(t,"g",(function(){return N})),r.d(t,"z",(function(){return C})),r.d(t,"B",(function(){return D}));var o=r(22),n=r(145),c=(Object(n.a)("taro-cover-image-core"),Object(n.a)("taro-cover-view-core"),Object(n.a)("taro-match-media-core"),Object(n.a)("taro-movable-area-core")),a=Object(n.a)("taro-movable-view-core"),i=Object(n.a)("taro-page-container-core"),s=Object(n.a)("taro-scroll-view-core"),u=(Object(n.a)("taro-share-element-core"),Object(n.a)("taro-swiper-core")),l=Object(n.a)("taro-swiper-item-core"),f=Object(n.a)("taro-view-core"),p=Object(n.a)("taro-icon-core"),d=Object(n.a)("taro-progress-core"),b=Object(n.a)("taro-rich-text-core"),O=Object(n.a)("taro-text-core"),j=Object(n.a)("taro-button-core"),y=Object(n.a)("taro-checkbox-core"),v=Object(n.a)("taro-checkbox-group-core"),h=(Object(n.a)("taro-editor-core"),Object(n.a)("taro-form-core")),m=(Object(n.a)("taro-keyboard-accessory-core"),Object(n.a)("taro-label-core")),x=Object(n.a)("taro-picker-core"),w=Object(n.a)("taro-picker-view-core"),_=Object(n.a)("taro-picker-view-column-core"),g=Object(n.a)("taro-radio-core"),P=Object(n.a)("taro-radio-group-core"),k=Object(n.a)("taro-slider-core"),S=Object(n.a)("taro-switch-core"),E=Object(n.a)("taro-textarea-core"),A=(Object(n.a)("taro-functional-page-navigator-core"),Object(n.a)("taro-navigator-core"),Object(n.a)("taro-audio-core"),Object(n.a)("taro-camera-core")),N=Object(n.a)("taro-image-core"),C=(Object(n.a)("taro-live-player-core"),Object(n.a)("taro-video-core")),D=(Object(n.a)("taro-voip-room-core"),Object(n.a)("taro-map-core"),Object(n.a)("taro-canvas-core"),Object(n.a)("taro-web-view-core"));Object(n.a)("taro-ad-core"),Object(n.a)("taro-ad-custom-core"),Object(n.a)("taro-official-account-core"),Object(n.a)("taro-open-data-core"),Object(n.a)("taro-navigation-bar-core"),Object(n.a)("taro-page-meta-core"),o.Fragment,Object(n.a)("taro-custom-wrapper-core")},"155":function(e,t,r){"use strict";var o=r(154),n=(r(156),r(144));t.a=function Head(e){var t=e.title,r=e.desc;return Object(n.jsxs)(o.A,{"className":"page-head","children":[Object(n.jsx)(o.A,{"className":"page-head-title","children":t}),Object(n.jsx)(o.A,{"className":"page-head-line"}),!!r&&Object(n.jsx)(o.x,{"className":"page-head-desc","children":r})]})}},"156":function(e,t,r){},"163":function(e,t,r){"use strict";r.d(t,"a",(function(){return _objectSpread2}));var o=r(10);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"230":function(e,t,r){},"301":function(e,t,r){"use strict";r.r(t);var o=r(163),n=r(15),c=r(22),a=r(154),i=r(155),s=(r(230),r(144));t.default=function PageView(){var e=Object(c.useState)({"disabled":!1,"direction":"all"}),t=Object(n.a)(e,2),r=t[0],u=t[1],l=function getBackgroundColot(e){return{"backgroundColor":e===r.direction?"#13CE66":"#dddddd"}},f=function onPressDirection(e){return function(){u(Object(o.a)(Object(o.a)({},r),{},{"direction":e}))}};return Object(s.jsxs)(a.A,{"className":"components-page","children":[Object(s.jsx)(a.A,{"className":"components-page__header","children":Object(s.jsx)(i.a,{"title":"MovableView"})}),Object(s.jsx)(a.i,{"className":"movable-area","children":Object(s.jsx)(a.j,Object(o.a)(Object(o.a)({},r),{},{"children":Object(s.jsx)(a.A,{"className":"movable-view","children":String(r.disabled)})}))}),Object(s.jsxs)(a.A,{"className":"setting-contain","children":[Object(s.jsx)(a.A,{"className":"title","children":"是否禁用"}),Object(s.jsx)(a.A,{"className":"content","children":Object(s.jsx)(a.w,{"checked":r.disabled,"onChange":function onPressDisabled(e){var t,n;u(Object(o.a)(Object(o.a)({},r),{},{"disabled":null===(t=null==e||null===(n=e.detail)||void 0===n?void 0:n.value)||void 0===t||t}))}})})]}),Object(s.jsxs)(a.A,{"className":"setting-contain direction","children":[Object(s.jsx)(a.A,{"className":"title","children":"移动方向"}),Object(s.jsxs)(a.A,{"className":"direction-content","children":[Object(s.jsx)(a.a,{"style":l("all"),"onClick":f("all"),"children":"all"}),Object(s.jsx)(a.a,{"style":l("vertical"),"onClick":f("vertical"),"children":"vertical"}),Object(s.jsx)(a.a,{"style":l("horizontal"),"onClick":f("horizontal"),"children":"horizontal"}),Object(s.jsx)(a.a,{"style":l("none"),"onClick":f("none"),"children":"none"})]})]})]})}}}]);