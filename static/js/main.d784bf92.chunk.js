(this["webpackJsonpcorona-dashboard"]=this["webpackJsonpcorona-dashboard"]||[]).push([[0],{169:function(e,t,a){e.exports=a(360)},175:function(e,t,a){},359:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);a(170);var c=a(1),n=a.n(c),r=a(52),s=a.n(r),l=(a(175),a(8)),o=a.n(l),m=a(17),i=a(9),d=a(26),u=a.n(d),p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),d=l[0],p=l[1];return Object(c.useEffect)((function(){fetch("https://covid-193.p.rapidapi.com/statistics?country=All",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}}).then(function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,r(a.response),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p(!1),console.log(e)}))}),[]),d?n.a.createElement("div",{className:"d-flex justify-content-center w-100"},n.a.createElement(u.a,{type:"spinningBubbles",color:"#347B98",height:"10%",width:"10%"})):n.a.createElement("div",{className:"row display-flex"},n.a.createElement("div",{className:"col col-12 col-sm-3 mb-3 mb-sm-0"},n.a.createElement("div",{className:"card h-100 bg-tiber"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Total Cases"),n.a.createElement("p",{className:"stat-number"},a[0].cases.total)))),n.a.createElement("div",{className:"col col-12 col-sm-3 mb-3 mb-sm-0"},n.a.createElement("div",{className:"card h-100 bg-green"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Active Cases"),n.a.createElement("p",{className:"stat-number"},a[0].cases.active)))),n.a.createElement("div",{className:"col col-12 col-sm-3 mb-3 mb-sm-0"},n.a.createElement("div",{className:"card h-100 bg-astral"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Recovered Cases"),n.a.createElement("p",{className:"stat-number"},a[0].cases.recovered)))),n.a.createElement("div",{className:"col col-12 col-sm-3"},n.a.createElement("div",{className:"card h-100 bg-red"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Total Deaths"),n.a.createElement("p",{className:"stat-number"},a[0].deaths.total)))))},h=a(131),v=a.n(h),E=a(10),f=function(e){var t=e.selectedCountry,a=Object(c.useState)([]),r=Object(i.a)(a,2),s=r[0],l=r[1],d=Object(c.useState)(!0),p=Object(i.a)(d,2),h=p[0],v=p[1];return Object(c.useEffect)((function(){t?fetch("https://covid-193.p.rapidapi.com/history?country=".concat(t),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}}).then(function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,l(a.response),v(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){v(!1),console.log(e)})):fetch("https://covid-193.p.rapidapi.com/history?country=All",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}}).then(function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,l(a.response),v(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){v(!1),console.log(e)}))}),[t]),h?n.a.createElement("div",{className:"d-flex justify-content-center w-100"},n.a.createElement(u.a,{type:"spinningBubbles",color:"#347B98",height:"10%",width:"10%"})):n.a.createElement("div",{className:"d-flex justify-content-center ".concat(t?"flex-column":"")},t?n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("h3",null,"History (",t,")")):null,n.a.createElement("div",{style:{width:"100%",maxWidth:"600px",height:"300px"}},n.a.createElement(E.e,null,n.a.createElement(E.d,{data:s,margin:{top:5,right:30,left:20,bottom:5}},n.a.createElement(E.g,{dataKey:"time",reversed:!0,tickFormatter:function(e){return new Date(e).toLocaleDateString()}}),n.a.createElement(E.h,{dataKey:"cases.active"}),n.a.createElement(E.a,{strokeDasharray:"3 3"}),n.a.createElement(E.f,{labelFormatter:function(e){return new Date(e).toLocaleString()}}),n.a.createElement(E.b,null),n.a.createElement(E.c,{type:"monotone",dot:!1,name:"Total Cases",dataKey:"cases.total",stroke:"#052D3D",activeDot:{r:8}}),n.a.createElement(E.c,{type:"monotone",dot:!1,name:"Active Cases",dataKey:"cases.active",stroke:"#B2D732",activeDot:{r:8}}),n.a.createElement(E.c,{type:"monotone",dot:!1,name:"Recovered Cases",dataKey:"cases.recovered",stroke:"#347B98",activeDot:{r:8}}),n.a.createElement(E.c,{type:"monotone",dot:!1,name:"Total Deaths",dataKey:"deaths.total",stroke:"#FE2712",activeDot:{r:8}})))))},b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),d=l[0],p=l[1],h=Object(c.useState)("India"),E=Object(i.a)(h,2),b=E[0],N=E[1],y=Object(c.useState)([]),x=Object(i.a)(y,2),g=x[0],j=x[1],w=Object(c.useState)(!1),k=Object(i.a)(w,2),O=k[0],T=k[1];Object(c.useEffect)((function(){Promise.all([fetch("https://covid-193.p.rapidapi.com/countries",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}}),fetch("https://covid-193.p.rapidapi.com/statistics?country=".concat(b),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}})]).then(function(){var e=Object(m.a)(o.a.mark((function e(t){var a,c,n,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)(t,2),c=a[0],n=a[1],e.next=3,c.json();case 3:return s=e.sent,e.next=6,n.json();case 6:l=e.sent,r(s.response),j(l.response),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p(!1),console.log(e)}))}),[]);var C=function(e){T(!0),N(e.target.value),fetch("https://covid-193.p.rapidapi.com/statistics?country=".concat(e.target.value),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018"}}).then(function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,j(a.response),T(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){T(!1),console.log(e)}))};return d?n.a.createElement("div",{className:"d-flex justify-content-center w-100"},n.a.createElement(u.a,{type:"spinningBubbles",color:"#347B98",height:"10%",width:"10%"})):n.a.createElement(v.a,{spinner:!0,active:O,text:"Please wait..."},n.a.createElement("div",{className:"row display-flex"},n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("div",{className:"d-flex justify-content-center w-100 m-2"},0!==a.length?n.a.createElement("form",{className:"w-100"},n.a.createElement("div",{className:"form-group row justify-content-center d-flex"},n.a.createElement("label",{for:"country",className:"d-flex justify-content-center col-lg-6 col-sm-4 col-form-label col-md-6"},n.a.createElement("strong",null,"Choose a Country")),n.a.createElement("div",{className:"d-flex justify-content-center col-sm-8 col-lg-6 col-md-6"},n.a.createElement("select",{id:"country",className:"country-select",value:b,onChange:C},a.map((function(e){return n.a.createElement("option",{key:e,value:e},e)})))))):null)),n.a.createElement("div",{className:"col-12 col-lg-6 col-sm-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6 mb-3"},n.a.createElement("div",{className:"card h-100 bg-tiber"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Total Cases"),n.a.createElement("p",{className:"stat-number"},g[0].cases.total)))),n.a.createElement("div",{className:"col-12 col-sm-6 mb-3"},n.a.createElement("div",{className:"card h-100 bg-green"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Active Cases"),n.a.createElement("p",{className:"stat-number"},g[0].cases.active))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-6 mb-3"},n.a.createElement("div",{className:"card h-100 bg-astral"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Recovered Cases"),n.a.createElement("p",{className:"stat-number"},g[0].cases.recovered)))),n.a.createElement("div",{className:"col-12 col-sm-6 mb-3"},n.a.createElement("div",{className:"card h-100 bg-red"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",{className:"card-title"},"Total Deaths"),n.a.createElement("p",{className:"stat-number"},g[0].deaths.total)))))),n.a.createElement("div",{className:"col-12 col-lg-6 col-sm-12"},n.a.createElement(f,{selectedCountry:b}))))},N=function(){return n.a.createElement("div",{className:"container my-2"},n.a.createElement("div",{className:"row mb-3 mt-3"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",{className:"text-left"},"History (Global)"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"col-12"},n.a.createElement(f,null))),n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("h4",{className:"text-left"},"Global Stats"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"col-12"},n.a.createElement(p,null))),n.a.createElement("div",{className:"row mb-3"},n.a.createElement("div",{className:"col-12 mb-2"},n.a.createElement("h4",{className:"text-left"},"Country Wise Stats"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"col-12"},n.a.createElement(b,null))))};var y=function(){return n.a.createElement("svg",{height:"30px",width:"30px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",style:{fill:"white"}},n.a.createElement("path",{style:{WebkitTextIndent:"0",textIndent:"0",WebkitTextAlign:"start",textAlign:"start",lineHeight:"normal",WebkitTextTransform:"none",textTransform:"none",blockProgression:"tb",InkscapeFontSpecification:"Bitstream Vera Sans"},d:"M14 3v2h1v1.063A9.87 9.87 0 009.687 8.25l-.75-.75.688-.688-1.406-1.406L5.406 8.22l1.407 1.406.687-.688.75.75A9.87 9.87 0 006.062 15H5v-1H3v4h2v-1h1.063a9.864 9.864 0 002.218 5.344l-.781.718-.688-.687-1.406 1.406 2.813 2.813 1.406-1.407-.688-.687.75-.781A9.846 9.846 0 0015 25.937V27h-1v2h4v-2h-1v-1.063a9.846 9.846 0 005.313-2.218h.03l.72.781-.688.688 1.406 1.406 2.813-2.813-1.407-1.406-.687.688-.781-.72c.005-.006-.006-.024 0-.03A9.846 9.846 0 0025.937 17H27v1h2v-4h-2v1h-1.063a9.87 9.87 0 00-2.187-5.313l.75-.75.688.688 1.406-1.406-2.813-2.813-1.406 1.407.688.687-.75.75A9.87 9.87 0 0017 6.062V5h1V3h-4zm2 5c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-2.5 2.156a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 14.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7.5 4.344a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}))},x=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-chelsea text-white py-3"},n.a.createElement("div",{className:"d-flex justify-content-center align-items-center w-100"},n.a.createElement("div",{className:"mr-2"},n.a.createElement(y,null)),n.a.createElement("h3",{className:"m-0"},"COVID-19 Statistic Updates")))};a(359);var g=function(){return n.a.createElement("div",null,n.a.createElement(x,null),n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[169,1,2]]]);
//# sourceMappingURL=main.d784bf92.chunk.js.map