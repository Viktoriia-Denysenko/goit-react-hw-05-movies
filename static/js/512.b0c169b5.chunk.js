"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[512],{1933:function(e,t,r){r.d(t,{Ph:function(){return l},XT:function(){return s},YJ:function(){return p},tx:function(){return b},zv:function(){return h}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=ecc266c5c008b90a8b88a128072b35c2");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US&query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2512:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(885),u=r(7757),c=r.n(u),i=r(2791),s=r(501),o=r(6871),p=r(644),f=r(8479),l={movieList:"Movies_movieList__CFCTK"},v=r(1933),h="Form_form__uMwM0",m="Form_input__p33i1",b="Form_button__jQker",d=r(184);var g=function(e){var t=e.onSubmit,r=(0,s.lr)(),n=(0,a.Z)(r,2),u=n[0],c=n[1],o=(0,i.useState)(u.get("query")||""),p=(0,a.Z)(o,2),f=p[0],l=p[1];return(0,d.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),t(f)},children:[(0,d.jsx)("input",{className:m,type:"text",autoComplete:"off",name:"query",value:f,autoFocus:!0,onChange:function(e){l(e.currentTarget.value.toLowerCase().trim()),c({query:e.currentTarget.value.toLowerCase().trim()})}}),(0,d.jsx)("button",{type:"submit",className:b,children:"Search"})]})};var y=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,i.useState)(!1),m=(0,a.Z)(h,2),b=m[0],y=m[1],_=(0,s.lr)(),x=(0,a.Z)(_,2),w=x[0],k=x[1],Z=(0,i.useState)(w.get("query")||""),S=(0,a.Z)(Z,2),j=S[0],C=S[1],q=(0,o.TH)();return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,v.Ph)(j);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.ZP.error("No movie found");case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}""!==j&&function(){e.apply(this,arguments)}()}),[j]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{onSubmit:function(e){C(e),k({query:e})}}),b&&(0,d.jsx)(p.Z,{}),r&&(0,d.jsx)("ul",{className:l.movieList,children:r.map((function(e){var t=e.id,r=e.title;return(0,d.jsx)("li",{className:l.movieItem,children:(0,d.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:q},children:r})},t)}))})]})}}}]);
//# sourceMappingURL=512.b0c169b5.chunk.js.map