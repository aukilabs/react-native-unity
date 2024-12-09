"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _UnityViewNativeComponent = _interopRequireWildcard(require("./specs/UnityViewNativeComponent"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class UnityView extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ref", /*#__PURE__*/_react.default.createRef());
    _defineProperty(this, "postMessage", (gameObject, methodName, message) => {
      if (this.ref.current) {
        _UnityViewNativeComponent.Commands.postMessage(this.ref.current, gameObject, methodName, message);
      }
    });
    _defineProperty(this, "unloadUnity", () => {
      if (this.ref.current) {
        _UnityViewNativeComponent.Commands.unloadUnity(this.ref.current);
      }
    });
  }
  pauseUnity(pause) {
    if (this.ref.current) {
      _UnityViewNativeComponent.Commands.pauseUnity(this.ref.current, pause);
    }
  }
  resumeUnity() {
    if (this.ref.current) {
      _UnityViewNativeComponent.Commands.resumeUnity(this.ref.current);
    }
  }
  windowFocusChanged(hasFocus = true) {
    if (_reactNative.Platform.OS !== 'android') return;
    if (this.ref.current) {
      _UnityViewNativeComponent.Commands.windowFocusChanged(this.ref.current, hasFocus);
    }
  }
  getProps() {
    return {
      ...this.props
    };
  }
  componentWillUnmount() {
    if (this.ref.current) {
      _UnityViewNativeComponent.Commands.unloadUnity(this.ref.current);
    }
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_UnityViewNativeComponent.default, _extends({
      ref: this.ref
    }, this.getProps()));
  }
}
exports.default = UnityView;
//# sourceMappingURL=UnityView.js.map