(this["webpackJsonptemplate-builder-demo"]=this["webpackJsonptemplate-builder-demo"]||[]).push([[0],{201:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var c,i,r,a,l=n(0),o=n.n(l),s=n(35),b=(n(201),n(4)),d=(n(202),n(203),n(204),n(53)),j=n(328),x=n(329),O=n(330),p=n(331),h=n(125),f=n(12),u=n(11),g=u.b.div(c||(c=Object(f.a)(["\n  padding-top: 20px;\n  min-width: 1200px;\n  background-color: #f6f6f6;\n"]))),v=u.b.div(i||(i=Object(f.a)(["\n  padding-left: 20px;\n"]))),C=u.b.div(r||(r=Object(f.a)(["\n  height: calc(100vh - 55px);\n  margin: 2px;\n"]))),m=u.b.div(a||(a=Object(f.a)(["\n  position: relative;\n\n  iframe {\n    margin: 0 auto;\n    display: block;\n    position: relative;\n    z-index: 1;\n    top: 0;\n    left: 0px;\n  }\n  svg {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    transform: translate(-50%, 0);\n  }\n\n  &.mobile-view {\n    padding-top: 60px;\n    iframe {\n      border: 1px solid #c3c3c3;\n    }\n  }\n"]))),w=n(27);function F(){return Object(w.jsxs)("svg",{width:"342px",height:"612px",viewBox:"0 0 342 612",children:[Object(w.jsx)("defs",{}),Object(w.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:Object(w.jsx)("g",{id:"Artboard-1",transform:"translate(-469.000000, -144.000000)",children:Object(w.jsxs)("g",{id:"Rectangle-22-+-Oval-4-+-Rectangle-23-+-Oval-5",transform:"translate(470.000000, 145.000000)",children:[Object(w.jsx)("rect",{id:"Rectangle-22",stroke:"#979797",fill:"#FFFFFF",x:0,y:0,width:340,height:610,rx:33}),Object(w.jsx)("circle",{id:"Oval-4",stroke:"#C4C4C4",fill:"#FBFBFB",cx:170,cy:577,r:25}),Object(w.jsxs)("g",{id:"Rectangle-23-+-Oval-5",transform:"translate(126.000000, 27.000000)",children:[Object(w.jsx)("circle",{id:"Oval-5",stroke:"#C4C4C4",fill:"#FBFBFB",cx:"4.5",cy:"4.5",r:"4.5"}),Object(w.jsx)("path",{d:"M23.5032382,0 L64.4967618,0 C66.9838316,0 69,2.01977567 69,4.5 C69,6.98528137 66.9780138,9 64.4967618,9 L23.5032382,9 C21.0161684,9 19,6.98022433 19,4.5 C19,2.01471863 21.0219862,0 23.5032382,0 Z M23.5032382,2 L64.4967618,2 C65.8774903,2 67,3.12257327 67,4.5 C67,5.87798373 65.8761743,7 64.4967618,7 L23.5032382,7 C22.1225097,7 21,5.87742673 21,4.5 C21,3.12201627 22.1238257,2 23.5032382,2 Z",id:"Rectangle-23",fill:"#C4C4C4"}),Object(w.jsx)("path",{d:"M22.6120746,1 L65.3879254,1 C66.8286855,1 68,2.57160257 68,4.5 C68,6.42917723 66.8273124,8 65.3879254,8 L22.6120746,8 C21.1713145,8 20,6.42839743 20,4.5 C20,2.57082277 21.1726876,1 22.6120746,1 Z",id:"Path",fill:"#FBFBFB"})]})]})})})]})}var k=function(){var e=Object(l.useRef)({getData:function(){}}),t=Object(l.useState)(!1),n=Object(b.a)(t,2),c=n[0],i=n[1],r=Object(l.useState)(""),a=Object(b.a)(r,2),o=a[0],s=a[1],f=Object(l.useState)(!1),u=Object(b.a)(f,2),k=u[0],y=u[1];return Object(w.jsxs)(g,{children:[Object(w.jsx)(v,{children:Object(w.jsx)(d.a,{type:"primary",onClick:function(){var t=e.current.getData(),n=Object(h.c)(t);s(n),i(!0)},children:"Preview"})}),Object(w.jsx)(C,{children:Object(w.jsx)(h.a,{localStorageKey:"builderData",ref:e})}),Object(w.jsx)(j.a,{title:"Preview",placement:"right",width:"80vw",onClose:function(){return i(!1)},visible:c,extra:Object(w.jsxs)(x.b,{children:[Object(w.jsx)(d.a,{type:k?"primary":void 0,icon:Object(w.jsx)(O.a,{}),onClick:function(){return y(!k)},children:"Mobile"}),Object(w.jsx)(d.a,{onClick:function(){Object(h.b)("EmailTemplate_untitled_".concat(Date.now(),".html"),o)},icon:Object(w.jsx)(p.a,{})})]}),children:c&&o&&Object(w.jsxs)(m,{className:k?"mobile-view":"",children:[k&&Object(w.jsx)(F,{}),Object(w.jsx)("iframe",{title:"Preview",style:{width:k?"320px":"100%",height:k?"480px":"calc(100vh - 120px)"},frameBorder:"0",srcDoc:o.replace("<style>","<style>\n                  body {\n                    overflow: overlay;\n                  }\n                  body::-webkit-scrollbar {\n                    width: 6px;\n                  }\n                  \n                  body::-webkit-scrollbar-track {\n                    background-color: transparent;\n                  }\n                  \n                  body::-webkit-scrollbar-thumb {\n                    border-radius: 6px;\n                    background-color: rgba(0, 0, 0, 0.4);\n                  }")})]})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,332)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},B=document.getElementById("root");Object(s.render)(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(k,{})}),B),y()}},[[321,1,2]]]);
//# sourceMappingURL=main.455a53bb.chunk.js.map