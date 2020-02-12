!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash"),require("react")):"function"==typeof define&&define.amd?define(["lodash","react"],t):"object"==typeof exports?exports.PeityReact=t(require("lodash"),require("react")):e.PeityReact=t(e._,e.React)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){e.exports=r(7)()},function(e,t,r){"use strict";function n(e,t){return(0,i.isEqual)(void 0===e?"undefined":o(e),"string")?(0,i.split)(e,t).map(function(e){return Number(e)}):(0,i.flatten)([e])}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.processValues=n;var i=r(0)},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Bar=t.Line=void 0;var o=r(6),i=n(o),u=r(11),a=n(u);t.default={Line:i.default,Bar:a.default},t.Line=i.default,t.Bar=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),c=r(1),f=n(c),p=r(2),d=n(p),h=r(3),y=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.renderFill=function(){if(r.state.canDrawFill)return f.default.createElement("polygon",{fill:r.props.fillColor,points:(0,s.join)(r.state.coords," ")})},r.renderStroke=function(){if(r.state.canDrawStroke)return f.default.createElement("polyline",{fill:r.props.strokeFillColor,points:(0,s.join)((0,s.slice)(r.state.coords,2,r.state.coords.length-2)," "),stroke:r.props.strokeColor,strokeWidth:r.props.strokeWidth,strokeLinecap:"square"})},r.state=a({},t.computeValues(e)),r}return u(t,e),l(t,[{key:"values",value:function(e){return"string"==typeof this.props.values?(0,s.split)(this.props.values,this.props.delimiter).map(function(e){return Number(e)}):(0,s.flatten)([this.props.values])}},{key:"render",value:function(){var e=this.props,t=e.height,r=e.width;return f.default.createElement("svg",{className:"peity peity-line",height:t,width:r},this.renderFill(),this.renderStroke())}}],[{key:"getDerivedStateFromProps",value:function(e,r){return a({},t.computeValues(e))}},{key:"computeValues",value:function(e){var r=this,n=(e.values,e.maxAxisValue),o=e.minAxisValue,i=e.strokeWidth,u=e.strokeColor,a=e.height,l=e.fillColor,c=e.width,f=(0,h.processValues)(e.values,e.delimiter),p=(0,s.max)([(0,s.max)(f),Number(n)]),d=(0,s.min)([(0,s.min)(f),Number(o)]),y=a-i,m=p-d,b=t.yScale(Math.max(d,0),y,i,m,d),v=[];return(0,s.each)(f,function(e,n){return v.push(t.xScale(n,c,f.length),r.yScale(e,y,i,m,d))}),{coords:(0,s.concat)([0,b],v,[c,b]),canDrawStroke:!((0,s.isEmpty)(u)||0===i),canDrawFill:!(0,s.isEmpty)(l)}}},{key:"xScale",value:function(e,t,r){return e*(t/(r-1))}},{key:"yScale",value:function(e,t,r,n,o){var i=t;return n&&(i-=(e-o)/n*t),i+r/2}}]),t}(f.default.Component);y.defaultProps={delimiter:",",fillColor:"#c6d9fd",height:16,minAxisValue:0,maxAxisValue:-1/0,strokeColor:"#4d89f9",strokeWidth:1,width:32,strokeFillColor:"none"},y.propTypes={values:d.default.any.isRequired,delimiter:d.default.string,fillColor:d.default.string,height:d.default.number,minAxisValue:d.default.number,maxAxisValue:d.default.number,strokeColor:d.default.string,strokeWidth:d.default.number,width:d.default.number,strokeFillColor:d.default.string},t.default=y},function(e,t,r){"use strict";var n=r(8),o=r(9),i=r(10);e.exports=function(){function e(e,t,r,n,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function n(e,t,r,n,i,u,a,l){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,i,u,a,l],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),s=r(1),c=n(s),f=r(2),p=n(f),d=r(3),h=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.fill=function(e){return r.props.fill[e%r.props.fill.length]},r.state={reactValues:r.computeValues(e)},r}return u(t,e),a(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(this.computeValues(e))}},{key:"computeValues",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,this.props),r=t.maxAxisValue,n=t.minAxisValue,o=t.width,i=t.height,u=t.padding,a=t.values,s=t.delimiter,c=(0,d.processValues)(a,s),f=(0,l.max)([(0,l.max)(c),Number(r)]),p=(0,l.min)(c),h=f-p;return{reactValues:(0,l.map)(c,function(t,a){var s=e.xScale(Number(a)+u,o,c.length),f=e.xScale(Number(a)+1-u,o,c.length)-s,d=e.yScale(t,i,h,p),y=d,m=d,b=0;return h?t<0?y=e.yScale((0,l.min)([r,0]),i,h,p):m=e.yScale((0,l.max)([n,0]),i,h,p):b=1,b=m-y,0===b&&(b=1,r>0&&h&&y--),{fill:e.fill(a),x:s,y:y,width:f,height:b}})}}},{key:"xScale",value:function(e,t,r){return e*(t/r)}},{key:"yScale",value:function(e,t,r,n){var o=t;return o-=r?(e-n)/r*t:1,o}},{key:"render",value:function(){var e=this;return c.default.createElement("svg",{className:"peity peity-bar",height:height,width:width},(0,l.map)(this.state.reactValues,function(t,r){return c.default.createElement("rect",{key:""+r+t.x,fill:e.fill(r),x:t.x,y:t.y1,width:t.w,height:t.h})}))}}]),t}(c.default.Component);h.defaultProps={delimiter:",",fill:["#4D89F9"],height:16,minAxisValue:0,padding:.1,width:32},h.propTypes={values:p.default.any.isRequired,delimiter:p.default.string,fill:p.default.array,height:p.default.number,minAxisValue:p.default.number,maxAxisValue:p.default.number,padding:p.default.number,width:p.default.number},t.default=h}])});