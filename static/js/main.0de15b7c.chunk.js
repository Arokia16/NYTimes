(this.webpackJsonpnytimes=this.webpackJsonpnytimes||[]).push([[0],{34:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(27),c=a.n(n),i=a(16),r=a(11),u=a(12),o=a(32),m=a(28),d=a(9),p=a(33),h=a(7),v=a(4),g=["January","Feburay","March","April","May","June","July","August","September","October","November","December"],E=a(29),b=a.n(E),N=new(function(){function e(){Object(r.a)(this,e)}return Object(u.a)(e,[{key:"postDate",value:function(e){var t="object"==typeof e?e:new Date(e);return"".concat(g[t.getMonth()]+" "+t.getDate(),", ").concat(t.getFullYear())}},{key:"sendRequest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return new Promise(function(s,l){if(e="https://api.nytimes.com/svc/"+e+"?api-key=kIOPu1dJT0ILCg3SiKF4ZzznRh4pu5Le&","get"===a)b.a.get(e+t).then(function(e){return s(e)}).catch(function(e){return l(e)});else if("post"!==a)return l("Invalid requests")})}},{key:"getPager",value:function(e,t){return Math.ceil(e/t)}}]),e}()),f=!1,y=Object(h.f)(function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-3 text-center text-light mb-5"},"NYTimes News"),l.a.createElement("div",{className:"search-container"},l.a.createElement("input",{type:"text",className:"form-control",onKeyUp:function(t){var a=t.target.value.trim();clearTimeout(f),f=setTimeout(function(){e.history.push("/NYTimes/search/"+a),e.searchHandler(a),clearTimeout(f)},600)},defaultValue:e.search,placeholder:"Search"}))))});function k(e){var t=e.post,a=e.type?e.type:"";if(e.post){var s=t.multimedia.length>0?t.multimedia[0].url:"";s&&!/^https?:\/\//i.test(s)&&(s="https://www.nytimes.com/"+s);var n="search"===e.page?t.headline.main:t.title,c="search"===e.page?t.section_name:t.section,i="search"===e.page?t.byline.original:t.byline,r="search"===e.page?N.postDate(t.pub_date):N.postDate(t.published_date);return l.a.createElement(l.a.Fragment,null,"default"===a?l.a.createElement("div",{className:"card",key:e.pid},l.a.createElement(v.b,{className:"post-link",to:"/NYTimes/view/"+e.pid},l.a.createElement("div",{className:"post single-post card "+a},s?l.a.createElement("div",{className:"post-image card-img-top"},l.a.createElement("img",{src:s,alt:n,className:"img-fluid"}),l.a.createElement("span",{className:"post-tag"},c)):"",l.a.createElement("div",{className:"card-body post-meta mt-3"},l.a.createElement("h3",{className:"post-title display-5"},n),l.a.createElement("span",{className:"post-author"},i),l.a.createElement("span",{className:"post-date"},r))))):l.a.createElement(v.b,{className:"post-link",key:e.pid,to:"/NYTimes/view/featured/"+e.pid},l.a.createElement("div",{className:"post "+a},l.a.createElement("div",{className:"post-image",style:{background:"url(".concat(s,")"),backgroundSize:"cover",backgroundPosition:"center center"}}),l.a.createElement("div",{className:"post-meta"},l.a.createElement("h3",{className:"post-title display-5"},t.title),l.a.createElement("span",{className:"post-author"},t.byline),l.a.createElement("span",{className:"post-date"},N.postDate(t.published_date))))))}return""}function P(e){var t=e.match.params.url,a=e.posts[t],s=a.multimedia.length>0?a.multimedia[0].url:"";s&&!/^https?:\/\//i.test(s)&&(s="https://www.nytimes.com/"+s);var n="search"===e.page?a.headline.main:a.title,c="search"===e.page?a.section_name:a.section,i="search"===e.page?a.byline.original:a.byline,r="search"===e.page?N.postDate(a.pub_date):N.postDate(a.published_date);return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section post-full"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"post-title-full"},n),l.a.createElement("div",{className:"post-metas"},l.a.createElement("h6",{className:"post-title"},i),l.a.createElement("span",null,r)),l.a.createElement("div",{className:"post-image card-img-top"},l.a.createElement("img",{src:s,alt:n,className:"img-fluid"}),l.a.createElement("span",{className:"post-tag"},c)),l.a.createElement("p",{className:"post-content mt-5"},a.abstract),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed facilisis eros. Fusce nec sem venenatis, viverra lectus eget, sollicitudin magna. Etiam dapibus bibendum lorem, ac iaculis mauris pharetra non. In at cursus leo. Morbi nec feugiat lacus. Morbi sollicitudin massa ac eros pellentesque, a mollis odio lobortis. Vivamus vitae efficitur lectus, sed feugiat turpis. Quisque volutpat odio a urna dapibus, eget sollicitudin urna placerat. Fusce eget mattis dui, quis viverra sapien. Nam non elementum metus, sed hendrerit erat. Fusce mollis nec diam a cursus. In hac habitasse platea dictumst. Pellentesque pulvinar et arcu ut luctus. Aliquam erat volutpat. Nulla nec eleifend ante, at dapibus turpis. Curabitur fringilla ornare magna."),l.a.createElement("p",null,"  Vestibulum feugiat sem non ex tempus, ac vestibulum nisi porta. Nulla eu augue egestas, placerat nunc nec, vestibulum dui. Fusce non tempus magna. Suspendisse at tincidunt felis, vitae tincidunt sapien. Nam vel aliquet orci. Phasellus in venenatis sapien. Nam aliquet felis ac sem vulputate tincidunt. Sed ultrices molestie iaculis. Cras finibus et nunc ut mattis."),l.a.createElement("p",null,"  Vivamus porta ornare neque, a semper enim eleifend ut. Donec aliquam, est non cursus venenatis, ipsum velit vestibulum justo, eu lacinia dolor diam ac turpis. Vivamus mollis sit amet sem id tristique. Pellentesque enim ligula, scelerisque non egestas eu, venenatis ut nunc. Curabitur mattis ornare diam. Pellentesque lacinia risus at dapibus luctus. Nunc in tempor sapien. Nulla facilisi. Praesent porttitor venenatis sapien, vel tincidunt urna sodales id."),l.a.createElement("p",null," Praesent blandit tincidunt eros, non hendrerit erat. Nullam auctor ornare finibus. Maecenas nec auctor lorem. Fusce faucibus accumsan nunc nec iaculis. Sed vel faucibus sapien, eu pretium ligula. Aenean posuere dolor sapien, id sagittis nisi vestibulum at. Mauris et elementum velit, ac ornare sem. Mauris semper ligula in sapien sollicitudin, in accumsan dui placerat. Proin eu nunc turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus leo erat, ornare scelerisque consectetur id, congue eget mi. Vestibulum lacinia ut justo ut vulputate."),l.a.createElement("p",null,"  Phasellus aliquet dolor ullamcorper, bibendum lectus ut, fringilla est. Donec mattis odio sit amet mauris imperdiet, elementum porttitor urna gravida. Curabitur eros est, malesuada quis porta vitae, pretium sed nunc. Donec dui diam, iaculis et elementum nec, lacinia quis purus. Maecenas dapibus odio sed odio finibus ultricies. Duis augue justo, dignissim in enim eu, euismod convallis mauris. Curabitur consequat augue erat, ut hendrerit tellus sollicitudin in. Fusce viverra porttitor urna id ullamcorper. Suspendisse et molestie tortor. Maecenas laoreet pulvinar nisi, quis pretium leo varius eu. Phasellus vel justo et est condimentum ultrices. Vestibulum orci ex, pretium nec mauris sed, commodo porta neque. Quisque eu diam sagittis massa congue pretium viverra vitae tortor. Pellentesque feugiat pharetra diam, lacinia rutrum felis porta id. Vestibulum dapibus nisl libero, ut finibus neque facilisis ac."))),l.a.createElement("div",{className:"backtohome text-center p-5"},l.a.createElement(v.b,{className:"",to:"/NYTimes/"},"Back to Home")))}function w(){return l.a.createElement("div",{className:"sk-fading-circle"},l.a.createElement("div",{className:"sk-circle1 sk-circle"}),l.a.createElement("div",{className:"sk-circle2 sk-circle"}),l.a.createElement("div",{className:"sk-circle3 sk-circle"}),l.a.createElement("div",{className:"sk-circle4 sk-circle"}),l.a.createElement("div",{className:"sk-circle5 sk-circle"}),l.a.createElement("div",{className:"sk-circle6 sk-circle"}),l.a.createElement("div",{className:"sk-circle7 sk-circle"}),l.a.createElement("div",{className:"sk-circle8 sk-circle"}),l.a.createElement("div",{className:"sk-circle9 sk-circle"}),l.a.createElement("div",{className:"sk-circle10 sk-circle"}),l.a.createElement("div",{className:"sk-circle11 sk-circle"}),l.a.createElement("div",{className:"sk-circle12 sk-circle"}))}var q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={featurePost:[],post:[],viewPosts:[],currentPage:0,pager:10,totalPages:1,loaderMore:!1,sortBy:"newest",searchLoader:!1,searchResults:[]},a.searchHandler=a.searchHandler.bind(Object(d.a)(a)),a.loadMore=a.loadMore.bind(Object(d.a)(a)),a.sortBy=a.sortBy.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){"/NYTimes/"==window.location.pathname&&this.loadHomepagePost()}},{key:"loadHomepagePost",value:function(){var e=this;N.sendRequest("topstories/v2/home.json","").then(function(t){var a=t.data.results,s=a.length>4?a.slice(0,4):a.slice(0,a.length),l=a.length>4?a.slice(4,a.length):[];e.setState({post:l,featurePost:s,totalPages:N.getPager(l.length,e.state.pager)},function(){e.loadMore()})}).catch(function(e){return console.log(e)})}},{key:"loadSearchPage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&(this.state.searchResults.length<1&&this.setState({searchLoader:!0}),N.sendRequest("search/v2/articlesearch.json","fq=headline:('".concat(t,"')&sort=").concat(this.state.sortBy,"&page=").concat(this.state.currentPage)).then(function(t){var a=t.data.response.docs;e.setState({searchResults:a,totalPages:N.getPager(a.length,e.state.pager)},function(){e.loadMore(!0),e.setState({searchLoader:!1})})}).catch(function(e){return console.log(e)}),this.setState({searchValue:t}))}},{key:"loadMore",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=t?0:this.state.currentPage,s=0===a?0:this.state.currentPage*this.state.pager;this.setState({loaderMore:!0});var l=t?this.state.post.slice(s,s+this.state.pager):[].concat(Object(i.a)(this.state.viewPosts),Object(i.a)(this.state.post.slice(s,s+this.state.pager)));this.setState({viewPosts:l,currentPage:a+1},function(){e.setState({loaderMore:!1})})}},{key:"searchHandler",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadSearchPage(e)}},{key:"sortBy",value:function(e){var t=this,a=e.target.value;a&&this.setState({sortBy:a},function(){t.loadSearchPage(t.state.searchValue)})}},{key:"renderPosts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";return("home"===e?this.state.viewPosts:this.state.searchResults).map(function(t,a){return l.a.createElement(k,{post:t,type:"default",pid:a,page:e})})}},{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"main"},l.a.createElement(y,{searchHandler:this.searchHandler,search:this.state.searchValue}),l.a.createElement(h.c,null,l.a.createElement(h.a,{key:"1",exact:!0,path:"/NYTimes/",render:function(){return e.state.post.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"featured-post"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-sm-12 mbl-padd-r"},l.a.createElement(k,{post:e.state.featurePost[0],type:"left",pid:"0"})),l.a.createElement("div",{className:"col-lg-6 col-sm-12 pl-0 mbl-padd"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 mbl-padd-b"},l.a.createElement(k,{post:e.state.featurePost[1],type:"top",pid:"1"})),l.a.createElement("div",{className:"col-sm-12 mbl-padd"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 mbl-padd-r"},l.a.createElement(k,{post:e.state.featurePost[2],type:"bottom",pid:"2"})),l.a.createElement("div",{className:"col-sm-6 pl-0 mbl-padd"},l.a.createElement(k,{post:e.state.featurePost[3],type:"bottom",pid:"3"}))))))))),l.a.createElement("div",{className:"ny-posts"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card-columns"},e.renderPosts()))),e.state.loaderMore?l.a.createElement(w,null):e.state.currentPage===e.state.totalPages?"":l.a.createElement("div",{className:"load-more",onClick:function(){return e.loadMore()}},"Load More")):l.a.createElement(w,null)}}),l.a.createElement(h.a,{key:"2",exact:!0,path:"/NYTimes/search",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center section"},l.a.createElement("h3",null,"No results found"),l.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/empty-box.png",alt:"no-results"})),l.a.createElement("div",{className:"backtohome text-center p-5"},l.a.createElement(v.b,{className:"",to:"/NYTimes/"},"Back to Home")))}}),l.a.createElement(h.a,{key:"3",exact:!0,path:"/NYTimes/search/:keyword",render:function(t){return t.match,e.state.searchValue?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ny-posts post-full"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"pb-5 text-right"},l.a.createElement("select",{className:"sort-by",onChange:e.sortBy},l.a.createElement("option",{value:""},"Sort by"),l.a.createElement("option",{value:"newest"},"Newest"),l.a.createElement("option",{value:"oldest"},"Oldest"))),l.a.createElement("div",{className:"card-columns"},e.state.searchLoader?l.a.createElement(w,null):"",e.renderPosts("search")))),l.a.createElement("div",{className:"backtohome text-center p-5"},l.a.createElement(v.b,{className:"",to:"/NYTimes/"},"Back to Home"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center section"},l.a.createElement("h3",null,"No results found"),l.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/empty-box.png",alt:"no-results"})),l.a.createElement("div",{className:"backtohome text-center p-5"},l.a.createElement(v.b,{className:"",to:"/NYTimes/"},"Back to Home")))}}),l.a.createElement(h.a,{key:"4",exact:!0,path:"/NYTimes/view/featured/:url",render:function(t){var a=t.match;return l.a.createElement(P,{match:a,posts:e.state.featurePost})}}),l.a.createElement(h.a,{key:"5",exact:!0,path:"/NYTimes/view/:url",render:function(t){var a=t.match;return l.a.createElement(P,{match:a,posts:e.state.viewPosts})}})))}}]),t}(l.a.Component),M=Object(h.f)(q);c.a.render(l.a.createElement(v.a,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0de15b7c.chunk.js.map
