import{r as s,j as e,A as r,m as a}from"./index-CMWF0tbb.js";const c=()=>{const[i,o]=s.useState(!1);s.useEffect(()=>{const t=()=>{window.pageYOffset>300?o(!0):o(!1)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx(r,{children:i&&e.jsx(a.button,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},onClick:l,className:"fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg z-[97] text-white",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})})};export{c as default};