(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i}),a.d(t,"pageQuery",function(){return s});a(75),a(48);var d=a(0),n=a.n(d),c=a(4),r=a.n(c),f=a(142),o=(a(143),a(151));function i(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(o.a,null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return n.a.createElement("div",{key:t.id},n.a.createElement("h1",{className:"myUL"},n.a.createElement(f.Link,{to:t.frontmatter.path},t.frontmatter.title)),n.a.createElement("hr",null))}))}i.propTypes={data:r.a.object};var s="1229648663"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return b});var d=a(0),n=a.n(d),c=a(4),r=a.n(c),f=a(141),o=a.n(f);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return f.withPrefix}),a.d(t,"navigate",function(){return f.navigate}),a.d(t,"push",function(){return f.push}),a.d(t,"replace",function(){return f.replace}),a.d(t,"navigateTo",function(){return f.navigateTo});var i=a(144),s=a.n(i);a.d(t,"PageRenderer",function(){return s.a});var l=a(33);a.d(t,"parsePath",function(){return l.a});var u=n.a.createContext({}),b=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},143:function(e,t,a){},144:function(e,t,a){var d;e.exports=(d=a(146))&&d.default||d},145:function(e){e.exports={data:{site:{siteMetadata:{title:"My app"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var d=a(0),n=a.n(d),c=a(4),r=a.n(c),f=a(50),o=a(2),i=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(f.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=i},147:function(e){e.exports={data:{siteSearchIndex:{index:{version:"0.9.5",fields:["title","tags"],ref:"id",documentStore:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{id:"c0a6105a-015f-5572-853a-37a23a7ffe77",title:"Genuine 1",path:"/5",tags:["Non veg","article"]},"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{id:"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7",title:"My First Gatsby Post",path:"/1",tags:["incredible","article"]},"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242":{id:"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242",title:"Genuine ",path:"/4",tags:["Non_veg","article"]},"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{id:"e07bb6a4-166a-552c-b713-ba8e2cfb1889",title:"My Second Gatsby Post",path:"/2",tags:["amazing","article"]},"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{id:"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb",title:"My third Gatsby Post",path:"/3",tags:["boring","article"]}},docInfo:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{title:2,tags:3},"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{title:3,tags:2},"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242":{title:1,tags:2},"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{title:3,tags:2},"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{title:3,tags:2}},length:5,save:!0},index:{title:{root:{1:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{tf:1}},df:1},docs:{},df:0,g:{docs:{},df:0,e:{docs:{},df:0,n:{docs:{},df:0,u:{docs:{},df:0,i:{docs:{},df:0,n:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{tf:1},"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242":{tf:1}},df:2}}}}},a:{docs:{},df:0,t:{docs:{},df:0,s:{docs:{},df:0,b:{docs:{},df:0,i:{docs:{"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{tf:1},"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{tf:1},"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{tf:1}},df:3}}}}}},f:{docs:{},df:0,i:{docs:{},df:0,r:{docs:{},df:0,s:{docs:{},df:0,t:{docs:{"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{tf:1}},df:1}}}}},p:{docs:{},df:0,o:{docs:{},df:0,s:{docs:{},df:0,t:{docs:{"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{tf:1},"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{tf:1},"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{tf:1}},df:3}}}},s:{docs:{},df:0,e:{docs:{},df:0,c:{docs:{},df:0,o:{docs:{},df:0,n:{docs:{},df:0,d:{docs:{"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{tf:1}},df:1}}}}}},t:{docs:{},df:0,h:{docs:{},df:0,i:{docs:{},df:0,r:{docs:{},df:0,d:{docs:{"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{tf:1}},df:1}}}}}}},tags:{root:{docs:{},df:0,n:{docs:{},df:0,o:{docs:{},df:0,n:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{tf:1}},df:1,_:{docs:{},df:0,v:{docs:{},df:0,e:{docs:{},df:0,g:{docs:{"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242":{tf:1}},df:1}}}}}}},v:{docs:{},df:0,e:{docs:{},df:0,g:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{tf:1}},df:1}}},a:{docs:{},df:0,r:{docs:{},df:0,t:{docs:{},df:0,i:{docs:{},df:0,c:{docs:{},df:0,l:{docs:{"c0a6105a-015f-5572-853a-37a23a7ffe77":{tf:1},"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{tf:1},"f8d26a7d-b2bb-5ad0-9eb4-d2c7d86ff242":{tf:1},"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{tf:1},"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{tf:1}},df:5}}}}},m:{docs:{},df:0,a:{docs:{},df:0,z:{docs:{"e07bb6a4-166a-552c-b713-ba8e2cfb1889":{tf:1}},df:1}}}},i:{docs:{},df:0,n:{docs:{},df:0,c:{docs:{},df:0,r:{docs:{},df:0,e:{docs:{},df:0,d:{docs:{"9334087f-c6d2-5638-a2c7-bcc8d19e7ea7":{tf:1}},df:1}}}}}},b:{docs:{},df:0,o:{docs:{},df:0,r:{docs:{},df:0,e:{docs:{"272f6d40-2b27-58ff-8fd4-d8ad11b5cedb":{tf:1}},df:1}}}}}}},pipeline:["trimmer","stopWordFilter","stemmer"]}}}}},149:function(e,t,a){},151:function(e,t,a){"use strict";var d=a(145),n=a(0),c=a.n(n),r=a(4),f=a.n(r),o=a(152),i=a.n(o),s=a(142),l=a(147),u=(a(49),a(48),a(7)),b=a.n(u),m=a(153),p=(a(143),function(e){function t(t){var a;return(a=e.call(this,t)||this).getOrCreateIndex=function(){return a.index?a.index:m.Index.load(a.props.searchIndex)},a.search=function(e){var t=e.target.value;a.index=a.getOrCreateIndex(),a.setState({query:t,results:a.index.search(t,{expand:!0}).map(function(e){var t=e.ref;return a.index.documentStore.getDoc(t)})})},a.state={query:"",results:[]},a}return b()(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{style:{color:"White",paddingLeft:"1em",fontWieght:"bold",fontStyle:"italic"}},"Search:    ",c.a.createElement("input",{style:{position:"center"},type:"text",placeholder:"Type title words or tags",value:this.state.query,onChange:this.search})),c.a.createElement("ul",{className:"myUL",style:{position:"absolute",backgroundColor:"white",marginLeft:"3em"}},this.state.results.map(function(e){return c.a.createElement("li",{style:{paddingBottom:"5px",fontSize:"25px",TextDecoder:"none"},key:e.id},c.a.createElement(s.Link,{to:"/"+e.path},e.title,c.a.createElement("small",null," ,Tags: "+e.tags.join(","))),c.a.createElement("hr",null))})))},t}(n.Component));p.propTypes={searchIndex:f.a.object};var g=function(e){e.siteTitle;return c.a.createElement(s.StaticQuery,{query:"299765166",render:function(e){return c.a.createElement("header",{style:{background:"#458555",marginBottom:"1.45rem",padding:"20px"}},c.a.createElement(p,{searchIndex:e.siteSearchIndex.index,className:"search"}))},data:l})};g.propTypes={siteTitle:f.a.string};var h=g,y=(a(149),function(e){var t=e.children;return c.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement("div",null,c.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,paddingTop:0}},t),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("hr",null),c.a.createElement("center",null,"© change from md.js file"))},data:d})});y.propTypes={children:f.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-index-js-355846e800e78da6282d.js.map