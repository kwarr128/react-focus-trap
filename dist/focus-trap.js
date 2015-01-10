!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r=t("object"==typeof exports?require("react"):e.react);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(t){"use strict";var o=t.interopRequire(r(1)),n=t.interopRequire(r(3)),i=n.PropTypes,u=n.createClass({displayName:"FocusTrap",mixins:[o],propTypes:{onExit:i.func.isRequired,role:i.string.isRequired},getDefaultProps:function(){return{role:"dialog"}},render:function(){var e=this.props.role;return n.createElement("div",{className:"focus-trap",tabIndex:"0",role:e,onKeyUp:this._onKeyUp},n.createElement("div",{className:"focus-trap-backdrop","aria-hidden":!0,onClick:this.props.onExit}),n.createElement("section",{className:"focus-trap-inner"},this.props.children))},_onKeyUp:function(e){"Escape"===e.key&&this.props.onExit()}});e.exports=u}).call(t,r(2))},function(e){"use strict";e.exports={_pushFocus:function(){this.setState({previousFocus:document.activeElement}),this.getDOMNode().focus()},_popFocus:function(){this.state.previousFocus&&(this.state.previousFocus.focus(),this._clearTrap())},_focus:function(){this.getDOMNode().focus()},_trapFocus:function(){this._focusTimer=setTimeout(this._focus,10)},_clearTrap:function(){clearTimeout(this._focusTimer)},componentDidMount:function(){var e=this.getDOMNode();e.addEventListener("focusin",this._clearTrap),e.addEventListener("focusout",this._trapFocus),this._pushFocus()},componentWillUnmount:function(){var e=this.getDOMNode();this._popFocus(),e.removeEventListener("focusin",this._clearTrap),e.removeEventListener("focusout",this._trapFocus)}}},function(e){var t={};!function(e){var t=e.to5Runtime={};t.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},t.defaults=function(e,t){for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e},t.prototypeProperties=function(e,t,r){t&&Object.defineProperties(e,t),r&&Object.defineProperties(e.prototype,r)},t.applyConstructor=function(e,t){var r=Object.create(e.prototype),o=e.apply(r,t);return null==o||"object"!=typeof o&&"function"!=typeof o?r:o},t.taggedTemplateLiteral=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},t.interopRequire=function(e){return e&&(e["default"]||e)},t.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},t.slicedToArray=function(e,t){if(Array.isArray(e))return e;for(var r,o=[],n=e[Symbol.iterator]();!(r=n.next()).done&&(o.push(r.value),!t||o.length!==t););return o},t.objectWithoutProperties=function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},t.hasOwn=Object.prototype.hasOwnProperty,t.slice=Array.prototype.slice,t.bind=Function.prototype.bind,t.defineProperty=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0})},t.interopRequireWildcard=function(e){return e&&e.constructor===Object?e:{"default":e}},t._extends=function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)e[o]=r[o]}return e},t.get=function r(e,t,o){var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:r(i,t,o)}if("value"in n&&n.writable)return n.value;var u=n.get;return void 0===u?void 0:u.call(o)}}("undefined"==typeof t?self:t),e.exports=t.to5Runtime},function(t){t.exports=e}])});