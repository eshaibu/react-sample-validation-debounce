(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,r){e.exports=r(49)},38:function(e,a,r){},46:function(e,a,r){var t={"./de":8,"./de.js":8,"./el":9,"./el.js":9,"./en":2,"./en.js":2,"./es":10,"./es.js":10,"./fa":11,"./fa.js":11,"./fr":12,"./fr.js":12,"./it":13,"./it.js":13,"./ja":14,"./ja.js":14,"./nb_NO":15,"./nb_NO.js":15,"./nl":16,"./nl.js":16,"./pl":17,"./pl.js":17,"./pt":18,"./pt.js":18,"./ru":19,"./ru.js":19,"./tr":20,"./tr.js":20,"./ua":21,"./ua.js":21,"./vi":22,"./vi.js":22,"./zh":23,"./zh.js":23,"./zh_TW":24,"./zh_TW.js":24};function n(e){var a=o(e);return r(a)}function o(e){var a=t[e];if(!(a+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return a}n.keys=function(){return Object.keys(t)},n.resolve=o,e.exports=n,n.id=46},49:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(25),l=r.n(o),s=(r(38),r(1)),i=r(3),c=r(4),u=r.n(c),m=r(26),d=r(27),f=r(28),v=r(31),h=r(29),b=r(32),j=r(30),p=r.n(j),E=function(e){var a=e.name,r=e.value,t=e.error,o=e.type,l=e.onChange,s=e.title,i=e.placeholder;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,s),n.a.createElement("input",{className:"form-control ".concat(t?"is-invalid":""),type:o||"text",name:a,value:r,placeholder:i||"",onChange:l}),t&&n.a.createElement("span",{className:"invalid-feedback"},t[0]))},N=r(5),g=r.n(N),w={fullName:"required|min:3|max:30",email:"required|email",userNumber:"required|numeric",dob:"required|regex:/^\\d{4}-\\d{2}-\\d{2}$/"},C=function(e){var a=e.key,r=e.value,t={isValid:!0};if(w[a]){var n=new g.a(Object(s.a)({},a,r),Object(s.a)({},a,w[a]));t.isValid=n.passes(),t.isValid||(t.errors=n.errors.all())}return t},O=function(e){var a=new g.a(e,w),r={isValid:a.passes()};return r.isValid||(r.errors=a.errors.all()),r},y=500,k=function(e){function a(){var e,r;Object(d.a)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={formCredentials:{fullName:"",email:"",userNumber:"",dob:""},formErrors:{}},r.onChange=function(){var e=Object(m.a)(u.a.mark(function e(a){var t,n,o,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target,n=t.name,o=t.value,(l=r.state.formCredentials)[n]=o,r.setState({formCredentials:l}),r.debounceSingleFieldValidation({name:n,value:o});case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),r.handleSubmit=function(e){e.preventDefault();var a=O(r.state.formCredentials),t=a.isValid,n=a.errors;t?(alert("No error, form can now submit...."),r.setState({formErrors:{}})):r.setState({formErrors:n})},r.debounceSingleFieldValidation=p()(function(e){var a=e.name,t=e.value,n=r.state.formErrors,o=C({key:a,value:t}),l=o.isValid,c=o.errors;l?r.setState({formErrors:Object(i.a)({},n,Object(s.a)({},a,null))}):r.setState({formErrors:Object(i.a)({},n,Object(s.a)({},a,c[a]))})},y),r}return Object(b.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.state,a=e.formCredentials,r=e.formErrors,t=a.fullName,o=a.email,l=a.dob,s=a.userNumber;return n.a.createElement("div",{className:"vertical-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("form",{className:"col-md-8 col-xs-10 mx-auto",noValidate:!0,onSubmit:this.handleSubmit},n.a.createElement(E,{error:r.fullName,onChange:this.onChange,value:t,name:"fullName",title:"Full Name"}),n.a.createElement(E,{error:r.email,onChange:this.onChange,value:o,name:"email",title:"Email"}),n.a.createElement(E,{error:r.userNumber,onChange:this.onChange,value:s,name:"userNumber",title:"User Number"}),n.a.createElement(E,{error:r.dob,onChange:this.onChange,value:l,name:"dob",placeholder:"YYYY-MM-DD",title:"Date of Birth"}),n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit form"))))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.ffbfe154.chunk.js.map