(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{219:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(223),l=a(106),o=a(245),c=a(502),s=a(261),d=a.n(s),A=function(){var e=c.data;return i.a.createElement(d.a,{fluid:e.file.childImageSharp.fluid,alt:"Saguaro cactus covered in snow",style:{borderRadius:"5px",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}})},u=a(241),m=a(262),p=a(256),h=(a(7),a(8),a(2),a(284)),g=a.n(h),f=a(337),w=a(297),E=r.a.div.withConfig({displayName:"NewContactForm__StyledDiv",componentId:"yoiwqn-0"})(["display:flex;padding:1rem 0 2rem 0;"]),y=r.a.input.withConfig({displayName:"NewContactForm__StyledInput",componentId:"yoiwqn-1"})(["border:none;border-radius:5px 0 0 5px;padding:1rem 0 1rem 1rem;flex-basis:60%;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);"]),b=r.a.button.withConfig({displayName:"NewContactForm__StyledButton",componentId:"yoiwqn-2"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#f6993f;padding:1rem;border:none;display:inline-block;font-weight:bold;cursor:pointer;border-radius:0 5px 5px 0;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);"]),x={headers:{"Content-Type":"application/json","X-USER-TOKEN":"xyy4QhGAbSxKZrR_MDAiXQQkXTEyRQ","X-USER-EMAIL":"th3str4p@gmail.com"}},B=function(){return i.a.createElement(f.a,{initialValues:{email:""},onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;setTimeout(function(){g.a.post("https://api.mailblast.io/v1/lists/4156af75-cfc0-44e8-8f2e-e0c19088a52a/subscribers",{data:{attributes:{email:e.email}}},x),alert("Thanks for dropping us your email!  We'll get in touch soon to discuss your business."),a(!1),n()},500)},validationSchema:w.object().shape({email:w.string().email().required("")})},function(e){var t=e.values,a=e.touched,n=e.errors,r=(e.dirty,e.isSubmitting),l=e.handleChange,o=e.handleBlur,c=e.handleSubmit;return e.handleReset,i.a.createElement("form",{onSubmit:c},i.a.createElement(p.a,null,i.a.createElement("b",null,"Drop us your email, and we'll get in touch to discuss your business.")),i.a.createElement(E,null,i.a.createElement(y,{type:"email",name:"email",autocomplete:"email",placeholder:"your-email@your-business.com",value:t.email,onChange:l,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),i.a.createElement(b,{type:"submit",disabled:r},"Get In Touch")))})},C=r.a.div.withConfig({displayName:"pages__FirstWrapper",componentId:"ifild7-0"})(["display:flex;flex-direction:row;justify-content:center;padding:0 0 2rem 0;"]),v=r.a.div.withConfig({displayName:"pages__FirstSection",componentId:"ifild7-1"})(["max-width:800px;padding:0 1rem 0 1rem;"]),I=r.a.h3.withConfig({displayName:"pages__SecondaryHeading",componentId:"ifild7-2"})(["font-size:2rem;"]),k=r.a.div.withConfig({displayName:"pages__SecondWrapper",componentId:"ifild7-3"})(["display:flex;flex-direction:row;justify-content:center;background:#3d4852;padding:2rem 0 2rem 0;"]),S=r.a.div.withConfig({displayName:"pages__SecondSection",componentId:"ifild7-4"})(["max-width:800px;color:#F8FAFC;width:100%;padding:0 1rem 0 1rem;"]),N=r.a.div.withConfig({displayName:"pages__SecondSubWrapper",componentId:"ifild7-5"})(["display:flex;flex-direction:column;padding:1rem 0 2rem 0;"]),j=r.a.div.withConfig({displayName:"pages__SecondOuter",componentId:"ifild7-6"})(["display:flex;flex-direction:row;justify-content:space-between;border-top:2px solid #606F7B;width:100%;@media screen and (max-width:600px){flex-direction:column;align-content:center;}"]),Y=r.a.h3.withConfig({displayName:"pages__SecondHeading",componentId:"ifild7-7"})(["flex:1;"]),W=r.a.p.withConfig({displayName:"pages__SecondParagraph",componentId:"ifild7-8"})(["font-size:1.25rem;padding:1.5rem 0 0 0;color:#FFF5EB;flex:1;@media screen and (max-width:600px){padding:0;}"]);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(C,null,i.a.createElement(v,null,i.a.createElement(u.a,null,"Radically different web development"),i.a.createElement(A,null),i.a.createElement(m.a,null,"Snow on a cactus?  That's different—just like us."),i.a.createElement(p.a,null,i.a.createElement("b",null,"Welcome to Techie Support."),"  There's a reasonably good chance you won't regret visiting this website."),i.a.createElement(p.a,null,i.a.createElement("i",null,"What in the world is this anyway?")),i.a.createElement(p.a,null,"A few years back, we were desperate for sales after our word of mouth work dried up."),i.a.createElement(p.a,null,'We offered "IT support", but that\'s an incredibly vague term.  And we would try to do just about anything you could throw at us.'),i.a.createElement(p.a,null,"Servers?  We did 'em.  Desktops?  Did 'em.  Printers?  Yep.  Websites?  You bet."),i.a.createElement(p.a,null,"Once we hit on websites, we realized to our surprise that there are a boatload of absolutely awful websites out there.  We're talking the slowest, ugliest things to disgrace the Earth since the AMC Gremlin (who're we kidding, we're not even old enough to remember that)."),i.a.createElement(p.a,null,"We saw the need, and we went for it full bore.  But it still wasn't enough."),i.a.createElement(p.a,null,"Businesses weren't interested in what we were selling, and frankly why should they be?  There are about 367,538 (give or take 753) freelancers out there who will churn out websites for pennies on the dollar."),i.a.createElement(p.a,null,'But we were "premium", whatever that means.'),i.a.createElement(p.a,null,i.a.createElement("i",null,"Who cares?")),i.a.createElement(p.a,null,"A website should serve exactly one purpose for your business—to improve your bottom line.  If it's not doing that, why spend money on a new one?"),i.a.createElement(p.a,null,"The truth is, it's not enough to just ",i.a.createElement("i",null,"have")," a website.  And guess what, it's not enough for it to ",i.a.createElement("i",null,"look good")," either."),i.a.createElement(p.a,null,'It isn\'t even enough for it to load fast or be "SEO optimized" or any of that nonsense.'),i.a.createElement(p.a,null,"None of that stuff matters, because nobody's going to see it anyway."),i.a.createElement(p.a,null,"At this point, you're probably shaking your head and wondering what kind of web development company would sit here and tell you ",i.a.createElement("i",null,"not")," to invest in a new website.  To be fair though, we did warn you—we're radically different."),i.a.createElement(p.a,null,"We don't just churn out websites."),i.a.createElement(p.a,null,"We build, host and maintain your new JAMstack website, couple it with a solid content strategy (because ultimately, content is king), and combine the two into ",i.a.createElement("b",null,"a juggernaut of marketing power for your business"),"."),i.a.createElement(p.a,null,"Ok, that ",i.a.createElement("i",null,"might")," be overselling it a bit, but the key takeaway for you is this:"),i.a.createElement(p.a,{id:"get-in-touch"},"We don't ",i.a.createElement("i",null,"just")," build websites.  We build marketing engines that just so happen to include websites."),i.a.createElement(B,null))),i.a.createElement(k,null,i.a.createElement(S,null,i.a.createElement(I,null,"Frequently asked questions"),i.a.createElement(N,null,i.a.createElement(j,null,i.a.createElement(Y,null,"Who are you?"),i.a.createElement(W,null,"Web developers, scholars, poets—and all around friendly folks.")),i.a.createElement(j,null,i.a.createElement(Y,null,"What is JAMstack?"),i.a.createElement(W,null,"Simply put, it's the future of web development.  It's faster, it's more secure and it's got some awesome features like websites that work offline (seriously, try it; you can totally read our blog while you have no internet connection).")),i.a.createElement(j,null,i.a.createElement(Y,null,"Where is your headquarters?"),i.a.createElement(W,null,"☀️ Phoenix.  Fun fact:  The sun shines here an average of 299 days per year.")),i.a.createElement(j,null,i.a.createElement(Y,null,"When were you founded?"),i.a.createElement(W,null,"Way back in 2013.  It was a simpler time.")),i.a.createElement(j,null,i.a.createElement(Y,null,"Why work with you?"),i.a.createElement(W,null,"It's hard to answer a question like this without just sounding self-serving.  But ultimately, the truth is that we holistically combine your website and content with the goal of producing long-term gains for your business.  It's a simple concept but one that is surprisingly hard to pull off.")),i.a.createElement(j,null,i.a.createElement(Y,null,"How much do you cost?"),i.a.createElement(W,null,"Expect to pay at least $7000 per month in most cases.  No possible way you can afford that?  Head on over to ",i.a.createElement(l.Link,{to:"/blog/"},"our blog")," for some awesome free tips."))),i.a.createElement(B,null))))}},239:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABtBAMAAACPYALYAAAAMFBMVEUAAAD/ZgD/aAT/agiZmWaammicnGqdnW3/+PT6+vj/+vj8/Pr9/f3//fz///8AAADMrScFAAACF0lEQVR4nO3ZP0/CQByHcV6BCU6GxIW3wOasA8Gw8RYYXfsWeAEuXUxcO7uxOjYmvoAaByf/8Br8Nb1yd20pfAeR4XkWyrW99j4slzAYEBEREUmdbWhv72AdHlhCYAmBJQSWEFhCIdbwPypf4uP69ANLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLCCwhsITAEgJLaAfWxWq12vg+syyz0cuiKNyIHRU2cj4ej+uL7JrH6u7MH5aNqruHfpI3P8trjLVcLu+CB+d5/myja+tp+84z+1Z+3tpZd12apvVZG3zxo6lf6txP6x4WzPBtR/WFdteDv/bLPQ0ssMACCyywwNqN1Vhm99fGyGQyuaqQerFG8clhjBWpbOvGmvllJElSytzHMyTVsI1O3UnX1Cn6GW4Wi0XufprgMfG7gAUWWGCBBRZYElawz9rJV1YEWynrp9qTdeyz2liNfVYvlrDPaiy8PUO4zwILLLDAAgsssMAC65SxjrCDb+Ted+8Ovn1L78LbM3TMBRZYYIEFFlhdOu2/wuqllnmEXqz+v8I2ccGbzquRYAUCVjBB+MvEM6zbomCBBRZYYIEFFlh/hHWkwvc/5cASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhMASAksILCGwhJpYtCewhMASAksILCGwhMASAkuoxiIiIiI6sF9qupBGygkGTwAAAABJRU5ErkJggg=="},240:function(e){e.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",siteUrl:"https://techiesupport.co",image:"./images/logo.png",twitterUsername:"@techiesupportco"}}}}},241:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(223).a.h1.withConfig({displayName:"PageTitle__StyledHeading",componentId:"evvhoi-0"})(["font-size:3rem;"]);t.a=function(e){return i.a.createElement(r,null,e.children)}},245:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(223),l=a(106),o=a(239),c=a.n(o),s=r.a.button.withConfig({displayName:"PrimaryNavButton__StyledButton",componentId:"sc-1jboyii-0"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#f6993f;padding:5px 15px 5px 15px;border:none;display:inline-block;margin:0 0 0 1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);font-weight:bold;cursor:pointer;border-radius:5px;"]),d=function(e){return i.a.createElement(s,null,e.children)},A=r.a.button.withConfig({displayName:"SecondaryNavButton__StyledButton",componentId:"i1yfzb-0"})(["color:#3d4852;text-transform:uppercase;text-decoration:none;background:#dae1e7;padding:5px 15px 5px 15px;border:none;display:inline-block;margin-left:1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);cursor:pointer;border-radius:5px;"]),u=function(e){return i.a.createElement(A,null,e.children)},m=function(e){return i.a.createElement("div",null,i.a.createElement(l.Link,{to:"/"},i.a.createElement(u,null,"Home")),i.a.createElement(l.Link,{to:"/blog/"},i.a.createElement(u,null,"Blog")),i.a.createElement(l.Link,{to:"/#get-in-touch"},i.a.createElement(d,null,"Get In Touch")))},p=r.a.div.withConfig({displayName:"Header__HeaderDiv",componentId:"sc-10cnog6-0"})(["display:flex;flex-direction:row;justify-content:space-between;align-content:center;width:100%;padding:1rem;img{box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);}@media screen and (max-width:600px){flex-direction:column;align-items:center;}"]),h=function(e){return i.a.createElement(p,null,i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:c.a,height:"40"})),i.a.createElement(m,null))},g=a(258),f=a(259),w=r.a.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-11z43hi-0"})(["text-align:center;padding:1rem;font-weight:bold;width:100%;font-size:0.75rem;a{color:inherit;}"]),E=function(){return i.a.createElement(w,null,i.a.createElement("a",{href:"https://facebook.com/techiesupport"},i.a.createElement(g.a,{icon:f.a,size:"2x",style:{margin:"0 1rem 0 0"}})),i.a.createElement("a",{href:"https://instagram.com/techiesupport"},i.a.createElement(g.a,{icon:f.b,size:"2x",style:{margin:"0 0.5rem 0 0"}})),i.a.createElement("a",{href:"https://linkedin.com/company/techiesupport"},i.a.createElement(g.a,{icon:f.c,size:"2x",style:{margin:"0 0 0 0.5rem"}})),i.a.createElement("a",{href:"https://twitter.com/techiesupportco"},i.a.createElement(g.a,{icon:f.d,size:"2x",style:{margin:"0 0 0 1rem"}})),i.a.createElement("br",null),"© ",(new Date).getFullYear()," • Techie Support, LLC",i.a.createElement("br",null),"Built with ❤️ in Phoenix")},y=a(240),b=a(260),x=function(e){e.title,e.description,e.image;var t=e.pathname,a=e.article;return i.a.createElement(l.StaticQuery,{query:C,render:function(e){var n=e.site.siteMetadata,r=n.title,l=n.description,o=n.siteUrl,c=n.image,s=n.twitterUsername,d={title:r,description:l,image:""+o+c,url:""+o+(t||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Helmet,{title:d.title},i.a.createElement("meta",{name:"description",content:d.description}),i.a.createElement("meta",{name:"image",content:d.image}),d.url&&i.a.createElement("meta",{property:"og:url",content:d.url}),!a?null:i.a.createElement("meta",{property:"og:type",content:"article"}),d.title&&i.a.createElement("meta",{property:"og:title",content:d.title}),d.description&&i.a.createElement("meta",{property:"og:description",content:d.description}),d.image&&i.a.createElement("meta",{property:"og:image",content:d.image}),s&&i.a.createElement("meta",{name:"twitter:creator",content:s}),d.title&&i.a.createElement("meta",{name:"twitter:title",content:d.title}),d.description&&i.a.createElement("meta",{name:"twitter:description",content:d.description}),d.image&&i.a.createElement("meta",{name:"twitter:image",content:d.image})))},data:y})},B=x;x.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var C="2945593527",v=r.a.div.withConfig({displayName:"Layout__Page",componentId:"sc-1i3zltk-0"})(["display:flex;flex-direction:column;background:#F8FAFC;"]),I=r.a.div.withConfig({displayName:"Layout__Body",componentId:"sc-1i3zltk-1"})(["min-height:100vh;"]);t.a=function(e){return i.a.createElement(v,null,i.a.createElement(B,null),i.a.createElement(h,null),i.a.createElement(I,null,e.children),i.a.createElement(E,null))}},256:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(223).a.p.withConfig({displayName:"Paragraph__StyledParagraph",componentId:"sc-9piful-0"})(["font-size:1.25rem;"]);t.a=function(e){return i.a.createElement(r,{id:e.id},e.children)}},262:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(223).a.h3.withConfig({displayName:"TagLine__StyledHeading",componentId:"sc-1ku2tm5-0"})(["font-size:2rem;font-weight:lighter;padding:1rem 0 1rem 0;"]);t.a=function(e){return i.a.createElement(r,null,e.children)}},502:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABmSYg0mMv/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACEgMQESEx/9oACAEBAAEFAnU8qOgyYK7b/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Bh//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwGlf//EABgQAAIDAAAAAAAAAAAAAAAAAAEQESAh/9oACAEBAAY/AsUin//EABsQAAMAAwEBAAAAAAAAAAAAAAABESExQYGR/9oACAEBAAE/IVNxTFsO8Hr9hHLdCvbNYr+n/9oADAMBAAIAAwAAABB83//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QiGI//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxChG9P/xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMUGR8P/aAAgBAQABPxAIpLrefZVgTUoPTZirgBff1TB5F0k2LcPrcGyApTKcn//Z",aspectRatio:1.5,src:"/static/210dd5b7678fdc1f6e6efc243c6540bf/bc3a8/hero.jpg",srcSet:"/static/210dd5b7678fdc1f6e6efc243c6540bf/d278e/hero.jpg 200w,\n/static/210dd5b7678fdc1f6e6efc243c6540bf/8539d/hero.jpg 400w,\n/static/210dd5b7678fdc1f6e6efc243c6540bf/bc3a8/hero.jpg 800w,\n/static/210dd5b7678fdc1f6e6efc243c6540bf/81ef8/hero.jpg 1200w,\n/static/210dd5b7678fdc1f6e6efc243c6540bf/989b1/hero.jpg 1600w,\n/static/210dd5b7678fdc1f6e6efc243c6540bf/2728f/hero.jpg 5184w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-22ed1419132c16ca9e1f.js.map