(this.webpackJsonpustodo=this.webpackJsonpustodo||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(30),o=n.n(c),s=n(3),i=n(17),l=n(4),u=n(22),d=n(23),j=n(13),b=n.n(j),h="https://recruitment.ultimate.systems/auth/local",f=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"login",value:function(e,t){return b.a.post(h,{identifier:e,password:t}).then((function(e){e.data.jwt&&localStorage.setItem("user",JSON.stringify(e.data.jwt))}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return b.a.post(h+"/register",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),O=n(0);var m=function(e){return Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h1",{children:"ToDo-List"}),e.user?Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAADoklEQVR4nO3d0XXiMBAF0FcCJbgESkgHmw6gg2wHSQn5yTECsqQDl+ASKMElUMLsBwm7IuDYQtIbmXnnzJ/h2HOxwbJsAIvFYrFYLBaLxWIpNNJgJu94lg32soIUUJ1s0IrDQmpU7P5FjfzBQhwOCpocjvOOZ3Yfo0QcHhU0NE5tsC96b5EalazQ0RsZe29pMGP3NihS40VBA1PsKS27t0ERV8wX+PhyeGT3d3ToTbO9xA/pk3uQDVqp8SA1qqB6w1xqLOWn778aD+wejwr9U3zjT1WpUfX+XHf4HatXWUIHWUFki92N2/Ca6r2zh44R4ZP8eegykMggh+BtMJBEtcY8aBsMJFHVWAZtg4EYSLLQEQzEDx3BQPzQEQzEDx2BCCJrzL+Gb0L7Fz10BAKI1Khkg9ZbTsvVRjoCA+TagKQGFDpCZhBZY967DmwUOkIckIer7+mwGLysBhQ6QgQQ4Oql6O7Ccj+DMFHoCJFAgNOhq5UVWqnxcmmiw2AQFgodISLIoO0dA8JAoSNoB8mNQkcoASQnCh2hFJBcKHSEkkByoNARSgNJjUJHKBEkJQodIRAkeIJdzJn+KVDoCCNBZIsnVfexxEahb9AIkN5BRGbFnB1J35gxIHpn6n8bM7sXED2HqrO6T5Dzq3xaymF/nyCxfrLGB1n0rfdkQYDTDaotfV3/rfNLNIwSQW7e3ph7WWwMwEBUYQAGogoDMBBVGICBqMIADEQVBjAdkNOTjFboxOEgW+wuzdkNAsmFAUwI5PJZ/LdnnowGyYkBTAOkt8lnDR0FkhsDmAzI8Lm9Q0EYGICBqMIA7hKkUosB3B8IAIhDoxIDuFOQBjOp8XFaxuGQ4xxoUOgIBJDT644wVWjvkoSOQARRGTqCgfihIxiIHzqCgfihIxiIHzqCgfihIxiIHzqCgfihIxiIHzpCHJDrz683EAJI39OtNQwYjgkd4QYQaTCTLXY/vO+vRK1LEzrC/+Wwlw3agbUfcHtCvPs2coWOkLZe2f0dHQVNS1WduqH1IVHQuDRV2t9UfEXzbWJBpenqX0jU3iYWVp28hT0/Xk16T6rKqTbqbWXMSIOZmsPWcT7ucnA5PBb793h9UXMzZcnH/tiRN8yF/QeTBuLnc1rMkvbEBAO5ns8pl09ZcQxkWLLhlHoyx0xCnPIGArUlKs5UziO05CYch4a9/pPOKJwaH5M8udOaE85xeONrRKCTFXb2JW6xWCwWi8VisRSbv8/sa34a6XBrAAAAAElFTkSuQmCC",onClick:function(){f.logout(),window.location.reload()},alt:"Logout Button"}):""]})};var p=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),b=j[0],h=j[1];return Object(O.jsxs)("div",{className:"loginForm",children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.login(n,l).then((function(e){window.location.reload()}),(function(e){console.error(e),h("Wrong credentials or network problems.")}))},children:[Object(O.jsx)("input",{id:"user",type:"text",placeholder:"Email or Username",value:n,onChange:function(e){return r(e.target.value)},maxLength:"40",required:!0}),Object(O.jsx)("input",{id:"pass",type:"password",placeholder:"Password",value:l,onChange:function(e){return u(e.target.value)},maxLength:"40",required:!0}),Object(O.jsx)("input",{id:"submitBtn",type:"submit",value:"Login"})]}),Object(O.jsx)("p",{children:"or"}),Object(O.jsx)(i.b,{id:"link",to:"/register",children:"create an account"}),b?Object(O.jsx)("p",{children:b}):""]})},g=n(61);var x=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(a.useState)(""),j=Object(s.a)(d,2),b=j[0],h=j[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),x=p[0],v=p[1],k=Object(a.useState)(!1),A=Object(s.a)(k,2),y=A[0],D=A[1],C=Object(a.useState)(""),w=Object(s.a)(C,2),B=w[0],S=w[1];return Object(O.jsxs)("div",{className:"registerForm",children:[Object(O.jsx)(i.b,{id:"link",to:"/",children:"\u2190"}),Object(O.jsx)("h1",{children:"Create a new account"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.length<3||n.length>20?S("The username must be between 3 and 20 characters."):Object(g.isEmail)(l)?b.length<6||b.length>40?S("The password must be between 6 and 40 characters."):b===x?f.register(n,l,b).then((function(e){console.log(e),D(!0)}),(function(e){console.error(e),S("Error :( User already exists or there is some network problem.")})):S("Passwords do not match."):S("Please enter a valid email address.")},children:[Object(O.jsx)("input",{id:"username",type:"text",placeholder:"Username",value:n,onChange:function(e){return r(e.target.value)},maxLength:"20",required:!0}),Object(O.jsx)("input",{id:"email",type:"text",placeholder:"Email",value:l,onChange:function(e){return u(e.target.value)},required:!0}),Object(O.jsx)("input",{id:"pass",type:"password",placeholder:"Password",value:b,onChange:function(e){return h(e.target.value)},maxLength:"40",required:!0}),Object(O.jsx)("input",{id:"confirmPass",type:"password",placeholder:"Confirm password",value:x,onChange:function(e){return v(e.target.value)},maxLength:"40",required:!0}),Object(O.jsx)("input",{id:"submitBtn",type:"submit",value:"Create"})]}),y?Object(O.jsx)("p",{children:"Account has been created. You can proceed to the login section! :)"}):B?Object(O.jsx)("p",{children:B}):""]})},v=n(6),k=n(7);function A(){var e=JSON.parse(localStorage.getItem("user"));return e?{Authorization:"Bearer ".concat(e)}:{}}var y="https://recruitment.ultimate.systems/to-do-lists",D=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"getTodos",value:function(){return b.a.get(y,{headers:A()})}},{key:"getList",value:function(e){return b.a.get(y+"/".concat(e),{headers:A()})}},{key:"addTodos",value:function(e,t){return b.a.post(y,{name:e,task:Object(k.a)(t)},{headers:A()})}},{key:"updateList",value:function(e,t,n){return b.a.put(y+"/".concat(e),{name:t,task:Object(k.a)(n)},{headers:A()})}},{key:"deleteTodo",value:function(e){return b.a.delete(y+"/".concat(e),{headers:A()})}}]),e}()),C=n(18),w=n.n(C),B=n(24),S=n.n(B),E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAKUlEQVRIiWNgYGD4T2NMPwuoDUYtGLVg1IJRC0YtGLVg1ALyLBiarQoAUISvURmuQswAAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA9ElEQVRIib2VURWDMAxFnwQkVMIkIGEONifDwXCABKQgoRKQ8PZRWLuShB4oI3+0vbdJWgB4cfxPUPMhnhhAuCsExPBlzrUFKZwgfE0B8drUv68lkOC+Vg+Ih3B2Zrgap4i4La3MI0oPC0IBJHi3jJ8QBLgX4GMy56BAh3sQjSzwWK/FewfeGHCXzc0yiPWcNpMjfBLgBNEK8zcZ6Duy4Z2SbSLoxIWxpsSowHujnImg+SlRGhOkW7puwO7XpgdyHhpc6pMpCC+1OudxN+GGQDvj+00tEoQB7ftSDjcFUZJnUg4XBXk4hB/GAKIt7IwUJ5YWxQcIQ3jU2EypUQAAAABJRU5ErkJggg==",L={content:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"rgb(15, 15, 15)",padding:"1rem",borderRadius:"5px",boxShadow:"0 3rem 5rem rgba(0, 0, 0, 0.3)",textAlign:"center",width:"auto",height:"80%",background:"#2D2D2D",maxHeight:"60vh !important",maxWidth:"80%"}},U={width:"95%",height:"auto",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"solid orange 1px",marginBottom:"0.6rem"};function T(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(s.a)(d,2),b=j[0],h=j[1],f=Object(a.useState)(""),m=Object(s.a)(f,2),p=m[0],g=m[1],x=Object(a.useState)([]),v=Object(s.a)(x,2),A=v[0],y=v[1],C=Object(a.useState)(""),B=Object(s.a)(C,2),T=B[0],Q=B[1],N=S()();function J(){c(!1),document.getElementById("root").style.filter="blur(0px)"}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{id:"newList",onClick:function(){c(!0),document.getElementById("root").style.filter="blur(5px)"},children:[Object(O.jsx)("div",{id:"hor"}),Object(O.jsx)("div",{id:"ver"})]}),Object(O.jsx)(w.a,{isOpen:r,onAfterOpen:function(){},onRequestClose:J,style:L,children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("input",{type:"text",placeholder:"List name",onChange:function(e){return u(e.target.value)},id:"listName",required:!0}),Object(O.jsx)("hr",{}),A.length>0?A.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{style:{display:"none"},type:"checkbox",id:"task-".concat(t),onChange:function(){e.isDone=!e.isDone,N()},defaultChecked:e.isDone}),Object(O.jsx)("label",{for:"task-".concat(t),children:Object(O.jsx)("img",{style:{transform:"scale(0.7)",marginTop:"0.1rem",marginLeft:"0.1rem"},src:e.isDone?I:E,alt:"box"})}),Object(O.jsx)("input",{id:"taskName",type:"text",placeholder:"Task name",onChange:function(t){return e.name=t.target.value},defaultValue:e.name})]}),Object(O.jsx)("button",{id:"remove",onClick:function(){return function(e){var t=A.filter((function(t){return t.name!==e}));y(Object(k.a)(t))}(e.name)},children:"REMOVE"})]},t)})):"",Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:p,isDone:b};y((function(e){return[].concat(Object(k.a)(e),[t])})),g(""),h(!1)},children:[Object(O.jsx)("input",{style:{display:"none"},type:"checkbox",id:"finished",value:b,onChange:function(e){return h(e.target.checked)},checked:b}),Object(O.jsx)("label",{for:"finished",children:Object(O.jsx)("img",{style:{transform:"scale(0.7)",marginTop:"0.1rem",marginLeft:"0.1rem"},src:b?I:E,alt:"box"})}),Object(O.jsx)("input",{id:"taskName",type:"text",placeholder:"Task name",value:p,style:U,onChange:function(e){return g(e.target.value)},required:!0}),Object(O.jsx)("input",{id:"add",type:"submit",value:"ADD"})]}),T?Object(O.jsx)("p",{children:T}):"",Object(O.jsx)("button",{id:"cancel",onClick:function(){return J()},children:"CANCEL"}),Object(O.jsx)("button",{id:"save",onClick:function(t){if(t.preventDefault(),l){var n=new Date;D.addTodos(l,A,n).then((function(t){e.refreshList(),J()}),(function(e){console.error(e)}))}else Q("Please enter the name of the list")},children:"SAVE"})]})})]})}w.a.setAppElement("#root");var Q={content:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"rgb(15, 15, 15)",padding:"1rem",borderRadius:"5px",boxShadow:"0 3rem 5rem rgba(0, 0, 0, 0.3)",textAlign:"center",width:"50%",height:"80%",background:"#2D2D2D",maxHeight:"60vh !important",maxWidth:"80%"}},N={width:"95%",height:"auto",borderTop:"none",borderLeft:"none",borderRight:"none",borderBottom:"solid orange 1px",marginBottom:"0.6rem"};function J(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(s.a)(d,2),b=j[0],h=j[1],f=Object(a.useState)(""),m=Object(s.a)(f,2),p=m[0],g=m[1],x=Object(a.useState)([]),v=Object(s.a)(x,2),A=v[0],y=v[1],C=Object(a.useState)(""),B=Object(s.a)(C,2),L=B[0],U=B[1],T=S()(),J=e.id;function R(){c(!1),document.getElementById("root").style.filter="blur(0px)"}return Object(a.useEffect)((function(){D.getList(J).then((function(e){u(e.data.name),y(Object(k.a)(e.data.task))}),(function(e){console.error(e)}))}),[J]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{id:"viewButton",onClick:function(){c(!0),document.getElementById("root").style.filter="blur(5px)"},children:"SHOW LIST"}),Object(O.jsx)(w.a,{isOpen:r,onAfterOpen:function(){},onRequestClose:R,style:Q,children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("input",{type:"text",id:"listName",placeholder:"List name",onChange:function(e){return u(e.target.value)},value:l,required:!0}),Object(O.jsx)("hr",{}),A.length>0?A.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{style:{display:"none"},type:"checkbox",id:"task-".concat(t),onChange:function(){e.isDone=!e.isDone,T()},defaultChecked:e.isDone}),Object(O.jsx)("label",{for:"task-".concat(t),children:Object(O.jsx)("img",{style:{transform:"scale(0.7)",marginTop:"0.1rem",marginLeft:"0.1rem"},src:e.isDone?I:E,alt:"box"})}),Object(O.jsx)("input",{type:"text",style:N,placeholder:"Task name",onChange:function(t){return e.name=t.target.value},defaultValue:e.name})]}),Object(O.jsx)("button",{id:"remove",onClick:function(){return function(e){var t=A.filter((function(t,n){return n!==e}));y(Object(k.a)(t))}(t)},children:"REMOVE"})]},t)})):"",Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:p,isDone:b};y((function(e){return[].concat(Object(k.a)(e),[t])})),g(""),h(!1)},children:[Object(O.jsx)("input",{style:{display:"none"},type:"checkbox",id:"finished",value:b,onChange:function(e){return h(e.target.checked)},checked:b}),Object(O.jsx)("label",{for:"finished",children:Object(O.jsx)("img",{style:{transform:"scale(0.7)",marginTop:"0.1rem",marginLeft:"0.1rem"},src:b?I:E,alt:"box"})}),Object(O.jsx)("input",{type:"text",placeholder:"Task name",value:p,style:N,onChange:function(e){return g(e.target.value)},required:!0}),Object(O.jsx)("input",{id:"add",type:"submit",value:"ADD"})]}),L?Object(O.jsx)("p",{children:L}):"",Object(O.jsx)("button",{id:"cancel",onClick:function(){return R()},children:"CANCEL"}),Object(O.jsx)("button",{id:"save",onClick:function(t){t.preventDefault(),l?D.updateList(J,l,A).then((function(t){e.refreshList(),R()}),(function(e){console.error(e),U("Something went wrong :(")})):U("Please enter the name of the list")},children:"SAVE"})]})})]})}w.a.setAppElement("#root");var R=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),j=d[0],b=d[1],h=function(e){e.target.value.length||l([]);var t=n.filter((function(t){var n=t.name.toLowerCase(),a=e.target.value.toLowerCase();return n.includes(a)}));l(Object(k.a)(t))},f=function(e){D.deleteTodo(e).then((function(e){m()}),(function(e){console.error(e)}))},m=function(){D.getTodos().then((function(e){r(Object(k.a)(e.data))}),(function(e){console.error(e)}))};return Object(a.useEffect)((function(){m()}),[]),Object(a.useEffect)((function(){return function(){if(i.length>0){var e=Object(k.a)(i);switch(j){case"nameDes":e.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));break;case"nameAsc":e.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?1:n>a?-1:0}));break;case"dateDes":e.sort((function(e,t){return new Date(e.created_at)-new Date(t.created_at)}));break;case"dateAsc":e.sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)}));break;case"allDes":e.sort((function(e,t){return t.task.length-e.task.length}));break;case"allAsc":e.sort((function(e,t){return e.task.length-t.task.length}));break;case"completedDes":e.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone&&a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone&&r++}catch(i){s.e(i)}finally{s.f()}return r-a}));break;case"completedAsc":e.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone&&a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone&&r++}catch(i){s.e(i)}finally{s.f()}return a-r}));break;case"uncompletedDes":e.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone||a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone||r++}catch(i){s.e(i)}finally{s.f()}return r-a}));break;case"uncompletedAsc":e.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone||a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone||r++}catch(i){s.e(i)}finally{s.f()}return a-r}))}l(Object(k.a)(e))}else{var t=Object(k.a)(n);switch(j){case"":m();break;case"nameDes":t.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));break;case"nameAsc":t.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?1:n>a?-1:0}));break;case"dateDes":t.sort((function(e,t){return new Date(e.created_at)-new Date(t.created_at)}));break;case"dateAsc":t.sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)}));break;case"allDes":t.sort((function(e,t){return t.task.length-e.task.length}));break;case"allAsc":t.sort((function(e,t){return e.task.length-t.task.length}));break;case"completedDes":t.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone&&a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone&&r++}catch(i){s.e(i)}finally{s.f()}return r-a}));break;case"completedAsc":t.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone&&a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone&&r++}catch(i){s.e(i)}finally{s.f()}return a-r}));break;case"uncompletedDes":t.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone||a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone||r++}catch(i){s.e(i)}finally{s.f()}return r-a}));break;case"uncompletedAsc":t.sort((function(e,t){var n,a=0,r=0,c=Object(v.a)(e.task);try{for(c.s();!(n=c.n()).done;)n.value.isDone||a++}catch(i){c.e(i)}finally{c.f()}var o,s=Object(v.a)(t.task);try{for(s.s();!(o=s.n()).done;)o.value.isDone||r++}catch(i){s.e(i)}finally{s.f()}return a-r}))}r(Object(k.a)(t))}}()}),[j]),Object(O.jsxs)("div",{className:"todoForm",children:[Object(O.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return h(e)},onKeyUp:function(e){return h(e)}}),Object(O.jsxs)("select",{name:"sortBy",id:"sortList",onChange:function(e){return b(e.target.value)},value:j,children:[Object(O.jsx)("option",{value:"",children:"Sort by"}),Object(O.jsx)("option",{value:"nameDes",children:"Name \u25bc"}),Object(O.jsx)("option",{value:"nameAsc",children:"Name \u25b2"}),Object(O.jsx)("option",{value:"dateDes",children:"Date \u25bc"}),Object(O.jsx)("option",{value:"dateAsc",children:"Date \u25b2"}),Object(O.jsx)("option",{value:"allDes",children:"All Tasks \u25bc"}),Object(O.jsx)("option",{value:"allAsc",children:"All Tasks \u25b2"}),Object(O.jsx)("option",{value:"completedDes",children:"Completed Tasks \u25bc"}),Object(O.jsx)("option",{value:"completedAsc",children:"Completed Tasks \u25b2"}),Object(O.jsx)("option",{value:"uncompletedDes",children:"Uncompleted Tasks \u25bc"}),Object(O.jsx)("option",{value:"uncompletedAsc",children:"Uncompleted Tasks \u25b2"})]}),i.length>0?i.map((function(e,t){var n,a=new Intl.DateTimeFormat("en-GB").format(new Date(e.published_at)).split("/").join("-"),r=0,c=e.id,o=Object(v.a)(e.task);try{for(o.s();!(n=o.n()).done;){n.value.isDone&&r++}}catch(s){o.e(s)}finally{o.f()}return Object(O.jsxs)("div",{className:"todo",children:[Object(O.jsx)("button",{id:"deleteButton",onClick:function(){return f(c)},children:"DELETE"}),Object(O.jsx)(J,{refreshList:m,id:e.id}),Object(O.jsx)("span",{id:"todoName",children:e.name}),Object(O.jsxs)("em",{id:"createdAt",children:["Created at: ",a]}),Object(O.jsxs)("span",{id:"tasksCount",children:["Completed: ",r," Uncompleted: ",e.task.length-r," All:"," ",e.task.length]})]},t)})):n.length<1?Object(O.jsx)("p",{children:"There are no To-Do lists"}):n.map((function(e,t){var n,a=new Intl.DateTimeFormat("en-GB").format(new Date(e.published_at)).split("/").join("-"),r=0,c=e.id,o=Object(v.a)(e.task);try{for(o.s();!(n=o.n()).done;){n.value.isDone&&r++}}catch(s){o.e(s)}finally{o.f()}return Object(O.jsxs)("div",{className:"todo",children:[Object(O.jsx)(J,{refreshList:m,id:e.id}),Object(O.jsx)("button",{onClick:function(){return f(c)},children:"DELETE"}),Object(O.jsx)("span",{id:"todoName",children:e.name}),Object(O.jsxs)("em",{id:"createdAt",children:["Created at: ",a]}),Object(O.jsxs)("span",{id:"tasksCount",children:["Completed: ",r," Uncompleted: ",e.task.length-r," All:"," ",e.task.length]})]},t)})),Object(O.jsx)(T,{refreshList:m})]})};n(177);function V(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){f.getCurrentUser()&&r(!0)}),[n]),Object(O.jsxs)(i.a,{children:[Object(O.jsx)(m,{user:n}),Object(O.jsx)("div",{children:n?Object(O.jsx)(R,{}):Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/register",children:Object(O.jsx)(x,{})}),Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(p,{})})]})})]})}o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.6142ff9b.chunk.js.map