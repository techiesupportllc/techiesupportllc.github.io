(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(253),i=(a(137),a(306)),m=a(311),c=a(314),o=a(312),u=a(315),d=a(313),s=a(129),p=a(259),g=a.n(p),E=Object(i.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:275}});function A(e){var t=E();return r.a.createElement(m.a,{className:t.card},r.a.createElement(o.a,null,r.a.createElement(s.Link,{to:e.link},r.a.createElement(g.a,{className:t.media,fluid:e.featuredImage,style:{marginBottom:"1.5rem"}})),r.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.date),r.a.createElement(d.a,{variant:"h5",component:"h2"},e.title),r.a.createElement(d.a,{className:t.pos,color:"textSecondary"},e.readingTime+" minute read"),r.a.createElement(d.a,{variant:"body2",component:"p"},e.excerpt)),r.a.createElement(c.a,null,r.a.createElement(s.Link,{to:e.link,style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement(u.a,{size:"small"},"Read Post"))))}a.d(t,"query",function(){return f});t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Blog"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,style:{marginTop:"1.5rem",marginBottom:"1.5rem"}},r.a.createElement(A,{featuredImage:t.frontmatter.featuredImage.childImageSharp.fluid,date:t.frontmatter.date,title:t.frontmatter.title,readingTime:t.timeToRead,excerpt:t.excerpt,link:t.fields.slug}))}))};var f="4288614521"},249:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support"}}}}},251:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},253:function(e,t,a){"use strict";var n=a(249),r=a(0),l=a.n(r),i=a(129),m=a(255),c=a(307),o=a(309),u=a(305),d=a(304),s=a(316),p=a(310),g=a(315),E=a(303);function A(){return l.a.createElement(E.a,null,l.a.createElement(i.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},l.a.createElement(g.a,null,"Home")),l.a.createElement(i.Link,{to:"/blog/",style:{textShadow:"none",backgroundImage:"none"}},l.a.createElement(g.a,null,"Blog")))}var f=a(251),h=a.n(f);function w(e){var t=e.children,a=(e.window,Object(d.a)());return l.a.createElement(s.a,{appear:!1,direction:"down",in:!a},t)}function y(e){n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null),l.a.createElement(w,e,l.a.createElement(c.a,{color:"default"},l.a.createElement(o.a,null,l.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},l.a.createElement(p.a,{item:!0},l.a.createElement("div",{style:{marginTop:"1.5rem"}},l.a.createElement("img",{src:h.a,height:"35"}))),l.a.createElement(p.a,{item:!0},l.a.createElement(A,null)))))))}var C=function(){return l.a.createElement("footer",{style:{fontWeight:"bold",textAlign:"center",marginTop:"3rem"}},"© ",(new Date).getFullYear()," - Techie Support, LLC")},v=a(252),I=a(258),k=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return l.a.createElement(i.StaticQuery,{query:L,render:function(e){var n=e.site.siteMetadata,r=n.title,i=n.description,m=n.siteUrl,c=n.image,o=n.twitterUsername,u={title:r,description:i,image:""+m+c,url:""+m+(t||"/")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.Helmet,{title:u.title},l.a.createElement("meta",{name:"description",content:u.description}),l.a.createElement("meta",{name:"image",content:u.image}),u.url&&l.a.createElement("meta",{property:"og:url",content:u.url}),!a?null:l.a.createElement("meta",{property:"og:type",content:"article"}),u.title&&l.a.createElement("meta",{property:"og:title",content:u.title}),u.description&&l.a.createElement("meta",{property:"og:description",content:u.description}),u.image&&l.a.createElement("meta",{property:"og:image",content:u.image}),o&&l.a.createElement("meta",{name:"twitter:creator",content:o}),u.title&&l.a.createElement("meta",{name:"twitter:title",content:u.title}),u.description&&l.a.createElement("meta",{name:"twitter:description",content:u.description}),u.image&&l.a.createElement("meta",{name:"twitter:image",content:u.image})))},data:v})},B=k;k.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var L="2945593527";t.a=function(e){var t=e.children;n.data;return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"3rem auto",maxWidth:1200,padding:"0 1rem"}},l.a.createElement(B,null),l.a.createElement(y,null),l.a.createElement(m.Animated,{animation:{in:m.FadeAnimations.FadeIn,duration_in:1}},l.a.createElement("main",{style:{marginTop:"4rem"}},t)),l.a.createElement(C,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f428869e4ac7770d8336.js.map