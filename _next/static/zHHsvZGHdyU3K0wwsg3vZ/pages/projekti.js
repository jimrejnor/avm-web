(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KCAX:function(e,t,a){"use strict";var n=a("0iUn"),c=a("sLSF"),r=a("MI3g"),i=a("a7VT"),s=a("Tit0"),o=a("q1tI"),l=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(r.default)(this,Object(i.default)(t).call(this,e))).state={active:!1},a}return Object(s.default)(t,e),Object(c.default)(t,[{key:"render",value:function(){var e=this;return this.props.render({active:this.state.active,setActive:function(t){e.setState({active:t})}})}}]),t}(a.n(o).a.Component);t.a=l},VHyf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projekti",function(){var e=a("WFOv");return{page:e.default||e}}])},WFOv:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),r=a("RuNc"),i=a.n(r),s=a("b1Ic"),o=a.n(s),l=a("YFqc"),u=a.n(l),m=a("CafY"),f=a("PQhJ"),d=a("KCAX"),v=a("2Mn2"),p=a.n(v);function E(e){var t=e.title,a=e.id,n=(e.description,e.image);e.index;return c.a.createElement(u.a,{prefetch:!0,href:"/projekt/".concat(a)},c.a.createElement("div",{className:"col-md-4 col-sm-6 projects-item"},c.a.createElement(d.a,{render:function(e){var a=e.active,r=e.setActive;return c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{className:"projects-link",href:"",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},c.a.createElement("div",{className:"projects-hover"+(a?" active":"")},c.a.createElement("div",{className:"projects-hover-content"},c.a.createElement("i",{className:"fas fa-plus fa-3x"}))),c.a.createElement("div",{className:"image-holder",style:{backgroundImage:'url("'+n+'")'}})),c.a.createElement("div",{className:"projects-caption",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},c.a.createElement("h4",{className:a?" active":""},t)))}})))}t.default=function(){return c.a.createElement(m.a,null,c.a.createElement(f.a,{title:"Projekti",className:"projects"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,p.a.getProjects().map(function(e,t){return c.a.createElement(E,{key:e.id,id:e.id,title:e.title,description:e.description,image:e.image,index:t})})))))}}},[["VHyf",1,0]]]);