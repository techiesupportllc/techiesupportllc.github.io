(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(224),l=a(246),o=a(262),m=a.n(o),c=function(e){return i.a.createElement("div",null,i.a.createElement(m.a,{fluid:e.featuredImage,alt:e.title,style:{borderRadius:"5px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}))},d=a(242),p=a(263),s=(a(7),a(8),a(2),a(285)),u=a.n(s),g=a(338),h=a(298),f=a(257),b=r.a.div.withConfig({displayName:"BlogForm__StyledDiv",componentId:"i17raw-0"})(["display:flex;padding:1rem 0 2rem 0;"]),y=r.a.input.withConfig({displayName:"BlogForm__StyledInput",componentId:"i17raw-1"})(["border:none;border-radius:5px 0 0 5px;padding:1rem 0 1rem 1rem;flex-basis:60%;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);"]),E=r.a.button.withConfig({displayName:"BlogForm__StyledButton",componentId:"i17raw-2"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#f6993f;padding:1rem;border:none;display:inline-block;font-weight:bold;cursor:pointer;border-radius:0 5px 5px 0;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);"]),x={headers:{"Content-Type":"application/json","X-USER-TOKEN":"xyy4QhGAbSxKZrR_MDAiXQQkXTEyRQ","X-USER-EMAIL":"th3str4p@gmail.com"}},w=function(){return i.a.createElement(g.a,{initialValues:{email:""},onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;setTimeout(function(){u.a.post("https://api.mailblast.io/v1/lists/9f9cd3be-69a6-45c7-b996-a4d6fb26561f/subscribers",{data:{attributes:{email:e.email}}},x),alert("Thanks for dropping us your email!  We'll send you the best bits from our blog each week."),a(!1),n()},500)},validationSchema:h.object().shape({email:h.string().email().required("")})},function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting),l=e.handleChange,o=e.handleBlur,m=e.handleSubmit;return e.handleReset,i.a.createElement("form",{onSubmit:m},i.a.createElement(f.a,null,i.a.createElement("b",null,"Drop us your email, and we'll send you the best bits from our blog each week.")),i.a.createElement(b,null,i.a.createElement(y,{type:"email",name:"email",autocomplete:"email",ariaLabel:"email",placeholder:"your-email@your-business.com",value:t.email,onChange:l,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),i.a.createElement(E,{type:"submit",disabled:r},"Get The Goods")))})};a.d(t,"query",function(){return k});var A=r.a.div.withConfig({displayName:"blog-post__Wrapper",componentId:"sc-7gkdnd-0"})(["display:flex;flex-direction:column;align-items:center;"]),C=r.a.div.withConfig({displayName:"blog-post__Section",componentId:"sc-7gkdnd-1"})(["max-width:1000px;padding:0 1rem 0 1rem;"]),I=r.a.div.withConfig({displayName:"blog-post__PostContainer",componentId:"sc-7gkdnd-2"})(["h3{font-size:2rem;}p{font-size:1.25rem;}"]),v=r.a.p.withConfig({displayName:"blog-post__DateReading",componentId:"sc-7gkdnd-3"})(["color:#3d4852;font-size:0.75rem;"]),k=(r.a.div.withConfig({displayName:"blog-post__Inner",componentId:"sc-7gkdnd-4"})(["color:#F8FAFC;background:#3d4852;width:100%;display:flex;flex-direction:column;align-items:center;padding:2rem 0 2rem 0;"]),r.a.div.withConfig({displayName:"blog-post__End",componentId:"sc-7gkdnd-5"})(["max-width:1000px;padding:0 1rem 0 1rem;"]),t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter.featuredImage.childImageSharp.fluid;return i.a.createElement(l.a,null,i.a.createElement(A,null,i.a.createElement(C,null,i.a.createElement(d.a,null,t.frontmatter.title),i.a.createElement(v,null,"Published "+t.frontmatter.date," ",i.a.createElement("b",null,"•")," ",t.timeToRead+"-minute read"),i.a.createElement(c,{title:t.frontmatter.title,featuredImage:a}),i.a.createElement(p.a,null,t.frontmatter.tagline),i.a.createElement(I,{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement(w,null))))},"4169932802")},240:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},241:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},242:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(224).a.h1.withConfig({displayName:"PageTitle__StyledHeading",componentId:"evvhoi-0"})(["font-size:3rem;"]);t.a=function(e){return i.a.createElement(r,null,e.children)}},246:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(224),l=a(107),o=a(240),m=a.n(o),c=r.a.button.withConfig({displayName:"PrimaryNavButton__StyledButton",componentId:"sc-1jboyii-0"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#f6993f;padding:5px 15px 5px 15px;border:none;display:inline-block;margin:0 0 0 1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);font-weight:bold;cursor:pointer;border-radius:5px;"]),d=function(e){return i.a.createElement(c,null,e.children)},p=r.a.button.withConfig({displayName:"SecondaryNavButton__StyledButton",componentId:"i1yfzb-0"})(["color:#606F7B;background:none;font-weight:bold;text-decoration:none;border:none;display:inline-block;margin:0 2rem 0 0;cursor:pointer;"]),s=function(e){return i.a.createElement(p,null,e.children)},u=function(e){return i.a.createElement("div",null,i.a.createElement(l.Link,{to:"/blog/"},i.a.createElement(s,null,"Blog")),i.a.createElement(l.Link,{to:"/"},i.a.createElement(d,null,"Get Started")))},g=r.a.div.withConfig({displayName:"Header__HeaderDiv",componentId:"sc-10cnog6-0"})(["display:flex;flex-direction:row;justify-content:space-between;align-content:center;width:100%;padding:1rem;img{box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);}@media screen and (max-width:600px){flex-direction:column;align-items:center;}"]),h=function(e){return i.a.createElement(g,null,i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:m.a,height:"40",alt:"Techie Support logo"})),i.a.createElement(u,null))},f=a(259),b=a(260),y=r.a.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-11z43hi-0"})(["text-align:center;padding:1rem;font-weight:bold;width:100%;font-size:0.75rem;a{color:inherit;}"]),E=function(){return i.a.createElement(y,null,i.a.createElement("a",{ariaLabel:"Facebook",href:"https://facebook.com/techiesupport"},i.a.createElement(f.a,{icon:b.a,size:"2x",style:{margin:"0 1rem 0 0"},title:"Facebook"})),i.a.createElement("a",{ariaLabel:"Instagram",href:"https://instagram.com/techiesupport"},i.a.createElement(f.a,{icon:b.b,size:"2x",style:{margin:"0 0.5rem 0 0"},title:"Instagram"})),i.a.createElement("a",{ariaLabel:"LinkedIn",href:"https://linkedin.com/company/techiesupport"},i.a.createElement(f.a,{icon:b.c,size:"2x",style:{margin:"0 0 0 0.5rem"},title:"LinkedIn"})),i.a.createElement("a",{ariaLabel:"Twitter",href:"https://twitter.com/techiesupportco"},i.a.createElement(f.a,{icon:b.d,size:"2x",style:{margin:"0 0 0 1rem"},title:"Twitter"})),i.a.createElement("br",null),"© ",(new Date).getFullYear()," • Techie Support, LLC",i.a.createElement("br",null),"Built with ❤️ in Phoenix")},x=a(241),w=a(261),A=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return i.a.createElement(l.StaticQuery,{query:I,render:function(e){var n=e.site.siteMetadata,r=n.title,l=n.description,o=n.siteUrl,m=n.image,c=n.twitterUsername,d={title:r,description:l,image:""+o+m,url:""+o+(t||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.Helmet,{title:d.title},i.a.createElement("meta",{name:"description",content:d.description}),i.a.createElement("meta",{name:"image",content:d.image}),d.url&&i.a.createElement("meta",{property:"og:url",content:d.url}),!a?null:i.a.createElement("meta",{property:"og:type",content:"article"}),d.title&&i.a.createElement("meta",{property:"og:title",content:d.title}),d.description&&i.a.createElement("meta",{property:"og:description",content:d.description}),d.image&&i.a.createElement("meta",{property:"og:image",content:d.image}),c&&i.a.createElement("meta",{name:"twitter:creator",content:c}),d.title&&i.a.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&i.a.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&i.a.createElement("meta",{name:"twitter:image",content:d.image})))},data:x})},C=A;A.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var I="2945593527",v=r.a.div.withConfig({displayName:"Layout__Page",componentId:"sc-1i3zltk-0"})(["display:flex;flex-direction:column;background:#F8FAFC;"]),k=r.a.div.withConfig({displayName:"Layout__Body",componentId:"sc-1i3zltk-1"})(["min-height:100vh;"]);t.a=function(e){return i.a.createElement(v,null,i.a.createElement(C,null),i.a.createElement(h,null),i.a.createElement(k,null,e.children),i.a.createElement(E,null))}},257:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(224).a.p.withConfig({displayName:"Paragraph__StyledParagraph",componentId:"sc-9piful-0"})(["font-size:1.25rem;"]);t.a=function(e){return i.a.createElement(r,{id:e.id},e.children)}},263:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(224).a.h3.withConfig({displayName:"TagLine__StyledHeading",componentId:"sc-1ku2tm5-0"})(["font-size:2rem;font-weight:lighter;padding:1rem 0 1rem 0;"]);t.a=function(e){return i.a.createElement(r,null,e.children)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9866d703f83b5c189a9c.js.map