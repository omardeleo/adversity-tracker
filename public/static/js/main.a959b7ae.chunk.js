(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,n){e.exports=n(218)},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(154),r=n(2),i=n.n(r),o=n(36),l=n.n(o),c=n(54),s=n(82),u=n(101),d=function(e){return{loggedIn:Boolean(e.session.id)}},m=Object(u.g)(Object(c.b)(d,null)(function(e){var t=e.component,n=e.path,a=e.loggedIn,r=e.exact;return i.a.createElement(u.b,{path:n,exact:r,render:function(e){return a?i.a.createElement(u.a,{to:"/"}):i.a.createElement(t,e)}})})),f=Object(u.g)(Object(c.b)(d,null)(function(e){var t=e.component,n=e.path,a=e.loggedIn,r=e.exact;return i.a.createElement(u.b,{path:n,exact:r,render:function(e){return a?i.a.createElement(t,e):i.a.createElement(u.a,{to:"/signup"})}})})),p=n(69),h=n.n(p),v=function(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}},b=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},g=function(e){return function(t){return function(e){return h.a.ajax({method:"POST",url:"/api/v1/users",data:{user:e}})}(e).then(function(e){var n={id:e.id};window.localStorage.setItem("userData",JSON.stringify(n)),t(v(e))},function(e){return t(b(e.responseJSON))})}},E=function(e){return function(t){return function(e){return h.a.ajax({method:"POST",url:"/api/v1/session",data:{user:e}})}(e).then(function(e){var n={id:e.id};window.localStorage.setItem("userData",JSON.stringify(n)),t(v(e))},function(e){return t(b(e.responseJSON))})}},y=function(){return function(e){return h.a.ajax({method:"DELETE",url:"api/v1/session"}).then(function(){window.localStorage.clear(),e({type:"LOGOUT_CURRENT_USER"})})}},O=n(184),C=n(99),j=n(48),T=n(39),S=n(50),x=n(49),k=n(73),_=n(51),N=n(259),I=n(263),w=n(258),R=n(262),A=n(261),U=n(260),D=n(157),L=n.n(D),F=n(220),V=n(219),P=n(257),M=Object(V.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},errorText:{color:"red"}}});function G(e){var t=M(),n=Object.values(e.errors).some(function(e){return null!==e});return i.a.createElement(P.a,{component:"main",maxWidth:"xs"},i.a.createElement(w.a,null),i.a.createElement("div",{className:t.paper},i.a.createElement(N.a,{className:t.avatar},i.a.createElement(L.a,null)),i.a.createElement(F.a,{component:"h1",variant:"h5"},"Sign in"),i.a.createElement("form",{className:t.form},i.a.createElement(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:n,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),i.a.createElement(R.a,{variant:"outlined",margin:"normal",required:!0,error:n,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),i.a.createElement(F.a,{variant:"body2",display:"block",className:t.errorText},e.errors.signIn),i.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:e.formSubmit},"Sign In"),i.a.createElement(U.a,{container:!0},i.a.createElement(U.a,{item:!0},i.a.createElement(A.a,{href:"#",variant:"body2",onClick:e.clearErrors},"Don't have an account? Sign Up"))))))}var W=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).formSubmit=n.formSubmit.bind(Object(k.a)(n)),n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"formSubmit",value:function(e){e.preventDefault();var t=Object(C.a)(document.querySelectorAll("input[required]")),n=Object(O.a)(t,2),a=n[0],r=n[1],i={email:a.value,password:r.value};this.props.login(i)}},{key:"render",value:function(){return i.a.createElement(G,{formSubmit:this.formSubmit,errors:this.props.errors,clearErrors:this.props.clearErrors})}}]),t}(i.a.Component),z=Object(c.b)(function(e){return{loggedIn:Boolean(e.session.id),errors:e.errors.session,formType:location.pathname.slice(1)}},function(e,t){return{formType:t.location.pathname.slice(1),login:function(t){return e(E(t))},clearErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(W),q=Object(V.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},errorText:{color:"red"}}});function B(e){var t=q(),n=Object.values(e.errors).some(function(e){return null!==e});return i.a.createElement(P.a,{component:"main",maxWidth:"xs"},i.a.createElement(w.a,null),i.a.createElement("div",{className:t.paper},i.a.createElement(N.a,{className:t.avatar},i.a.createElement(L.a,null)),i.a.createElement(F.a,{component:"h1",variant:"h5"},"Sign up"),i.a.createElement("form",{className:t.form,noValidate:!0},i.a.createElement(U.a,{container:!0,spacing:2},i.a.createElement(U.a,{item:!0,xs:12,sm:6},i.a.createElement(R.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,error:n,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0}),i.a.createElement(F.a,{variant:"body2",display:"block",className:t.errorText},e.errors.name)),i.a.createElement(U.a,{item:!0,xs:12,sm:6},i.a.createElement(R.a,{variant:"outlined",required:!0,error:n,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(R.a,{variant:"outlined",required:!0,error:n,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),i.a.createElement(F.a,{variant:"body2",display:"block",className:t.errorText},e.errors.email)),i.a.createElement(U.a,{item:!0,xs:12},i.a.createElement(R.a,{variant:"outlined",required:!0,error:n,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),i.a.createElement(F.a,{variant:"body2",display:"block",className:t.errorText},e.errors.password))),i.a.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:e.formSubmit},"Sign Up"),i.a.createElement(U.a,{container:!0,justify:"flex-end"},i.a.createElement(U.a,{item:!0},i.a.createElement(A.a,{href:"./#/login",variant:"body2",onClick:e.clearErrors},"Already have an account? Sign in"))))))}var J=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).formSubmit=n.formSubmit.bind(Object(k.a)(n)),n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"formSubmit",value:function(e){e.preventDefault();var t=document.getElementById("firstName").value,n=document.getElementById("lastName").value,a=document.getElementById("email").value,r=document.getElementById("password").value,i={name:"".concat(t," ").concat(n),email:a,password:r};this.props.processForm(i)}},{key:"render",value:function(){return i.a.createElement(B,{formSubmit:this.formSubmit,errors:this.props.errors,clearErrors:this.props.clearErrors})}}]),t}(i.a.Component),Y=Object(c.b)(function(e){return{loggedIn:Boolean(e.session.id),errors:e.errors.session,formType:location.pathname.slice(1)}},function(e,t){var n=t.location.pathname.slice(1),a="login"===n?login:g;return{processForm:function(t){return e(a(t))},formType:n,login:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(t){return e(login(t))}),clearErrors:function(){return e({type:"CLEAR_SESSION_ERRORS"})}}})(J),K=function(e){return{type:"CLICK_MAIN_NAV",tab:e}},X=function(){return{type:"CLEAR_TITLE"}};n(204);function $(e){var t=e.selected?" nav-selected":"";return i.a.createElement("div",{className:"navigation-button".concat(t),onClick:e.handleTabClick},e.section)}var H=function(e){return function(t){return function(e){return h.a.ajax({method:"GET",url:"/api/v1/users/".concat(e,"/adversities")})}(e).then(function(e){t(function(e){return{type:"RECEIVE_ADVERSITIES",adversities:e}}(e))})}},Q=function(e){return function(t){return function(e){return h.a.ajax({method:"POST",url:"/api/v1/users/".concat(e.user_id,"/adversities"),data:{adversity:e}})}(e).then(function(e){return t(function(e){return{type:"RECEIVE_ADVERSITY",adversity:e}}(e))})}},Z=(n(205),Object(V.a)(function(e){return{advTitleField:{height:50,background:"#181818",boxShadow:"5px 5px 8px 0px rgba(0,0,0,0.3)",borderRadius:5,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#a9a9a9"},"&:hover fieldset":{borderColor:"#606060"},"&.Mui-focused fieldset":{borderColor:"darkGrey"}},color:"#a9a9a9"}}}));function ee(e){var t=Z();return i.a.createElement("div",{className:"adv-title"},i.a.createElement("div",{className:"adv-title-label"},"Adversity Experience Title..."),i.a.createElement(R.a,{className:t.advTitleField,InputProps:{className:t.advTitleField,"aria-label":"adversity-title"},placeholder:"Enter Title",value:e.title,margin:"normal",variant:"outlined",onChange:function(t){return e.handleTitle(t.target.value)}}))}n(206);var te=Object(V.a)(function(e){return{advStoryField:{height:70,width:410,background:"#181818",boxShadow:"5px 5px 8px 0px rgba(0,0,0,0.3)",borderRadius:5,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#a9a9a9"},"&:hover fieldset":{borderColor:"#606060"},"&.Mui-focused fieldset":{borderColor:"darkGrey"}},color:"#a9a9a9"}}});function ne(e){var t=te();return i.a.createElement("div",{className:"adv-story"},i.a.createElement("div",{className:"adv-story-label"},"The story is..."),i.a.createElement(R.a,{className:t.advStoryField,InputProps:{className:t.advStoryField,"aria-label":"adversity-story"},placeholder:"Enter Story",value:e.story,margin:"normal",variant:"outlined",multiline:!0,rows:"2",inputProps:{"aria-label":"adversity-story"},onChange:function(t){return e.handleStory({index:e.index,value:t.target.value})}}))}var ae=n(264),re=n(28),ie=n(265),oe=(n(207),"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"),le=[{value:0},{value:33},{value:67},{value:100}],ce=Object(re.a)({root:{color:"#505050",height:2,padding:"15px 0"},thumb:{height:20,width:8,borderRadius:3,border:"1px solid black",backgroundColor:"#fff",boxShadow:oe,marginTop:-10,"&:focus,&:hover,&$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:oe}}},active:{},valueLabel:{left:"calc(-50% + 11px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{backgroundColor:"currentColor"}})(ie.a);function se(e){return i.a.createElement("div",{className:"feelings-slider"},i.a.createElement("div",{className:"slider-label"},"intensity"),i.a.createElement("div",{className:"slider-container","data-order":e.order},i.a.createElement(ce,{"aria-label":"feelings slider",value:e.sliderVal,marks:le,valueLabelDisplay:"off",onChange:function(t,n){return e.handleChange({index:e.index,value:n})}}),i.a.createElement("div",{className:"slider-values"},i.a.createElement("div",{className:"slider-value"},"mildly"),i.a.createElement("div",{className:"slider-value"},"moderately"),i.a.createElement("div",{className:"slider-value"},"intensely"))))}n(208);var ue=Object(V.a)(function(e){return{root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#a9a9a9"},"&:hover fieldset":{borderColor:"#606060"},"&.Mui-focused fieldset":{borderColor:"darkGrey"}},color:"white",background:"#181818",boxShadow:"5px 5px 8px 0px rgba(0,0,0,0.3)"},input:{color:"#a9a9a9"}}}),de=function(e){var t=e.feeling,n=t.feeling,a=t.sliderVal,r=ue();return i.a.createElement("div",{className:"feeling-row"},i.a.createElement(R.a,{className:r.root,placeholder:"Enter Feeling",value:n,margin:"normal",variant:"outlined",inputProps:{"aria-label":"adversity-feeling",className:r.input},onChange:function(t){e.handleFeelingTextChange({index:e.index,feeling:t.target.value})}}),i.a.createElement(se,{sliderVal:a,handleChange:e.handleSliderChange,className:r.slider,index:e.index}))},me=function(e){function t(){return Object(j.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"adv-feeling-container"},i.a.createElement("div",{className:"adv-feeling"},i.a.createElement("div",{className:"feelings-tracker-label"},"I'm noticing I'm feeling..."),i.a.createElement("div",{className:"feeling-main"},i.a.createElement("div",{className:"feelings-container"},this.props.feelings.map(function(t,n){return i.a.createElement(de,{key:n,index:n,feeling:t,handleSliderChange:e.props.handleSliderChange,handleFeelingTextChange:e.props.handleFeelingTextChange})})))),i.a.createElement(ae.a,{className:"add-feeling",onClick:this.props.handleAddSlider}))}}]),t}(i.a.Component),fe=function(e){function t(){return Object(j.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props,t=e.feelings,n=e.handleAddSlider,a=e.handleFeelingTextChange,r=e.handleSliderChange,o=e.handleStory,l=e.story;return i.a.createElement("div",null,i.a.createElement(ne,{story:l,handleStory:o}),i.a.createElement(me,{feelings:t,handleAddSlider:n,handleFeelingTextChange:a,handleSliderChange:r}))}}]),t}(i.a.Component),pe=function(e,t){return h.a.ajax({method:"POST",url:"/api/v1/recognitions",data:{recognition:{adversity_id:e,story:t}}})},he=function(e){return h.a.ajax({method:"POST",url:"/api/v1/feelings",data:{feeling:e}})},ve=(n(209),function(e){function t(){return Object(j.a)(this,t),Object(S.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"handleAccept",value:function(e){var t=this;e.preventDefault();var n=this.props,a=n.title,r=n.story,i=n.feelings,o=n.adding,l=n.currentUser.id;o?pe(this.props.adversity_id,r).then(function(e){var t=!0,n=!1,a=void 0;try{for(var r,o=i[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value,c=l.feeling,s=l.sliderVal;he({name:c,intensity:s,recognition_id:e.id})}}catch(u){n=!0,a=u}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}}).then(function(){return t.props.clearForm()}).then(function(){return t.props.history.push("/analyzer")}):this.props.createAdversity({title:a,user_id:l}).then(function(e){var t=e.adversity;return pe(t.id,r)}).then(function(e){var t=!0,n=!1,a=void 0;try{for(var r,o=i[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value,c=l.feeling,s=l.sliderVal;he({name:c,intensity:s,recognition_id:e.id})}}catch(u){n=!0,a=u}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}}).then(function(){return t.props.clearForm()}).then(function(){return t.props.history.push("/analyzer")})}},{key:"render",value:function(){var e=this.props,t=e.adding,n=e.title,a=e.updateTitle,r=e.story,o=e.feelings;return i.a.createElement("div",{className:"tracker-container"},i.a.createElement("div",{className:"accept-container"},i.a.createElement("div",{className:"accept-button",onClick:this.handleAccept.bind(this)},"accept")),i.a.createElement("div",{className:"clear-container"},i.a.createElement("div",{className:"clear-button",onClick:this.props.clearForm},"clear")),i.a.createElement(ee,{adding:t,title:n,handleTitle:a}),i.a.createElement(fe,{handleStory:this.props.updateStory,story:r,feelings:o,handleAddSlider:this.props.addSlider,handleFeelingTextChange:this.props.updateFeelingText,handleSliderChange:this.props.updateFeelingValue}))}}]),t}(i.a.Component)),be=Object(u.g)(Object(c.b)(function(e){var t=e.session,n=e.entities,a=n.users,r=n.ui,i=r.adversity_id,o=r.adding_recognition,l=r.recognition_form;return{currentUser:a[t.id],title:l.title,story:l.story,feelings:l.feelings,adding:o,adversity_id:i}},function(e){return{updateTitle:function(t){return e(function(e){return{type:"UPDATE_TITLE",title:e}}(t))},updateStory:function(t){return e(function(e){return{type:"UPDATE_STORY",story:e}}(t))},updateFeelingText:function(t){return e(function(e){return{type:"UPDATE_FEELING_TEXT",feeling:e}}(t))},updateFeelingValue:function(t){return e(function(e){return{type:"UPDATE_FEELING_VALUE",feeling:e}}(t))},addSlider:function(){return e({type:"ADD_SLIDER"})},createAdversity:function(t){return e(Q(t))},clearForm:function(){return e({type:"CLEAR_FORM"})}}})(ve)),ge=(n(210),function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).handleTabClick=n.handleTabClick.bind(Object(k.a)(n)),n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"handleTabClick",value:function(e){var t=e.target.innerText,n=document.querySelector(".nav-selected");n&&n.classList.remove("nav-selected"),e.target.classList.add("nav-selected"),this.setState(function(e){return{currentTab:t}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"AdversityDataInput"},i.a.createElement("div",{className:"navigation"},i.a.createElement($,{section:"Recognition",handleTabClick:this.handleTabClick,selected:!0}),i.a.createElement($,{section:"Introspection",handleTabClick:this.handleTabClick}),i.a.createElement($,{section:"Retrospection",handleTabClick:this.handleTabClick})),this.props?i.a.createElement(be,null):null,i.a.createElement("div",{className:"logout-btn"},i.a.createElement("button",{onClick:this.props.logout},"LOG OUT"))))}}]),t}(i.a.Component)),Ee=Object(u.g)(Object(c.b)(function(e){var t=e.session,n=e.entities,a=n.users,r=n.ui;return{currentUser:a[t.id],title:r.recognition_title,adding:r.adding_recognition,form:r.recognition_form,adversity_id:r.adversity_id}},function(e){return{logout:function(){return e(y())},clearTitle:function(){return e(X)}}})(ge)),ye=function(e){return function(t){return(n=e,h.a.ajax({method:"GET",url:"/api/v1/users/".concat(n)})).then(function(e){return t(v(e))});var n}},Oe=function(e){if(e)return Object.keys(e).map(function(t){return e[t]})},Ce=n(102),je=n(126),Te=new Date,Se=Te.getFullYear(),xe=Te.getMonth(),ke=function(){return{start:new Date(Date.UTC(Se,xe)).valueOf(),end:new Date(Date.UTC(Se,xe+1,0,23,59,59,999)).valueOf()}},_e=n(211),Ne=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={redirect:!1},n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"renderChart",value:function(){var e=Ce.c("chartdiv",je.e);this.chart=e;var t=this.props.adversities;e.data=t,e.background.fill="#282828",e.paddingRight=50;var n=e.yAxes.push(new je.a);n.dataFields.category="title",n.renderer.grid.template.disabled=!0,n.renderer.line.strokeOpacity=1,n.renderer.line.strokeWidth=2,n.renderer.line.stroke=Ce.b("#a9a9a9");var a=e.xAxes.push(new je.c),r=ke().start,i=ke().end;a.min=r,a.max=i,a.strictMinMax=!0,n.renderer.labels.template.fill=Ce.b("#a9a9a9"),n.renderer.labels.template.cursorOverStyle=Ce.a.pointer,n.renderer.labels.template.events.on("hit",function(e){var n,a=e.target.currentText,r=!0,i=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;if(s.title===a){n=s.adv_id;break}}}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}this.props.onTitleClick(a,n),this.setState({redirect:!0})},this),a.renderer.labels.template.fill=Ce.b("#a9a9a9"),a.renderer.grid.template.stroke=Ce.b("#a9a9a9"),a.renderer.line.strokeOpacity=1,a.renderer.line.strokeWidth=2,a.renderer.line.stroke=Ce.b("#a9a9a9");var o=!0,l=!1,c=void 0;try{for(var s,u=t[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var d=s.value,m=[],f=!0,p=!1,h=void 0;try{for(var v,b=d.recognitions[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var g=v.value,E={title:d.title,recognition:g};m.push(E)}}catch(O){p=!0,h=O}finally{try{f||null==b.return||b.return()}finally{if(p)throw h}}var y=e.series.push(new je.d);y.name="Adversity",y.dataFields.dateX="recognition",y.dataFields.categoryY="title",y.strokeWidth=3,y.sequencedInterpolation=!0,y.bullets.create(je.b),y.data=m}}catch(O){l=!0,c=O}finally{try{o||null==u.return||u.return()}finally{if(l)throw c}}}},{key:"componentDidMount",value:function(){this.renderChart()}},{key:"componentDidUpdate",value:function(e){_e(e.adversities,this.props.adversities)||this.renderChart()}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return this.state.redirect?(this.chart.dispose(),i.a.createElement(u.a,{to:"/input"})):i.a.createElement("div",{id:"chartdiv",style:{width:"940px",height:"500px"}})}}]),t}(i.a.Component);n(214);function Ie(){return i.a.createElement("div",{className:"placeholder"},"Click on the ",i.a.createElement("strong",null,"\xa0Adversity Data Input\xa0")," tab to log your first adversity.")}var we=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={loadChart:!1},n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAdversities(this.props.currentUser.id)}},{key:"render",value:function(){var e=this.props.adversities,t=[],n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value,s=[],u=!0,d=!1,m=void 0;try{for(var f,p=c.recognitions[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=f.value;s.push(h.created_at)}}catch(b){d=!0,m=b}finally{try{u||null==p.return||p.return()}finally{if(d)throw m}}var v={adv_id:c.id,title:c.title,recognitions:s};t.push(v)}}catch(b){a=!0,r=b}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return t.length>0?i.a.createElement(Ne,{adversities:t,onTitleClick:this.props.setTitle}):i.a.createElement(Ie,null)}}]),t}(i.a.Component),Re=Object(u.g)(Object(c.b)(function(e){var t=e.session,n=e.entities,a=n.users,r=n.adversities;return{currentUser:a[t.id],adversities:Oe(r)}},function(e){return{fetchAdversities:function(t){return e(H(t))},setTitle:function(t,n){return e(function(e,t){return function(n){n({type:"CLICK_TITLE",payload:{title:e,id:t}}),n(K("AdversityDataInput"))}}(t,n))}}})(we)),Ae=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).state={adversities:{}},n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentUser.id)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Adversity Data for ",this.props.currentUser.name," - ",Te.toLocaleString("default",{month:"long",year:"numeric"})),i.a.createElement("div",{className:"chart-container"},i.a.createElement(Re,null)))}}]),t}(i.a.Component),Ue=Object(u.g)(Object(c.b)(function(e){var t=e.session;return{currentUser:e.entities.users[t.id]}},function(e){return{getUser:function(t){return e(ye(t))}}})(Ae)),De=(n(215),function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(S.a)(this,Object(x.a)(t).call(this,e))).displayComponent=function(){var e=n.props.location.pathname;return"/input"===e||"/"===e?i.a.createElement(Ee,null):i.a.createElement(Ue,null)},n.handleTabClick=n.handleTabClick.bind(Object(k.a)(n)),n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"handleTabClick",value:function(e){function t(t,n){n(t);var a=document.querySelector(".nav-selected");a&&a.classList.remove("nav-selected"),e.target.classList.add("nav-selected")}var n=e.target.innerText,a=this.props.history.location.pathname;"Adversity Data Input"===n?"/input"!==a&&(this.props.history.push("/input"),t(n,this.props.setCurrentTab)):"Adversity Analyzer"===n&&"/analyzer"!==a&&(this.props.history.push("/analyzer"),t(n,this.props.setCurrentTab))}},{key:"render",value:function(){return i.a.createElement("div",{className:"main-container"},i.a.createElement("div",{className:"main-navigation"},i.a.createElement($,{section:"Adversity Data Input",handleTabClick:this.handleTabClick,selected:!0}),i.a.createElement($,{section:"Adversity Analyzer",handleTabClick:this.handleTabClick})),this.displayComponent())}}]),t}(i.a.Component)),Le=Object(u.g)(Object(c.b)(function(e){var t=e.session,n=e.entities,a=n.users,r=n.ui;return{currentUser:a[t.id],currentTab:r.tab}},function(e){return{logout:function(){return e(y())},setCurrentTab:function(t){return e(K(t))}}})(De)),Fe=(n(216),function(){return i.a.createElement("div",null,i.a.createElement(u.d,null,i.a.createElement(m,{exact:!0,path:"/login",component:z}),i.a.createElement(m,{exact:!0,path:"/signup",component:Y}),i.a.createElement(f,{path:"/input",component:Le}),i.a.createElement(f,{path:"/analyzer",component:Le}),i.a.createElement(f,{exact:!0,path:"/",component:Le})))}),Ve=function(e){var t=e.store;return i.a.createElement(c.a,{store:t},i.a.createElement(s.a,null,i.a.createElement(Fe,null)))},Pe=n(81),Me=n(182),Ge=n(183),We=n.n(Ge),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CURRENT_USER":return Object.assign({},e,Object(a.a)({},t.currentUser.id,t.currentUser));case"LOGOUT_CURRENT_USER":return[];default:return e}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_ADVERSITIES":return t.adversities;case"RECEIVE_ADVERSITY":return[].concat(Object(C.a)(Array.from(e)),[t.adversity]);default:return e}},Be={tab:"Adversity Data Input",recognition_title:"",adding_recognition:!1,adversity_id:null,recognition_form:{title:"",story:"",feelings:[{feeling:"",sliderVal:0}]}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var n,a=e.recognition_form,r=a.feelings,i=Object(C.a)(r);switch(t.type){case"CLICK_MAIN_NAV":return Object.assign({},e,{tab:t.tab});case"CLICK_TITLE":return n=Object.assign({},a,{title:t.payload.title}),Object.assign({},e,{recognition_form:n,adding_recognition:!0,adversity_id:t.payload.id});case"CLEAR_TITLE":return Object.assign({},e,{recognition_title:"",adding_recognition:!1,adversity_id:null});case"UPDATE_TITLE":return n=Object.assign({},a,{title:t.title}),Object.assign({},e,{recognition_form:n});case"UPDATE_STORY":return n=Object.assign({},a,{story:t.story.value}),Object.assign({},e,{recognition_form:n});case"UPDATE_FEELING_TEXT":return i[t.feeling.index].feeling=t.feeling.feeling,n=Object.assign({},a,{feelings:i}),Object.assign({},e,{recognition_form:n});case"UPDATE_FEELING_VALUE":return i[t.feeling.index].sliderVal=t.feeling.value,n=Object.assign({},a,{feelings:i}),Object.assign({},e,{recognition_form:n});case"ADD_SLIDER":return i.push({feeling:"",sliderVal:0}),n=Object.assign({},a,{feelings:i}),Object.assign({},e,{recognition_form:n});case"CLEAR_FORM":return n={title:"",story:"",feelings:[{feeling:"",sliderVal:0}]},Object.assign({},e,{adversity_id:null,adding_recognition:!1,recognition_form:n});default:return e}},Ye=Object(Pe.c)({users:ze,adversities:qe,ui:Je}),Ke=Object.freeze({id:null}),Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_CURRENT_USER":return Object.assign({},e,{id:t.currentUser.id});case"LOGOUT_CURRENT_USER":return Ke;default:return e}},$e=Object(Pe.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_SESSION_ERRORS":var n=t.errors,a={name:null,email:null,password:null};return n.includes("Name can't be blank")&&(a.name="Name can't be blank"),n.includes("Email Invalid email")&&(a.email="Invalid email"),n.includes("Email can't be blank")&&(a.email="Email can't be blank"),n.includes("Password is too short (minimum is 6 characters)")&&(a.password="Password is too short (minimum is 6 characters)"),n.includes("Invalid email/password combination")&&(a.signIn="Invalid email/password combination"),a;case"RECEIVE_CURRENT_USER":case"CLEAR_SESSION_ERRORS":return[];default:return e}}}),He=Object(Pe.c)({entities:Ye,session:Xe,errors:$e}),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Pe.d)(He,e,Object(Pe.a)(Me.a,We.a))};n(217);document.addEventListener("DOMContentLoaded",function(){var e,t=document.getElementById("root");h.a.ajax({method:"GET",url:"api/v1/checkSession"}).then(function(){var n=JSON.parse(window.localStorage.getItem("userData")),r={session:{id:n.id},entities:{users:Object(a.a)({},n.id,n)}};e=Qe(r),l.a.render(i.a.createElement(Ve,{store:e}),t)}).catch(function(){window.localStorage.clear(),e=Qe(),l.a.render(i.a.createElement(Ve,{store:e}),t)})})}},[[193,1,3]]]);
//# sourceMappingURL=main.a959b7ae.chunk.js.map