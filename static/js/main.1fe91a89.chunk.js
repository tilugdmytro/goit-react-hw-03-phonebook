(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__6Un6c"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",btn:"Form_btn__aasqa"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(18),n(19),n(13)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(11),h=n(2),d=n.n(h),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:" ",number:" "},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:" ",number:" "})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:d.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:d.a.label,children:["Name"," ",Object(j.jsx)("input",{className:d.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:d.a.label,children:["Number"," ",Object(j.jsx)("input",{className:d.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:d.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=f,O=n(9),v=n.n(O),C=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",className:v.a.input,value:e,onChange:n})]})},_=n(3),x=n.n(_),g=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsx)("p",{className:x.a.name,children:e}),Object(j.jsx)("p",{className:x.a.name,children:n}),Object(j.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},N=n(12),S=n.n(N),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsx)(g,{id:e,name:a,number:c,onDeleteContact:n},e)}))})},D=n(23),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:" "},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(D.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return e.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts!")):{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.changeFitler=function(e){t.setState({filter:e.target.value})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)(C,{value:t,onChange:this.changeFitler}),Object(j.jsx)(y,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),A=k;r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={item:"Contact_item__1GqHL",name:"Contact_name__1lD2v",btn:"Contact_btn__3blgY"}},9:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[21,1,2]]]);
//# sourceMappingURL=main.1fe91a89.chunk.js.map