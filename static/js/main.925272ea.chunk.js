(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{226:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(8),r=a.n(o),i=a(10),c=a(83),s=a(84),u=a(91),m=a(89),d=a(15),p=a.n(d),g=(a(202),a(79),function(){return n.a.createElement("div",{id:"toolbar",className:"toolbar-panel"},n.a.createElement("select",{className:"ql-font",defaultValue:"arial"},n.a.createElement("option",{value:"arial"},"Arial"),n.a.createElement("option",{value:"comic-sans"},"Comic Sans"),n.a.createElement("option",{value:"courier-new"},"Courier New"),n.a.createElement("option",{value:"georgia"},"Georgia"),n.a.createElement("option",{value:"helvetica"},"Helvetica"),n.a.createElement("option",{value:"lucida"},"Lucida")),n.a.createElement("select",{className:"ql-size",defaultValue:"medium"},n.a.createElement("option",{value:"extra-small"},"12px"),n.a.createElement("option",{value:"small"},"14px"),n.a.createElement("option",{value:"small2"},"16px"),n.a.createElement("option",{value:"medium"},"18px"),n.a.createElement("option",{value:"large"},"20px"),n.a.createElement("option",{value:"huge"},"22px")),n.a.createElement("select",{className:"ql-align"}),n.a.createElement("select",{className:"ql-color"}),n.a.createElement("select",{className:"ql-background"}),n.a.createElement("button",{className:"ql-clean"}))}),h=a(228),f=(a(203),d.Quill.import("formats/size"));f.whitelist=["extra-small","small","small2","medium","large","huge"],d.Quill.register(f,!0);var b=d.Quill.import("formats/font");b.whitelist=["arial","comic-sans","courier-new","georgia","helvetica","lucida"],d.Quill.register(b,!0);var v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={editorHtml:"",descriptionTable:[{text:"",fontSize:"13px",color:"rgba(0, 0, 0, 0.85)",background:"rgba(0, 0, 0, 0)"}]},e.handleChange=function(t){e.setState({editorHtml:t})},e.handleClick=function(){var t=document.getElementById("input"),a=t.getElementsByTagName("span");if(a.length>0)for(var l=function(l){var n=getComputedStyle(a[l]);t.textContent.length>0&&e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{descriptionTable:{text:t.textContent,fontSize:n.fontSize,color:n.color,background:n.backgroundColor}})}),(function(){console.log(JSON.stringify(this.state.descriptionTable))}))},n=0;n<a.length;n++)l(n);else e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{descriptionTable:Object(i.a)(Object(i.a)({},e.descriptionTable),{},{text:t.textContent})})}),(function(){console.log(JSON.stringify(this.state.descriptionTable))}))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"text-editor"},n.a.createElement("h2",{className:"text"},"Text Editor"),n.a.createElement(g,null),n.a.createElement(p.a,{id:"input",value:this.state.editorHtml,onChange:this.handleChange,placeholder:this.props.placeholder,modules:a.modules,formats:a.formats}),n.a.createElement(h.a,{className:"button-json",onClick:this.handleClick},"Convert to JSON"))}}]),a}(n.a.Component);v.modules={toolbar:{container:"#toolbar"}},v.formats=["header","font","size","align","strike","color","background"];var E=function(){return n.a.createElement("div",null,n.a.createElement(v,{placeholder:"Write something.."}))};r.a.render(n.a.createElement(E,null),document.getElementById("root"))},79:function(e,t,a){},92:function(e,t,a){e.exports=a(226)}},[[92,1,2]]]);
//# sourceMappingURL=main.925272ea.chunk.js.map