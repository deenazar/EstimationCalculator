(this["webpackJsonpestimation-app"]=this["webpackJsonpestimation-app"]||[]).push([[0],[,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(10),r=t.n(o),l=(t(17),t(5)),c=t(1),s=t(2),d=t(4),m=t(3),u=(t(18),t(7),t(11)),h=t.n(u),f=(t(23),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={essentialLoadData:n.props.essentialLoadData},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subTitle"},i.a.createElement("p",null,"S"),i.a.createElement("p",null,"M"),i.a.createElement("p",null,"L")),i.a.createElement("div",{className:"childContainer"},this.state.essentialLoadData.map((function(a){return i.a.createElement("div",{className:"childContainer"},i.a.createElement("div",{className:"estimationTitle"},i.a.createElement("h1",null,a.name)),i.a.createElement("div",{className:"estimationcontrols"},Object.keys(a.options).map((function(t,n){return i.a.createElement("input",{checked:a.choosen===t,name:a.name,type:"radio",value:t,onChange:e.props.FindCalculation})}))))}))))}}]),t}(n.Component)),p=(t(8),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={addOnsLoadData:n.props.addOnsLoadData},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading"},"Choose Drupal/MIS add Ons:"),this.state.addOnsLoadData.map((function(a){return a.detail.map((function(a){return i.a.createElement("div",{class:"childContainer"},i.a.createElement("div",{class:"addOnTitle"},i.a.createElement("h1",null,a.name)),i.a.createElement("div",{class:"addOncontrols"},i.a.createElement("input",{type:"checkbox",name:a.name,checked:a.checked,value:a.value,onChange:e.props.FindCalculation})))}))})))}}]),t}(n.Component)),v=(t(9),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={calculationEffortData:n.props.CalculationEffortData,totalEffort:n.props.totalEffort,externalEffort:0},n}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"calHeading"},this.state.calculationEffortData.map((function(e){return i.a.createElement("div",{className:"Essential"==e.header?"Essential":"AddOns"==e.header?"AddOns":"Mandatory"==e.header?"Mandatory":"Custom"},i.a.createElement("div",{className:"showReport"},i.a.createElement("div",{className:"reportHeading"},e.name," "),i.a.createElement("div",{className:"reportScore"}," - ",e.value," Hrs")))})),i.a.createElement("hr",{className:"totalHr"}),i.a.createElement("h1",{className:"totalEffort"},"Total Effort: ",this.state.totalEffort," Hrs "))}}]),t}(n.Component)),E=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={mandatoryLoadData:n.props.mandatoryLoadData},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"heading"}),this.state.mandatoryLoadData.map((function(a){return a.detail.map((function(a){return i.a.createElement("div",{class:"childContainer"},i.a.createElement("div",{class:"addOnTitle"},i.a.createElement("h1",null,a.name)),i.a.createElement("div",{class:"addOncontrols"},i.a.createElement("input",{type:"checkbox",name:a.name,checked:a.checked,value:a.value,onChange:e.props.FindCalculation})))}))})))}}]),t}(n.Component),g=(t(24),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onChangeEvent=function(e){"externalEffort"==e.target.name?isNaN(e.target.value)?n.setState({initialState:Object(l.a)(Object(l.a)({},n.state.initialState),{},{externalEffort:0})}):n.setState({initialState:Object(l.a)(Object(l.a)({},n.state.initialState),{},{externalEffort:e.target.value})}):n.setState({initialState:Object(l.a)(Object(l.a)({},n.state.initialState),{},{externalEffortName:e.target.value})})},n.state={customOnLoadData:n.props.customLoadData,initialState:n.props.initialState,externalError:n.props.externalError},n.externalEffortRef=i.a.createRef(),n.externalEffortNameRef=i.a.createRef(),n}return Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.initialState!==this.props.initialState&&this.setState({initialState:e.initialState})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},this.state.customOnLoadData.map((function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"showReport custom"},i.a.createElement("div",{className:"reportHeading"},e.name," "),i.a.createElement("div",{className:"reportScore"}," - ",e.value," Hrs")))})),i.a.createElement("div",{className:"addReport"},i.a.createElement("div",{className:"addreportHeading"},i.a.createElement("input",{className:"EffortNameClass",value:this.state.initialState.externalEffortName,name:"externalEffortName",onChange:this.onChangeEvent,ref:this.externalEffortNameRef,type:"text",placeholder:"Enter the effort"})),i.a.createElement("div",{className:"addreportScore"}," - ",i.a.createElement("input",{className:"EffortValueClass",pattern:"[0-9]*",value:this.state.initialState.externalEffort,name:"externalEffort",onChange:this.onChangeEvent,ref:this.externalEffortRef,type:"text"})," Hrs"),i.a.createElement("div",{className:"addbtn1"},i.a.createElement("button",{onClick:this.props.addEffort},"Add")),i.a.createElement("div",{className:"error"},this.props.externalError)))}}]),t}(n.Component)),O=[{title:"Essential Effort"},{title:"Add-Ons"},{title:"Mandatory"},{title:"Custom"},{title:"Show Effort"}],S=[{name:"Header",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Videos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Photos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Music",options:{Small:2,Medium:3,Large:5},choosen:""},{name:"Tour",options:{Small:2,Medium:3,Large:5},choosen:""},{name:"Hero + Carosual",options:{Small:4,Medium:4,Large:4},choosen:""},{name:"Merch",options:{Small:2,Medium:3,Large:5},choosen:""}],k=[{Heading:"AddOns",detail:[{name:"Mailing List Block (in Page)",value:12,checked:!1},{name:"Turnkey LightBox",value:4,checked:!1},{value:4,name:"Turnkey Toaster",checked:!1},{value:2,name:"Cookie Banner",checked:!1},{value:4,name:"Mailing List Page",checked:!1},{value:4,name:"Song Kick Widget",checked:!1}]}],C=[{Heading:"Mandatory",detail:[{name:"Site cleanup",value:4,checked:!0},{name:"DTM",value:8,checked:!0},{name:"404/403  Page",value:4,checked:!0},{name:"SEO/Favicon",value:4,checked:!0},{name:"Footer Section(Without Mailing List)",value:4,checked:!0},{name:"Pre Launch Activities",value:12,checked:!0}]}],b=[],L=[{name:"Header",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Videos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Photos",options:{Small:2,Medium:4,Large:6},choosen:""},{name:"Music",options:{Small:2,Medium:3,Large:5},choosen:""},{name:"Tour",options:{Small:2,Medium:3,Large:5},choosen:""},{name:"Hero + Carosual",options:{Small:4,Medium:4,Large:4},choosen:""},{name:"Merch",options:{Small:2,Medium:3,Large:5},choosen:""}],D=[{Heading:"AddOns",detail:[{name:"Mailing List Block (in Page)",value:12,checked:!1},{name:"Turnkey LightBox",value:4,checked:!1},{value:4,name:"Turnkey Toaster",checked:!1},{value:2,name:"Cookie Banner",checked:!1},{value:4,name:"Mailing List Page",checked:!1},{value:4,name:"Song Kick Widget",checked:!1}]}],N=[{Heading:"Mandatory",detail:[{name:"Site cleanup",value:4,checked:!0},{name:"DTM",value:8,checked:!0},{name:"404/403  Page",value:4,checked:!0},{name:"SEO/Favicon",value:4,checked:!0},{name:"Footer Section(Without Mailing List)",value:4,checked:!0},{name:"Pre Launch Activities",value:12,checked:!0}]}],x=[],y=[],M={externalEffort:0,externalEffortName:"",externalEffortError:""},j=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).InitialEffortSet=function(){n.state.activeStep===O.length&&n.TotalEffortCalculation(4)},n.handleOnClickStepper=function(e){e==O.length?n.TotalEffortCalculation(O.length,e):n.setState({activeStep:e},(function(){n.InitialEffortSet()}))},n.TotalEffortCalculation=function(e,a){var t=0,i={};y=[],a==e&&(n.state.essentialOriginalData.map((function(e){i={},""!=e.choosen&&(i.name=e.name+" - "+e.choosen,i.value=e.options[e.choosen],i.header="Essential",y.push(i),t+=e.options[e.choosen])})),n.state.addOnsOriginalData.map((function(e){return e.detail.map((function(e){e.checked&&(e.header="AddOns",y.push(e),t+=e.value)}))})),n.state.mandatoryOriginalData.map((function(e){return e.detail.map((function(e){e.checked&&(e.header="Mandatory",y.push(e),t+=e.value)}))})),n.state.customLoadData.map((function(e){y.push(e),e.header="Custom",t+=parseInt(e.value)}))),n.setState({calculationEffortData:y,totalEffort:t,activeStep:a})},n.EstimationCalculation=function(e){S.map((function(a){e.target.name==a.name&&(a.choosen=e.target.value.toString())})),n.setState({essentialOriginalData:S})},n.AddOnsCalculation=function(e){y=[],k.map((function(a){return a.detail.map((function(a){a.checked=a.name===e.target.name?e.target.checked:a.checked}))})),n.setState({addOnsOriginalData:k})},n.MandatoryCalculation=function(e){y=[],C.map((function(a){return a.detail.map((function(a){a.checked=a.name===e.target.name?e.target.checked:a.checked}))})),n.setState({mandatoryOriginalData:C})},n.handleOnClickNext=function(){var e=n.state.activeStep+1;n.TotalEffortCalculation(O.length,e)},n.handleOnClickBack=function(){var e=n.state.activeStep-1;n.setState({activeStep:e})},n.handleOnClickFinish=function(){n.setState({activeStep:1,customLoadData:x,essentialOriginalData:L,addOnsOriginalData:D,mandatoryOriginalData:N})},n.addEffort=function(){var e=n.componentRef.current.externalEffortNameRef.current.value,a=n.componentRef.current.externalEffortRef.current.value;if(a>0&&""!==e){var t={},i=[];t.name=e,t.value=a,(i=n.state.customLoadData).push(t),n.setState({customLoadData:i,externalError:"",initialState:Object(l.a)(Object(l.a)({},n.state.initialState),{},{externalEffort:0,externalEffortName:""})})}else n.setState({externalError:"Invalid value of Effort and Hours"})},n.state={activeStep:1,essentialOriginalData:S,addOnsOriginalData:k,mandatoryOriginalData:C,calculationEffortData:y,customLoadData:b,totalEffort:0,initialState:M,externalError:""},n.componentRef=i.a.createRef(),n}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," Effort Calculator "),i.a.createElement("hr",null),i.a.createElement("br",null),i.a.createElement(h.a,{steps:O,activeStep:this.state.activeStep,onSelect:this.handleOnClickStepper,showNumber:!1}),i.a.createElement("div",{style:{marginTop:"20px"}},1===this.state.activeStep?i.a.createElement(f,{essentialLoadData:this.state.essentialOriginalData,FindCalculation:this.EstimationCalculation}):2===this.state.activeStep?i.a.createElement(p,{addOnsLoadData:this.state.addOnsOriginalData,FindCalculation:this.AddOnsCalculation}):3===this.state.activeStep?i.a.createElement(E,{mandatoryLoadData:this.state.mandatoryOriginalData,FindCalculation:this.MandatoryCalculation}):4===this.state.activeStep?i.a.createElement(g,{externalError:this.state.externalError,ref:this.componentRef,initialState:this.state.initialState,customLoadData:this.state.customLoadData,addEffort:this.addEffort}):i.a.createElement(v,{totalEffort:this.state.totalEffort,CalculationEffortData:y,name:this.state.totalEffort,addOnEffort:this.state.addOnsEffort})),i.a.createElement("div",{className:"button"},i.a.createElement("div",{className:"btn1"},1===this.state.activeStep?"":i.a.createElement("input",{type:"button",value:"Back",onClick:this.handleOnClickBack})),i.a.createElement("div",{className:"btn2"},i.a.createElement("input",{type:"button",value:this.state.activeStep===O.length?"Finish":"Next",onClick:this.state.activeStep===O.length?this.handleOnClickFinish:this.handleOnClickNext}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.310748f4.chunk.js.map