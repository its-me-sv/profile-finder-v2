(this["webpackJsonpprofile-finder-v2"]=this["webpackJsonpprofile-finder-v2"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=(n(12),n(4)),o=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(15),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"".concat("https://robohash.org","/").concat(e.monster.id,"?set=").concat("any","&size=").concat("180x180")}),Object(u.jsx)("h1",{children:e.monster.firstName}),Object(u.jsx)("p",{children:e.monster.email})]})},f=function(e){var t=e.monsters;return Object(u.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},j=(n(17),function(e){var t=e.placeholderText,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).updateSearchField=function(e){c.setState({searchField:e.target.value})},c.filteredBots=function(){var e=c.state,t=e.monsters,n=e.searchField;return t.filter((function(e){return e.firstName.toLowerCase().includes(n.toLowerCase())}))},c.state={monsters:[],searchField:""},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dummyapi.io/data/api/user",{headers:{"app-id":"60822728522b8cd66ca89eff"}}).then((function(e){return e.json()})).then((function(t){var n=t.data;return e.setState({monsters:n})})).catch(console.log)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title",children:"RoboFriends v2"}),Object(u.jsx)(j,{placeholderText:"Search Users",handleChange:this.updateSearchField}),this.state.monsters.length>0?Object(u.jsx)(f,{monsters:this.filteredBots()}):Object(u.jsx)("h1",{children:"Fetching Data ..."})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.9ea9047c.chunk.js.map