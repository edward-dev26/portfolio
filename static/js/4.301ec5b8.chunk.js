(this["webpackJsonpreact-lessons-1"]=this["webpackJsonpreact-lessons-1"]||[]).push([[4],{331:function(e,t,n){e.exports={container:"People_container__Q-VSE"}},332:function(e,t,n){e.exports={wrapper:"UsersList_wrapper__217LS"}},333:function(e,t,n){e.exports={userHeader:"User_userHeader__1DaHc",logo:"User_logo__3P3E_",avatar:"User_avatar__2Dl80",userBody:"User_userBody__x1nTa",name:"User_name__jsjwa",search:"User_search__34bpe"}},334:function(e,t,n){e.exports=n.p+"static/media/profilePhoto.98a15f00.jpg"},335:function(e,t,n){e.exports={pagination:"Paginator_pagination__1C8Tg",active:"Paginator_active__GrX42"}},337:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(331),u=n.n(o),c=n(109),s=n(45),l=n(46),i=n(50),p=n(47),f=n(51),g=n(11),m=n(142),h=n(60),v=n(59),P=n(332),d=n.n(P),_=n(333),w=n.n(_),E=n(10),b=n(40),y=n.n(b),C=n(334),j=n.n(C),S=function(e){var t=e.id,n=e.avatarUrl,r=e.unFollow,o=e.follow,u=e.name,c=e.followingInProgress,s=e.status,l=e.followed;return a.a.createElement("div",{className:w.a.user},a.a.createElement("div",{className:w.a.userHeader},a.a.createElement("img",{src:j.a,className:w.a.logo,alt:"logo"}),a.a.createElement("img",{src:n||y.a,className:w.a.avatar,alt:"avatar"})),a.a.createElement("div",{className:w.a.userBody},a.a.createElement(E.b,{className:w.a.name,to:"/profile/".concat(t,"/about")},u),l?a.a.createElement("button",{disabled:c.some((function(e){return e===t})),onClick:function(){r(t)}},"Unfollow"):a.a.createElement("button",{disabled:c.some((function(e){return e===t})),onClick:function(){o(t)}},"Follow"),a.a.createElement("p",null,s)))},O=n(335),U=n.n(O),k=function(e){var t=e.onSetCurrentPage,n=e.currentPage,o=e.totalCount,u=e.count,c=e.portionSize,s=Object(r.useState)(1),l=Object(h.a)(s,2),i=l[0],p=l[1],f=Math.ceil(o/u);Object(r.useEffect)((function(){p(function(e,t,n,r){return r>=t&&0!=t?e=t-n:r<=1?e=1:r==e+3&&r!=t-1?e+=1:r==e+4?e+=2:r==e+1&&2!=r?e-=1:r==e&&1!=r&&(e-=2),e}(i,f,c,n))}),[n]);for(var g=i,m=g+c,v=["<<"];g<=m;g++)v.push(g);return v.push(">>"),a.a.createElement("div",{className:U.a.pagination},v.map((function(e){return"<<"==e?a.a.createElement("span",{onClick:function(){return t(1)}},e):">>"==e?a.a.createElement("span",{onClick:function(){return t(f)}},e):a.a.createElement("span",{onClick:function(){return t(e)},className:n==e&&U.a.active},e)})))},N=function(e){var t=e.usersData,n=e.totalCount,o=e.count,u=e.startPage,c=e.onSetCurrentPage,s=e.currentPage,l=Object(v.a)(e,["usersData","totalCount","count","startPage","onSetCurrentPage","currentPage"]),i=Object(r.useState)(4),p=Object(h.a)(i,1)[0];return a.a.createElement("div",null,a.a.createElement(k,{portionSize:p,onSetCurrentPage:c,currentPage:s,startPage:u,totalCount:n,count:o}),a.a.createElement("div",{className:d.a.wrapper},t.map((function(e){return a.a.createElement(S,Object.assign({id:e.id,status:e.status,key:e.id,profileImageUrl:e.photos.large,avatarUrl:e.photos.small,name:e.name,activity:"user.activity",followed:e.followed},l))}))))},D=n(30),F=n(8);function x(e,t){return e===t}function I(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function A(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var H=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,u=r.pop(),c=A(r),s=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return s.apply(null,e)}));return l.resultFunc=u,l.dependencies=c,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,n=null,r=null;return function(){return I(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var B=H((function(e){return e.peoplePage.usersData}),(function(e){return e.filter((function(e){return!0}))})),z=function(e){return e.peoplePage.count},J=function(e){return e.peoplePage.currentPage},L=function(e){return e.peoplePage.startPage},M=function(e){return e.peoplePage.totalCount},T=function(e){return e.app.isFetching},G=function(e){return e.peoplePage.followingInProgress},Q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).onSetCurrentPage=function(e){n.props.getUsers(n.props.count,e)},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.count,this.props.currentPage)}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.isFetching&&a.a.createElement(D.a,null),a.a.createElement(N,{usersData:this.props.usersData,count:this.props.count,currentPage:this.props.currentPage,totalCount:this.props.totalCount,follow:this.props.follow,unFollow:this.props.unFollow,onSetCurrentPage:this.onSetCurrentPage,followingInProgress:this.props.followingInProgress,startPage:this.props.startPage}))}}]),t}(a.a.Component),R=Object(F.d)(Object(g.b)((function(e){return{usersData:B(e),count:z(e),currentPage:J(e),startPage:L(e),totalCount:M(e),isFetching:T(e),followingInProgress:G(e)}}),{follow:m.b,unFollow:m.d,getUsers:m.c}))(Q);t.default=function(){return a.a.createElement("div",{className:u.a.container},a.a.createElement(c.a,{placeholder:"Search user"}),a.a.createElement(R,null))}}}]);
//# sourceMappingURL=4.301ec5b8.chunk.js.map