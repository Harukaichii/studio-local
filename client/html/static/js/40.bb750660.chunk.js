(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[40],{379:function(r,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"f",(function(){return l})),s.d(e,"e",(function(){return d})),s.d(e,"a",(function(){return j})),s.d(e,"b",(function(){return b})),s.d(e,"c",(function(){return f}));var t,c,n=s(385),a=s(387),o=s(386);function i(r){if(r.errors&&!Array.isArray(r.errors)&&"object"===typeof r.errors){var e=[];return Object.keys(r.errors).forEach((function(s){Array.isArray(r.errors[s])&&(e=e.concat(r.errors[s]))})),{errors:e}}return r}var l=function(r){return r&&r.trim()?void 0:"* Required"},d=function(r){return function(e){return e&&e.length>r?"* Must be ".concat(r," characters or less"):void 0}},u=Object(a.b)(t||(t=Object(n.a)(["",""])),o.fadeIn),j=a.a.div(c||(c=Object(n.a)(["\n  animation: 0.8s ",";\n"])),u),b=function(r){return!new RegExp("[^0-9a-zA-Z@ ._-]").test(r)},f=function(r){return!new RegExp("[^a-zA-Z]").test(r)}},393:function(r,e,s){"use strict";s(3);var t=s(2);function c(r){var e=r.error;if(!e)return null;var s="";return"string"===typeof e&&(s=e),"object"===typeof e&&(e.errors&&e.errors.length>0&&(s=e.errors[0]),e.message?s=e.message:e.error&&(s=e.error)),Object(t.jsx)("p",{className:"error-msg alert alert-danger",role:"alert",children:s})}c.defaultProps={error:null},e.a=c},402:function(r,e,s){"use strict";s(3);var t=s(2);e.a=function(){return Object(t.jsxs)("div",{className:"footer-img-section",children:[Object(t.jsxs)("footer",{className:"footer-all",children:[Object(t.jsx)("a",{target:"_blank",href:"https://www.curriki.org/terms-of-service/",rel:"noopener noreferrer",children:"Terms of Service"}),Object(t.jsx)("a",{target:"_blank",href:"https://www.curriki.org/privacy-policy/",rel:"noopener noreferrer",children:"Privacy Policy"}),Object(t.jsx)("a",{target:"_blank",href:"https://support.curriki.org/",rel:"noopener noreferrer",children:"Help & Support"})]}),Object(t.jsxs)("div",{className:"img-",children:[Object(t.jsx)("span",{children:"Powered by"}),Object(t.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAiCAYAAAADILqZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR+SURBVHgB7VhZqFVVGP68Wd3qXvM2YGVlRdhcD81UZBMZFNFLmFFYCqKIPiiigj6IovgiCIKKLw4PgoLziDiBIzijOHtxnud5/j7/f3H23Xfvc46ec/Uo54OPvffaa+29//lfGyijjIcKj6B4qCFbkF+QzcjT5GWUGIoh8BPkX+R/5HmYsK3Jn2BK2E1eQYmgUIEryD7ke+Ry8kOyilxNXiSfI98id/n1fUdjFIaW5EvkNpigz/h4s8gcnX9NTkUJoAKFYQ95gVwLs24SKmGKeRwlgEIEVoL6gRxNvpJjrqz/MkoAhQistb+ST5L7csxtRF5HCSAthp8iW5HvwBKPkttJmAvPJY+Sx32uLH2CHEx+T36Muslwn8+9W4Gl0Kf9/BDMW6r8+mCWddU+T8nyVBhMEvhzsh0y1r/pbAIT7htYApoFS1YqSz+Sz5KbydnkVb9WwjpLNif34u7wKdnWz7uSv5HfwpTcO8u6P8ivyE3ksDAYF1gf2QYmrBqHceQWF0DZ+B/yDfJ3cis5GVaDd/jad50BsqyUNTfhg4KlDiXck1WbkgfIWnKaj1/354XzbFjn7z8aHYwL/LO/TBhJ7ozc08uHkj39XErZTq5Ecga+6vdlCdXoX2Axr7XzyP9hSu1Fvk92cmH6+5jCqgf5qq8V5keeHxX4M1jjI4wg18Oqxpcwr1uVJvCbftyJusIGqGMaEBtTfOxx/gmrxVq7DBY/NT7vmr9PVpW7Kf4OR54bvqWDrwuWl2IfTfiWG36UQv6FJcZRLmxYp2fWaa7iAj/vxxPIHx/4C2W1vpFxxbViT+6+CBlXlEKmkzNQ/+MFueGgyPw4bkbWKIw6wxQykVyDHKhIedg13Bnk0i1jY68hvdlYgnQsRrqwUcjlu8M8SGE1P4819QQO6bs5Gg5y3zNZ7p9GfqhBJlwUr03zWRQXOPi/4qJFyhptFrrAEk0UlbHrqpT1uax3I8f9sF6KGQLbjak0tkUeiAu8CJk9bEdY0xGgh6pkSRGK2yY+fsmPqrlBSMXW22hYSGAJO8mvP0J9I9RDPGkpYYwh28M+eiCsvEio6sg8NRfL/FwvbQWzsKyvhKfeeiPM1RqhuIh7iJLiQvI7WKnrR55LW5zUS2svq2yr2qlYUwaUsBJczcZwckpk/gpyDizRhe5qPKxMCY+h4aH3yyhKZK2zTcxH+2pEJLT+ZmTL3vIWub20KytUIhPXpxKu4whJR0qOxnG+z0mbpwblLMooPbwI69xyQVZs4+d/I0dJLfQXTzGh7K9eXjE/E9YSfgLbkWkjoIQ0FrZTUn44BtvEqFqEeqxwUFuqXKJdlRofbXCOhJfEBa7GvUeIL2V2tZ0bkMnEyge1fq5t4gTYT8HzflQTIyV08zkqTdrdaV+uBKuK0Q5Wr2+jccrL7wf0o2ABrJQp26pKRFtTCSc3D9ZU1ZA7v5DwrGBlzanTyBTzR3yhUIbXzwdZdylMAXJX/QJWTVePoL8pcudamCVfhylgPzI/I8I9eYCEVmNyAWWUUUYZDyJuAU4t7yAe9dkkAAAAAElFTkSuQmCC",alt:""})]})]})}},633:function(r,e,s){},984:function(r,e,s){"use strict";s.r(e);var t=s(4),c=s.n(t),n=s(6),a=s(83),o=s(0),i=s(27),l=s(3),d=s(12),u=s(420),j=s.n(u),b=s(30),f=s(8),m=s.n(f),p=s(52),h=s(379),w=s(51),x=s(402),v=s(393),O=(s(633),s(2));e.default=Object(d.b)((function(r){return{isLoading:r.auth.isLoading}}),(function(r){return{updatePassword:function(e){return r(Object(w.n)(e))}}}))((function(r){var e=r.isLoading,s=r.updatePassword,t=Object(l.useState)(null),d=Object(i.a)(t,2),u=d[0],f=d[1],w=Object(l.useState)({currentPassword:"",password:"",confirmPassword:""}),A=Object(i.a)(w,2),g=A[0],y=A[1];Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]);var k=function(r){y(Object(o.a)(Object(o.a)({},g),{},Object(a.a)({},r.target.name,r.target.value)))},P=g.currentPassword,N=g.password,q=g.confirmPassword,I=Object(l.useCallback)(function(){var r=Object(n.a)(c.a.mark((function r(e){var t;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,f(null),r.next=5,s({current_password:P.trim(),password:N.trim(),password_confirmation:q.trim()});case 5:t=r.sent,m.a.fire({icon:"success",title:t,showCancelButton:!1,showConfirmButton:!1,timer:1500,allowOutsideClick:!1}),y({currentPassword:"",password:"",confirmPassword:""}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),f(Object(h.d)(r.t0));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}(),[P,N,q,s]),C=j.a.isEmpty(P.trim())||j.a.isEmpty(N.trim())||j.a.isEmpty(q.trim());return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"account-page",children:Object(O.jsx)("div",{className:"content-wrapper",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("h1",{className:"title",children:"Change Password"})})}),Object(O.jsx)("div",{className:"row justify-content-center",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("form",{className:"auth-form",onSubmit:I,autoComplete:"off",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"current-password",children:"Current Password"}),Object(O.jsx)(b.a,{icon:"lock"}),Object(O.jsx)("input",{className:"input-box",type:"password",id:"current-password",name:"currentPassword",placeholder:"Current Password*",required:!0,value:P,onChange:k})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"New Password"}),Object(O.jsx)(b.a,{icon:"lock"}),Object(O.jsx)("input",{className:"input-box",type:"password",id:"password",name:"password",placeholder:"Password*",required:!0,value:N,onChange:k})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"confirm-password",children:"Confirm Password"}),Object(O.jsx)(b.a,{icon:"lock"}),Object(O.jsx)("input",{className:"input-box",type:"password",id:"confirm-password",name:"confirmPassword",placeholder:"Confirm Password*",required:!0,value:q,onChange:k})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)(v.a,{error:u})})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary submit",disabled:e||C,children:e?Object(O.jsx)("img",{src:p.a,alt:""}):"Update Password"})})]})})})]})})}),Object(O.jsx)(x.a,{})]})}))}}]);
//# sourceMappingURL=40.bb750660.chunk.js.map