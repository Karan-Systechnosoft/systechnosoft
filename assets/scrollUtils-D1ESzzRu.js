function s(t,e=96){const o=document.getElementById(t);if(!o)return;const n=o.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:n,behavior:"smooth"})}export{s};
