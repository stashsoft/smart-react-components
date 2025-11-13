"use strict";(self.webpackChunksmart_react_components_page=self.webpackChunksmart_react_components_page||[]).push([[9124],{69593:function(t,i,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(i,"__esModule",{value:!0});const s=o(n(67294)),a=o(n(12788)),e=n(18);i.default=a.default.svg.attrs({children:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M251.8,371.6c-17.4,5.9-37.2,2.6-50.4-8L16.3,215.3v-0.1c-18.1-14.5-18.1-38.1,0-52.6L201.4,14.2 c13.3-10.7,33.1-13.8,50.4-8"}),s.default.createElement("path",{d:"M371,0c5.9,17.4,2.6,37.2-8,50.4L214.7,235.5h-0.1c-14.5,18.1-38.1,18.1-52.6,0L13.6,50.4 C2.9,37.1-0.2,17.3,5.6,0"}))})`
  position: absolute;
  stroke-width: 20px;

  &[data-src-position="${e.Position.LEFT}"],
  &[data-src-position="${e.Position.RIGHT}"] {
    height: 15px;
    width: 10px;

    path:last-child {
      display: none;
    }
  }

  &[data-src-position="${e.Position.TOP}"],
  &[data-src-position="${e.Position.BOTTOM}"] {
    height: 10px;
    width: 15px;

    path:first-child {
      display: none;
    }
  }

  &[data-src-position="${e.Position.LEFT}"],
  &[data-src-position="${e.Position.BOTTOM}"] {
    transform: rotate(180deg);
  }
`},30199:(t,i,n)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.generateCSSTransitionClasses=i.calculatePosition=void 0;const o=n(18),s=n(17523),a=(t,i,n,s,a,e,c)=>{var l;const[p,h]=r(s);let d,P,T;s===o.Position.RIGHT?(d=t.left+t.width+a+p,T=Math.abs(Math.min(e-(d+i.width),0)),P=-1*(p-2)):(d=t.left-(i.width+p+a),T=Math.abs(Math.min(d,0)),P=i.width-2);const f=n?t.top+t.height/2-(n.height+h/2):t.top+t.height/2-i.height/2,u=null!==(l=null==n?void 0:n.height)&&void 0!==l?l:(i.height-h)/2,$=n&&u+2*h<n.height;return T+=f<0?Math.abs(f):Math.abs(Math.min(c-(f+i.height),0)),{arrowStyle:`\n      left: ${P}px;\n      top: ${u}px;\n    `,isArrowInHeader:$,overflow:T,pos:s,style:`\n      left: ${d}px;\n      top: ${f}px;\n    `}},e=(t,i,n,s,a,e,c)=>{const[l,p]=r(s);let h,d,P;s===o.Position.TOP?(d=t.top-(i.height+p+a),P=Math.abs(Math.min(d,0)),h=i.height-1):(d=t.top+t.height+a+p,P=Math.abs(Math.min(c-(d+i.height),0)),h=-1*(p-1));const T=t.left+t.width/2-i.width/2,f=i.width/2-l/2;return P+=T<0?Math.abs(T):Math.abs(Math.min(e-(T+i.width),0)),{arrowStyle:`\n      left: ${f}px;\n      top: ${h}px;\n    `,isArrowInHeader:n&&s===o.Position.BOTTOM,overflow:P,pos:s,style:`\n      left: ${T}px;\n      top: ${d}px;\n    `}};i.calculatePosition=(t,i,n,r,l,p)=>{if(!i)return;const h=window.innerWidth,d=window.innerHeight,P=Object.assign(Object.assign({},t.getBoundingClientRect()),(0,s.calculateShownPart)(t));if(P.width<=0||P.height<=0)return void i.setAttribute("style","pointer-events: none; visibility: hidden;");i.removeAttribute("style");const T=i.getBoundingClientRect(),f=null==n?void 0:n.getBoundingClientRect();let u;for(let t,i=0;i<4;i++){switch(i){case 0:t=l;break;case 1:case 3:t&(o.Position.LEFT|o.Position.TOP)?t<<=1:t>>=1;break;case 2:t=t&(o.Position.LEFT|o.Position.RIGHT)?o.Position.TOP:o.Position.LEFT}const n=t&(o.Position.LEFT|o.Position.RIGHT)?a(P,T,f,t,p,h,d):e(P,T,f,t,p,h,d);if((!u||n.overflow<u.overflow)&&(u=n),0===u.overflow)break}i.setAttribute("style",u.style),i.setAttribute("data-src-position",String(u.pos)),r.setAttribute("style",u.arrowStyle),r.setAttribute("viewBox",c(u.pos)),r.setAttribute("data-src-position",String(u.pos)),r.setAttribute("data-arrow-header",String(u.isArrowInHeader))},i.generateCSSTransitionClasses=(t,i)=>`\n  &.src-${t}-show-active,\n  &.src-${t}-hide-active {\n    transition: ${i}ms 0s ease-in-out;\n    transition-property: transform, opacity;\n  }\n\n  &.src-${t}-show {\n    opacity: 0;\n\n    &[data-src-position="${o.Position.LEFT}"] { transform: translateX(-30px); }\n    &[data-src-position="${o.Position.RIGHT}"] { transform: translateX(30px); }\n    &[data-src-position="${o.Position.TOP}"] { transform: translateY(-30px); }\n    &[data-src-position="${o.Position.BOTTOM}"] { transform: translateY(-30px); }\n  }\n\n  &.src-${t}-show-active {\n    opacity: 1;\n\n    &[data-src-position="${o.Position.LEFT}"],\n    &[data-src-position="${o.Position.RIGHT}"] {\n      transform: translateX(0);\n    }\n\n    &[data-src-position="${o.Position.TOP}"],\n    &[data-src-position="${o.Position.BOTTOM}"] {\n      transform: translateY(0);\n    }\n  }\n\n  &.src-${t}-hide {\n    opacity: 1;\n\n    &[data-src-position="${o.Position.LEFT}"],\n    &[data-src-position="${o.Position.RIGHT}"] {\n      transform: translateX(0);\n    }\n\n    &[data-src-position="${o.Position.TOP}"],\n    &[data-src-position="${o.Position.BOTTOM}"] {\n      transform: translateY(0);\n    }\n  }\n\n  &.src-${t}-hide-active {\n    opacity: 0;\n\n    &[data-src-position="${o.Position.LEFT}"] { transform: translateX(-30px); }\n    &[data-src-position="${o.Position.RIGHT}"] { transform: translateX(30px); }\n    &[data-src-position="${o.Position.TOP}"] { transform: translateY(-30px); }\n    &[data-src-position="${o.Position.BOTTOM}"] { transform: translateY(-30px); }\n  }\n`;const r=t=>t&(o.Position.LEFT|o.Position.RIGHT)?[10,15]:[15,10],c=t=>t&(o.Position.LEFT|o.Position.RIGHT)?"0 0 252.8 378.5":"0 0 377.3 251.9"}}]);