(this.webpackJsonpperformance=this.webpackJsonpperformance||[]).push([[4],{117:function(e,r,a){"use strict";a.r(r),a.d(r,"ChangePasswordPage",(function(){return l}));var t=a(1),n=a.n(t),s=a(2),o=a(3),c=a(4),i=a(6),u=a(5),d=a(0),w=a(15),m=a(16),l=function(e){Object(i.a)(a,e);var r=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=r.call.apply(r,[this].concat(c))).schema=[{name:"orgPassword",type:"string",maxLength:60,required:!0},{name:"newPassword",type:"string",maxLength:60,required:!0},{name:"newPassword1",type:"string",maxLength:60,required:!0},{name:"submit",type:"submit"}],e.uiSchema={items:{orgPassword:{widget:"password",label:"\u539f\u5bc6\u7801",placeholder:"\u8f93\u5165\u539f\u6765\u7684\u5bc6\u7801"},newPassword:{widget:"password",label:"\u65b0\u5bc6\u7801",placeholder:"\u8f93\u5165\u65b0\u8bbe\u7684\u5bc6\u7801"},newPassword1:{widget:"password",label:"\u786e\u8ba4\u5bc6\u7801",placeholder:"\u518d\u6b21\u8f93\u5165\u65b0\u8bbe\u5bc6\u7801"},submit:{widget:"button",label:"\u63d0\u4ea4",className:"btn btn-primary"}}},e.onSubmit=function(){var e=Object(s.a)(n.a.mark((function e(r,a){var t,s,o,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.data,s=t.orgPassword,o=t.newPassword,c=t.newPassword1,o===c){e.next=4;break}return a.setError("newPassword1","\u65b0\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),e.abrupt("return");case 4:return i=new m.c("tv/",void 0),e.next=7,i.changePassword({orgPassword:s,newPassword:o});case 7:if(!1!==e.sent){e.next=11;break}return a.setError("orgPassword","\u539f\u5bc6\u7801\u9519\u8bef"),e.abrupt("return");case 11:return w.nav.replace(d.createElement(w.Page,{header:"\u4fee\u6539\u5bc6\u7801",back:"close"},d.createElement("div",{className:"m-3  text-success"},"\u5bc6\u7801\u4fee\u6539\u6210\u529f\uff01"))),e.abrupt("return");case 13:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}(),e}return Object(c.a)(a,[{key:"render",value:function(){return d.createElement(w.Page,{header:"\u4fee\u6539\u5bc6\u7801"},d.createElement(w.Form,{className:"m-3",schema:this.schema,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,fieldLabelSize:2}))}}]),a}(d.Component)}}]);
//# sourceMappingURL=4.0744b686.chunk.js.map