(this["webpackJsonpestimation-app"]=this["webpackJsonpestimation-app"]||[]).push([[0],[,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),c=(a(16),a(1)),o=a(2),s=a(4),d=a(3),u=(a(17),a(7),a(10)),m=a.n(u),f=(a(22),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={essentialLoadData:n.props.essentialLoadData},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"subTitle"},l.a.createElement("p",null,"S"),l.a.createElement("p",null,"M"),l.a.createElement("p",null,"L")),l.a.createElement("div",{className:"childContainer"},this.state.essentialLoadData.map((function(t){return l.a.createElement("div",{className:"childContainer"},l.a.createElement("div",{className:"estimationTitle"},l.a.createElement("h1",null,t.name)),l.a.createElement("div",{className:"estimationcontrols"},Object.keys(t.options).map((function(a,n){return l.a.createElement("input",{checked:t.choosen===a,name:t.name,type:"radio",value:a,onChange:e.props.FindCalculation})}))))}))))}}]),a}(n.Component)),h=(a(8),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={addOnsLoadData:n.props.addOnsLoadData},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},"Choose Drupal/MIS add Ons:"),this.state.addOnsLoadData.map((function(t){return t.detail.map((function(t){return l.a.createElement("div",{class:"childContainer"},l.a.createElement("div",{class:"addOnTitle"},l.a.createElement("h1",null,t.name)),l.a.createElement("div",{class:"addOncontrols"},l.a.createElement("input",{type:"checkbox",name:t.name,checked:t.checked,value:t.value,onChange:e.props.FindCalculation})))}))})))}}]),a}(n.Component)),v=a(5),E=(a(23),{externalEffort:0,externalEffortName:"",externalEffortError:""}),p=(RegExp(),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addEffort=function(e){if(console.log("Data",n.externalEffortRef.current.value,n.externalEffortNameRef.current.value),n.externalEffortRef.current.value>0&&""!==n.externalEffortNameRef.current.value){var t={},a=[];t.name=n.externalEffortNameRef.current.value,t.value=n.externalEffortRef.current.value,(a=n.state.calculationEffortData).push(t),n.setState({calculationEffortData:a,totalEffort:n.state.totalEffort+parseInt(t.value),initialState:E})}else{n.setState({externalEffortError:"Invalid value of Effort and Hours"})}},n.onChangeEvent=function(e){console.log("Value",e.target.value),"externalEffort"==e.target.name?isNaN(e.target.value)?n.setState({initialState:Object(v.a)(Object(v.a)({},n.state.initialState),{},{externalEffort:0})}):n.setState({initialState:Object(v.a)(Object(v.a)({},n.state.initialState),{},{externalEffort:e.target.value})}):n.setState({initialState:Object(v.a)(Object(v.a)({},n.state.initialState),{},{externalEffortName:e.target.value})})},n.state={calculationEffortData:n.props.CalculationEffortData,totalEffort:n.props.totalEffort,externalEffort:0,initialState:E,regexp:"/^[0-9\b]+$/"},n.externalEffortRef=l.a.createRef(),n.externalEffortNameRef=l.a.createRef(),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"calHeading"},this.state.calculationEffortData.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"showReport"},l.a.createElement("div",{className:"reportHeading"},e.name," "),l.a.createElement("div",{className:"reportScore"}," - ",e.value," Hrs")))})),l.a.createElement("div",{className:"addReport"},l.a.createElement("div",{className:"addreportHeading"},l.a.createElement("input",{className:"EffortNameClass",value:this.state.initialState.externalEffortName,name:"externalEffortName",onChange:this.onChangeEvent,ref:this.externalEffortNameRef,type:"text",placeholder:"Enter the effort"})),l.a.createElement("div",{className:"addreportScore"}," - ",l.a.createElement("input",{className:"EffortValueClass",pattern:"[0-9]*",value:this.state.initialState.externalEffort,name:"externalEffort",onChange:this.onChangeEvent,ref:this.externalEffortRef,type:"text",placeholder:"Enter the value"})," Hrs"),l.a.createElement("div",{className:"error"},this.state.externalEffortError),l.a.createElement("div",{className:"addbtn1"},l.a.createElement("button",{onClick:this.addEffort},"Add"))),l.a.createElement("hr",{className:"totalHr"}),l.a.createElement("h1",{className:"totalEffort"},"Total Effort: ",this.state.totalEffort," Hrs "))}}]),a}(n.Component)),g=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={mandatoryLoadData:n.props.mandatoryLoadData},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},"Choose Drupal/MIS add Ons:"),this.state.mandatoryLoadData.map((function(t){return t.detail.map((function(t){return l.a.createElement("div",{class:"childContainer"},l.a.createElement("div",{class:"addOnTitle"},l.a.createElement("h1",null,t.name)),l.a.createElement("div",{class:"addOncontrols"},l.a.createElement("input",{type:"checkbox",name:t.name,checked:t.checked,value:t.value,onChange:e.props.FindCalculation})))}))})))}}]),a}(n.Component),O=[{title:"Essential effort"},{title:"Add-Ons"},{title:"Mandatory"},{title:"Show Effort"}],k=[{name:"Header",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Videos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Photos",options:{Small:2,Medium:4,Large:6},choosen:""}],S=[{Heading:"AddOns",detail:[{name:"Mailing List Block (in Page)",value:12,checked:!1},{name:"Turnkey LightBox",value:4,checked:!1},{value:4,name:"Turnkey Toaster",checked:!1},{value:2,name:"Cookie Banner",checked:!1},{value:4,name:"Mailing List Page",checked:!1},{value:4,name:"Song Kick Widget",checked:!1}]}],C=[{Heading:"Mandatory",detail:[{name:"Site cleanup",value:4,checked:!0},{name:"DTM",value:8,checked:!0},{name:"404/403  Page",value:4,checked:!0},{name:"SEO/Favicon",value:4,checked:!0},{name:"Footer Section(Without Mailing List)",value:4,checked:!0},{name:"Pre Launch Activities",value:12,checked:!0}]}],b=[{name:"Header",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Videos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Photos",options:{Small:2,Medium:4,Large:6},choosen:""}],N=[{Heading:"AddOns",detail:[{name:"Mailing List Block (in Page)",value:12,checked:!1},{name:"Turnkey LightBox",value:4,checked:!1},{value:4,name:"Turnkey Toaster",checked:!1},{value:2,name:"Cookie Banner",checked:!1},{value:4,name:"Mailing List Page",checked:!1},{value:4,name:"Song Kick Widget",checked:!1}]}],D=[{Heading:"Mandatory",detail:[{name:"Site cleanup",value:4,checked:!0},{name:"DTM",value:8,checked:!0},{name:"404/403  Page",value:4,checked:!0},{name:"SEO/Favicon",value:4,checked:!0},{name:"Footer Section(Without Mailing List)",value:4,checked:!0},{name:"Pre Launch Activities",value:12,checked:!0}]}],x=[],y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).InitialEffortSet=function(){1===n.state.activeStep?n.setState({totalEffort:0,headerScore:0,photoScore:0,videoScore:0}):2===n.state.activeStep?n.setState({addOnsEffort:0,toaster:0,lightbox:0,whatever:0}):n.state.activeStep===O.length&&n.TotalEffortCalculation(4)},n.handleOnClickStepper=function(e){e==O.length?n.TotalEffortCalculation(O.length,e):n.setState({activeStep:e},(function(){n.InitialEffortSet()}))},n.TotalEffortCalculation=function(e,t){var a=0,l={};x=[],t==e&&(n.state.essentialOriginalData.map((function(e){l={},""!=e.choosen&&(l.name=e.name+" - "+e.choosen,l.value=e.options[e.choosen],x.push(l),a+=e.options[e.choosen])})),n.state.addOnsOriginalData.map((function(e){return e.detail.map((function(e){e.checked&&(x.push(e),a+=e.value)}))})),n.state.mandatoryOriginalData.map((function(e){return e.detail.map((function(e){e.checked&&(x.push(e),a+=e.value)}))}))),n.setState({calculationEffortData:x,totalEffort:a,activeStep:t})},n.EstimationCalculation=function(e){k.map((function(t){e.target.name==t.name&&(t.choosen=e.target.value.toString())})),n.setState({essentialOriginalData:k})},n.AddOnsCalculation=function(e){x=[],S.map((function(t){return t.detail.map((function(t){t.checked=t.name===e.target.name?e.target.checked:t.checked}))})),n.setState({addOnsOriginalData:S})},n.MandatoryCalculation=function(e){x=[],C.map((function(t){return t.detail.map((function(t){t.checked=t.name===e.target.name?e.target.checked:t.checked}))})),n.setState({mandatoryOriginalData:C})},n.handleOnClickNext=function(){var e=n.state.activeStep+1;n.TotalEffortCalculation(O.length,e)},n.handleOnClickBack=function(){var e=n.state.activeStep-1;n.setState({activeStep:e})},n.handleOnClickFinish=function(){n.setState({activeStep:1,essentialOriginalData:b,addOnsOriginalData:N,mandatoryOriginalData:D})},n.state={activeStep:1,essentialOriginalData:k,addOnsOriginalData:S,mandatoryOriginalData:C,calculationEffortData:x,totalEffort:0},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," Effort Calculator "),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(m.a,{steps:O,activeStep:this.state.activeStep,onSelect:this.handleOnClickStepper,showNumber:!1}),l.a.createElement("div",{style:{marginTop:"40px"}},1===this.state.activeStep?l.a.createElement(f,{essentialLoadData:this.state.essentialOriginalData,FindCalculation:this.EstimationCalculation}):2===this.state.activeStep?l.a.createElement(h,{addOnsLoadData:this.state.addOnsOriginalData,FindCalculation:this.AddOnsCalculation}):3===this.state.activeStep?l.a.createElement(g,{mandatoryLoadData:this.state.mandatoryOriginalData,FindCalculation:this.MandatoryCalculation}):l.a.createElement(p,{totalEffort:this.state.totalEffort,CalculationEffortData:x,name:this.state.totalEffort,addOnEffort:this.state.addOnsEffort})),l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"btn1"},1===this.state.activeStep?"":l.a.createElement("input",{type:"button",value:"Back",onClick:this.handleOnClickBack})),l.a.createElement("div",{className:"btn2"},l.a.createElement("input",{type:"button",value:this.state.activeStep===O.length?"Finish":"Next",onClick:this.state.activeStep===O.length?this.handleOnClickFinish:this.handleOnClickNext}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.c20d9657.chunk.js.map