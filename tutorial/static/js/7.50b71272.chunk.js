(this["webpackJsonpautotator-tutorial"]=this["webpackJsonpautotator-tutorial"]||[]).push([[7],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(83);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return a.a.createElement(o.a,i({viewBox:"0 0 24 24",a11yTitle:"Youtube"},e),a.a.createElement("path",{fill:"#CD201F",fillRule:"evenodd",d:"M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"}))}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n(39),o=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},c=n(16);function u(e){var t=e.displayName||e.name,n=function(n){function a(){var e=null!==n&&n.apply(this,arguments)||this;return e.onChange=function(){e.forceUpdate()},e}return o(a,n),a.prototype.listen=function(){this.props.cookies.addChangeListener(this.onChange)},a.prototype.unlisten=function(e){(e||this.props.cookies).removeChangeListener(this.onChange)},a.prototype.componentDidMount=function(){this.listen()},a.prototype.componentDidUpdate=function(e){e.cookies!==this.props.cookies&&(this.unlisten(e.cookies),this.listen())},a.prototype.componentWillUnmount=function(){this.unlisten()},a.prototype.render=function(){var t=this.props,n=t.forwardedRef,a=t.cookies,o=l(t,["forwardedRef","cookies"]),c=a.getAll();return r.createElement(e,i({},o,{ref:n,cookies:a,allCookies:c}))},a.displayName="withCookies("+t+")",a.WrappedComponent=e,a}(r.Component),u=r.forwardRef((function(e,t){return r.createElement(a.a,null,(function(a){return r.createElement(n,i({cookies:a},e,{forwardedRef:t}))}))}));return u.displayName=n.displayName,u.WrappedComponent=n.WrappedComponent,c(u,e)}},117:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(7),l=n(76),c=n(19),u=Object(o.css)(["color:",";"],(function(e){return Object(i.c)(e.colorProp,e.theme)})),s={center:"center",end:"right",start:"left"},f=Object(o.css)(["text-align:",";"],(function(e){return s[e.textAlign]})),p=o.default.p.withConfig({displayName:"StyledParagraph",componentId:"tbetod-0"})([""," "," "," "," ",""],l.f,(function(e){return function(e){var t=e.size||"medium",n=e.theme.paragraph[t];return Object(o.css)(["font-size:",";line-height:",";max-width:",";"],n.size,n.height,e.fillProp?"none":n.maxWidth)}(e)}),(function(e){return e.textAlign&&f}),(function(e){return e.colorProp&&u}),(function(e){return e.theme.paragraph&&e.theme.paragraph.extend}));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}p.defaultProps={},Object.setPrototypeOf(p.defaultProps,c.a),n.d(t,"a",(function(){return d}));var d=function(e){var t=e.color,n=e.fill,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","fill"]);return a.a.createElement(p,m({colorProp:t,fillProp:n},r))}},128:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(21),o=n(23),i=n(12),l=n(22),c=n(0),u=n.n(c),s=n(10),f=n(81),p=n(131),m=n(82),d=n(117),h=n(134),g=n(85),y=n(116),b=n(101),v={global:{colors:{brand:"#3F51B5"},font:{family:"'-apple-system', 'BlinkMacSystemFont', 'Roboto'",size:"16px",height:"20px"}}},O=function(e){function t(e){var n;Object(r.a)(this,t),n=Object(o.a)(this,Object(i.a)(t).call(this,e));var a=e.cookies;return n.state={watched:a.get("watched")||!1,clickNotEnd:!1},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(f.a,{full:!0,theme:v},u.a.createElement(p.a,{fill:!0},u.a.createElement(g.a,null),this.state.watched&&u.a.createElement(p.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},u.a.createElement(p.a,{flex:!0,align:"center",justify:"center",margin:"medium"},u.a.createElement(m.a,{levle:"2",alignSelf:"start",margin:"large"},"Quiz"),u.a.createElement(p.a,{fill:!0,alignSelf:"start",margin:"large"},u.a.createElement(m.a,{level:"3"},"Quiz 1"),u.a.createElement(d.a,{fill:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),u.a.createElement(p.a,{fill:!0,alignSelf:"start",margin:"large"},u.a.createElement(m.a,{level:"3"},"Quiz 2"),u.a.createElement(d.a,{fill:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),u.a.createElement(p.a,{fill:!0,alignSelf:"start",margin:"large"},u.a.createElement(m.a,{level:"3"},"Quiz 3"),u.a.createElement(d.a,{fill:!0},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),!this.state.watched&&u.a.createElement(p.a,{direction:"row",flex:!0},u.a.createElement(p.a,{flex:!0,align:"center",justify:"center",margin:"small"},u.a.createElement(m.a,{level:"3"},"\uba3c\uc800 \uad50\uc721 \uc601\uc0c1\uc744 \uc2dc\uccad\ud574\uc8fc\uc138\uc694"),u.a.createElement(m.a,{level:"4"},"\uad50\uc721\uc601\uc0c1\uc744 \uc2dc\uccad\ud558\uc2e0 \ud6c4\uc5d0 \ud655\uc778 \ud034\uc988 \ucc38\uc5ec\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),u.a.createElement(h.a,{icon:u.a.createElement(b.a,null),label:"Video",margin:"medium",onClick:function(){return window.location.href="/video"}})))))}}]),t}(c.Component);t.default=Object(y.a)(Object(s.d)(O))},85:function(e,t,n){"use strict";var r=n(20),a=n(21),o=n(23),i=n(12),l=n(22),c=n(0),u=n.n(c),s=n(129),f=n(132),p=n(82),m=n(131),d=n(86),h=n.n(d),g=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).onClick=function(e){window.location.href=e},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(y,null,u.a.createElement(s.a,{style:{height:"24px",width:"24px"},src:h.a,alignSelf:"start",margin:{right:"small"}}),u.a.createElement(f.a,{onClick:function(){return e.onClick("/")},color:"white"},u.a.createElement(p.a,{level:"4",margin:"none",alignSelf:"start"},"Autotator Tutorial")))}}]),t}(c.Component),y=function(e){return u.a.createElement(m.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"start",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"100"}},e))};t.a=g},86:function(e,t,n){e.exports=n.p+"static/media/autotator-logo.24876c91.png"}}]);
//# sourceMappingURL=7.50b71272.chunk.js.map