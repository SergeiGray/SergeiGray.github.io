(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],Array(20).concat([function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/countdown.71c4a616.png"},function(e,t,a){e.exports=a(77)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),u=a(9),s=a(5),o=a(36),i=a(13),m=a(4),f=(a(51),function(e){var t=e.children,a=e.className,n="component-row ".concat(a),c=r.a.Children.map(t,(function(e,t){return r.a.cloneElement(e,{key:t,className:"".concat(e.props.className," component-row__item")})}));return r.a.createElement("div",{className:n},c)});f.defaultProps={className:""};var d=f,v=(a(52),function(){return r.a.createElement("span",{className:"logo"},r.a.createElement("b",null,"netflix"),"roulette")}),p=(a(53),function(e){var t=e.changeTopPartStatus;return r.a.createElement("button",{className:"btn search-button-magnifier",onClick:function(){return t?t("search"):null}},r.a.createElement("svg",{width:"2rem",height:"2rem",viewBox:"0 0 16 16",className:"bi bi-search",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{key:"100",fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),r.a.createElement("path",{key:"101",fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})))}),E=(a(54),function(e){var t=e.changeTopPartStatus;return r.a.createElement("button",{className:"btn movie-form-adding-button",onClick:function(){return t?t("adding"):null}},r.a.createElement("svg",{width:"2rem",height:"2rem",viewBox:"0 0 16 16",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})))}),b=(a(55),function(){return r.a.createElement(d,{className:"space align-center header"},r.a.createElement(i.b,{to:"/"},r.a.createElement(v,null)),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/search/"},r.a.createElement(p,null)),r.a.createElement(i.b,{to:"/adding/"},r.a.createElement(E,null))))}),h=(a(57),function(e){return(0,e.renderItem)(e.children)}),g=function(e){return{type:"SEARCH_STATUS",status:e}},O=function(e){return{type:"SEARCH_VALUE",value:e}},j=a(3),S=(a(58),r.a.forwardRef((function(e,t){var a=e.value,n=e.valuesTransmitter,c=e.className;return r.a.createElement("input",{ref:t,type:"text",className:"".concat(c," component-input"),onChange:function(e){var t=e.target;n(t.value)},value:a})}))),_=(a(59),function(e){var t=e.name,a=e.className,n=e.clickHandler;return r.a.createElement("button",{className:"".concat(a," btn btn-danger component-button-big"),onClick:n},t)}),N=(a(60),function(e){var t=e.changeSearchValue,a=Object(n.useState)(""),c=Object(j.a)(a,2),l=c[0],u=c[1],s=Object(n.useRef)(null);return Object(n.useEffect)((function(){s.current&&s.current.focus()}),[]),r.a.createElement(d,{className:"fix"},r.a.createElement(S,{ref:s,value:l,valuesTransmitter:function(e){return u(e)},className:"col-8"}),r.a.createElement(_,{name:"Search",clickHandler:function(e){e.preventDefault(),t(l),u("")}}))}),w=(a(61),function(e){var t=Object(n.useState)(e.active),a=Object(j.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(e.title),s=Object(j.a)(u,1)[0],o=Object(n.useState)(e.markOfButtons),i=Object(j.a)(o,1)[0],m=function(t){var a=t.target;e.transferOfActiveButtonValue(a.name)},f=i.map((function(t,a){var n=t.toLowerCase()===c.toLowerCase()?"btn btn-danger switch__button":"btn btn-secondary switch__button",l=e.namesOfButtons[a];return r.a.createElement("button",{type:"button",className:n,key:t.toLowerCase(),name:t.toLowerCase(),onClick:m},l)}));return Object(n.useEffect)((function(){l(e.active)}),[e.active]),r.a.createElement("div",{className:"d-flex align-items-center switch"},r.a.createElement("span",{className:"mr-3 switch__title"},s),r.a.createElement("div",{className:"btn-group"},f))}),y=(a(62),Object(u.b)((function(e){return{searchStatus:e.searchStatus,valuesOfSearchSwitch:e.valuesOfSearchSwitch}}),(function(e){return{changeSearchStatus:Object(s.b)(g,e),changeSearchValue:Object(s.b)(O,e)}}))((function(e){var t=e.valuesOfSearchSwitch,a=e.searchStatus,n=e.changeSearchValue,c=e.changeSearchStatus;return r.a.createElement("form",{className:"container search"},r.a.createElement(d,{className:"mb-5"},r.a.createElement(h,{renderItem:function(e){return r.a.createElement("h1",{className:"top-part-title"},e)}},"Find your movie")),r.a.createElement(d,{className:"mb-4"},r.a.createElement(N,{changeSearchValue:n})),r.a.createElement(w,{active:a,title:t.title,markOfButtons:t.markOfButtons,namesOfButtons:t.namesOfButtons,transferOfActiveButtonValue:c}))}))),A=a(11),D=a(14),x=a(23),k=a(22),T=(a(63),function(e){var t=e.src,a=e.className,c=e.clickHandler,l=Object(n.useState)(!1),u=Object(j.a)(l,2),s=u[0],o=u[1];return r.a.createElement("div",{className:"poster ".concat(a)},s?null:r.a.createElement("div",{className:"poster__placeholder",onClick:c}),r.a.createElement("img",{className:"poster__image",style:s?{}:{display:"none"},src:t,alt:"",onLoad:function(){return o(!0)},onClick:c}))}),C=(a(20),function(e){var t=e.vote;return t?r.a.createElement("p",{className:"movie-page__rating"},t):null}),B=function(e){var t=e.tagline;return t?r.a.createElement("p",{className:"movie-page__tagline"},t):null},M=function(e){var t=e.date;return t?r.a.createElement("p",{className:"mr-4 movie-page__date"},t.slice(0,4)):null},R=function(e){var t=e.runtime;return t?r.a.createElement("p",{className:"movie-page__runtime"},t," min"):null},I=function(e){var t=e.overview;return t?r.a.createElement("p",{className:"movie-page__overview"},t):null},V=function(e){var t=e.data;return r.a.createElement("div",{className:"d-flex flex-row justify-content-between mt-5 mb-5 movie-page"},r.a.createElement("div",{className:"mr-5"},r.a.createElement(T,{src:t.poster_path,className:"movie-page__image"})),r.a.createElement("div",null,r.a.createElement("div",{className:"row d-flex align-items-start"},r.a.createElement(h,{renderItem:function(e){return r.a.createElement("h2",{className:"movie-page__title"},e)}},t.title),r.a.createElement(C,{vote:t.vote_average})),r.a.createElement("div",{className:"row"},r.a.createElement(B,{tagline:t.tagline})),r.a.createElement("div",{className:"row"},r.a.createElement(M,{date:t.release_date}),r.a.createElement(R,{runtime:t.runtime})),r.a.createElement("div",{className:"row"},r.a.createElement(I,{overview:t.overview}))))},L=a(15),U=a(16);function F(){var e=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n  color: #ffffff;\n  font-size: 2rem;\n"]);return F=function(){return e},e}var z=U.a.span(F()),H=function(e){var t=e.message;return r.a.createElement(z,null,t)},P=function(){return r.a.createElement(H,{message:"Error loading the database"})},J=(a(65),function(){var e=Array.from({length:12},(function(){return r.a.createElement("div",null)}));return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"lds-spinner"},e))}),G=a(18),Z=a.n(G),W=a(25),$=function e(){var t=this;Object(A.a)(this,e),this._apiBase="https://reactjs-cdp.herokuapp.com",this.getMoviesData=function(){var e=Object(W.a)(Z.a.mark((function e(a){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t._apiBase).concat(a));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMovies=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return t.getMoviesData("/movies?limit=".concat(e))},this.getSpecificMovie=function(e){return t.getMoviesData("/movies/".concat(e))}},q=a(1),K=a(12),Q=function(){function e(){var t=this;Object(A.a)(this,e),this.getSearchBy=function(e,a,n){return n?n.filter((function(n){var r=t._getFormattedString(n[a]),c=t._getFormattedString(e);return r.indexOf(c)>-1})):n},this.getSortBy=function(e,a){return e?Object(K.a)(e).sort((function(e,n){var r=e[a]?t._getFormattedNumber(e,a):0;return(n[a]?t._getFormattedNumber(n,a):0)-r})):e},this.saveInLocalStorage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data",a=Object(q.a)({},e),n=localStorage[t]?JSON.parse(localStorage[t]):null;"id"in a||(a.id=Date.now());var r=n?[].concat(Object(K.a)(n),[a]):[a];return localStorage[t]=JSON.stringify(r),{status:!0}},this.getFromLocalStorage=Object(W.a)(Z.a.mark((function e(){var t,a,n=arguments;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"data",a=localStorage[t]?JSON.parse(localStorage[t]):[],e.next=4,a;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),this.getSpecificMovieFromLocalStorage=function(){var e=Object(W.a)(Z.a.mark((function e(a){var n,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Number.parseInt(a),e.next=3,t.getFromLocalStorage().then((function(e){return e}));case 3:return r=e.sent,e.next=6,r.find((function(e){return e.id===n}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._getFormattedNumber=function(e,t){return"number"===typeof e[t]?e[t]:e[t].match(/\d/g).join("")}}return Object(D.a)(e,[{key:"_getFormattedString",value:function(e){return e instanceof Array?e.join(" ").toLowerCase().trim():e.toLowerCase().trim()}}]),e}(),X=function(e,t){return function(a){return function(c){var l=Object(n.useState)(null),u=Object(j.a)(l,2),s=u[0],o=u[1],i=Object(n.useState)(null),m=Object(j.a)(i,2),f=m[0],d=m[1],v=Object(n.useState)(!1),p=Object(j.a)(v,2),E=p[0],b=p[1],h=function(){e().then((function(e){var a=t?e[t]:e;o(a)})).catch((function(){b(!0)}))},g=function(){var e=function(e,t){var a=Boolean(e),n=!!e&&Boolean(Object.keys(e).length),r=Boolean(t!==e);return a&&r&&n}(c.data,s);c.data&&e&&(Array.isArray(s)?o([].concat(Object(K.a)(s),Object(K.a)(c.data))):o(c.data))};return Object(n.useEffect)((function(){h()}),[]),Object(n.useEffect)((function(){g()}),[c.data]),Object(n.useEffect)((function(){c.updateDataStatus&&f!==c.updateDataStatus&&(o(null),b(!1),d(c.updateDataStatus),h())}),[c.updateDataStatus]),r.a.createElement(a,Object.assign({},c,{data:s,error:E}))}}},Y=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},ee=(new $).getSpecificMovie,te=(new Q).getSpecificMovieFromLocalStorage,ae=function(e){var t=e.data,a=e.error,n=t&&!a?r.a.createElement(V,{data:t}):null,c=t||a?null:r.a.createElement(J,null),l=a?r.a.createElement(P,null):null;return r.a.createElement(r.a.Fragment,null,c,l,n)},ne=function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=Y(X(ee.bind(null,this.props.id)),X(te.bind(null,this.props.id)))(ae);return r.a.createElement(e,this.props)}}]),a}(r.a.PureComponent),re=function(e){return{type:"MOVIES_DATA_UPDATE",date:e}},ce=(a(67),r.a.forwardRef((function(e,t){var a=e.value,n=e.error,c=e.valuesTransmitters,l=e.valueSender,u=n.items.includes("title")?"error":"",s=n.items.includes("poster_path")?"error":"",o=n.items.includes("release_date")?"error":"",i=n.items.includes("genres")?"error":"";return r.a.createElement("form",{className:"container movie-form-adding"},r.a.createElement(d,{className:"mb-4"},r.a.createElement(h,{renderItem:function(e){return r.a.createElement("h1",{className:"top-part-title"},e)}},"Add your movie")),r.a.createElement(d,{className:"fix wrap mb-4"},r.a.createElement("label",{className:" movie-form-adding__label"},r.a.createElement("span",null,"Enter the name of the movie. ",r.a.createElement("br",null),' Input format "Name of film"'),r.a.createElement(S,{ref:t,value:a.title,valuesTransmitter:c.title,className:u}),r.a.createElement("span",{className:"movie-form-adding__error-message"},"This field is filled in incorrectly.")),r.a.createElement("label",{className:" movie-form-adding__label"},r.a.createElement("span",null,"Enter the poster url of the movie. ",r.a.createElement("br",null),' Input format "https://image.tmdb.org/movie_poster.jpg"'),r.a.createElement(S,{value:a.poster_path,valuesTransmitter:c.poster_path,className:s}),r.a.createElement("span",{className:"movie-form-adding__error-message"},"This field is filled in incorrectly."))),r.a.createElement(d,{className:"fix wrap"},r.a.createElement("label",{className:"movie-form-adding__label"},r.a.createElement("span",null,"Enter the release date of the movie. ",r.a.createElement("br",null),' Input format "2020-02-02"'),r.a.createElement(S,{value:a.release_date,valuesTransmitter:c.release_date,className:o}),r.a.createElement("span",{className:"movie-form-adding__error-message"},"This field is filled in incorrectly.")),r.a.createElement("label",{className:"movie-form-adding__label"},r.a.createElement("span",null,"Enter the genres of the movie. ",r.a.createElement("br",null),' Input format "Comedy"'),r.a.createElement(S,{value:a.genres,valuesTransmitter:c.genres,className:i}),r.a.createElement("span",{className:"movie-form-adding__error-message"},"This field is filled in incorrectly.")),r.a.createElement(_,{name:"Add",className:"align-self-end",clickHandler:l})))}))),le=(new Q).saveInLocalStorage,ue=Object(u.b)(null,(function(e){return{changeStatusDataUpdate:Object(s.b)(re,e)}}))((function(e){var t=Object(n.useState)({title:"",poster_path:"",genres:"",release_date:""}),a=Object(j.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)({status:!1,items:[]}),s=Object(j.a)(u,2),o=s[0],i=s[1],m=Object(n.useRef)(null),f=function(e){return 0===e.trim().length?{status:!0,item:"title"}:{status:!1,item:""}},d=function(e){return e.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?\b\.jpg|.png$/gi)?{status:!1,item:""}:{status:!0,item:"poster_path"}},v=function(e){return e.match(/^\w+/gi)?{status:!1,item:""}:{status:!0,item:"genres"}},p=function(e){return e.match(/^\d{4}-\d{2}-\d{2}/gi)?{status:!1,item:""}:{status:!0,item:"release_date"}},E=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return t.status&&(e.status=!0),e.items.push(t.item),e}),{status:!1,items:[]})},b={title:function(e){l(Object(q.a)(Object(q.a)({},c),{},{title:e}))},poster_path:function(e){l(Object(q.a)(Object(q.a)({},c),{},{poster_path:e}))},genres:function(e){l(Object(q.a)(Object(q.a)({},c),{},{genres:e}))},release_date:function(e){l(Object(q.a)(Object(q.a)({},c),{},{release_date:e}))}};return Object(n.useEffect)((function(){m.current&&m.current.focus()}),[]),r.a.createElement(ce,{ref:m,value:c,error:o,valuesTransmitters:b,valueSender:function(t){t.preventDefault();var a=E(f(c.title),d(c.poster_path),v(c.genres),p(c.release_date));a.status?i(Object(q.a)({},a)):(le(c),l({title:"",poster_path:"",genres:"",release_date:""}),i({status:!1,items:[]}),e.changeStatusDataUpdate(Date.now()))}})})),se=(a(68),function(){return r.a.createElement("div",{className:"container-fluid d-flex flex-column top-part"},r.a.createElement("div",{className:"top-part__background"}),r.a.createElement("div",{className:"pl-5 pr-5"},r.a.createElement(b,null)),r.a.createElement("div",{className:"container d-flex flex-grow-1"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/search",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(m.a,{path:"/adding",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(m.a,{path:"/movie-page/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(ne,{id:t})}}),r.a.createElement(m.a,{render:function(){return r.a.createElement(h,{renderItem:function(e){return r.a.createElement("h1",{className:"top-part-title w-100 d-flex justify-content-center align-items-center"},e)}},"Welcome to Netflix Roulette")}}))))}),oe=function(e){return{type:"SORT_STATUS",status:e}},ie=(a(69),Object(u.b)((function(e){return{counter:e.moviesCounter}}))((function(e){var t=e.counter;return r.a.createElement("span",{className:"movies-counter"},t," movie found")}))),me=(a(70),Object(u.b)((function(e){return{sortStatus:e.sortStatus,valuesOfSortSwitch:e.valuesOfSortSwitch}}),(function(e){return{changeSortStatus:Object(s.b)(oe,e)}}))((function(e){var t=e.valuesOfSortSwitch,a=e.sortStatus,n=e.changeSortStatus;return r.a.createElement("div",{className:"container-fluid control-panel"},r.a.createElement("div",{className:"container"},r.a.createElement(d,{className:"space align-center"},r.a.createElement(ie,null),r.a.createElement(w,{active:a,title:t.title,markOfButtons:t.markOfButtons,namesOfButtons:t.namesOfButtons,transferOfActiveButtonValue:n}))))}))),fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{type:"MOVIES_COUNTER",counter:e}},de=function(e){return{type:"MOVIES_DATA",data:e}},ve=function(e){return{type:"MOVIES_DATA_LOADING_ERROR",status:e}},pe=function(e,t){return function(a,n){e().then((function(e){var r=n().moviesData,c=t?e[t]:e;r&&(c=[].concat(Object(K.a)(c),Object(K.a)(r))),a(de(c))})).catch((function(){a(ve(!0))}))}},Ee=function(){return{type:"MOVIES_DATA_CLEAR"}},be=(a(71),function(e){var t=e.children,a=r.a.Children.map(t,(function(e){return r.a.createElement("li",{className:"list-group-item border-0 p-0 ml-1 mr-1 mb-4 bg-transparent",key:e.props.data.id},e)}));return r.a.createElement("ul",{className:"container d-flex flex-wrap justify-content-around list-group list-group-horizontal movies-list"},a)});function he(){var e=Object(L.a)(["\n  box-sizing: border-box;\n  padding: 0.2rem 0.8rem;\n  text-align: center;\n  border: 1px solid #555555;\n  border-radius: 5px;\n"]);return he=function(){return e},e}var ge=U.a.span(he()),Oe=function(e){var t=e.date,a=t?t.slice(0,4):null;return a?r.a.createElement(ge,null,a):null};function je(){var e=Object(L.a)(["\n  margin-right: 1.5rem;\n"]);return je=function(){return e},e}var Se=U.a.span(je()),_e=function(e){var t=e.genres,a=Array.isArray(t)?t.join(" "):t;return a?r.a.createElement(Se,null,a):null};function Ne(){var e=Object(L.a)(["\n  white-space: nowrap;\n"]);return Ne=function(){return e},e}var we=U.a.span(Ne()),ye=function(e){var t=e.rating;return t?r.a.createElement(we,null,"Rating: ",t):null},Ae=(a(72),a(40)),De=a.n(Ae),xe=function(){return r.a.createElement("div",{className:"error-indicator text-danger"},r.a.createElement("img",{src:De.a,alt:"Error"}),r.a.createElement("span",null,"An error occurred."),r.a.createElement("span",null,"The support team is already working on the fix."))},ke=function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(D.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement(xe,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),a}(n.Component),Te=(a(73),Object(m.f)((function(e){var t=e.data,a=e.history;if(!t)return null;var n=t.title,c=t.poster_path,l=t.release_date,u=t.genres,s=t.vote_average,o=t.id;return r.a.createElement(ke,null,r.a.createElement("div",{className:"d-flex flex-column h-100 movies-card",key:o},r.a.createElement(T,{src:c,className:"mb-3 movies-card__image",clickHandler:function(){a.push("/movie-page/".concat(o))}}),r.a.createElement("div",{className:"d-flex flex-column justify-content-between flex-grow-1"},r.a.createElement(d,{className:"space"},r.a.createElement(h,{renderItem:function(e){return r.a.createElement("h3",{className:"movie-card-title"},e)}},n),r.a.createElement(Oe,{date:l})),r.a.createElement(d,{className:"space movies-card__bottom-row"},r.a.createElement(_e,{genres:u}),r.a.createElement(ye,{rating:s})))))}))),Ce=function(e){var t=function(e){return e.map((function(e){return r.a.createElement(Te,{data:e})}))}(e.data);return r.a.createElement(be,null,t)},Be=function(){return r.a.createElement(H,{message:"No movies found"})},Me=(new Q).getSearchBy,Re=function(e){return function(t){var a=Object(n.useState)(t.data),c=Object(j.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(t.data),o=Object(j.a)(s,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){!function(){var e=t.data,a=t.searchStatus,n=t.searchValue,r=Me(n,a,e);m(r)}()}),[t.searchValue]),Object(n.useEffect)((function(){l!==t.data&&(u(t.data),m(t.data))}),[t.data]),r.a.createElement(e,Object.assign({},t,{data:i}))}},Ie=(new Q).getSortBy,Ve=function(e){return function(t){var a=Object(n.useState)(t.data),c=Object(j.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(null),o=Object(j.a)(s,2),i=o[0],m=o[1],f=Object(n.useState)(t.sortStatus),d=Object(j.a)(f,2),v=d[0],p=d[1];return Object(n.useEffect)((function(){!function(){var e=Ie(l,v);m(e)}()}),[l,v]),Object(n.useEffect)((function(){u(t.data)}),[t.data]),Object(n.useEffect)((function(){p(t.sortStatus)}),[t.sortStatus]),r.a.createElement(e,Object.assign({},t,{data:i}))}},Le=(new $).getMovies,Ue=(new Q).getFromLocalStorage,Fe=function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"getNewData",value:function(){this.props.getData(Le,"data"),this.props.getData(Ue)}},{key:"componentDidMount",value:function(){this.getNewData()}},{key:"componentDidUpdate",value:function(e){this.props.updateDataStatus!==e.updateDataStatus&&(this.props.clearMoviesData(),this.getNewData())}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.error,n=e.transferNumberOfMovies,c=t&&!a?r.a.createElement(Ce,{data:t}):null,l=t||a?null:r.a.createElement(J,null),u=a?r.a.createElement(P,null):null,s=t&&!a&&0===t.length?r.a.createElement(Be,null):null;return n(t&&!a?t.length:0),r.a.createElement(r.a.Fragment,null,l,u,s,c)}}]),a}(n.Component),ze=Y(Object(u.b)((function(e){return{data:e.moviesData,error:e.moviesDataLoadingError,updateDataStatus:e.moviesDataUpdate,searchStatus:e.searchStatus,searchValue:e.searchValue,sortStatus:e.sortStatus}}),(function(e){return{transferNumberOfMovies:Object(s.b)(fe,e),getData:Object(s.b)(pe,e),clearMoviesData:Object(s.b)(Ee,e)}})),Re,Ve)(Fe),He=(a(74),function(e){return r.a.createElement("div",{className:"movies"},r.a.createElement(ze,e))}),Pe=(a(75),function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-items-center footer"},r.a.createElement(v,null))}),Je=(a(76),function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(ke,null,r.a.createElement(se,null)),r.a.createElement(ke,null,r.a.createElement(me,null)),r.a.createElement(ke,null,r.a.createElement(He,null)),r.a.createElement(Pe,null)))}),Ge=function(){return{moviesData:null,moviesDataLoadingError:!1,moviesDataUpdate:null,moviesCounter:0,sortStatus:"release_date",searchStatus:"title",searchValue:"",valuesOfSearchSwitch:{title:"Search by",markOfButtons:["title","genres"],namesOfButtons:["Title","Genres"]},valuesOfSortSwitch:{title:"Sort by",markOfButtons:["release_date","vote_average"],namesOfButtons:["Release date","Rating"]}}}(),Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIES_COUNTER":return Object(q.a)(Object(q.a)({},e),{},{moviesCounter:t.counter});case"MOVIES_DATA_UPDATE":return Object(q.a)(Object(q.a)({},e),{},{moviesDataUpdate:t.date});case"SORT_STATUS":return Object(q.a)(Object(q.a)({},e),{},{sortStatus:t.status});case"SEARCH_STATUS":return Object(q.a)(Object(q.a)({},e),{},{searchStatus:t.status});case"SEARCH_VALUE":return Object(q.a)(Object(q.a)({},e),{},{searchValue:t.value});case"MOVIES_DATA":return Object(q.a)(Object(q.a)({},e),{},{moviesData:t.data});case"MOVIES_DATA_LOADING_ERROR":return Object(q.a)(Object(q.a)({},e),{},{moviesDataLoadingError:t.status});case"MOVIES_DATA_CLEAR":return Object(q.a)(Object(q.a)({},e),{},{moviesData:null});default:return e}},We=Object(s.c)(Ze,Object(s.a)(o.a));l.a.render(r.a.createElement(u.a,{store:We},r.a.createElement(Je,null)),document.getElementById("root"))}]),[[41,1,2]]]);
//# sourceMappingURL=main.53a1c235.chunk.js.map