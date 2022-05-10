/*! For license information please see 41.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"144":function(e,t,r){"use strict";e.exports=r(147)},"145":function(e,t,r){"use strict";var c=r(27),o=r.n(c),a=r(60),n=r.n(a),s=r(17),i=r.n(s),l=r(35),u=r.n(l),d=r(36),f=r.n(d),j=r(148),p=r.n(j),b=r(150),O=r.n(b),h=r(152),m=r.n(h),x=r(61),v=r.n(x),y=r(22),_=r.n(y);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,c=m()(e);if(t){var o=m()(this).constructor;r=Reflect.construct(c,arguments,o)}else r=c.apply(this,arguments);return O()(this,r)}}_.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,c,o){var a=e.ref.current,n=o[r],s=c?c[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,n),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=n);if("scrollLeft"===r)return void(a.mpScrollLeft=n);if("scrollIntoView"===r)return void(a.mpScrollIntoView=n)}if("function"==typeof n&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),l=n;return"taro-scroll-view-core"===t&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&n.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),a.addEventListener(i,l)}return"string"==typeof n||"number"==typeof n?(a.setAttribute(r,n),void(a[r]=n)):"boolean"==typeof n?n?(a[r]=!0,a.setAttribute(r,n)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=n)}if("string"==typeof n)return void a.setAttribute(r,n);if(!n)return void a.removeAttribute(r);if(c)if("string"==typeof s)a.style.cssText="";else for(var u in s)updateStyle(a,u,"");for(var d in n)updateStyle(a,d,n[d])}else a.className=c?function getClassName(e,t,r){var c=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),n=[];return c.forEach((function(e){a.indexOf(e)>-1?(n.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&n.push(e)})),(n=[].concat(v()(n),v()(a))).join(" ")}(a,c,o):n}t.a=function reactifyWebComponent(e){var t=function(t){p()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(y.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(c){"children"===c||"key"===c||c in r.props||updateProp(r,e,c,t,r.props)})),Object.keys(this.props).forEach((function(c){updateProp(r,e,c,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===i()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=n()(t,2),c=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(c,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,c=t.dangerouslySetInnerHTML,o={"ref":this.ref};return c&&(o.dangerouslySetInnerHTML=c),Object(y.createElement)(e,o,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"147":function(e,t,r){"use strict";r(52);var c=r(22),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var n=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var c,a={},l=null,u=null;for(c in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,c)&&!i.hasOwnProperty(c)&&(a[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===a[c]&&(a[c]=t[c]);return{"$$typeof":o,"type":e,"key":l,"ref":u,"props":a,"_owner":n.current}}t.jsx=q,t.jsxs=q},"148":function(e,t,r){var c=r(149);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&c(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t,r){var c=r(17).default,o=r(151);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"151":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"152":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"154":function(e,t,r){"use strict";r.d(t,"i",(function(){return a})),r.d(t,"j",(function(){return n})),r.d(t,"k",(function(){return s})),r.d(t,"s",(function(){return i})),r.d(t,"u",(function(){return l})),r.d(t,"v",(function(){return u})),r.d(t,"A",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"o",(function(){return j})),r.d(t,"r",(function(){return p})),r.d(t,"x",(function(){return b})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return x})),r.d(t,"h",(function(){return v})),r.d(t,"l",(function(){return y})),r.d(t,"m",(function(){return _})),r.d(t,"n",(function(){return w})),r.d(t,"p",(function(){return A})),r.d(t,"q",(function(){return g})),r.d(t,"t",(function(){return N})),r.d(t,"w",(function(){return P})),r.d(t,"y",(function(){return C})),r.d(t,"b",(function(){return S})),r.d(t,"g",(function(){return I})),r.d(t,"z",(function(){return k})),r.d(t,"B",(function(){return D}));var c=r(22),o=r(145),a=(Object(o.a)("taro-cover-image-core"),Object(o.a)("taro-cover-view-core"),Object(o.a)("taro-match-media-core"),Object(o.a)("taro-movable-area-core")),n=Object(o.a)("taro-movable-view-core"),s=Object(o.a)("taro-page-container-core"),i=Object(o.a)("taro-scroll-view-core"),l=(Object(o.a)("taro-share-element-core"),Object(o.a)("taro-swiper-core")),u=Object(o.a)("taro-swiper-item-core"),d=Object(o.a)("taro-view-core"),f=Object(o.a)("taro-icon-core"),j=Object(o.a)("taro-progress-core"),p=Object(o.a)("taro-rich-text-core"),b=Object(o.a)("taro-text-core"),O=Object(o.a)("taro-button-core"),h=Object(o.a)("taro-checkbox-core"),m=Object(o.a)("taro-checkbox-group-core"),x=(Object(o.a)("taro-editor-core"),Object(o.a)("taro-form-core")),v=(Object(o.a)("taro-keyboard-accessory-core"),Object(o.a)("taro-label-core")),y=Object(o.a)("taro-picker-core"),_=Object(o.a)("taro-picker-view-core"),w=Object(o.a)("taro-picker-view-column-core"),A=Object(o.a)("taro-radio-core"),g=Object(o.a)("taro-radio-group-core"),N=Object(o.a)("taro-slider-core"),P=Object(o.a)("taro-switch-core"),C=Object(o.a)("taro-textarea-core"),S=(Object(o.a)("taro-functional-page-navigator-core"),Object(o.a)("taro-navigator-core"),Object(o.a)("taro-audio-core"),Object(o.a)("taro-camera-core")),I=Object(o.a)("taro-image-core"),k=(Object(o.a)("taro-live-player-core"),Object(o.a)("taro-video-core")),D=(Object(o.a)("taro-voip-room-core"),Object(o.a)("taro-map-core"),Object(o.a)("taro-canvas-core"),Object(o.a)("taro-web-view-core"));Object(o.a)("taro-ad-core"),Object(o.a)("taro-ad-custom-core"),Object(o.a)("taro-official-account-core"),Object(o.a)("taro-open-data-core"),Object(o.a)("taro-navigation-bar-core"),Object(o.a)("taro-page-meta-core"),c.Fragment,Object(o.a)("taro-custom-wrapper-core")},"155":function(e,t,r){"use strict";var c=r(154),o=(r(156),r(144));t.a=function Head(e){var t=e.title,r=e.desc;return Object(o.jsxs)(c.A,{"className":"page-head","children":[Object(o.jsx)(c.A,{"className":"page-head-title","children":t}),Object(o.jsx)(c.A,{"className":"page-head-line"}),!!r&&Object(o.jsx)(c.x,{"className":"page-head-desc","children":r})]})}},"156":function(e,t,r){},"214":function(e,t,r){},"286":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var c=r(3),o=r(4),a=r(16),n=r(11),s=r(12),i=r(10),l=r(22),u=r.n(l),d=r(154),f=r(155),j=(r(214),r(144)),p=function(e){Object(n.a)(PageView,e);var t=Object(s.a)(PageView);function PageView(e){var r;return Object(c.a)(this,PageView),r=t.call(this,e),Object(i.a)(Object(a.a)(r),"setAutoPlay",(function(e){r.setState({"isAutoplay":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setVerticalAutoPlay",(function(e){r.setState({"verticalIsAutoplay":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setCircular",(function(e){r.setState({"isCircular":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setVerticalCircular",(function(e){r.setState({"verticalIsCircular":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setIndicatorDots",(function(e){r.setState({"hasIndicatorDots":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setVerticalIndicatorDots",(function(e){r.setState({"verticalHasIndicatorDots":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setInterval",(function(e){r.setState({"interval":e.detail.value})})),Object(i.a)(Object(a.a)(r),"setDuration",(function(e){console.log(Object(a.a)(r)),r.setState({"duration":e.detail.value})})),r.state={"current":1,"duration":500,"interval":3e3,"isCircular":!0,"verticalIsCircular":!0,"isAutoplay":!0,"verticalIsAutoplay":!1,"hasIndicatorDots":!0,"verticalHasIndicatorDots":!0},r}return Object(o.a)(PageView,[{"key":"render","value":function render(){var e=this.state,t=e.current,r=e.isAutoplay,c=e.duration,o=e.isCircular,a=e.interval,n=e.hasIndicatorDots,s=e.verticalIsCircular,i=e.verticalHasIndicatorDots,l=e.verticalIsAutoplay;return Object(j.jsxs)(d.A,{"className":"components-page","children":[Object(j.jsx)(d.A,{"className":"components-page__header","children":Object(j.jsx)(f.a,{"title":"Swiper"})}),Object(j.jsxs)(d.A,{"className":"components-page__body swiper","children":[Object(j.jsxs)(d.A,{"className":"components-page__body-example example","children":[Object(j.jsx)(d.A,{"className":"example-header","children":"Swiper 横向滑动"}),Object(j.jsxs)(d.A,{"className":"example-body","children":[Object(j.jsxs)(d.u,{"className":"swiper-list","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","current":t,"duration":1,"interval":a,"circular":o,"autoplay":r,"indicatorDots":n,"preMargin":"200","children":[Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-1","children":Object(j.jsx)(d.A,{"className":"demo-text-1-text","children":"A"})})}),Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-2","children":Object(j.jsx)(d.A,{"className":"demo-text-2-text","children":"B"})})}),Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-3","children":Object(j.jsx)(d.A,{"className":"demo-text-3-text","children":"C"})})})]}),Object(j.jsxs)(d.A,{"className":"switch-list","children":[Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"指示点"}),Object(j.jsx)(d.w,{"checked":n,"onChange":this.setIndicatorDots})]}),Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"自动播放"}),Object(j.jsx)(d.w,{"checked":r,"onChange":this.setAutoPlay})]}),Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"循环播放"}),Object(j.jsx)(d.w,{"checked":o,"onChange":this.setCircular})]})]}),Object(j.jsxs)(d.A,{"className":"slider-list","children":[Object(j.jsxs)(d.A,{"className":"slider-list__item","children":[Object(j.jsx)(d.A,{"className":"slider-list__item-header","children":Object(j.jsx)(d.x,{"children":"幻灯片切换时长(ms)"})}),Object(j.jsx)(d.A,{"className":"slider-list__item-body","children":Object(j.jsx)(d.t,{"showValue":!0,"step":1,"min":500,"max":2e3,"value":c,"onChange":this.setDuration})})]}),Object(j.jsxs)(d.A,{"className":"slider-list__item","children":[Object(j.jsx)(d.A,{"className":"slider-list__item-header","children":Object(j.jsx)(d.x,{"children":"自动播放间隔时长(ms)"})}),Object(j.jsx)(d.A,{"className":"slider-list__item-body","children":Object(j.jsx)(d.t,{"showValue":!0,"step":1,"min":2e3,"max":1e4,"value":this.state.interval,"onChange":this.setInterval})})]})]})]})]}),Object(j.jsxs)(d.A,{"className":"components-page__body-example example","children":[Object(j.jsx)(d.A,{"className":"example-header","children":"Swiper 纵向滑动"}),Object(j.jsx)(d.A,{"className":"example-body","children":Object(j.jsxs)(d.u,{"className":"swiper-list test-h","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","vertical":!0,"circular":s,"indicatorDots":i,"autoplay":l,"preMargin":"80","style":{"backgroundColor":"#fff"},"children":[Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-1"})}),Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-2"})}),Object(j.jsx)(d.v,{"children":Object(j.jsx)(d.A,{"className":"demo-text-3"})})]})}),Object(j.jsxs)(d.A,{"className":"switch-list","children":[Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"指示点"}),Object(j.jsx)(d.w,{"checked":i,"onChange":this.setVerticalIndicatorDots})]}),Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"自动播放"}),Object(j.jsx)(d.w,{"checked":l,"onChange":this.setVerticalAutoPlay})]}),Object(j.jsxs)(d.A,{"className":"switch-list__item","children":[Object(j.jsx)(d.A,{"className":"switch-list__text","children":"循环播放"}),Object(j.jsx)(d.w,{"checked":s,"onChange":this.setVerticalCircular})]})]})]})]})]})}}]),PageView}(u.a.Component)}}]);