(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return f});var a=n(0),r=n.n(a),o=n(191),u=n(188),i=n(192),c=n(199);e.default=function(t){var e=t.data,n=e.allMarkdownRemark.group,a=e.site.siteMetadata.title,f=t.location;return r.a.createElement(o.a,{location:f,title:a},r.a.createElement(i.a,{title:"all tags",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement("div",null,r.a.createElement("h1",null,"Tags"),r.a.createElement("ul",null,n.map(function(t){return r.a.createElement("li",{key:t.fieldValue},r.a.createElement(u.a,{to:"/tags/"+c(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))}))))};var f="3450235017"},187:function(t,e,n){var a;t.exports=(a=n(190))&&a.default||a},188:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(58),u=n.n(o);n.d(e,"a",function(){return u.a});n(187),n(7).default.enqueue,r.a.createContext({})},189:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return f});var a=n(195),r=n.n(a),o=n(196),u=n.n(o);u.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete u.a.googleFonts;var i=new r.a(u.a);var c=i.rhythm,f=i.scale},190:function(t,e,n){"use strict";n.r(e);n(16);var a=n(0),r=n.n(a),o=n(80);e.default=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json)):null}},191:function(t,e,n){"use strict";n(16);var a=n(0),r=n.n(a),o=n(188),u=n(189);var i=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,i=e.children;return t="/"===n.pathname?r.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement("main",null,i),r.a.createElement("footer",null,"© ",(new Date).getFullYear()," - Built with ❤ by Techie Support, LLC"))},a}(r.a.Component);e.a=i},192:function(t,e,n){"use strict";var a=n(193),r=n(0),o=n.n(r),u=n(197),i=n.n(u);function c(t){var e=t.description,n=t.lang,r=t.meta,u=t.title,c=a.data.site,f=e||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Techie Support",description:"Radically different web development",author:"Techie Support"}}}}},199:function(t,e,n){(function(e){n(14),n(59),n(13),n(121),n(198);var a=1/0,r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+i+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",s="[\\u2700-\\u27bf]",d="[a-z\\xdf-\\xf6\\xf8-\\xff]",p="[^\\ud800-\\udfff"+i+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[A-Z\\xc0-\\xd6\\xd8-\\xde]",g="(?:"+d+"|"+p+")",y="(?:"+b+"|"+p+")",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+h+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,m].join("|")+")[\\ufe0e\\ufe0f]?"+h+")*"),E="(?:"+[s,x,m].join("|")+")"+v,j=RegExp("['’]","g"),O=RegExp(f,"g"),w=RegExp([b+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,b,"$"].join("|")+")",y+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,b+g,"$"].join("|")+")",b+"?"+g+"+(?:['’](?:d|ll|m|re|s|t|ve))?",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,E].join("|"),"g"),A=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S="object"==typeof e&&e&&e.Object===Object&&e,T="object"==typeof self&&self&&self.Object===Object&&self,L=S||T||Function("return this")();var R,z=(R={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==R?void 0:R[t]});var C=Object.prototype.toString,I=L.Symbol,U=I?I.prototype:void 0,Z=U?U.toString:void 0;function k(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&C.call(t)==r}(t))return Z?Z.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}function M(t){return null==t?"":k(t)}var D,N=(D=function(t,e,n){return t+(n?"-":"")+e.toLowerCase()},function(t){return function(t,e,n,a){var r=-1,o=t?t.length:0;for(a&&o&&(n=t[++r]);++r<o;)n=e(n,t[r],r,t);return n}(function(t,e,n){return t=M(t),void 0===(e=n?void 0:e)?function(t){return A.test(t)}(t)?function(t){return t.match(w)||[]}(t):function(t){return t.match(o)||[]}(t):t.match(e)||[]}(function(t){return(t=M(t))&&t.replace(u,z).replace(O,"")}(t).replace(j,"")),D,"")});t.exports=N}).call(this,n(122))}}]);
//# sourceMappingURL=component---src-pages-tags-js-9f5e8af0bbc8097570e1.js.map