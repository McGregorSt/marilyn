(this.webpackJsonpmarilyn=this.webpackJsonpmarilyn||[]).push([[0],{24:function(e,t,n){e.exports={MenuItem:"MenuItem__MenuItem__1aslj",active:"MenuItem__active__1x2OO",MenuItemBorder:"MenuItem__MenuItemBorder__1xRob"}},25:function(e,t,n){e.exports={ldio_es5rs222tzg:"Spinner__ldio_es5rs222tzg__3_9Mu",loadingio_spinner_dual_ring_eemqt8ynios:"Spinner__loadingio_spinner_dual_ring_eemqt8ynios__3XaJ5"}},35:function(e,t,n){e.exports={App:"App__App__1o-Fp"}},36:function(e,t,n){e.exports={NavPic:"NavPic__NavPic__1J7eG"}},37:function(e,t,n){e.exports={NavMenu:"NavMenu__NavMenu__3W4fC"}},38:function(e,t,n){e.exports={NavLogo:"NavLogo__NavLogo__5X4ej"}},39:function(e,t,n){e.exports={Menu:"Menu__Menu__3Rd91"}},42:function(e,t,n){e.exports={GalleryItem:"GalleryItem__GalleryItem__1OsXR"}},43:function(e,t,n){e.exports={Gallery:"Gallery__Gallery__piBUq"}},45:function(e,t,n){e.exports=n(60)},54:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=n(10),l=n(21),u=n(12),s=n(34),m=(n(54),n(17)),_=n(18),p=n(22),d=n(19),f=n(23),v=n(9),E=n(35),h=n.n(E),g=n(36),b=n.n(g),y=function(){return r.a.createElement("div",{className:b.a.NavPic})},N=n(37),O=n.n(N),j=n(38),M=n.n(j),x=function(){return r.a.createElement("div",{className:M.a.NavLogo})},I=n(11),P=n(39),k=n.n(P),w=n(20),C=n(24),S=n.n(C),A=function(e){var t=e.to,n=e.value,a=e.icon;return r.a.createElement("div",{className:S.a.MenuItem},r.a.createElement(o.b,{to:t,exact:!0,activeClassName:S.a.active},r.a.createElement("div",{className:S.a.MenuItemBorder},r.a.createElement(w.a,{icon:a,className:n}))))},T=function(){return r.a.createElement("div",{className:k.a.Menu},r.a.createElement(A,{to:"/",value:"faUser",icon:I.c}),r.a.createElement(A,{to:"/gallery",value:"faImage",icon:I.a}))},q=function(){return r.a.createElement("div",{className:O.a.NavMenu},r.a.createElement(x,null),r.a.createElement(T,null))},R=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(q,null))},U=n(31),F=n.n(U),L=n(41),G=function(e){return{type:"FETCH_PICTURES_SUCCESS",photos:e}},X=n(42),D=n.n(X),B=function(e){var t=e.src,n=e.alt,a=e.clicked;return r.a.createElement("div",{className:D.a.GalleryItem},r.a.createElement("img",{src:t,alt:n,onClick:a}))},H=n(43),z=n.n(H),J=n(25),W=n.n(J),K=function(){return r.a.createElement("div",{className:W.a.Spinner},r.a.createElement("div",{className:W.a.loadingio_spinner_dual_ring_eemqt8ynios},r.a.createElement("div",{className:W.a.ldio_es5rs222tzg},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",null)))))},V=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchPictures("m")}},{key:"render",value:function(){var e=r.a.createElement(K,null);return this.props.loading||(e=this.props.photos.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(o.b,{to:e.url.replace("_m.jpg","_b.jpg"),target:"_blank"},r.a.createElement(B,{src:e.url,alt:e.title})))}))),r.a.createElement("div",{className:z.a.Gallery},e)}}]),t}(a.Component),Q=Object(l.b)((function(e){return{photos:e.photos,loading:e.loading}}),(function(e){return{onFetchPictures:function(t){return e(function(e){return function(){var t=Object(L.a)(F.a.mark((function t(n){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"FETCH_PICTURES_START"}),a=[],t.next=5,fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9798037bfcb726dc341c0a6c6660e3a6&tags=marilyn+monroe&min_upload_date=2019-10-22&max_upload_date=2019-11-22&sort=date-posted-desc&format=json&nojsoncallback=1").then((function(e){return e.json()})).then((function(e){return a=e.photos.photo.slice(0,9)}));case 5:r=[],a.map((function(t){var n="https://farm".concat(t.farm,".staticflickr.com/").concat(t.server,"/").concat(t.id,"_").concat(t.secret,"_").concat(e,".jpg");return r.push({url:n,id:t.id,title:t.title}),r})),n(G(r)),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",n({type:"FETCH_PICTURES_FAIL",error:t.t0}));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(V),$=n(7),Y=n.n($),Z=function(){return r.a.createElement("div",{className:Y.a.Article},r.a.createElement("div",{className:Y.a.article__header},r.a.createElement("h1",null,"Marilyn Monroe"),r.a.createElement("div",{className:Y.a.small__header},r.a.createElement(w.a,{icon:I.b,className:Y.a.mapMarker}),r.a.createElement("span",null,"Poznan, PL"))),r.a.createElement("div",{className:Y.a.article__main},r.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."," "),r.a.createElement("div",{className:Y.a.quote},r.a.createElement("div",{className:Y.a.pipe}),r.a.createElement("div",{className:Y.a.quote__text},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. "'))),r.a.createElement("div",{className:Y.a.footer},r.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.")))},ee=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:Z}),r.a.createElement(v.a,{path:"/gallery",component:Q}));return r.a.createElement("div",{className:h.a.App},r.a.createElement(R,null),e)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(44);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ae=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(te.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},re={photos:[],loading:!1,error:!1},ce=function(e){return ae(e,{loading:!0})},ie=function(e,t){return ae(e,{loading:!1,photos:t.photos})},oe=function(e){return ae(e,{error:!0})},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PICTURES_START":return ce(e);case"FETCH_PICTURES_SUCCESS":return ie(e,t);case"FETCH_PICTURES_FAIL":return oe(e);default:return e}},ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,se=Object(u.d)(le,ue(Object(u.a)(s.a))),me=r.a.createElement(l.a,{store:se},r.a.createElement(o.a,null,r.a.createElement(ee,null)));i.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports={Article:"Article__Article__1XvKp",small__header:"Article__small__header__22VE4",mapMarker:"Article__mapMarker__1QXNE",article__main:"Article__article__main__1i_ts",quote:"Article__quote__3KT0l",pipe:"Article__pipe__1Eu6R",quote__text:"Article__quote__text__35fum",footer:"Article__footer__29XRm"}}},[[45,1,2]]]);
//# sourceMappingURL=main.17b50615.chunk.js.map