(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home mt-5 mt-md-0"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container mb-md-0"},[e("div",{staticClass:"row g-0"},t._l(t.roomData,(function(a){return e("div",{key:a.id,staticClass:"col-md-2 position-relative mb-4 mb-md-0 img-skew",on:{click:function(e){return e.preventDefault(),t.getRoomDetail(a.id)}}},[e("a",{staticClass:"d-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"img-cover",attrs:{src:a.imageUrl,alt:"image"}}),e("h4",{staticClass:"room-name mb-0 py-3 fs-5 text-white"},[t._v(t._s(a.name))])]),e("div",{staticClass:"hover-bg d-flex flex-column justify-content-center align-items-center"},[e("p",{staticClass:"mb-1 text-white fs-5"},[t._v("$ "+t._s(a.normalDayPrice))]),e("p",{staticClass:"text-white fs-5"},[t._v("$ "+t._s(a.holidayPrice))]),e("p",{staticClass:"mb-1 text-white fs-5"},[t._v("查看詳細")]),e("div",{staticClass:"border border-white w-25"})])])})),0)])],1)},s=[],o={data:function(){return{roomData:{},isLoading:!1}},methods:{getRoomData:function(){var t=this,a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/rooms"),e={Authorization:"Bearer ".concat("xr4Pnle0DHdqboMEG0mooHCpgXqwXSBKtV8pqH4RwhhYc7maueofsDelpSEY")};t.isLoading=!0,t.$http.get(a,{headers:e}).then((function(a){a.data.success&&(t.roomData=a.data.items,t.isLoading=!1)}))},getRoomDetail:function(t){this.$router.push("room_detail/".concat(t))}},created:function(){this.getRoomData()}},n=o,c=e("2877"),r=Object(c["a"])(n,i,s,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.0569a77b.js.map