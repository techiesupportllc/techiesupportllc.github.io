(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(253);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi! I'm building a site."),r.a.createElement("p",null,"What do I like to do?  Build websites!"))}},249:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support"}}}}},251:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},253:function(e,t,a){"use strict";var n=a(249),r=a(0),i=a.n(r),l=a(129),c=a(255),m=a(307),o=a(309),u=a(305),s=a(304),A=a(316),p=a(310),d=a(315),E=a(303);function g(){return i.a.createElement(E.a,null,i.a.createElement(l.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},i.a.createElement(d.a,null,"Home")),i.a.createElement(l.Link,{to:"/blog/",style:{textShadow:"none",backgroundImage:"none"}},i.a.createElement(d.a,null,"Blog")))}var w=a(251),h=a.n(w);function f(e){var t=e.children,a=(e.window,Object(s.a)());return i.a.createElement(A.a,{appear:!1,direction:"down",in:!a},t)}function y(e){n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null),i.a.createElement(f,e,i.a.createElement(m.a,{color:"default"},i.a.createElement(o.a,null,i.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},i.a.createElement(p.a,{item:!0},i.a.createElement("div",{style:{marginTop:"1.5rem"}},i.a.createElement("img",{src:h.a,height:"35"}))),i.a.createElement(p.a,{item:!0},i.a.createElement(g,null)))))))}var C=function(){return i.a.createElement("footer",{style:{fontWeight:"bold",textAlign:"center",marginTop:"3rem"}},"© ",(new Date).getFullYear()," - Techie Support, LLC")},I=a(252),v=a(258),L=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return i.a.createElement(l.StaticQuery,{query:M,render:function(e){var n=e.site.siteMetadata,r=n.title,l=n.description,c=n.siteUrl,m=n.image,o=n.twitterUsername,u={title:r,description:l,image:""+c+m,url:""+c+(t||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.Helmet,{title:u.title},i.a.createElement("meta",{name:"description",content:u.description}),i.a.createElement("meta",{name:"image",content:u.image}),u.url&&i.a.createElement("meta",{property:"og:url",content:u.url}),!a?null:i.a.createElement("meta",{property:"og:type",content:"article"}),u.title&&i.a.createElement("meta",{property:"og:title",content:u.title}),u.description&&i.a.createElement("meta",{property:"og:description",content:u.description}),u.image&&i.a.createElement("meta",{property:"og:image",content:u.image}),o&&i.a.createElement("meta",{name:"twitter:creator",content:o}),u.title&&i.a.createElement("meta",{name:"twitter:title",content:u.title}),u.description&&i.a.createElement("meta",{name:"twitter:description",content:u.description}),u.image&&i.a.createElement("meta",{name:"twitter:image",content:u.image})))},data:I})},B=L;L.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var M="2945593527";t.a=function(e){var t=e.children;n.data;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"3rem auto",maxWidth:1200,padding:"0 1rem"}},i.a.createElement(B,null),i.a.createElement(y,null),i.a.createElement(c.Animated,{animation:{in:c.FadeAnimations.FadeIn,duration_in:1}},i.a.createElement("main",{style:{marginTop:"4rem"}},t)),i.a.createElement(C,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-793428801b2ca31a0f25.js.map