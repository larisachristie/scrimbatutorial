(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a.n(r),o=(a(14),a(1)),i=a(2),u=a(4),s=a(3),m=a(5),h=[{id:1,name:"Home",url:"#1"},{id:2,name:"To-do",url:"#2"},{id:3,name:"Contacts",url:"#3"},{id:4,name:"Jokes",url:"#4"}],d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={navbar:h},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.navbar.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("a",{href:"#".concat(e.id)},e.name))}));return c.a.createElement("nav",null,e)}}]),t}(c.a.Component);var p=function(){var e=new Date;return c.a.createElement("header",{className:"datefield"},"Today is ","".concat(function(e){switch(e.getMonth()){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return"Oops"}}(e)," ").concat(e.getDate()).concat(function(e){return(e.getDate()-1)*(e.getDate()-20)<=0||(e.getDate()-24)*(e.getDate()-30)<=0?"th":1===e.getDate()||21===e.getDate()||31===e.getDate()?"st":2===e.getDate()||22===e.getDate()?"nd":"rd"}(e),", ").concat(e.getFullYear()))},f=a(6),b=[{id:1,text:"Chill",completed:!0},{id:2,text:"Wes Bos's JavaScript for Beginners",completed:!1},{id:3,text:"Free Code Camp, Responsive Web Design Certification",completed:!1},{id:4,text:"CS50 \ud83d\ude2d",completed:!1},{id:5,text:"React for Beginners, Tutorial",completed:!1}],v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).onChange=function(t){e.setState({input:t.target.value})},e.addItem=function(t){t.preventDefault();var a=Object(f.a)(e.state.tasks);""!==e.state.input&&(a.push({text:e.state.input}),e.setState({tasks:a,input:""}))},e.deleteItem=function(t){var a=Object(f.a)(e.state.tasks);a.splice(t,1),e.setState({tasks:a})},e.handleTick=function(t){e.setState((function(e){return{todos:e.tasks.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))}}))},e.state={input:"",tasks:b},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={textDecoration:"line-through"},a=this.state.tasks.map((function(a,n){return c.a.createElement("div",{key:n,style:a.completed?t:null},c.a.createElement("input",{type:"checkbox",checked:a.completed,onChange:function(){return e.handleTick(a.id)}}),c.a.createElement("label",null,a.text),c.a.createElement("button",{type:"button",onClick:function(){return e.deleteItem(n)}},"x"),c.a.createElement("br",null))}));return c.a.createElement("div",{className:"todo"},c.a.createElement("h2",null,"My to-do list"),c.a.createElement("form",{className:"todo"},c.a.createElement("input",{type:"text",placeholder:"type something in",value:this.state.input,onChange:this.onChange,onSubmit:function(e){return e.preventDefault()}}),c.a.createElement("button",{type:"button",onChange:this.onChange,onClick:this.addItem},"+"),a))}}]),t}(c.a.Component);var E=function(e){return c.a.createElement("div",{className:"contact-card"},c.a.createElement("img",{src:e.contact.imgUrl,alt:e.contact.name,title:e.contact.name}),c.a.createElement("h4",null,e.contact.name),c.a.createElement("p",null,e.contact.email?"Email: ".concat(e.contact.email):null),c.a.createElement("p",null,e.contact.phone?"Phone number: ".concat(e.contact.phone):null))},y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"3",className:"contacts"},c.a.createElement("h3",null,"My contacts"),c.a.createElement("div",{className:"contactsContainer"},c.a.createElement(E,{contact:{name:"Mr. Kittens",imgUrl:"https://placekitten.com/200/150?random",email:"ert@fdsa.ry",phone:"456789"}}),c.a.createElement(E,{contact:{name:"Mr. Pawny",imgUrl:"https://placekitten.com/250/100",email:"dasfa@wrtw.yu",phone:"23124"}}),c.a.createElement(E,{contact:{name:"Ms. Whiskerson",imgUrl:"https://placekitten.com/200/100?random",email:"adfa@aff.cas",phone:"363456"}}),c.a.createElement(E,{contact:{name:"Mr. Tails",imgUrl:"https://placekitten.com/200/150",email:"adfa@asdfasd.sd",phone:"none"}}),c.a.createElement(E,{contact:{name:"Lady Claw",imgUrl:"https://placekitten.com/250/150"}})))}}]),t}(c.a.Component);var g=function(e){var t=e.question?"Question: ".concat(e.question):null;return c.a.createElement("div",{className:"joke-unit"},c.a.createElement("p",{style:{fontWeight:"bold"}},t),c.a.createElement("p",null,e.punchLine))},k=[{id:1,question:"What does a cat like to eat on a hot day?",punchLine:"A mice cream cone."},{id:2,question:"Did you hear about the cat who swallowed a ball of wool?",punchLine:"She had mittens."},{id:3,question:"How do cats end a fight",punchLine:"They hiss and make up."},{id:4,question:"Why don\u2019t cats play poker in the jungle?",punchLine:"Too many cheetahs."},{id:5,question:"What do you call the cat that was caught by the police?",punchLine:"The purrpatrator."},{id:6,question:"",punchLine:"At any given time, the urge to sing \u201cThe Lion Sleeps Tonight\u201d is never more than a whim away."}],j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=k.map((function(e){return c.a.createElement(g,{key:e.id,question:e.question,punchLine:e.punchLine})}));return c.a.createElement("div",{id:"4",className:"jokes"},c.a.createElement("h4",null,"A whole lot of cat jokes!"),c.a.createElement("div",null,e[0]),c.a.createElement("div",null,e[1]),c.a.createElement("div",null,e[2]),c.a.createElement("div",null,e[3]),c.a.createElement("div",null,e[4]),c.a.createElement("div",null,e[5]))}}]),t}(c.a.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(v,null),c.a.createElement(y,null),c.a.createElement(j,null))}}]),t}(n.Component);var C=function(){return c.a.createElement("footer",null,"'tis but a footer")},w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d,null),c.a.createElement(p,null),c.a.createElement(O,null),c.a.createElement(C,null))}}]),t}(c.a.Component);l.a.render(c.a.createElement(w,null),document.querySelector("div#root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.45a673f1.chunk.js.map