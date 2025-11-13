"use strict";(self.webpackChunksmart_react_components_page=self.webpackChunksmart_react_components_page||[]).push([[596],{30596:function(e,a,t){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const o=i(t(52730)),r=i(t(48461)),n=i(t(67294)),s=i(t(17132)),l=e=>n.default.createElement(s.default,Object.assign({loadingColor:e.color,loadingSize:e.size,loadingSizeSm:e.sizeSm,loadingSizeMd:e.sizeMd,loadingSizeLg:e.sizeLg,loadingSizeXl:e.sizeXl},(0,o.default)(e,[r.default])));l.defaultProps={color:"$color.blue",size:"medium"},a.default=l},17132:function(e,a,t){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const o=i(t(75082)),r=i(t(3980)),n=i(t(67294)),s=i(t(12788));a.default=(0,s.default)(r.default).attrs(({loadingColor:e})=>({children:n.default.createElement(o.default,{cx:"22",cy:"22",r:"20",stroke:e,strokeWidth:4}),getLoadingSize:(e,a)=>`\n    height: ${a.$.size.loading[e]};\n    width: ${a.$.size.loading[e]};\n  `,viewBox:"0 0 44 44"}))`
  animation: src-loading-animation 2000ms linear infinite;

  circle {
    animation: src-loading-circle-animation 2000ms linear infinite;
    fill: none;
    stroke-dasharray: 1,150;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  @keyframes src-loading-animation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes src-loading-circle-animation {
    0% {
      stroke-dasharray: 1,150;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dasharray: 90,150;
      stroke-dashoffset: -124;
    }
  }
`}}]);