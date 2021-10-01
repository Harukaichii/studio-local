!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}({"+5IT":function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,form:{}}},methods:{search:function(){this.bus.$emit(this.id+"-refresh",this.form),this.bus.$emit(this.id+"-search-close")},reset:function(){this.form={},this.search()}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"trax-form-with-icons",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.id},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.type},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"text_fields",placeholder:e.lang.trax_xapi_server.common.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"text_fields",placeholder:e.lang.trax_xapi_server.common.description},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),r("div",{staticClass:"trax-form-actions text-right"},[r("button",{staticClass:"btn btn-default btn-link",attrs:{type:"button"},on:{click:e.reset}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.reset)+" ")]),e._v(" "),r("button",{staticClass:"btn btn-primary btn-round",attrs:{type:"submit"}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.search)+" ")])])],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerActivitiesSearch.vue";t.default=o.exports},"2k3z":function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,form:{},object_type_select:[{value:"Agent",name:lang.trax_xapi_server.common.agent},{value:"Group",name:lang.trax_xapi_server.common.group}],id_type_select:[{value:"mbox",name:lang.trax_xapi_server.common.mbox},{value:"mbox_sha1sum",name:lang.trax_xapi_server.common.mbox_sha1sum},{value:"openid",name:lang.trax_xapi_server.common.openid},{value:"account",name:lang.trax_xapi_server.common.account}]}},computed:{idType:function(){return this.form.idType}},watch:{idType:function(){this.form.mbox=null,this.form.openid=null,this.form.account_homepage=null,this.form.account_name=null}},methods:{search:function(){this.bus.$emit(this.id+"-refresh",this.form),this.bus.$emit(this.id+"-search-close")},reset:function(){this.form={},this.search()}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"trax-form-with-icons",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("trax-ui-select",{attrs:{icon:"supervisor_account",unselected:e.lang.trax_xapi_server.common.all_object_types,options:e.object_type_select},model:{value:e.form.objectType,callback:function(t){e.$set(e.form,"objectType",t)},expression:"form.objectType"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"account_box",unselected:e.lang.trax_xapi_server.common.all_id_types,options:e.id_type_select},model:{value:e.form.idType,callback:function(t){e.$set(e.form,"idType",t)},expression:"form.idType"}}),e._v(" "),"mbox"==e.form.idType?r("trax-ui-input",{attrs:{type:"text",icon:"email",placeholder:e.lang.trax_xapi_server.common.mbox},model:{value:e.form.mbox,callback:function(t){e.$set(e.form,"mbox",t)},expression:"form.mbox"}}):e._e(),e._v(" "),"openid"==e.form.idType?r("trax-ui-input",{attrs:{type:"text",icon:"contact_mail",placeholder:e.lang.trax_xapi_server.common.openid},model:{value:e.form.openid,callback:function(t){e.$set(e.form,"openid",t)},expression:"form.openid"}}):e._e(),e._v(" "),"account"==e.form.idType?r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_homepage},model:{value:e.form.account_homepage,callback:function(t){e.$set(e.form,"account_homepage",t)},expression:"form.account_homepage"}}):e._e(),e._v(" "),"account"==e.form.idType?r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_name},model:{value:e.form.account_name,callback:function(t){e.$set(e.form,"account_name",t)},expression:"form.account_name"}}):e._e(),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"text_fields",placeholder:e.lang.trax_xapi_server.common.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("div",{staticClass:"trax-form-actions text-right"},[r("button",{staticClass:"btn btn-default btn-link",attrs:{type:"button"},on:{click:e.reset}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.reset)+" ")]),e._v(" "),r("button",{staticClass:"btn btn-primary btn-round",attrs:{type:"submit"}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.search)+" ")])])],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerAgentsSearch.vue";t.default=o.exports},5:function(e,t,r){e.exports=r("kgiS")},GUHF:function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,titles:[lang.trax_xapi_server.common.stored,lang.trax_xapi_server.common.actor,lang.trax_xapi_server.common.verb,lang.trax_xapi_server.common.object,"",""],actions:[{name:"json",icon:"code",class:"btn-primary",event:"json"}],endpoint:app_url+"trax/ajax/xapi-server/statements",props:[{source:this.renderStored,orderable:!1},{source:this.renderActor,orderable:!1},{source:this.renderVerb,orderable:!1},{source:this.renderObject,orderable:!1},{source:this.renderResult,orderable:!1}]}},created:function(){this.bus.$on(this.id+"-json",this.openJson)},methods:{openJson:function(e){this.bus.$emit(this.id+"-json-open",{data:e.data})},renderStored:function(e,t,r,a){return e=r.data.stored,this.compactTimestamp(e)},renderActor:function(e,t,r,a){var n="person";return"Group"==(e=r.data.actor).objectType&&(n="group"),'<i class="material-icons trax-text-small mr-1">'+n+"</i> "+this.agentLabel(e)},renderVerb:function(e,t,r,a){return(e=r.data.verb).display?this.langString(e.display):this.twoLinesURI(e.id)},renderObject:function(e,t,r,a){var n="play_circle_filled";return"Agent"==(e=r.data.object).objectType?n="person":"Group"==e.objectType?n="group":"SubStatement"!=e.objectType&&"StatementRef"!=e.objectType||(n="call_missed_outgoing"),'<i class="material-icons trax-text-small mr-1">'+n+"</i> "+this.objectLabel(e)},renderResult:function(e,t,r,a){return r.data.result?'<span class="badge badge-info">'+this.lang.trax_xapi_server.common.result+"</span>":""},agentLabel:function(e){return e.name?e.name:e.mbox?e.mbox.substring(7):e.mbox_sha1sum?"**********":e.openid?e.openid:e.account?"<strong>"+e.account.name+"</strong><br>"+e.account.homePage:""},objectLabel:function(e){return"Agent"==e.objectType||"Group"==e.objectType?this.agentLabel(e):"SubStatement"==e.objectType?this.lang.trax_xapi_server.common.sub_statement:"StatementRef"==e.objectType?this.lang.trax_xapi_server.common.statement_ref:e.definition&&e.definition.name?this.langString(e.definition.name):this.compactURI(e.id)},langString:function(e){var t=Object.keys(e);if(0==t.length)return"";for(var r=0;r<t.length;r++)if(-1!==t[r].indexOf(window.locale))return e[t[r]];return e[t[0]]},twoLinesURI:function(e){var t=e.split("/");return"<strong>"+t[t.length-1]+"</strong><br><small>"+t[2]+"</small>"},compactURI:function(e){if(e.length<=35)return e;var t=e.split("/");return(e=t[0]+"//"+t[2]+"/.../"+t[t.length-1]).length<=35?e:e.substring(0,32)+"..."},compactTimestamp:function(e){return"<small>"+(e=(e=moment(e)).format("DD/MM/YYYY H:mm:ss").split(" "))[0]+"<br>"+e[1]+"</small>"}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("trax-ui-ajax-table-with-actions",{attrs:{id:this.id,titles:this.titles,actions:this.actions,props:this.props,bus:this.bus,endpoint:this.endpoint,"order-column":"0","order-dir":"desc",searching:"0"}})},[],!1,null,null,null);o.options.__file="TraxXapiServerStatementsTable.vue";t.default=o.exports},H8Wy:function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,titles:["",lang.trax_xapi_server.common.id,lang.trax_xapi_server.common.name,lang.trax_xapi_server.common.type,lang.trax_xapi_server.common.more,lang.trax_xapi_server.common.ext,""],actions:[{name:"json",icon:"code",class:"btn-primary",event:"json"}],endpoint:app_url+"trax/ajax/xapi-server/activities",props:[{source:"updated_at",visible:!1},{source:this.renderId,orderable:!1},{source:this.renderName,orderable:!1},{source:this.renderType,orderable:!1},{source:this.renderMore,orderable:!1},{source:this.renderExt,orderable:!1}]}},created:function(){this.bus.$on(this.id+"-json",this.openJson)},methods:{openJson:function(e){this.bus.$emit(this.id+"-json-open",{data:e.data})},renderId:function(e,t,r,a){return(e=r.data).id?'<i class="material-icons trax-text-small mr-1">play_circle_filled</i> '+this.compactURI(e.id):""},renderName:function(e,t,r,a){return(e=r.data).definition&&e.definition.name?this.langString(e.definition.name):""},renderType:function(e,t,r,a){return(e=r.data).definition&&e.definition.type?this.twoLinesURI(e.definition.type):""},renderMore:function(e,t,r,a){return(e=r.data).definition&&e.definition.moreInfo?'<a href="'+e.definition.moreInfo+'" class="btn btn-primary btn-link" target="_blank"><i class="material-icons">open_in_new</i></a>':""},renderExt:function(e,t,r,a){return(e=r.data).definition&&e.definition.extensions?Object.keys(e.definition.extensions).length:""},langString:function(e){var t=Object.keys(e);if(0==t.length)return"";for(var r=0;r<t.length;r++)if(-1!==t[r].indexOf(window.locale))return e[t[r]];return e[t[0]]},compactURI:function(e){if(e.length<=35)return e;var t=e.split("/");return(e=t[0]+"//"+t[2]+"/.../"+t[t.length-1]).length<=35?e:e.substring(0,32)+"..."},twoLinesURI:function(e){var t=e.split("/");return"<strong>"+t[t.length-1]+"</strong><br><small>"+t[2]+"</small>"}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("trax-ui-ajax-table-with-actions",{attrs:{id:this.id,titles:this.titles,actions:this.actions,props:this.props,bus:this.bus,endpoint:this.endpoint,"order-column":"0","order-dir":"desc"}})},[],!1,null,null,null);o.options.__file="TraxXapiServerActivitiesTable.vue";t.default=o.exports},JHpL:function(e,t,r){"use strict";r.r(t);var a={props:{id:{default:"trax-xapi-server-statements"}},data:function(){return{lang:lang,card_actions:[{icon:"search",event:this.id+"-search-open"}],bus:new Vue}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("trax-ui-card-plain-header-with-actions",{attrs:{title:e.lang.trax_xapi_server.common.statements,actions:e.card_actions,bus:e.bus}},[r("trax-xapi-server-statements-table",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-ui-modal-default",{attrs:{id:e.id+"-search",bus:e.bus,title:e.lang.trax_xapi_server.common.search,size:"lg"}},[r("trax-xapi-server-statements-search",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-xapi-server-json-modal",{attrs:{id:e.id+"-json",bus:e.bus,title:e.lang.trax_xapi_server.common.statement}})],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerStatements.vue";t.default=o.exports},"KHd+":function(e,t,r){"use strict";function a(e,t,r,a,n,o,s,i){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:e,options:l}}r.d(t,"a",function(){return a})},MIOX:function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,form:{},tabs:[{value:"actor",name:lang.trax_xapi_server.common.actor},{value:"verb",name:lang.trax_xapi_server.common.verb},{value:"object",name:lang.trax_xapi_server.common.object},{value:"result",name:lang.trax_xapi_server.common.result},{value:"context",name:lang.trax_xapi_server.common.context},{value:"others",name:lang.trax_xapi_server.common.others}],actor_object_type_select:[{value:"Agent",name:lang.trax_xapi_server.common.agent},{value:"Group",name:lang.trax_xapi_server.common.group}],object_object_type_select:[{value:"Activity",name:lang.trax_xapi_server.common.activity},{value:"Agent",name:lang.trax_xapi_server.common.agent},{value:"Group",name:lang.trax_xapi_server.common.group},{value:"StatementRef",name:lang.trax_xapi_server.common.statement_ref},{value:"SubStatement",name:lang.trax_xapi_server.common.sub_statement}],result_completion_select:[{value:"completed",name:lang.trax_xapi_server.common.completed},{value:"incomplete",name:lang.trax_xapi_server.common.incomplete},{value:"defined",name:lang.trax_xapi_server.common.defined},{value:"undefined",name:lang.trax_xapi_server.common.undefined}],result_success_select:[{value:"passed",name:lang.trax_xapi_server.common.passed},{value:"failed",name:lang.trax_xapi_server.common.failed},{value:"defined",name:lang.trax_xapi_server.common.defined},{value:"undefined",name:lang.trax_xapi_server.common.undefined}],result_score_type_select:[{value:"raw",name:lang.trax_xapi_server.common.score_raw},{value:"scaled",name:lang.trax_xapi_server.common.score_scaled},{value:"defined",name:lang.trax_xapi_server.common.defined},{value:"undefined",name:lang.trax_xapi_server.common.undefined}],context_activity_relation_select:[{value:"parent",name:lang.trax_xapi_server.common.parent},{value:"grouping",name:lang.trax_xapi_server.common.grouping},{value:"category",name:lang.trax_xapi_server.common.category},{value:"other",name:lang.trax_xapi_server.common.other}],voided_select:[{value:"unvoided",name:lang.trax_xapi_server.common.unvoided},{value:"voided",name:lang.trax_xapi_server.common.voided}],attachments_select:[{value:"with",name:lang.trax_xapi_server.common.with_attachments},{value:"without",name:lang.trax_xapi_server.common.without_attachments}]}},computed:{objectObjectType:function(){if(this.form.object)return this.form.object.objectType},resultScoreType:function(){if(this.form.result)return this.form.result.score_type}},watch:{objectObjectType:function(){this.form.object&&(this.form.object.id=null,this.form.object.type=null,this.form.object.include_context=null,this.form.object.mbox=null,this.form.object.openid=null,this.form.object.account_homepage=null,this.form.object.account_name=null)},resultScoreType:function(){this.form.result&&(this.form.result.score_operator=null,this.form.result.score_value=null)}},created:function(){this.clearData()},methods:{clearData:function(){this.form={actor:{},verb:{},object:{},result:{},context:{}}},resetAll:function(){this.clearData()},resetAllClose:function(){this.clearData(),this.search()},search:function(){this.bus.$emit(this.id+"-refresh",this.form),this.bus.$emit(this.id+"-search-close")}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"trax-form-with-icons",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("trax-ui-vertical-tabs",{attrs:{tabs:e.tabs,"left-col-style":"margin-top:10px;","right-col-style":"margin-top:-10px;"}},[r("template",{slot:"tab-1"},[r("trax-ui-select",{attrs:{icon:"supervisor_account",unselected:e.lang.trax_xapi_server.common.all_object_types,options:e.actor_object_type_select},model:{value:e.form.actor.objectType,callback:function(t){e.$set(e.form.actor,"objectType",t)},expression:"form.actor.objectType"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"email",placeholder:e.lang.trax_xapi_server.common.mbox_just_email},model:{value:e.form.actor.mbox,callback:function(t){e.$set(e.form.actor,"mbox",t)},expression:"form.actor.mbox"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"contact_mail",placeholder:e.lang.trax_xapi_server.common.openid},model:{value:e.form.actor.openid,callback:function(t){e.$set(e.form.actor,"openid",t)},expression:"form.actor.openid"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_homepage},model:{value:e.form.actor.account_homepage,callback:function(t){e.$set(e.form.actor,"account_homepage",t)},expression:"form.actor.account_homepage"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_name},model:{value:e.form.actor.account_name,callback:function(t){e.$set(e.form.actor,"account_name",t)},expression:"form.actor.account_name"}}),e._v(" "),r("trax-ui-checkbox",{attrs:{text:e.lang.trax_xapi_server.common.include_object},model:{value:e.form.actor.include_object,callback:function(t){e.$set(e.form.actor,"include_object",t)},expression:"form.actor.include_object"}})],1),e._v(" "),r("template",{slot:"tab-2"},[r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.id},model:{value:e.form.verb.id,callback:function(t){e.$set(e.form.verb,"id",t)},expression:"form.verb.id"}})],1),e._v(" "),r("template",{slot:"tab-3"},[r("trax-ui-select",{attrs:{icon:"video_library",unselected:e.lang.trax_xapi_server.common.all_object_types,options:e.object_object_type_select},model:{value:e.form.object.objectType,callback:function(t){e.$set(e.form.object,"objectType",t)},expression:"form.object.objectType"}}),e._v(" "),"Activity"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.id},model:{value:e.form.object.id,callback:function(t){e.$set(e.form.object,"id",t)},expression:"form.object.id"}}):e._e(),e._v(" "),"Activity"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.type},model:{value:e.form.object.type,callback:function(t){e.$set(e.form.object,"type",t)},expression:"form.object.type"}}):e._e(),e._v(" "),"Activity"==e.form.object.objectType?r("trax-ui-checkbox",{attrs:{text:e.lang.trax_xapi_server.common.include_context},model:{value:e.form.object.include_context,callback:function(t){e.$set(e.form.object,"include_context",t)},expression:"form.object.include_context"}}):e._e(),e._v(" "),"Agent"==e.form.object.objectType||"Group"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"email",placeholder:e.lang.trax_xapi_server.common.mbox_just_email},model:{value:e.form.object.mbox,callback:function(t){e.$set(e.form.object,"mbox",t)},expression:"form.object.mbox"}}):e._e(),e._v(" "),"Agent"==e.form.object.objectType||"Group"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"contact_mail",placeholder:e.lang.trax_xapi_server.common.openid},model:{value:e.form.object.openid,callback:function(t){e.$set(e.form.object,"openid",t)},expression:"form.object.openid"}}):e._e(),e._v(" "),"Agent"==e.form.object.objectType||"Group"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_homepage},model:{value:e.form.object.account_homepage,callback:function(t){e.$set(e.form.object,"account_homepage",t)},expression:"form.object.account_homepage"}}):e._e(),e._v(" "),"Agent"==e.form.object.objectType||"Group"==e.form.object.objectType?r("trax-ui-input",{attrs:{type:"text",icon:"vpn_key",placeholder:e.lang.trax_xapi_server.common.account_name},model:{value:e.form.object.account_name,callback:function(t){e.$set(e.form.object,"account_name",t)},expression:"form.object.account_name"}}):e._e()],1),e._v(" "),r("template",{slot:"tab-4"},[r("trax-ui-select",{attrs:{icon:"assignment_turned_in",unselected:e.lang.trax_xapi_server.common.completion_all,options:e.result_completion_select},model:{value:e.form.result.completion,callback:function(t){e.$set(e.form.result,"completion",t)},expression:"form.result.completion"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"school",unselected:e.lang.trax_xapi_server.common.success_all,options:e.result_success_select},model:{value:e.form.result.success,callback:function(t){e.$set(e.form.result,"success",t)},expression:"form.result.success"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"grade",unselected:e.lang.trax_xapi_server.common.score_all,options:e.result_score_type_select},model:{value:e.form.result.score_type,callback:function(t){e.$set(e.form.result,"score_type",t)},expression:"form.result.score_type"}}),e._v(" "),"raw"==e.form.result.score_type||"scaled"==e.form.result.score_type?r("trax-ui-input",{attrs:{type:"text",icon:"chevron_right",placeholder:e.lang.trax_xapi_server.common.operator_help},model:{value:e.form.result.score_operator,callback:function(t){e.$set(e.form.result,"score_operator",t)},expression:"form.result.score_operator"}}):e._e(),e._v(" "),"raw"==e.form.result.score_type||"scaled"==e.form.result.score_type?r("trax-ui-input",{attrs:{type:"text",icon:"chevron_right",placeholder:e.lang.trax_xapi_server.common.value},model:{value:e.form.result.score_value,callback:function(t){e.$set(e.form.result,"score_value",t)},expression:"form.result.score_value"}}):e._e()],1),e._v(" "),r("template",{slot:"tab-5"},[r("trax-ui-input",{attrs:{type:"text",icon:"http",placeholder:e.lang.trax_xapi_server.common.activity_id},model:{value:e.form.context.activity_id,callback:function(t){e.$set(e.form.context,"activity_id",t)},expression:"form.context.activity_id"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"link",unselected:e.lang.trax_xapi_server.common.all_relations,options:e.context_activity_relation_select},model:{value:e.form.context.activity_relation,callback:function(t){e.$set(e.form.context,"activity_relation",t)},expression:"form.context.activity_relation"}}),e._v(" "),r("trax-ui-input",{attrs:{type:"text",icon:"input",placeholder:e.lang.trax_xapi_server.common.registration},model:{value:e.form.context.registration_id,callback:function(t){e.$set(e.form.context,"registration_id",t)},expression:"form.context.registration_id"}})],1),e._v(" "),r("template",{slot:"tab-6"},[r("trax-ui-input",{attrs:{type:"text",icon:"local_offer",placeholder:e.lang.trax_xapi_server.common.statement_id},model:{value:e.form.statementId,callback:function(t){e.$set(e.form,"statementId",t)},expression:"form.statementId"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"delete",unselected:e.lang.trax_xapi_server.common.all_statements,options:e.voided_select},model:{value:e.form.voided,callback:function(t){e.$set(e.form,"voided",t)},expression:"form.voided"}}),e._v(" "),r("trax-ui-select",{attrs:{icon:"attachment",unselected:e.lang.trax_xapi_server.common.all_statements,options:e.attachments_select},model:{value:e.form.attachments,callback:function(t){e.$set(e.form,"attachments",t)},expression:"form.attachments"}}),e._v(" "),r("trax-ui-datetime",{attrs:{icon:"today",placeholder:e.lang.trax_xapi_server.common.timestamp_since,iso:"1"},model:{value:e.form.timestamp_since,callback:function(t){e.$set(e.form,"timestamp_since",t)},expression:"form.timestamp_since"}}),e._v(" "),r("trax-ui-datetime",{attrs:{icon:"event",placeholder:e.lang.trax_xapi_server.common.to,iso:"1"},model:{value:e.form.timestamp_until,callback:function(t){e.$set(e.form,"timestamp_until",t)},expression:"form.timestamp_until"}}),e._v(" "),r("trax-ui-datetime",{attrs:{icon:"today",placeholder:e.lang.trax_xapi_server.common.stored_since,iso:"1"},model:{value:e.form.stored_since,callback:function(t){e.$set(e.form,"stored_since",t)},expression:"form.stored_since"}}),e._v(" "),r("trax-ui-datetime",{attrs:{icon:"event",placeholder:e.lang.trax_xapi_server.common.to,iso:"1"},model:{value:e.form.stored_until,callback:function(t){e.$set(e.form,"stored_until",t)},expression:"form.stored_until"}})],1)],2),e._v(" "),r("div",{staticClass:"trax-form-actions text-right"},[r("button",{staticClass:"btn btn-default btn-link",attrs:{type:"button"},on:{click:e.resetAll}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.reset_all)+" ")]),e._v(" "),r("button",{staticClass:"btn btn-default btn-link",attrs:{type:"button"},on:{click:e.resetAllClose}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.reset_all_and_close)+" ")]),e._v(" "),r("button",{staticClass:"btn btn-primary btn-round",attrs:{type:"submit"}},[e._v(" "+e._s(e.lang.trax_xapi_server.common.search)+" ")])])],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerStatementsSearch.vue";t.default=o.exports},Opnh:function(e,t,r){"use strict";r.r(t);var a={props:{id:null,bus:null},data:function(){return{lang:lang,titles:["",lang.trax_xapi_server.common.id,lang.trax_xapi_server.common.name,lang.trax_xapi_server.common.type,lang.trax_xapi_server.common.members,""],actions:[{name:"json",icon:"code",class:"btn-primary",event:"json"}],endpoint:app_url+"trax/ajax/xapi-server/agents",props:[{source:"updated_at",visible:!1},{source:this.renderId,orderable:!1},{source:this.renderName,orderable:!1},{source:"data.objectType",orderable:!1},{source:this.renderMembers,orderable:!1}]}},created:function(){this.bus.$on(this.id+"-json",this.openJson)},methods:{openJson:function(e){this.bus.$emit(this.id+"-json-open",{data:e.data})},renderId:function(e,t,r,a){var n="";return(e=r.data).mbox?n="email":e.mbox_sha1sum?n="email":e.openid?n="contact_mail":e.account&&(n="vpn_key"),n='<i class="material-icons trax-text-small mr-1">'+n+"</i>",e.mbox?n+" "+e.mbox.substring(7):e.mbox_sha1sum?n+" **********":e.openid?n+" "+e.openid:e.account?n+" <strong>"+e.account.name+"</strong><br><small>"+e.account.homePage+"</small>":void 0},renderName:function(e,t,r,a){return(e=r.data).name?e.name:""},renderMembers:function(e,t,r,a){return(e=r.data).member?e.member.length:""}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("trax-ui-ajax-table-with-actions",{attrs:{id:this.id,titles:this.titles,actions:this.actions,props:this.props,bus:this.bus,endpoint:this.endpoint,"order-column":"0","order-dir":"desc"}})},[],!1,null,null,null);o.options.__file="TraxXapiServerAgentsTable.vue";t.default=o.exports},Sq0z:function(e,t,r){"use strict";r.r(t);var a={props:{id:{default:"trax-xapi-server-agents"}},data:function(){return{lang:lang,card_actions:[{icon:"search",event:this.id+"-search-open"}],bus:new Vue}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("trax-ui-card-plain-header-with-actions",{attrs:{title:e.lang.trax_xapi_server.common.agents,actions:e.card_actions,bus:e.bus}},[r("trax-xapi-server-agents-table",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-ui-modal-default",{attrs:{id:e.id+"-search",bus:e.bus,title:e.lang.trax_xapi_server.common.search}},[r("trax-xapi-server-agents-search",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-xapi-server-json-modal",{attrs:{id:e.id+"-json",bus:e.bus,title:e.lang.trax_xapi_server.common.agent}})],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerAgents.vue";t.default=o.exports},"XM/n":function(e,t,r){"use strict";r.r(t);var a={props:{id:null,title:{default:lang.trax_xapi_server.common.json},bus:null},data:function(){return{lang:lang,json:""}},created:function(){this.bus.$on(this.id+"-open",this.setData)},methods:{setData:function(e){this.json=this.jsonHighlight(e.data)},jsonHighlight:function(e){return(e=(e=JSON.stringify(e,void 0,4)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("trax-ui-modal-default",{attrs:{id:this.id,bus:this.bus,title:this.title,size:"lg"}},[t("pre",{staticClass:"json",domProps:{innerHTML:this._s(this.json)}})])},[],!1,null,null,null);o.options.__file="TraxXapiServerJsonModal.vue";t.default=o.exports},dDIN:function(e,t,r){"use strict";r.r(t);var a={props:{debug:null},data:function(){return{lang:lang,user:user,endpoint_clear_all:app_url+"trax/ajax/xapi-server/management/clear-all"}},computed:{deletePermission:function(){return this.user.admin||this.user.permissions.xapi_server_delete_xapi_data}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("trax-ui-card",{staticClass:"pt-3"},[e.deletePermission?r("div",[r("h4",{staticClass:"font-weight-bold mb-2"},[e._v(" "+e._s(e.lang.trax_xapi_server.common.clear_data_title)+" ")]),e._v(" "),r("p",{staticClass:"mb-2"},[e._v(" "+e._s(e.lang.trax_xapi_server.common.clear_data_desc)+" ")]),e._v(" "),r("p",{staticClass:"mb-4"},[1==e.debug?r("trax-ui-ajax-button",{attrs:{label:e.lang.trax_xapi_server.common.clear_data,endpoint:e.endpoint_clear_all,"confirm-title":e.lang.trax_xapi_server.common.clear_data_title}}):r("span",{staticClass:"text-danger"},[e._v(e._s(e.lang.trax_xapi_server.common.debug_setting))])],1)]):e._e()])},[],!1,null,null,null);o.options.__file="TraxXapiServerSettings.vue";t.default=o.exports},kgiS:function(e,t,r){Vue.component("trax-xapi-server-home-get-started",r("my9O").default),Vue.component("trax-xapi-server-home-resources",r("zpwR").default),Vue.component("trax-xapi-server-statements",r("JHpL").default),Vue.component("trax-xapi-server-statements-table",r("GUHF").default),Vue.component("trax-xapi-server-statements-search",r("MIOX").default),Vue.component("trax-xapi-server-activities",r("xpyE").default),Vue.component("trax-xapi-server-activities-table",r("H8Wy").default),Vue.component("trax-xapi-server-activities-search",r("+5IT").default),Vue.component("trax-xapi-server-agents",r("Sq0z").default),Vue.component("trax-xapi-server-agents-table",r("Opnh").default),Vue.component("trax-xapi-server-agents-search",r("2k3z").default),Vue.component("trax-xapi-server-settings",r("dDIN").default),Vue.component("trax-xapi-server-json-modal",r("XM/n").default)},my9O:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{lang:lang}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("trax-ui-card",{staticClass:"trax-typo",attrs:{title:e.lang.trax_xapi_server.home.get_started,"title-bold":"1"}},[r("ol",[r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.get_started_1)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.get_started_2)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.get_started_3)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.get_started_4)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.get_started_5)}})])])},[],!1,null,null,null);o.options.__file="TraxXapiServerHomeGetStarted.vue";t.default=o.exports},xpyE:function(e,t,r){"use strict";r.r(t);var a={props:{id:{default:"trax-xapi-server-activities"}},data:function(){return{lang:lang,card_actions:[{icon:"search",event:this.id+"-search-open"}],bus:new Vue}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("trax-ui-card-plain-header-with-actions",{attrs:{title:e.lang.trax_xapi_server.common.activities,actions:e.card_actions,bus:e.bus}},[r("trax-xapi-server-activities-table",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-ui-modal-default",{attrs:{id:e.id+"-search",bus:e.bus,title:e.lang.trax_xapi_server.common.search}},[r("trax-xapi-server-activities-search",{attrs:{id:e.id,bus:e.bus}})],1),e._v(" "),r("trax-xapi-server-json-modal",{attrs:{id:e.id+"-json",bus:e.bus,title:e.lang.trax_xapi_server.common.activity}})],1)},[],!1,null,null,null);o.options.__file="TraxXapiServerActivities.vue";t.default=o.exports},zpwR:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{lang:lang}}},n=r("KHd+"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("trax-ui-card",{staticClass:"trax-typo",attrs:{title:e.lang.trax_xapi_server.home.resources,"title-bold":"1"}},[r("ul",[r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.resources_1)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.resources_2)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.resources_3)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.resources_4)}}),e._v(" "),r("li",{domProps:{innerHTML:e._s(e.lang.trax_xapi_server.home.resources_5)}})])])},[],!1,null,null,null);o.options.__file="TraxXapiServerHomeResources.vue";t.default=o.exports}});