(this["webpackJsonpcontacts-manager"]=this["webpackJsonpcontacts-manager"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(0),s=e(1),a=e.n(s),o=e(3),i=e.n(o),r=(e(13),e(4)),l=e(5),u=e(7),d=e(6),j=(e(14),function(t){var n=t.contact;return Object(c.jsx)("div",{children:Object(c.jsx)("h3",{children:null===n||void 0===n?void 0:n.name})})}),h=function(t){var n=t.contacts,e=t.onClick;return Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)("li",{onClick:function(n){return e(t,n)},children:t.name},t.id)}))})},b=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;return Object(r.a)(this,e),(t=n.call(this)).onContactSelect=function(n,e){console.log(n),t.setState({selectedContact:n})},t.state={contacts:[],selectedContact:null},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(n){return t.setState({contacts:n})}))}},{key:"render",value:function(){var t=Object(c.jsx)(h,{contacts:this.state.contacts,onClick:this.onContactSelect}),n=Object(c.jsx)(j,{contact:this.state.selectedContact});return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Contacts Manager"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"sidebar",children:0===this.state.contacts.length?Object(c.jsx)("p",{children:"Loading..."}):t}),Object(c.jsx)("div",{className:"content",children:this.state.selectedContact?n:null})]})]})}}]),e}(s.Component),f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),s(t),a(t),o(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.79aa9693.chunk.js.map