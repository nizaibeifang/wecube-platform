(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a02a2e8"],{"1c4c":function(t,e,n){"use strict";var a=n("9b43"),r=n("5ca1"),i=n("4bf8"),s=n("1fa8"),c=n("33a4"),o=n("9def"),u=n("f1ae"),l=n("27ee");r(r.S+r.F*!n("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,p,d=i(t),f="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,b=0,v=l(d);if(g&&(h=a(h,m>2?arguments[2]:void 0,2)),void 0==v||f==Array&&c(v))for(e=o(d.length),n=new f(e);e>b;b++)u(n,b,g?h(d[b],b):d[b]);else for(p=v.call(d),n=new f;!(r=p.next()).done;b++)u(n,b,g?s(p,h,[r.value,b],!0):r.value);return n.length=b,n}})},"1e21":function(t,e,n){"use strict";n.r(e);n("8e6e"),n("456d"),n("28a5"),n("5df3"),n("1c4c"),n("55dd"),n("7514");var a=n("bd86"),r=(n("7f7f"),n("6b54"),n("ac6a"),n("96cf"),n("3b8d")),i=n("75fc"),s=n("aa22");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){Object(a["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var u={data:function(){return{loading:!1,opt:[],rootCiTypeOption:[],allCmdbAttrs:[],allCi:[],currentValue:{id:"",label:""}}},props:{value:{type:Object,required:!1},rootCiType:{default:""},allCiTypes:{type:Array,required:!0},cmdbColumnSource:{default:""}},watch:{value:function(t){},cmdbColumnSource:function(t){},rootCiType:function(t){this.allCmdbAttrs=[];var e=this.allCi.find(function(e){return e.ciTypeId===t});if(e){var n={name:e.name,ciTypeName:e.name,refName:e.name,ciTypeId:e.ciTypeId,id:e.ciTypeId,attrId:null};this.allCmdbAttrs.push({val:e.name,type:"root",color:"#FFD225",options:[n]})}this.$emit("input",this.getValue(this.allCmdbAttrs))}},mounted:function(){this.restoreOpeation(),this.formatAllCiType()},methods:{restoreOpeation:function(){var t=this;if(this.cmdbColumnSource){var e={ref:"#FFD225",attr:"#9BC418",root:""},n=JSON.parse(this.cmdbColumnSource),a=[];n.forEach(function(){var n=Object(r["a"])(regeneratorRuntime.mark(function n(r){var i,c,u,l,p,d,f;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(i=[],"root"===r.t&&(i=[{ciTypeName:r.v,refName:r.v,ciTypeId:r.id,attrId:null}]),"ref"!==r.t){n.next=10;break}return n.next=5,Object(s["Eb"])(r.id);case 5:c=n.sent,u=c.status,l=c.data,c.message,"OK"===u&&(i=l.map(function(t){return o({},t,{ciTypeName:t.name,refName:t.refName,ciTypeId:t.ciTypeId,attrId:t.refPropertyId})}));case 10:if("attr"!==r.t){n.next=18;break}return n.next=13,Object(s["cb"])(r.id);case 13:p=n.sent,d=p.status,f=p.data,p.message,"OK"===d&&(i=f.map(function(e){return o({},e,{ciTypeName:"ref"===e.inputType?t.allCi.find(function(t){return t.ciTypeId===e.referenceId}).name:t.allCi.find(function(t){return t.ciTypeId===r.id}).name,refName:e.name,ciTypeId:r.id,attrId:e.ciTypeAttrId})}));case 18:a.push({color:e[r.t],type:r.t,val:r.v,options:i});case 19:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()),this.allCmdbAttrs=a,this.$emit("input",this.getValue(a))}},rootChange:function(t){this.allCmdbAttrs=[this.allCmdbAttrs.shift()],this.getNextRef(t.data),this.$emit("input",this.getValue(this.allCmdbAttrs))},selectChange:function(t,e){var n=t.charAt(t.length-1);this.getNextRef(n),this.$emit("input",this.getValue(this.allCmdbAttrs))},getNextRef:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i,c,u,l,p,d,f,m,h,g,b,v=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.allCmdbAttrs[this.allCmdbAttrs.length-1].val,a=this.allCmdbAttrs[this.allCmdbAttrs.length-1].options.find(function(t){return t.refName===n}),r=a&&a.inputType&&"ref"===a.inputType,!a||a.inputType&&!r){t.next=21;break}if(i=r?a.referenceId:a.ciTypeId,"."!==e){t.next=13;break}return t.next=8,Object(s["cb"])(i);case 8:c=t.sent,u=c.status,l=c.data,p=c.message,"OK"===u?(d=l.map(function(t){return o({},t,{ciTypeName:"ref"===t.inputType?v.allCi.find(function(e){return e.ciTypeId===t.referenceId}).name:v.allCi.find(function(t){return t.ciTypeId===a.ciTypeId}).name,refName:t.name,ciTypeId:i,id:"ref"===t.inputType?t.referenceId:i,attrId:t.ciTypeAttrId})}),this.allCmdbAttrs.push({val:"",color:"#9BC418",type:"attr",options:d}),this.$emit("input",this.getValue(this.allCmdbAttrs))):this.$Message.error({content:p});case 13:if("-"!==e){t.next=21;break}return t.next=16,Object(s["Eb"])(i);case 16:f=t.sent,m=f.status,h=f.data,g=f.message,"OK"===m?(b=h.map(function(t){return o({},t,{ciTypeName:t.name,refName:t.refName,ciTypeId:t.ciTypeId,id:t.ciTypeId,attrId:t.refPropertyId})}),this.allCmdbAttrs.push({val:"",color:"#FFD225",type:"ref",options:b}),this.$emit("input",this.getValue(this.allCmdbAttrs))):this.$Message.error({content:g});case 21:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),formatAllCiType:function(){var t=this;this.allCiTypes.forEach(function(e){t.allCi=t.allCi.concat(Object(i["a"])(e.ciTypes))})},getValue:function(t){var e={cmdbColumnCriteria:[],cmdbColumnSource:[]},n={ciTypeId:"",ciTypeName:"",routine:[],attributes:[]};return t.forEach(function(a,r){var i="attr"===a.type?a.options.find(function(t){return t.name===a.val}):a.options.find(function(t){return t.refName===a.val}),s=r>0?t[r-1]:t[0];if(i){var c="ref"===a.type?s.options.find(function(t){return t.name===s.val}).id:i.ciTypeId;n.ciTypeId=i.ciTypeId,n.ciTypeName=i.ciTypeName,n.attributes=[{attrId:i.attrId,isCondition:!0,isDiaplayed:!0}],i.attrId&&n.routine.push(i.attrId),n.routine.push(i.ciTypeId),e.cmdbColumnSource.push({id:c,v:a.val,t:a.type})}}),e.cmdbColumnCriteria.push(n),e},changeValue:function(t,e){this.allCmdbAttrs=this.allCmdbAttrs.slice(0,e+1),this.$emit("input",this.getValue(this.allCmdbAttrs))}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[0===t.allCmdbAttrs.length?n("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择CI Type"}}):n("Input",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择CI Type",value:t.allCmdbAttrs[0].val},on:{"on-change":t.rootChange}}),t._v(" "),t._l(t.allCmdbAttrs,function(e,a){return a>0?n("Select",{key:a,style:{"border-radius":"4px",width:"150px",border:"1px solid "+e.color},attrs:{filterable:""},on:{"on-query-change":function(e){return t.selectChange(e,a)},"on-change":function(e){return t.changeValue(e,a)}},model:{value:e.val,callback:function(n){t.$set(e,"val",n)},expression:"attr.val"}},t._l(e.options,function(e){return n("Option",{key:e.attrId,attrs:{value:e.refName}},[t._v(t._s(e.ciTypeName+" ( "+e.refName+" )"))])}),1):t._e()})],2)},p=[],d=n("2455");function f(t){n("955a")}var m=!1,h=f,g=null,b=null,v=Object(d["a"])(u,l,p,m,h,g,b),y=v.exports,C=n("d52e"),I=n("2638"),O=n.n(I);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach(function(e){Object(a["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T={name:"refPayloadModal",props:{ciRulesFilters:{default:function(){return[]}}},data:function(){return{form:{},visibleSwap:!1}},methods:{handleSubmit:function(t){this.$emit("handleSubmit",this.form),this.visibleSwap=!1},swapModal:function(t){t||(this.visibleSwap=!1)},clickHandler:function(){this.visibleSwap=!0},getFormFilters:function(){var t=this,e=this.$createElement;return e("Form",{ref:"form",attrs:{value:this.form,"label-position":"top",inline:!0},on:{input:function(e){return t.form=e}}},[e("Row",[this.ciRulesFilters.map(function(e){return t.renderFormItem(e)}),e("Col",{attrs:{span:3}},[e("FormItem",{style:"position: relative; bottom: -22px;"},[e("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(){return t.handleSubmit("form")}}},["确认"])])])])])},renderFormItem:function(t){var e=this,n=this.$createElement,a={props:_({},t,{ciType:{id:t.ciTypeId}}),style:{width:"100%"}},r=function(t){switch(t.inputType){case"select":return n("WeSelect",O()([{on:{input:function(n){return e.form[t.ciTypeAttrId]=n}},attrs:{value:e.form[t.ciTypeAttrId],filterable:!0,clearable:!0}},a,{attrs:{options:t.options}}]));case"ref":return n("RefSelect",O()([{on:{input:function(n){return e.form[t.ciTypeAttrId]=n}},attrs:{value:e.form[t.ciTypeAttrId]}},a]));default:return n("div")}};return n("Col",{attrs:{span:t.span||3}},[n("FormItem",{attrs:{label:t.name,prop:t.name},key:t.name},[r(t)])])}},render:function(t){var e=this;return t("div",[t("Button",{on:{click:this.clickHandler}},["配置CI过滤规则"]),t("Modal",{attrs:{title:"CI过滤规则",value:this.visibleSwap,"footer-hide":!0,"mask-closable":!1,scrollable:!0,width:70},on:{"on-visible-change":function(t){return e.swapModal(t)}}},[this.visibleSwap&&t("div",[this.getFormFilters()])])])}};function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach(function(e){Object(a["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var S=[{label:"显示详情",props:{type:"info",size:"small"},actionType:"showLogDetails"}],k={components:{AttrSelect:y,AttrInput:C["a"],refPayloadModal:T},data:function(){return{ciTypesObj:{},ciTypeAttributeObj:{},allAvailiableHosts:[],selectHosts:[],availiableHostsWithPort:[],ciStatus:[],plugins:[],ciTypes:[],pluginInterfaces:[],selectedCiType:"",selectedCiTypeIdAndName:{},currentPlugin:{},currentCiTyPeAttr:[],allInstances:[],currentPackageId:0,currentInstanceId:0,createIpValue:"",form:{},tableData:[],totalTableData:[],innerActions:S,tableColumns:[{title:"插件运行实例",key:"instance",inputKey:"instance",searchSeqNo:1,displaySeqNo:1,component:"WeSelect",isMultiple:!0,placeholder:"插件运行实例",span:5,width:"200px",options:[]},{title:"文件名",key:"file_name",inputKey:"file_name",searchSeqNo:2,displaySeqNo:2,component:"Input",isNotFilterable:!0,placeholder:"文件名",width:"200px"},{title:"行号",key:"line_number",inputKey:"line_number",searchSeqNo:3,displaySeqNo:3,component:"Input",isNotFilterable:!0,placeholder:"行号",width:"100px"},{title:"匹配内容",key:"log",inputKey:"log",searchSeqNo:4,displaySeqNo:4,component:"Input",placeholder:"支持正则表达式"}],pagination:{pageSize:10,currentPage:1,total:0},seachFilters:[],logDetailsModalVisible:!1,logDetails:"",ciRulesFilters:[],ciRulesPayload:[],isLoading:!1,defaultCreateParams:""}},watch:{currentPlugin:{handler:function(t){console.log(t)},deep:!0},selectedCiType:{handler:function(t){this.selectCiType({value:t})},immediate:!0}},methods:{getAllCITypesByLayerWithAttr:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["A"])(["notCreated","created","dirty","decommissioned"]);case 2:e=t.sent,n=e.status,a=e.data,e.message,"OK"===n&&(r={},i={},a.forEach(function(t){t.ciTypes instanceof Array&&t.ciTypes.forEach(function(t){r[t.ciTypeId]=t,t.attributes instanceof Array&&t.attributes.forEach(function(t){i[t.ciTypeAttrId]=t})})}),this.ciTypesObj=r,this.ciTypeAttributeObj=i);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageChange:function(t){this.pagination.currentPage=t,this.handlePaginationByFE()},pageSizeChange:function(t){this.pagination.pageSize=t,this.handlePaginationByFE()},actionFun:function(t,e){"showLogDetails"===t&&this.getLogDetail(e)},getCIRulesPayload:function(t){for(var e in this.ciRulesPayload=[],t)this.ciRulesPayload.push({cmdbAttributeId:e,filteringValues:t[e]})},getCiStatus:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={filters:[{name:"cat.catId",operator:"eq",value:e}]},t.next=3,Object(s["Q"])(n);case 3:a=t.sent,r=a.data,i=a.status,a.message,"OK"===i&&(this.ciStatus=r.contents.map(function(t){return{value:t.codeId,label:t.value||""}}));case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getLogDetail:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={inputs:[{file_name:e.file_name,line_number:e.line_number,relate_line_count:10}]},t.next=3,Object(s["Ab"])(e.instanceId,n);case 3:a=t.sent,r=a.data,i=a.status,a.message,"OK"===i&&(this.logDetailsModalVisible=!0,this.logDetails=r.outputs[0].logs.toString());case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),handleSubmit:function(t){this.seachFilters=t,this.getTableData()},regist:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.pluginSave();case 2:if(e=t.sent,"OK"!==e.status){t.next=11;break}return t.next=6,Object(s["fc"])(this.currentPlugin.id);case 6:n=t.sent,a=n.status,n.data,r=n.message,"OK"===a&&(this.$Notice.success({title:"Success",desc:r}),this.queryPluginAffterUpdate());case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pluginSave:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[],e=this.pluginInterfaces.map(function(t){return{interfaceFilterStatus:t.filterStatus?t.filterStatus.toString():"",interfaceResultStatus:t.resultStatus?t.resultStatus.toString():"",inputParameterMappings:t.inputParameters.map(function(t){var e=t.cmdbAttr.cmdbColumnCriteria.routine.slice(0,-1);return{routine:e,cmdbAttributeId:t.cmdbAttr.cmdbColumnCriteria.attribute.attrId,cmdbCiTypeId:e[e.length-1]&&e[e.length-1].ciTypeId,cmdbColumnSource:JSON.stringify(t.cmdbAttr.cmdbColumnSource),parameterId:t.id}}),interfaceId:t.id.toString(),interfaceName:t.name,outputParameterMappings:t.outputParameters.map(function(t){return{cmdbColumnSource:t.cmdbColumnSource,parameterId:t.id}})}}),n={cmdbCiTypeId:this.selectedCiTypeIdAndName.value,cmdbCiTypeName:this.selectedCiTypeIdAndName.label,configId:this.currentPlugin.id,pluginRegisteringModels:{filteringRuleConfigs:this.ciRulesPayload,interfaceConfigs:e}},t.next=5,Object(s["qc"])(n);case 5:return a=t.sent,r=a.status,i=a.data,c=a.message,"OK"===r&&(this.$Notice.success({title:"Success",desc:c}),this.queryPluginAffterUpdate()),t.abrupt("return",{status:r,data:i,message:c});case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),removePlugin:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["p"])(this.currentPlugin.id);case 2:e=t.sent,n=e.status,e.data,a=e.message,"OK"===n&&(this.$Notice.success({title:"Success",desc:a}),this.queryPluginAffterUpdate());case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),queryPluginAffterUpdate:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["O"])();case 2:e=t.sent,n=e.status,a=e.data,e.message,"OK"===n&&(this.plugins=a.map(function(t){return P({},t,{title:"".concat(t.name,"[").concat(t.version,"]"),id:t.id,expand:!1,checked:!1,children:t.pluginConfigs.map(function(t){return P({},t,{title:t.name,id:t.id,expand:!0,checked:!1})})})}),this.plugins.forEach(function(t){var e=t.pluginConfigs.find(function(t){return t.id===r.currentPlugin.id});e&&(r.currentPlugin=e)}));case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectCiType:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!e||!e.value){t.next=8;break}return this.pluginInterfaces.forEach(function(t){t.inputParameters.forEach(function(t){r.$set(t,"cmdbAttr",{})})}),this.selectedCiTypeIdAndName=e,t.next=5,Object(s["cb"])(e.value);case 5:n=t.sent,"OK"===n.status&&(this.currentCiTyPeAttr=n.data,a=n.data.find(function(t){return"state"===t.propertyName}).referenceId,this.getCiStatus(a)),this.setCiRulesFilters(e.value);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setCiRulesFilters:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=function(t){i.ciRulesFilters=[],t.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("select"!==e.inputType){t.next=11;break}return t.next=3,Object(s["mb"])(0,e.referenceId);case 3:a=t.sent,a.status,a.message,r=a.data,e["options"]=r.filter(function(t){return"active"===t.status}).map(function(t){return{label:t.code,value:t.codeId}}),i.ciRulesFilters.push(e),t.next=12;break;case 11:i.ciRulesFilters.push(e);case 12:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())},t.next=3,Object(s["db"])(e);case 3:a=t.sent,"OK"===a.status&&n(a.data);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),selectPlugin:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,i,c,o,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.selectedCiType=n.cmdbCiTypeId||"",this.currentPlugin=n,t.next=4,Object(s["Bb"])(n.id);case 4:if(a=t.sent,r=a.status,i=a.data,a.message,"OK"===r&&(this.pluginInterfaces=i.map(function(t){return P({},t,{inputParameters:t.inputParameters.sort(function(t,e){return t.id-e.id}),outputParameters:t.outputParameters.sort(function(t,e){return t.id-e.id})})}),this.defaultCreateParams=n.containerStartParam),c=n.cmdbCiTypeId,!c){t.next=17;break}return this.setCiRulesFilters(c),this.ciTypes.forEach(function(t){var e=t.ciTypes.find(function(t){return t.ciTypeId===c});e&&(u.selectedCiTypeIdAndName={value:e.ciTypeId,label:e.name})}),t.next=15,Object(s["cb"])(c);case 15:o=t.sent,this.currentCiTyPeAttr=o.data;case 17:n.pluginConfigs&&(this.selectHosts=[],this.availiableHostsWithPort=[],this.currentPackageId=n.id,this.getAllInstancesByPackageId(this.currentPackageId)),this.getAvailableContainerHosts(),this.resetLogTable();case 20:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),resetLogTable:function(){this.tableData=[],this.totalTableData=[],this.$refs.table&&this.$refs.table.reset()},getAvailableContainerHosts:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["Y"])();case 2:e=t.sent,n=e.data,a=e.status,e.message,"OK"===a&&(this.allAvailiableHosts=n);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectHost:function(t){this.selectHosts=t},getAvailablePortByHostIp:function(){var t=this;this.availiableHostsWithPort=[],this.selectHosts.forEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){var a,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["Z"])(n);case 2:a=e.sent,r=a.data,i=a.status,a.message,"OK"===i&&t.availiableHostsWithPort.push({ip:n,port:r,createParams:t.defaultCreateParams});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},createPluginInstanceByPackageIdAndHostIp:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n,a){var r,i,c,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=!1,(a.indexOf("{{")>=0||a.indexOf("}}")>=0)&&(this.$Notice.warning({title:"Warning",desc:"请替换启动参数中的差异化参数（例如：{{parameter}}）"}),r=!0),!r){t.next=4;break}return t.abrupt("return");case 4:return this.isLoading=!0,i={additionalCreateContainerParameters:a},t.next=8,Object(s["n"])(this.currentPlugin.id,e,n,i);case 8:c=t.sent,c.data,o=c.status,c.message,"OK"===o&&this.getAllInstancesByPackageId(this.currentPackageId),this.isLoading=!1;case 14:case"end":return t.stop()}},t,this)}));function e(e,n,a){return t.apply(this,arguments)}return e}(),getAllInstancesByPackageId:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,Object(s["K"])(e);case 3:n=t.sent,a=n.data,r=n.status,n.message,"OK"===r&&(this.allInstances=a.map(function(t){if("REMOVED"!==t.status)return{id:t.id,hostIp:t.host,port:t.port,displayLabel:t.host+":"+t.port}}),this.getHostsForTableFilter()),this.isLoading=!1;case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getHostsForTableFilter:function(){this.tableColumns[0].options=this.allInstances.map(function(t){return{label:t.hostIp+":"+t.port,value:t.id}})},removePluginInstance:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["ic"])(e);case 2:n=t.sent,n.data,a=n.status,r=n.message,"OK"===a&&(this.$Notice.success({title:"Success",desc:r}),this.getAllInstancesByPackageId(this.currentPackageId));case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getTableData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i,c,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.seachFilters.length<2)){t.next=2;break}return t.abrupt("return");case 2:return e={instanceIds:this.seachFilters[0].value,pluginRequest:{inputs:[{key_word:this.seachFilters[1].value}]}},t.next=5,Object(s["Zb"])(e);case 5:if(n=t.sent,a=n.status,r=n.data,n.message,"OK"===a){for(c in i=function(t){var e=[];o.totalTableData=e.concat(r[t].outputs.map(function(e){return P({instance:o.allInstances.find(function(e){return e.id===+t}).displayLabel,instanceId:t},e)}))},r)i(c);this.handlePaginationByFE()}case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handlePaginationByFE:function(){this.pagination.total=this.totalTableData.length;var t=Array.from(this.totalTableData);this.tableData=t.splice((this.pagination.currentPage-1)*this.pagination.pageSize,this.pagination.pageSize)},getAllCiTypesByCatalog:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["B"])();case 2:e=t.sent,n=e.status,a=e.data,e.message,"OK"===n&&(this.ciTypes=a);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAllPluginPkgs:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["O"])();case 2:e=t.sent,n=e.status,a=e.data,e.message,"OK"===n&&(this.plugins=a.map(function(t){return P({},t,{title:"".concat(t.name,"[").concat(t.version,"]"),id:t.id,expand:!1,checked:!1,children:t.pluginConfigs.map(function(t){return P({},t,{title:t.name,id:t.id,expand:!0,checked:!1})})})}));case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSuccess:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n,a){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$Notice.success({title:"Success",desc:e.message||""}),"OK"!==e.status){t.next=9;break}return t.next=4,Object(s["Sb"])(e.data.id);case 4:r=t.sent,r.message,r.status,r.data,this.getAllPluginPkgs();case 9:case"end":return t.stop()}},t,this)}));function e(e,n,a){return t.apply(this,arguments)}return e}(),onError:function(t,e,n){this.$Notice.error({title:"Error",desc:e.message||""})}},created:function(){this.getAllCITypesByLayerWithAttr(),this.getAllPluginPkgs(),this.getAllCiTypesByCatalog()},computed:{setUploadActionHeader:function(){return{"X-XSRF-TOKEN":document.cookie.split("=")[1]}}}},A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticStyle:{padding:"20px"}},[t.isLoading?n("Spin",{attrs:{size:"large",fix:""}},[n("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"44"}}),t._v(" "),n("div",[t._v("加载中...")])],1):t._e(),t._v(" "),n("Col",{attrs:{span:"6"}},[n("Row",[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("upload_plugin_pkg_title")))]),t._v(" "),n("Upload",{attrs:{"show-upload-list":"",accept:".zip",name:"zip-file","on-success":t.onSuccess,"on-error":t.onError,action:"/plugin/upload",headers:t.setUploadActionHeader}},[n("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("\n            "+t._s(t.$t("upload_plugin_btn"))+"\n          ")])],1)],1)],1),t._v(" "),n("Row",{staticClass:"plugins-tree-container"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("plugins_list")))]),t._v(" "),n("Tree",{attrs:{data:t.plugins},on:{"on-select-change":t.selectPlugin}})],1)],1)],1),t._v(" "),n("Col",{attrs:{span:"17",offset:"1"}},[Object.keys(t.currentPlugin).length>0?n("div",[t.currentPlugin.children?n("div",[n("Row",{staticClass:"instances-container"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("实例")]),t._v(" "),n("Row",[n("Select",{staticStyle:{width:"40%"},attrs:{multiple:"","max-tag-count":4},on:{"on-change":t.selectHost},model:{value:t.selectHosts,callback:function(e){t.selectHosts=e},expression:"selectHosts"}},t._l(t.allAvailiableHosts,function(e){return n("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}),1),t._v(" "),n("Button",{attrs:{size:"small",type:"success"},on:{click:t.getAvailablePortByHostIp}},[t._v("端口预览")]),t._v(" "),t.availiableHostsWithPort.length>0?n("div",[n("p",{staticStyle:{"margin-top":"20px"}},[t._v("可用端口:")]),t._v(" "),t._l(t.availiableHostsWithPort,function(e){return n("div",{key:e.ip+e.port},[n("div",{staticClass:"instance-item-container",staticStyle:{"border-bottom":"1px solid gray",padding:"10px 0"}},[n("div",{staticClass:"instance-item"},[t._v("\n                      "+t._s(e.ip+":"+e.port)+"\n                    ")]),t._v(" "),n("span",[t._v("启动参数:")]),t._v(" "),n("Input",{staticStyle:{width:"50%"},attrs:{type:"textarea",autosize:!0},model:{value:e.createParams,callback:function(n){t.$set(e,"createParams",n)},expression:"item.createParams"}}),t._v(" "),n("Button",{attrs:{size:"small",type:"success"},on:{click:function(n){return t.createPluginInstanceByPackageIdAndHostIp(e.ip,e.port,e.createParams)}}},[t._v(t._s(t.$t("create")))])],1)])})],2):t._e()],1),t._v(" "),n("Row",[n("p",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$t("running_node"))+":")]),t._v(" "),0===t.allInstances.length?n("div",[t._v("暂无运行节点")]):n("div",t._l(t.allInstances,function(e){return n("div",{key:e.id},[n("div",{staticClass:"instance-item-container"},[n("div",{staticClass:"instance-item"},[t._v(t._s(e.displayLabel))]),t._v(" "),n("Button",{attrs:{size:"small",type:"error"},on:{click:function(n){return t.removePluginInstance(e.id)}}},[t._v(t._s(t.$t("ternmiante")))])],1)])}),0)])],1),t._v(" "),n("Card",{staticStyle:{"margin-top":"20px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("日志查询")]),t._v(" "),n("div",{staticStyle:{padding:"0 0 50px 0"}},[n("WeTable",{ref:"table",attrs:{tableData:t.tableData,tableInnerActions:t.innerActions,tableColumns:t.tableColumns,pagination:t.pagination,showCheckbox:!1,tableHeight:"650"},on:{actionFun:t.actionFun,handleSubmit:t.handleSubmit,pageChange:t.pageChange,pageSizeChange:t.pageSizeChange}})],1),t._v(" "),n("Modal",{attrs:{title:"日志详情","footer-hide":"",width:"70"},model:{value:t.logDetailsModalVisible,callback:function(e){t.logDetailsModalVisible=e},expression:"logDetailsModalVisible"}},[n("highlight-code",{staticStyle:{"white-space":"pre-wrap"},attrs:{lang:"json"}},[t._v("\n                "+t._s(t.logDetails)+"\n              ")])],1)],1)],1)],1):n("Form",{attrs:{model:t.form}},[n("Row",[n("Col",{attrs:{span:"6",offset:"0"}},[n("FormItem",{attrs:{"label-width":50,label:"Plugin"}},[n("Input",{attrs:{disabled:""},model:{value:t.currentPlugin.name,callback:function(e){t.$set(t.currentPlugin,"name",e)},expression:"currentPlugin.name"}})],1)],1),t._v(" "),n("Col",{attrs:{span:"6",offset:"1"}},[n("FormItem",{attrs:{"label-width":100,label:"CI Type"}},[n("Select",{attrs:{"label-in-value":""},on:{"on-change":t.selectCiType},model:{value:t.selectedCiType,callback:function(e){t.selectedCiType=e},expression:"selectedCiType"}},t._l(t.ciTypes,function(e){return n("OptionGroup",{key:e.code,attrs:{label:e.value||"-"}},t._l(e.ciTypes,function(e){return n("Option",{key:e.ciTypeId,attrs:{value:e.ciTypeId||""}},[t._v(t._s(e.name))])}),1)}),1)],1)],1),t._v(" "),""!==t.selectedCiType?n("Col",{staticStyle:{"margin-top":"-5px"},attrs:{span:"6",offset:"1"}},[n("refPayloadModal",{attrs:{ciRulesFilters:t.ciRulesFilters},on:{handleSubmit:t.getCIRulesPayload}})],1):t._e()],1),t._v(" "),n("hr"),t._v(" "),n("Row",{staticStyle:{"margin-bottom":"10px","margin-top":"10px"}},[n("Col",{attrs:{span:"2"}},[n("span",[t._v("操作")])]),t._v(" "),n("Col",{attrs:{span:"2"}},[n("span",[t._v("参数类型")])]),t._v(" "),n("Col",{attrs:{span:"5"}},[n("span",[t._v("数据状态")])]),t._v(" "),n("Col",{attrs:{span:"3"}},[n("span",[t._v("参数名")])]),t._v(" "),n("Col",{attrs:{span:"6",offset:"0"}},[n("span",[t._v("CMDB属性")])])],1),t._v(" "),t._l(t.pluginInterfaces,function(e,a){return n("Row",{key:e.id,staticStyle:{"margin-top":"20px","border-bottom":"1px solid #2c3e50"}},[n("Col",{attrs:{span:"2"}},[t._v(t._s(e.name))]),t._v(" "),n("Col",{attrs:{span:"22"}},[n("Row",[n("Col",{attrs:{span:"2"}},[n("FormItem",{attrs:{"label-width":0}},[n("span",[t._v("输入参数")])])],1),t._v(" "),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{"label-width":0}},[n("Select",{attrs:{clearable:""},model:{value:e.filterStatus,callback:function(n){t.$set(e,"filterStatus",n)},expression:"interfaces.filterStatus"}},t._l(t.ciStatus,function(e){return n("Option",{key:e.value,attrs:{value:e.value.toString()}},[t._v(t._s(e.label))])}),1)],1)],1),t._v(" "),n("Col",{attrs:{span:"17",offset:"1"}},t._l(e.inputParameters,function(e){return n("Row",{key:e.id},[n("Col",{attrs:{span:"5"}},[n("FormItem",{attrs:{"label-width":0}},[n("span",[t._v(t._s(e.name))])])],1),t._v(" "),n("Col",{attrs:{span:"18"}},[n("FormItem",{attrs:{"label-width":0}},[n("AttrInput",{attrs:{allCiTypes:t.ciTypes,cmdbColumnSource:e.cmdbColumnSource,rootCiType:t.selectedCiType,ciTypesObj:t.ciTypesObj,ciTypeAttributeObj:t.ciTypeAttributeObj},model:{value:e.cmdbAttr,callback:function(n){t.$set(e,"cmdbAttr",n)},expression:"param.cmdbAttr"}})],1)],1)],1)}),1)],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"2"}},[n("FormItem",{attrs:{"label-width":0}},[n("span",[t._v("输出参数")])])],1),t._v(" "),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{"label-width":0}},[n("Select",{attrs:{clearable:""},model:{value:e.resultStatus,callback:function(n){t.$set(e,"resultStatus",n)},expression:"interfaces.resultStatus"}},t._l(t.ciStatus,function(e){return n("Option",{key:e.value,attrs:{value:e.value.toString()}},[t._v(t._s(e.label))])}),1)],1)],1),t._v(" "),n("Col",{attrs:{span:"17",offset:"1"}},t._l(e.outputParameters,function(e){return n("Row",{key:e.id+1e3},[n("Col",{attrs:{span:"5"}},[n("FormItem",{attrs:{"label-width":0}},[n("span",[t._v(t._s(e.name))])])],1),t._v(" "),n("Col",{attrs:{span:"18"}},[n("FormItem",{attrs:{"label-width":0}},[n("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.cmdbColumnSource,callback:function(n){t.$set(e,"cmdbColumnSource",n)},expression:"outPut.cmdbColumnSource"}},t._l(t.currentCiTyPeAttr,function(t){return n("Option",{key:t.propertyName,attrs:{value:t.propertyName,label:t.name}})}),1)],1)],1)],1)}),1)],1)],1)],1)}),t._v(" "),n("Row",{staticStyle:{margin:"20px auto"}},[n("Col",{attrs:{span:"5",offset:"10"}},["NOT_CONFIGURED"===t.currentPlugin.status||"CONFIGURED"===t.currentPlugin.status||"DECOMMISSIONED"===t.currentPlugin.status?n("Button",{attrs:{type:"primary"},on:{click:t.pluginSave}},[t._v("保存")]):t._e(),t._v(" "),"CONFIGURED"===t.currentPlugin.status||"DECOMMISSIONED"===t.currentPlugin.status?n("Button",{attrs:{type:"primary"},on:{click:t.regist}},[t._v("注册")]):t._e(),t._v(" "),"ONLINE"===t.currentPlugin.status?n("Button",{attrs:{type:"error"},on:{click:t.removePlugin}},[t._v("注销")]):t._e()],1)],1)],2)],1):t._e()])],1)},j=[];function R(t){n("6322")}var N=!1,F=R,D="data-v-59a15466",E=null,$=Object(d["a"])(k,A,j,N,F,D,E);e["default"]=$.exports},"5df3":function(t,e,n){"use strict";var a=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=a(e,n),this._i+=t.length,{value:t,done:!1})})},6322:function(t,e,n){var a=n("ab15");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("2fb2").default;r("4194eb58",a,!0,{})},"645c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".container .ivu-select-selection{border:none;-webkit-box-shadow:0 0 0 0;box-shadow:0 0 0 0}",""])},"955a":function(t,e,n){var a=n("645c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("2fb2").default;r("a6947678",a,!0,{})},ab15:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".plugins-tree-container[data-v-59a15466]{margin-top:30px}.instances-container[data-v-59a15466]{height:300px}.instances-container .instance-query-input[data-v-59a15466]{width:200px;margin-right:20px}.instances-container .instance-item-container[data-v-59a15466]{line-height:30px;overflow-y:auto}.instances-container .instance-item-container .instance-item[data-v-59a15466]{width:220px;display:inline-block}.result-container[data-v-59a15466]{max-height:700px;overflow-y:auto}.ivu-form-item[data-v-59a15466]{margin-bottom:10px;margin-top:-6px}",""])}}]);
//# sourceMappingURL=chunk-9a02a2e8.45115509.js.map