(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[46],{1011:function(e,r,t){"use strict";t.r(r);var n=t(4),s=t.n(n),a=t(6),i=t(83),o=t(136),c=t(137),u=t(139),l=t(138),d=t(3),b=t.n(d),m=t(12),j=t(21),p=t(24),h=t(420),g=t.n(h),f=t(30),O=t(146),x=t(147),v=t.p+"static/media/neaf.e52a8b71.png",w=t(52),y=t(51),N=t(379),k=t(393),C=(t(225),t(2)),L=function(e){Object(u.a)(t,e);var r=Object(l.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=r.call(this,e)).onChangeField=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.onSubmit=function(){var e=Object(a.a)(s.a.mark((function e(r){var t,a,i,o,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,t=n.state,a=t.email,i=t.password,o=n.props,c=o.history,u=o.login,g.a.isEmail(a.trim())){e.next=7;break}return n.setState({error:"Please input valid email."}),e.abrupt("return");case 7:return n.setState({error:null}),e.next=10,u({email:a.trim(),password:i.trim()});case 10:c.push("/studio"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n.setState({error:Object(N.d)(e.t0)});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(r){return e.apply(this,arguments)}}(),n.onGoogleLoginSuccess=function(e){(0,n.props.googleLogin)(e)},n.onGoogleLoginFailure=function(e){console.log(e)},n.isDisabled=function(){var e=n.state,r=e.email,t=e.password;return g.a.isEmpty(r.trim())||g.a.isEmpty(t.trim())},n.goToRegister=function(){n.props.history.push("/studio/neaf-register")},n.state={email:"",password:"",rememberMe:!1,error:null},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.body.classList.remove("mobile-responsive")}},{key:"render",value:function(){var e=this.state,r=e.email,t=e.password,n=e.rememberMe,s=e.error,a=this.props.isLoading;return Object(C.jsxs)("div",{className:"auth-page",children:[Object(C.jsx)("img",{className:"auth-header-logo",src:v,alt:""}),Object(C.jsxs)("div",{className:"auth-container",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(C.jsx)("h1",{className:"auth-title mb-0",children:"Login to CurrikiStudio"}),Object(C.jsx)("strong",{children:"OR"}),Object(C.jsx)("button",{type:"button",className:"btn btn-outline-primary text-uppercase",onClick:this.goToRegister,children:"Sign Up"})]}),Object(C.jsx)("h2",{className:"auth-subtitle",children:"Powering the creation of the world\u2019s Most Immersive Learning Experience"}),Object(C.jsx)("h3",{className:"auth-description",children:"CurrikiStudio is changing the way learning experiences are designed, created, and delivered to a new generation of learners."}),Object(C.jsxs)("form",{onSubmit:this.onSubmit,autoComplete:"off",className:"auth-form",children:[Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)(f.a,{icon:"envelope"}),Object(C.jsx)("input",{autoFocus:!0,className:"input-box",name:"email",placeholder:"Email*",required:!0,value:r,onChange:this.onChangeField})]}),Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)(f.a,{icon:"lock"}),Object(C.jsx)("input",{className:"password-box",type:"password",name:"password",placeholder:"Password*",required:!0,value:t,onChange:this.onChangeField})]}),Object(C.jsxs)("div",{className:"form-group remember-me",children:[Object(C.jsxs)("label",{children:[Object(C.jsx)("input",{type:"checkbox",name:"rememberMe",value:n,onChange:this.onChangeField}),"Remember Me"]}),Object(C.jsx)("div",{className:"forgot-password-box",children:Object(C.jsx)(j.b,{to:"/studio/forgot-password",children:"Forgot Password ?"})})]}),Object(C.jsx)(k.a,{error:s}),Object(C.jsx)("div",{className:"form-group",children:Object(C.jsx)("button",{type:"submit",className:"btn btn-primary submit",disabled:a||this.isDisabled(),children:a?Object(C.jsx)("img",{src:w.a,alt:""}):"Login"})})]})]}),Object(C.jsx)("img",{src:O.a,className:"bg1",alt:""}),Object(C.jsx)("img",{src:x.a,className:"bg2",alt:""})]})}}]),t}(b.a.Component);r.default=Object(p.h)(Object(m.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{login:function(r){return e(Object(y.i)(r))},googleLogin:function(r){return e(Object(y.f)(r))}}}))(L))},379:function(e,r,t){"use strict";t.d(r,"d",(function(){return c})),t.d(r,"f",(function(){return u})),t.d(r,"e",(function(){return l})),t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m})),t.d(r,"c",(function(){return j}));var n,s,a=t(385),i=t(387),o=t(386);function c(e){if(e.errors&&!Array.isArray(e.errors)&&"object"===typeof e.errors){var r=[];return Object.keys(e.errors).forEach((function(t){Array.isArray(e.errors[t])&&(r=r.concat(e.errors[t]))})),{errors:r}}return e}var u=function(e){return e&&e.trim()?void 0:"* Required"},l=function(e){return function(r){return r&&r.length>e?"* Must be ".concat(e," characters or less"):void 0}},d=Object(i.b)(n||(n=Object(a.a)(["",""])),o.fadeIn),b=i.a.div(s||(s=Object(a.a)(["\n  animation: 0.8s ",";\n"])),d),m=function(e){return!new RegExp("[^0-9a-zA-Z@ ._-]").test(e)},j=function(e){return!new RegExp("[^a-zA-Z]").test(e)}},393:function(e,r,t){"use strict";t(3);var n=t(2);function s(e){var r=e.error;if(!r)return null;var t="";return"string"===typeof r&&(t=r),"object"===typeof r&&(r.errors&&r.errors.length>0&&(t=r.errors[0]),r.message?t=r.message:r.error&&(t=r.error)),Object(n.jsx)("p",{className:"error-msg alert alert-danger",role:"alert",children:t})}s.defaultProps={error:null},r.a=s}}]);
//# sourceMappingURL=46.c5770d6c.chunk.js.map