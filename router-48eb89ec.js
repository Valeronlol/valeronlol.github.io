let t=[{target:"/",title:"main_page"},{target:"/work_experience",title:"work_experience"},{target:"/blog",title:"blog"},{target:"/hobby",title:"hobby"}];const e=t=>t.endsWith("/")&&"/"!==t?t.slice(0,-1):t,r=t=>t===e(window.location.pathname),a=r=>{const a=e(r);return t.find((t=>t.target===a))},i=t.filter((({target:t})=>"/"!==t));export{a as g,r as i,i as r};
