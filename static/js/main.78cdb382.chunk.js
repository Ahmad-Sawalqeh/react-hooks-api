(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{102:function(e,t,n){e.exports=n(215)},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},116:function(e,t){},118:function(e,t){},156:function(e,t){},157:function(e,t){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(97),l=n.n(c);n(107);var r=function(){return o.a.createElement("footer",null,o.a.createElement("p",null,"Powered by Ahmad Sawalqeh"))},i=n(101),u=n(8),s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},m=function(e){return s(e.condition,e.children)},d=(n(108),function(e){return o.a.createElement("div",{className:"modal"},o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("span",{className:"title"},e.title),o.a.createElement("button",{onClick:e.close},"X")),o.a.createElement("div",null,e.children)))});n(109);var E=function(e){return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement("span",null,"There are "),e.todoList.filter((function(e){return!e.complete})).length,o.a.createElement("span",null," Items To Complete")))},f=(n(110),function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,c=e.curent,l=[],r=1;r<=Math.ceil(n/t);r++)l.push(r);return o.a.createElement("nav",null,o.a.createElement("ul",{className:"pagination"},l.map((function(e){return o.a.createElement("li",{key:e,className:"page-item"},o.a.createElement("a",{onClick:function(){return a(e)},href:"!#",className:"page-link"},e))}))),o.a.createElement("button",{onClick:function(){c-1>0&&a(c-1)}},"Previous"),o.a.createElement("button",{onClick:function(){c+1<=l.length&&a(c+1)},className:"right"},"Next"))}),h=o.a.createContext();var p=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],l=n[1],r=Object(a.useState)(1),i=Object(u.a)(r,2),s=i[0],m=i[1],d=Object(a.useState)(3),E={display:c,currentPage:s,postsPerPage:Object(u.a)(d,1)[0],changeDisplay:l,changeCurrentPage:m};return o.a.createElement(h.Provider,{value:E},e.children)},g=n(16),v=n(98);var O=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(!1),r=Object(u.a)(l,2),i=r[0],s=r[1],m=Object(a.useState)({}),d=Object(u.a)(m,2),E=d[0],f=d[1];return[o,function(e){c(Object(v.a)({},o,Object(g.a)({},e.target.name,e.target.value)))},E,i,function(t){var n=!i,a=e.filter((function(e){return e._id===t}))[0]||{};f(a),s(n)}]},_=(n(111),"https://api-js401.herokuapp.com/api/v1/todo");var b=function(e){var t=Object(a.useContext)(h),n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],r=c[1],s=O(l),p=Object(u.a)(s,5),g=p[0],v=p[1],b=p[2],S=p[3],T=p[4],C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return fetch(e,{method:t,mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:n?JSON.stringify(n):void 0}).then((function(e){return e.json()})).then((function(e){return"function"===typeof a?a(e):null})).catch((function(e){return"function"===typeof o?o(e):console.error(e)}))};function P(e){var t,n=l.filter((function(t){return t._id===e}))[0]||{};n._id&&(n.complete=!n.complete,t=n,C("".concat(_,"/").concat(t.id),"PUT",t,(function(e){r(l.map((function(t){return t._id===e._id?e:t})))})))}Object(a.useEffect)((function(){C(_,"GET",void 0,(function(e){r(e.results)}))}),[]);var j=t.currentPage*t.postsPerPage,D=j-t.postsPerPage,N=l.slice(D,j);return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{todoList:l}),o.a.createElement("section",{className:"todo"},o.a.createElement("fieldset",null,o.a.createElement("div",null,o.a.createElement("h3",null,"Add Item"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),C(_,"POST",g,(function(e){r([].concat(Object(i.a)(l),[e]))}))}},o.a.createElement("label",null,o.a.createElement("span",null,"To Do Item"),o.a.createElement("input",{name:"text",placeholder:"Add To Do List Item",required:!0,onChange:v})),o.a.createElement("label",null,"Difficulty:",o.a.createElement("select",{name:"difficulty",onChange:v},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"))),o.a.createElement("label",null,o.a.createElement("span",null,"Assigned To  "),o.a.createElement("input",{type:"text",name:"assignee",placeholder:"Assigned To",onChange:v})),o.a.createElement("label",null,o.a.createElement("span",null,"Due  "),o.a.createElement("input",{type:"date",name:"due",onChange:v})),o.a.createElement("button",{className:"add"},"Add Item")))),o.a.createElement("div",null,o.a.createElement("ul",null,N.map((function(e){return o.a.createElement("li",{className:"complete-".concat(e.complete.toString()," - ").concat(t.display),key:e._id},o.a.createElement("span",{onClick:function(){return P(e._id)}},e.text),o.a.createElement("button",{onClick:function(){return T(e._id)}},"Details"),o.a.createElement("button",{onClick:function(){return t=e._id,void C("".concat(_,"/").concat(t),"DELETE",void 0,(function(e){r(l.filter((function(e){return e._id!==t})))}));var t}},"Delete"))}))),o.a.createElement(f,{postsPerPage:t.postsPerPage,totalPosts:l.length,paginate:function(e){return t.changeCurrentPage(e)},curent:t.currentPage}))),o.a.createElement(m,{condition:S},o.a.createElement(d,{title:"To Do Item",close:T},o.a.createElement("div",{className:"todo-details"},o.a.createElement("header",null,o.a.createElement("span",null,"Assigned To: ",b.assignee),o.a.createElement("span",{className:"due"},"Due: ",b.due)),o.a.createElement("div",{className:"item"},b.text)))))},S=n(30),T=n(31),C=n(33),P=n(32),j=n(34),D=n(99),N=n.n(D),k=n(100),A=n.n(k),y=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API,I=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SECRET,L={testAdmin:Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ADMIN_TOKEN||"",testEditor:Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EDITOR_TOKEN||"",testUser:Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks-api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_USER_TOKEN||""},K=o.a.createContext(),R=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).login=function(e,t){L[e]?n.validateToken(L[e]):fetch("".concat(y,"/signin"),{method:"post",mode:"cors",cache:"no-cache",headers:new Headers({Authorization:"Basic ".concat(btoa("".concat(e,":").concat(t)))})}).then((function(e){return e.text()})).then((function(e){return n.validateToken(e)})).catch(console.error)},n.validateToken=function(e){try{var t=A.a.verify(e,I);console.log("all good"),n.setLoginState(!0,e,t)}catch(a){n.setLoginState(!1,null,{}),console.log("Token Validation Error",a)}},n.logout=function(){n.setLoginState(!1,null,{})},n.setLoginState=function(e,t,a){N.a.save("auth",t),n.setState({token:t,loggedIn:e,user:a})},n.state={loggedIn:!1,login:n.login,logout:n.logout,user:{}},n}return Object(j.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement(K.Provider,{value:this.state},this.props.children)}}]),t}(o.a.Component),x=(n(213),function(e){return e.condition?e.children:null}),W=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(C.a)(this,Object(P.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.context.login(n.state.username,n.state.password),e.target.reset()},n.state={username:"",password:""},n}return Object(j.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container loginHeader"},o.a.createElement(x,{condition:this.context.loggedIn},o.a.createElement("button",{className:"logout",onClick:this.context.logout},"Log Out")),o.a.createElement(x,{condition:!this.context.loggedIn},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Username:",o.a.createElement("input",{name:"username",onChange:this.handleChange,placeholder:"Enter your name"})),o.a.createElement("button",{className:"login"},"Log In!"),o.a.createElement("br",null),o.a.createElement("label",null,"Password:",o.a.createElement("input",{name:"password",onChange:this.handleChange,placeholder:"Enter your password"}))))))}}]),t}(o.a.Component);W.contextType=K;var U=W;n(214);var H=function(){return o.a.createElement(p,null,o.a.createElement("div",{className:"container"},o.a.createElement(R,null,o.a.createElement(U,null)),o.a.createElement(b,null),o.a.createElement(r,null)))};l.a.render(o.a.createElement((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null))}),null),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.78cdb382.chunk.js.map