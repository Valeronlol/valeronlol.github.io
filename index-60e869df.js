import{n as t,s as n}from"./svelte.internal.v3.43.1-859c9a80.js";const e=[];function s(s,o=t){let c;const i=new Set;function l(t){if(n(s,t)&&(s=t,c)){const t=!e.length;for(const t of i)t[1](),e.push(t,s);if(t){for(let t=0;t<e.length;t+=2)e[t][0](e[t+1]);e.length=0}}}return{set:l,update:function(t){l(t(s))},subscribe:function(n,e=t){const r=[n,e];return i.add(r),1===i.size&&(c=o(l)||t),n(s),()=>{i.delete(r),0===i.size&&(c(),c=null)}}}}const o=s(),c=s();export{o as l,c as t};
