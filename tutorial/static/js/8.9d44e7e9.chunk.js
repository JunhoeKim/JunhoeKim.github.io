(this["webpackJsonpautotator-tutorial"]=this["webpackJsonpautotator-tutorial"]||[]).push([[8],{121:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a(21),c=a(23),r=a(12),i=a(22),o=a(0),u=a.n(o),s=a(10),m=a(81),d=a(126),f=a(82),h=a(129),E=a(125),b=a(99),p=a(84),g=a(122),k=a(113),v={global:{colors:{brand:"#3F51B5"},font:{family:"'-apple-system', 'BlinkMacSystemFont', 'Roboto'",size:"16px",height:"20px"}}},w=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(c.a)(this,Object(r.a)(t).call(this,e));var l=e.cookies;return a.state={watched:l.get("watched")||!1,clickNotEnd:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"saveWatched",value:function(){this.props.cookies.set("watched",!0,{path:"/"}),this.setState({watched:!0})}},{key:"render",value:function(){var e=this;return u.a.createElement(m.a,{full:!0,theme:v},u.a.createElement(d.a,{fill:!0},u.a.createElement(p.a,null),u.a.createElement(d.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},u.a.createElement(d.a,{flex:!0,align:"center",justify:"center"},u.a.createElement(d.a,{flex:!0,align:"center",justify:"center"},u.a.createElement(f.a,{level:"4",alignSelf:"start"},"\uad50\uc721 \uc790\ub8cc \uc601\uc0c1"),u.a.createElement(b.a,{videoId:"D1PvIWdJ8xo",opts:{width:"1024",height:"576"},onEnd:function(){return e.saveWatched()}}),this.state.watched?u.a.createElement(h.a,{icon:u.a.createElement(g.a,null),label:"Next",margin:"small",alignSelf:"end",onClick:function(){return window.location.href="/quiz"}}):u.a.createElement(h.a,{icon:u.a.createElement(g.a,null),label:"Next",margin:"small",alignSelf:"end",onClick:function(){return e.setState({clickNotEnd:!0})},color:"white-4"})),this.state.clickNotEnd&&u.a.createElement(E.a,{onEsc:function(){return e.setState({clickNotEnd:!1})},onClickOutside:function(){return e.setState({clickNotEnd:!1})}},u.a.createElement(d.a,{pad:"medium",gap:"small",width:"medium"},u.a.createElement(f.a,{level:"4",margin:"none"},"\uad50\uc721 \uc790\ub8cc \uc601\uc0c1\uc744 \ub05d\uae4c\uc9c0 \uc2dc\uccad\ud574\uc8fc\uc138\uc694."),u.a.createElement(d.a,{as:"footer",gap:"small",direction:"row",align:"center",justify:"end",pad:{top:"medium",bottom:"small"}},u.a.createElement(h.a,{label:"close",onClick:function(){return e.setState({clickNotEnd:!1})}}))))))))}}]),t}(o.Component);t.default=Object(k.a)(Object(s.d)(w))},84:function(e,t,a){"use strict";var n=a(20),l=a(21),c=a(23),r=a(12),i=a(22),o=a(0),u=a.n(o),s=a(127),m=a(82),d=a(126),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).onClick=function(e){window.location.href=e},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(h,null,u.a.createElement(s.a,{onClick:function(){return e.onClick("/")},color:"white"},u.a.createElement(m.a,{level:"4",margin:"none"},"Autotator Tutorial")))}}]),t}(o.Component),h=function(e){return u.a.createElement(d.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"100"}},e))};t.a=f}}]);
//# sourceMappingURL=8.9d44e7e9.chunk.js.map