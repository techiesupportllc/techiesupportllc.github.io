(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(223),o=(a(108),a(104)),l=a(219),c=a(225),m=a.n(c),d=l.a.div.withConfig({displayName:"PostCard__CardContainer",componentId:"sc-10ehkug-0"})(["min-width:275px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);background:#fff;border-radius:5px;padding:0 1rem 1rem 1rem;"]),p=l.a.p.withConfig({displayName:"PostCard__DateReading",componentId:"sc-10ehkug-1"})(["color:#3d4852;font-size:0.9rem;"]),s=l.a.h3.withConfig({displayName:"PostCard__Title",componentId:"sc-10ehkug-2"})(["font-size:2rem;padding:0 0 1rem 0;margin:0 0 -0.5rem 0;"]),u=l.a.p.withConfig({displayName:"PostCard__Excerpt",componentId:"sc-10ehkug-3"})(["font-size:1.25rem;padding:0 0 1rem 0;"]),g=l.a.button.withConfig({displayName:"PostCard__Button",componentId:"sc-10ehkug-4"})(["border:none;border-bottom:4px solid #3d4852;font-size:1.25rem;background-color:inherit;text-transform:uppercase;text-decoration:none;color:#3d4852;display:inline-block;cursor:pointer;margin:0 0 1rem 0;"]),f=function(e){return r.a.createElement(d,null,r.a.createElement(o.Link,{to:e.link},r.a.createElement(m.a,{fluid:e.featuredImage,style:{marginBottom:"1.5rem",borderRadius:"5px",height:"275px"}})),r.a.createElement(s,null,e.title),r.a.createElement(p,null,e.date," — ",e.readingTime+" minute read"),r.a.createElement(u,null,e.excerpt),r.a.createElement(o.Link,{to:e.link},r.a.createElement(g,null,"Read Post")))};a.d(t,"query",function(){return x});var h=l.a.h1.withConfig({displayName:"blog__MainHeading",componentId:"hf1y77-0"})(["font-size:3rem;"]),x=(t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(h,null,"Blog"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,style:{marginBottom:"3rem"}},r.a.createElement(f,{featuredImage:t.frontmatter.featuredImage.childImageSharp.fluid,date:t.frontmatter.date,title:t.frontmatter.title,readingTime:t.timeToRead,excerpt:t.excerpt,link:t.fields.slug}))}))},"4288614521")},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support"}}}}},221:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},222:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},223:function(e,t,a){"use strict";var n=a(220),r=a(0),i=a.n(r),o=a(104),l=a(221),c=a.n(l),m=a(219),d=m.a.div.withConfig({displayName:"NavButtons__NavButtonDiv",componentId:"sc-1qrl8f4-0"})([""]),p=m.a.button.withConfig({displayName:"NavButtons__PrimaryNavButton",componentId:"sc-1qrl8f4-1"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#f6993f;padding:5px 15px 5px 15px;border:none;display:inline-block;margin:0 0 0 1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);font-weight:bold;cursor:pointer;border-radius:5px;"]),s=m.a.button.withConfig({displayName:"NavButtons__SecondaryNavButton",componentId:"sc-1qrl8f4-2"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#dae1e7;padding:5px 15px 5px 15px;border:none;display:inline-block;margin-left:1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);cursor:pointer;border-radius:5px;"]),u=function(e){return i.a.createElement(d,null,i.a.createElement(o.Link,{to:"/"},i.a.createElement(s,null,"Home")),i.a.createElement(o.Link,{to:"/blog/"},i.a.createElement(s,null,"Blog")),i.a.createElement("a",{href:"mailto:help@techiesupport.co?subject=Let's get started!&body=Thanks for reaching out!  What does your next project look like?  Let us know so we can make sure we'll be a good fit. :)"},i.a.createElement(p,null,"Get Started")))},g=m.a.div.withConfig({displayName:"Header__HeaderDiv",componentId:"sc-10cnog6-0"})(["display:flex;flex-direction:row;justify-content:space-between;align-content:center;width:100%;margin:1rem 0 0 0;padding:0 1rem 0 1rem;img{box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);}@media screen and (max-width:600px){flex-direction:column;align-items:center;}"]),f=function(e){return i.a.createElement(g,null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:c.a,height:"40"})),i.a.createElement(u,null))},h=m.a.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-11z43hi-0"})(["text-align:center;background:#3d4852;color:#dae1e7;padding:1.5rem 0 1.5rem 0;font-weight:bold;width:100%;margin:3rem 0 0 0;"]),x=function(){return i.a.createElement(h,null,"© ",(new Date).getFullYear()," - Techie Support, LLC")},w=a(222),A=a(224),E=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return i.a.createElement(o.StaticQuery,{query:b,render:function(e){var n=e.site.siteMetadata,r=n.title,o=n.description,l=n.siteUrl,c=n.image,m=n.twitterUsername,d={title:r,description:o,image:""+l+c,url:""+l+(t||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(A.Helmet,{title:d.title},i.a.createElement("meta",{name:"description",content:d.description}),i.a.createElement("meta",{name:"image",content:d.image}),d.url&&i.a.createElement("meta",{property:"og:url",content:d.url}),!a?null:i.a.createElement("meta",{property:"og:type",content:"article"}),d.title&&i.a.createElement("meta",{property:"og:title",content:d.title}),d.description&&i.a.createElement("meta",{property:"og:description",content:d.description}),d.image&&i.a.createElement("meta",{property:"og:image",content:d.image}),m&&i.a.createElement("meta",{name:"twitter:creator",content:m}),d.title&&i.a.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&i.a.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&i.a.createElement("meta",{name:"twitter:image",content:d.image})))},data:w})},y=E;E.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var b="2945593527",C=m.a.div.withConfig({displayName:"layout__Page",componentId:"sc-4dh0yk-0"})(["display:flex;flex-direction:column;align-items:center;"]),k=m.a.div.withConfig({displayName:"layout__Body",componentId:"sc-4dh0yk-1"})(["display:flex;flex-direction:column;max-width:800px;min-height:100vh;padding:0 1rem 0 1rem;"]);t.a=function(e){var t=e.children;n.data;return i.a.createElement(C,null,i.a.createElement(y,null),i.a.createElement(f,null),i.a.createElement(k,null,t),i.a.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-32499901441816696368.js.map