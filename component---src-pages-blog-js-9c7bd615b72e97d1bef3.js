(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(253),l=(a(136),a(307)),o=a(1),c=a(19),m=(a(28),a(97)),s=a(309),p=a(247),d=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.raised,l=void 0!==i&&i,p=Object(c.a)(e,["classes","className","raised"]);return r.a.createElement(s.a,Object(o.a)({className:Object(m.a)(a.root,n),elevation:l?8:1,ref:t},p))}),u=Object(p.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d),g=r.a.forwardRef(function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,i=e.classes,l=e.className,s=Object(c.a)(e,["disableSpacing","classes","className"]);return r.a.createElement("div",Object(o.a)({className:Object(m.a)(i.root,l,!n&&i.spacing),ref:t},s))}),h=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(g),y=r.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.component,l=void 0===i?"div":i,s=Object(c.a)(e,["classes","className","component"]);return r.a.createElement(l,Object(o.a)({className:Object(m.a)(a.root,n),ref:t},s))}),E=Object(p.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),f=a(312),A=a(257),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},v=r.a.forwardRef(function(e,t){var a=e.align,n=void 0===a?"inherit":a,i=e.classes,l=e.className,s=e.color,p=void 0===s?"initial":s,d=e.component,u=e.display,g=void 0===u?"initial":u,h=e.gutterBottom,y=void 0!==h&&h,E=e.noWrap,f=void 0!==E&&E,v=e.paragraph,w=void 0!==v&&v,C=(e.theme,e.variant),x=void 0===C?"body1":C,B=e.variantMapping,I=void 0===B?b:B,j=Object(c.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","theme","variant","variantMapping"]),O=d||(w?"p":I[x]||b[x])||"span";return r.a.createElement(O,Object(o.a)({className:Object(m.a)(i.root,l,"inherit"!==x&&i[x],"initial"!==p&&i["color".concat(Object(A.a)(p))],f&&i.noWrap,y&&i.gutterBottom,w&&i.paragraph,"inherit"!==n&&i["align".concat(Object(A.a)(n))],"initial"!==g&&i["display".concat(Object(A.a)(g))]),ref:t},j))}),w=Object(p.a)(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography",withTheme:!0})(v),C=a(129),x=a(259),B=a.n(x),I=Object(l.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:275}});function j(e){var t=I();return r.a.createElement(u,{className:t.card},r.a.createElement(E,null,r.a.createElement(C.Link,{to:e.link},r.a.createElement(B.a,{className:t.media,fluid:e.featuredImage,style:{marginBottom:"1.5rem",borderRadius:"5px"}})),r.a.createElement(w,{className:t.title,color:"textSecondary",gutterBottom:!0},e.date),r.a.createElement(w,{variant:"h5",component:"h2"},e.title),r.a.createElement(w,{className:t.pos,color:"textSecondary"},e.readingTime+" minute read"),r.a.createElement(w,{variant:"body2",component:"p"},e.excerpt)),r.a.createElement(h,null,r.a.createElement(C.Link,{to:e.link,style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement(f.a,{size:"small"},"Read Post"))))}a.d(t,"query",function(){return O});t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Blog"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,style:{marginTop:"1.5rem",marginBottom:"1.5rem"}},r.a.createElement(j,{featuredImage:t.frontmatter.featuredImage.childImageSharp.fluid,date:t.frontmatter.date,title:t.frontmatter.title,readingTime:t.timeToRead,excerpt:t.excerpt,link:t.fields.slug}))}))};var O="4288614521"},249:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support"}}}}},251:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},253:function(e,t,a){"use strict";var n=a(249),r=a(0),i=a.n(r),l=a(129),o=a(255),c=a(308),m=a(310),s=a(306),p=a(305),d=a(313),u=a(311),g=a(312),h=a(304);function y(){return i.a.createElement(h.a,null,i.a.createElement(l.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},i.a.createElement(g.a,null,"Home")),i.a.createElement(l.Link,{to:"/blog/",style:{textShadow:"none",backgroundImage:"none"}},i.a.createElement(g.a,null,"Blog")))}var E=a(251),f=a.n(E);function A(e){var t=e.children,a=(e.window,Object(p.a)());return i.a.createElement(d.a,{appear:!1,direction:"down",in:!a},t)}function b(e){n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement(A,e,i.a.createElement(c.a,{color:"default"},i.a.createElement(m.a,null,i.a.createElement(u.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},i.a.createElement(u.a,{item:!0},i.a.createElement("div",{style:{marginTop:"1.5rem"}},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:f.a,height:"35"})))),i.a.createElement(u.a,{item:!0},i.a.createElement(y,null)))))))}var v=function(){return i.a.createElement("footer",{style:{textAlign:"center",marginTop:"3rem"}},"© ",(new Date).getFullYear()," - Techie Support, LLC")},w=a(252),C=a(258),x=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return i.a.createElement(l.StaticQuery,{query:I,render:function(e){var n=e.site.siteMetadata,r=n.title,l=n.description,o=n.siteUrl,c=n.image,m=n.twitterUsername,s={title:r,description:l,image:""+o+c,url:""+o+(t||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.Helmet,{title:s.title},i.a.createElement("meta",{name:"description",content:s.description}),i.a.createElement("meta",{name:"image",content:s.image}),s.url&&i.a.createElement("meta",{property:"og:url",content:s.url}),!a?null:i.a.createElement("meta",{property:"og:type",content:"article"}),s.title&&i.a.createElement("meta",{property:"og:title",content:s.title}),s.description&&i.a.createElement("meta",{property:"og:description",content:s.description}),s.image&&i.a.createElement("meta",{property:"og:image",content:s.image}),m&&i.a.createElement("meta",{name:"twitter:creator",content:m}),s.title&&i.a.createElement("meta",{name:"twitter:title",content:s.title}),s.description&&i.a.createElement("meta",{name:"twitter:description",content:s.description}),s.image&&i.a.createElement("meta",{name:"twitter:image",content:s.image})))},data:w})},B=x;x.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var I="2945593527";t.a=function(e){var t=e.children;n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,null),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxWidth:1200,padding:"1rem",minHeight:"100vh"}},i.a.createElement(b,null),i.a.createElement("main",{style:{marginTop:"4rem",flex:1}},i.a.createElement(o.Animated,{animation:{in:o.FadeAnimations.FadeIn,duration_in:1}},t)),i.a.createElement(v,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-9c7bd615b72e97d1bef3.js.map