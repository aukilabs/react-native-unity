function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import NativeUnityView, { Commands } from './specs/UnityViewNativeComponent';
import { Platform } from 'react-native';
export default class UnityView extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ref", /*#__PURE__*/React.createRef());
    _defineProperty(this, "postMessage", (gameObject, methodName, message) => {
      if (this.ref.current) {
        Commands.postMessage(this.ref.current, gameObject, methodName, message);
      }
    });
    _defineProperty(this, "unloadUnity", () => {
      if (this.ref.current) {
        Commands.unloadUnity(this.ref.current);
      }
    });
  }
  pauseUnity(pause) {
    if (this.ref.current) {
      Commands.pauseUnity(this.ref.current, pause);
    }
  }
  resumeUnity() {
    if (this.ref.current) {
      Commands.resumeUnity(this.ref.current);
    }
  }
  windowFocusChanged(hasFocus = true) {
    if (Platform.OS !== 'android') return;
    if (this.ref.current) {
      Commands.windowFocusChanged(this.ref.current, hasFocus);
    }
  }
  getProps() {
    return {
      ...this.props
    };
  }
  componentWillUnmount() {
    if (this.ref.current) {
      Commands.unloadUnity(this.ref.current);
    }
  }
  render() {
    return /*#__PURE__*/React.createElement(NativeUnityView, _extends({
      ref: this.ref
    }, this.getProps()));
  }
}
//# sourceMappingURL=UnityView.js.map