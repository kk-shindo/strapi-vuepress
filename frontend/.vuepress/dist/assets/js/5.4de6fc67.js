(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{379:function(t,e,n){"use strict";n.r(e);n(358);var a={name:"getRestaurants",data:function(){return{restaurants:this.getRestaurants()}},methods:{getRestaurants:function(){n(359).get("http://localhost:1337/restaurants").then(function(t){this.restaurants=t.data}.bind(this)).catch(function(t){console.error(t)}.bind(this))}}},s=n(42),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Restaurants")]),t._v(" "),n("table",{staticClass:"table"},[t._l(t.restaurants,(function(e){return n("tr",[n("th",[t._v("id")]),t._v(" "),n("th",[t._v("name")]),t._v(" "),n("th",[t._v("description")]),t._v(" "),n("th",[t._v("created_at")]),t._v(" "),n("th",[t._v("updated_at")]),t._v(" "),n("th",[t._v("categories")])])})),t._v(" "),t._l(t.restaurants,(function(e){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[t._v(t._s(e.created_at))]),t._v(" "),n("td",[t._v(t._s(e.updated_at))]),t._v(" "),n("td",t._l(e.categories,(function(e){return n("ul",[n("li",[t._v(t._s(e.name))])])})),0)])}))],2)])}),[],!1,null,null,null);e.default=r.exports}}]);