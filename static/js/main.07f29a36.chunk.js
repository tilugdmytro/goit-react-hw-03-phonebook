(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__6Un6c"}},2:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",btn:"Form_btn__aasqa"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(19),n(20),n(13)),o=n(4),l=n(5),u=n(7),m=n(6),b=n(11),d=n(23),h=n(2),j=n.n(h),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:" ",number:" "},t.nameId=Object(d.a)(),t.numberId=Object(d.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:" ",number:" "})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.nameId,children:["Name"," ",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",id:this.nameId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.numberId,children:["Number"," ",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",id:this.numberId,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=f,C=n(9),v=n.n(C),_=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",className:v.a.input,value:e,onChange:n})]})},x=n(3),g=n.n(x),N=function(t){var e=t.name,n=t.number,a=t.onClick;return Object(p.jsxs)("li",{className:g.a.item,children:[Object(p.jsx)("p",{className:g.a.name,children:e}),Object(p.jsx)("p",{className:g.a.name,children:n}),Object(p.jsx)("button",{className:g.a.btn,type:"button",onClick:a,children:"Delete"})]})},S=n(12),y=n.n(S),k=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(N,{name:a,number:c,onClick:function(){return n(e)}},e)}))})},F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:" "},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return e.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts!")):{contacts:[c].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.changeFitler=function(e){t.setState({filter:e.target.value})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h2",{className:"title",children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:"title",children:"Contacts"}),Object(p.jsx)(_,{value:t,onChange:this.changeFitler}),Object(p.jsx)(k,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),A=F;s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={item:"Contact_item__1GqHL",name:"Contact_name__1lD2v",btn:"Contact_btn__3blgY"}},9:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[22,1,2]]]);
//# sourceMappingURL=main.07f29a36.chunk.js.map