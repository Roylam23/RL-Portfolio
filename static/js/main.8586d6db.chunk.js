(this["webpackJsonprl-po"]=this["webpackJsonprl-po"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(6),s=a.n(c),o=(a(12),a(13),a(7)),r=a(1),d=a(0),l=function(){Object(r.a)({easing:"easeOutQuad",targets:".option",opacity:1,rotate:"-180deg",delay:300,duration:350,begin:function(){document.querySelector(".option").style.display="block"}}),Object(r.a)({easing:"easeOutQuad",targets:".option-c",opacity:0,rotate:"-180deg",duration:350,complete:function(){document.querySelector(".option-c").style.display="none"}})},j=function(){r.a.timeline({easing:"easeOutQuad"}).add({targets:".menu-option",duration:425,opacity:0,translateX:"50px",delay:r.a.stagger(150,{direction:"reverse"})}).add({targets:".menu",duration:1e3,translateY:"-100%",opacity:0})},u=function(){if(console.log(window.screen.width),window.screen.width<=768){var e=r.a.timeline({easing:"easeOutQuad"});e.add({targets:".menu",duration:650,translateY:0,opacity:1}),e.add({targets:".menu-option",duration:550,opacity:[0,1],translateX:["50px",0],delay:r.a.stagger(250)}),document.querySelectorAll(".menu-option").forEach((function(e){e.addEventListener("click",(function(){l(),j()}))}))}else(e=r.a.timeline({easing:"easeOutQuad"})).add({targets:".menu-option",duration:0,translateX:0,opacity:1}).add({targets:".menu",duration:0,translateY:0}).add({targets:".menu",opacity:1,translateY:"105px",duration:650});Object(r.a)({easing:"easeOutQuad",targets:".option",opacity:0,rotate:"180deg",duration:350,complete:function(){document.querySelector(".option").style.display="none"}}),Object(r.a)({easing:"easeOutQuad",targets:".option-c",opacity:1,rotate:"180deg",delay:300,duration:350,begin:function(){document.querySelector(".option-c").style.display="block"}})},p=function(){window.screen.width<=768?j():o.a.to(".menu",.65,{ease:"Power1.easeOut",width:"auto",opacity:"0",right:30}),l()},h=function(){return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsxs)("svg",{width:"calc(40px + 1.5vw)",viewBox:"0 0 100 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:[Object(d.jsx)("path",{d:"M29.0816 54.0262V49.035C29.0816 45.0595 32.3044 41.8367 36.2799 41.8367C40.2555 41.8367 43.4783 45.0595 43.4783 49.035V54.0262C43.4783 58.0017 40.2555 61.2245 36.2799 61.2245C32.3044 61.2245 29.0816 58.0017 29.0816 54.0262Z",fill:"white"}),Object(d.jsx)("path",{d:"M53.2609 54.1593V7.06522C53.2609 3.16321 56.4241 0 60.3261 0C64.2281 0 67.3913 3.16321 67.3913 7.06522V54.1593C67.3913 58.0613 64.2281 61.2245 60.3261 61.2245C56.4241 61.2245 53.2609 58.0613 53.2609 54.1593Z",fill:"white"}),Object(d.jsx)("path",{d:"M93.1123 61.2245H78.6269C74.8229 61.2245 71.7391 58.1407 71.7391 54.3367C71.7391 50.5327 74.8229 47.449 78.6269 47.449H93.1122C96.9162 47.449 100 50.5327 100 54.3367C100 58.1407 96.9163 61.2245 93.1123 61.2245Z",fill:"white"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 30.6122V53.6158C0 57.818 3.40653 61.2245 7.6087 61.2245C11.8109 61.2245 15.2174 57.818 15.2174 53.6158V38.1924C15.2174 37.6289 15.6742 37.172 16.2378 37.172H35.8617C40.0682 37.172 43.4783 33.7619 43.4783 29.5554C43.4783 25.3489 40.0682 21.9388 35.8616 21.9388H31.1224C31.1224 25.0383 28.6098 27.551 25.5102 27.551H15.2174V21.9388H8.67347C3.88325 21.9388 0 25.822 0 30.6122ZM15.2174 15.8163V10.2041H23.375H25.5102C28.6098 10.2041 31.1224 12.7168 31.1224 15.8163H35.5701C39.9377 15.8163 43.4783 12.2757 43.4783 7.90816C43.4783 3.54061 39.9377 0 35.5701 0H35.2041H22.449H8.92857C4.56101 0 1.02041 3.54061 1.02041 7.90816C1.02041 12.2757 4.56101 15.8163 8.92857 15.8163H15.2174Z",fill:"white"})]}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("a",{href:"#home",children:Object(d.jsx)("div",{className:"menu-option m1",children:"Home"})}),Object(d.jsx)("a",{href:"#about",children:Object(d.jsx)("div",{className:"menu-option m2",children:"About"})}),Object(d.jsx)("a",{href:"#project",children:Object(d.jsx)("div",{className:"menu-option m3",children:"Recent Project"})}),Object(d.jsx)("a",{href:"#contact",children:Object(d.jsx)("div",{className:"menu-option m4",children:"Contact"})})]}),Object(d.jsxs)("div",{className:"btn-con",children:[Object(d.jsx)("svg",{className:"option-c",width:"calc(20px + 0.5vw)",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:p,children:Object(d.jsx)("path",{d:"M35.5 4.025L31.975 0.5L18 14.475L4.025 0.5L0.5 4.025L14.475 18L0.5 31.975L4.025 35.5L18 21.525L31.975 35.5L35.5 31.975L21.525 18L35.5 4.025Z",fill:"white"})}),Object(d.jsx)("svg",{className:"option",width:"calc(20px + 0.5vw)",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:u,children:Object(d.jsx)("path",{d:"M2.14286 0C0.959389 0 0 0.95939 0 2.14286C0 3.32632 0.95939 4.28571 2.14286 4.28571H32.8571C34.0406 4.28571 35 3.32632 35 2.14286C35 0.95939 34.0406 0 32.8571 0H2.14286ZM2.14286 12.8571C0.959389 12.8571 0 13.8165 0 15C0 16.1835 0.95939 17.1429 2.14286 17.1429H32.8571C34.0406 17.1429 35 16.1835 35 15C35 13.8165 34.0406 12.8571 32.8571 12.8571H2.14286ZM2.14286 25.7143C0.959389 25.7143 0 26.6737 0 27.8571C0 29.0406 0.95939 30 2.14286 30H32.8571C34.0406 30 35 29.0406 35 27.8571C35 26.6737 34.0406 25.7143 32.8571 25.7143H2.14286Z",fill:"white"})})]})]})},b=a.p+"static/media/icon.55299ae8.jpg",x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"main-outer",children:Object(d.jsxs)("div",{className:"main-con",children:[Object(d.jsxs)("div",{className:"main-l-con",children:[Object(d.jsx)("span",{className:"hi",children:"Hi, I'm"}),Object(d.jsx)("span",{className:"name",children:"Roy Lam"}),Object(d.jsx)("span",{className:"title",children:"Frontend Designer & Developer"}),Object(d.jsx)("button",{className:"btn-work",children:"Let Work Together"})]}),Object(d.jsx)("div",{className:"main-r-con",children:Object(d.jsx)("div",{className:"bo-con",children:Object(d.jsx)("img",{className:"bo",src:b,alt:"bo"})})})]})})})},m=function(){return Object(n.useEffect)((function(){r.a.timeline({easing:"easeInOutSine",duration:1500}).add({targets:".load-icon>path",strokeDashoffset:[r.a.setDashoffset,0],delay:function(e,t){return 250*t},direction:"reverse",loop:!0}).add({targets:".load-icon>path",fill:"#fff"},1e3).add({targets:".load",opacity:0,duration:600,complete:function(){document.querySelector(".load").style.display="none"}},3e3)})),Object(d.jsx)("div",{className:"load",children:Object(d.jsxs)("svg",{width:"calc(60px + 1.5vw)",viewBox:"0 0 100 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"load-icon",children:[Object(d.jsx)("path",{d:"M29.0816 54.0262V49.035C29.0816 45.0595 32.3044 41.8367 36.2799 41.8367C40.2555 41.8367 43.4783 45.0595 43.4783 49.035V54.0262C43.4783 58.0017 40.2555 61.2245 36.2799 61.2245C32.3044 61.2245 29.0816 58.0017 29.0816 54.0262Z",stroke:"white","stroke-width":"1.5"}),Object(d.jsx)("path",{d:"M53.2609 54.1593V7.06522C53.2609 3.16321 56.4241 0 60.3261 0C64.2281 0 67.3913 3.16321 67.3913 7.06522V54.1593C67.3913 58.0613 64.2281 61.2245 60.3261 61.2245C56.4241 61.2245 53.2609 58.0613 53.2609 54.1593Z",stroke:"white","stroke-width":"1.5"}),Object(d.jsx)("path",{d:"M93.1123 61.2245H78.6269C74.8229 61.2245 71.7391 58.1407 71.7391 54.3367C71.7391 50.5327 74.8229 47.449 78.6269 47.449H93.1122C96.9162 47.449 100 50.5327 100 54.3367C100 58.1407 96.9163 61.2245 93.1123 61.2245Z",stroke:"white","stroke-width":"1.5"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 30.6122V53.6158C0 57.818 3.40653 61.2245 7.6087 61.2245C11.8109 61.2245 15.2174 57.818 15.2174 53.6158V38.1924C15.2174 37.6289 15.6742 37.172 16.2378 37.172H35.8617C40.0682 37.172 43.4783 33.7619 43.4783 29.5554C43.4783 25.3489 40.0682 21.9388 35.8616 21.9388H31.1224C31.1224 25.0383 28.6098 27.551 25.5102 27.551H15.2174V21.9388H8.67347C3.88325 21.9388 0 25.822 0 30.6122ZM15.2174 15.8163V10.2041H23.375H25.5102C28.6098 10.2041 31.1224 12.7168 31.1224 15.8163H35.5701C39.9377 15.8163 43.4783 12.2757 43.4783 7.90816C43.4783 3.54061 39.9377 0 35.5701 0H35.2041H22.449H8.92857C4.56101 0 1.02041 3.54061 1.02041 7.90816C1.02041 12.2757 4.56101 15.8163 8.92857 15.8163H15.2174Z",stroke:"white","stroke-width":"1.5"})]})})},O=a(3),g=function(){return Object(n.useEffect)((function(){Object(r.a)({easing:"easeInOutSine",targets:".sor",opacity:[0,1],translateX:["-20px",0],delay:r.a.stagger(500,{start:5500})})})),Object(d.jsxs)("div",{className:"source-con",children:[Object(d.jsx)("span",{className:"sor",onClick:function(){return window.open("https://github.com/Roylam23")},children:Object(d.jsx)(O.a,{icon:"akar-icons:github-fill",width:"calc(16px + 0.35vw)"})}),Object(d.jsx)("span",{className:"sor",children:Object(d.jsx)(O.a,{icon:"akar-icons:instagram-fill",width:"calc(16px + 0.35vw)"})}),Object(d.jsx)("span",{className:"sor",children:Object(d.jsx)(O.a,{icon:"brandico:linkedin-rect",width:"calc(16px + 0.35vw)"})})]})},w=a(5),f=a.n(w),C=function(e,t){e.add({targets:".hi",opacity:[0,1],translateY:["20px",0],duration:1e3},t).add({targets:".name",opacity:[0,1],translateY:["20px",0],duration:1e3},"-=600").add({targets:".title",opacity:[0,1],translateY:["20px",0],duration:1e3},"-=600"),window.screen.width<768?e.add({targets:".bo-con",opacity:[0,1],translateY:["25px",0],duration:1300},"-=500").add({targets:".btn-work",opacity:[0,1],translateY:["-25px",0],duration:1300},"-=1300"):(e.add({targets:".bo-con",opacity:[0,1],translateX:["65px",0],duration:1300},"-=500"),e.add({targets:".btn-work",opacity:[0,1],translateX:["-65px",0],duration:1300},"-=1300"))},v=function(){return Object(n.useEffect)((function(){var e=r.a.timeline({easing:"easeOutQuad",duration:1500});C(e,3900),e.add({targets:".nav",opacity:[0,1],translateY:["-70px",0],duration:1250},"5050")})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(g,{}),Object(d.jsx)(f.a,{scrollingSpeed:1e3,onLeave:function(e){if(r.a.timeline({targets:".section",easing:"easeInOutSine"}).add({opacity:0,duration:300}).add({opacity:1,duration:1e3}),1===e.index){var t=r.a.timeline({easing:"easeInOutSine",duration:1500});C(t,"-=500")}},render:function(e){e.state,e.fullpageApi;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f.a.Wrapper,{children:[Object(d.jsxs)("div",{className:"section","data-anchor":"home",children:[Object(d.jsx)(m,{}),Object(d.jsx)(x,{})]}),Object(d.jsx)("div",{className:"section","data-anchor":"about",children:Object(d.jsx)("p",{children:"Section 2"})}),Object(d.jsx)("div",{className:"section","data-anchor":"project",children:Object(d.jsx)("p",{children:"Section 3"})}),Object(d.jsx)("div",{className:"section","data-anchor":"contact",children:Object(d.jsx)("p",{children:"Section 4"})})]})})}})]})};a(15);var y=function(){return Object(d.jsx)(v,{})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),H()}},[[16,1,2]]]);
//# sourceMappingURL=main.8586d6db.chunk.js.map