(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=a(1);function u(e){return o.a.createElement("div",{id:"wrapper",style:{backgroundColor:e.color,transition:"2s"}},o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text",style:{color:e.color,transition:"2s"}},o.a.createElement("p",{id:"quote"},o.a.createElement("i",{className:"fa fa-quote-left"})," ",e.quote," ",o.a.createElement("i",{className:"fa fa-quote-right"}))),o.a.createElement("div",{id:"author",style:{color:e.color,transition:"2s"}},o.a.createElement("p",{id:"author-text"},"- ",e.author)),o.a.createElement("div",{id:"buttons"},o.a.createElement("a",{id:"tweet-quote",style:{backgroundColor:e.color,transition:"2s"},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/intent/tweet"+e.tweetURL,onClick:e.tweet},o.a.createElement("i",{className:"fa fa-twitter"})),o.a.createElement("button",{id:"new-quote",style:{backgroundColor:e.color,transition:"2s"},onClick:e.generate},"New quote"))))}var i=function(){var e=Object(n.useState)(" "),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(" "),i=Object(l.a)(r,2),s=i[0],f=i[1],d=Object(n.useState)("#16a085"),m=Object(l.a)(d,2),b=m[0],h=m[1],E=Object(n.useState)([]),w=Object(l.a)(E,2),g=w[0],p=w[1],j="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",q=["#F5B19C","#EDCABE","#E9B666","#BFD0CA","#A5B2B5","#0F4C81","#5C9090","#292643","#776483","#44426E","#BBAAB8","#73A857"];function O(){var e=Math.floor(Math.random()*g.length),t=Math.floor(Math.random()*q.length);h(q[t]),c(g[e].quote),f(g[e].author)}Object(n.useEffect)(function(){fetch(j).then(function(e){return e.json()}).then(function(e){p(e.quotes)}).catch(function(e){console.log(e)})},[]),Object(n.useEffect)(function(){g.length>0&&O()},[g]);var v=Object(n.useState)(""),C=Object(l.a)(v,2),B=C[0],k=C[1];return o.a.createElement("div",null,o.a.createElement(u,{quote:a,author:s,generate:O,color:b,tweet:function(){k("?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+a+'" '+s))},tweetURL:B}))};a(13),a(14);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null)))},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.5815d8bd.chunk.js.map