webpackJsonp([1],{"2mV7":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("gNcp"),a={};n.keys().forEach(function(e){"./index.js"!==e&&(a[e.replace(/(\.\/|\.js)/g,"")]=n(e).default)}),t.default=a},"2o6I":function(e,t){},"2uFj":function(e,t,r){"use strict";var n="";n="",t.a={URL:n}},"5TEl":function(e,t){e.exports=d3},"7zck":function(e,t){},Fh1G:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{drawer:!1,groupNameError:!1,snackbarVisible:!1},actions:{toggleDrawer:function(e){e.commit("SET_DRAWER",!e.state.drawer)},setGroupNameError:function(e,t){e.commit("SET_GROUP_NAME_ERROR",t)},setSnackBar:function(e,t){e.commit("SET_SNACK_BAR",t)}},mutations:{SET_DRAWER:function(e,t){e.drawer=t},SET_GROUP_NAME_ERROR:function(e,t){e.groupNameError=t},SET_SNACK_BAR:function(e,t){e.snackbarVisible=t}}}},HcYh:function(e,t){},KChb:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("3EgV"),i=r.n(a),o=(r("7zck"),r("gJtD"),r("FfS/")),s=r.n(o),c=(r("5TEl"),{methods:{checkLogin:function(){var e=this;this.$store.state.user.isLogin||this.$store.dispatch("user/checkLogin").then(function(){console.log("HIHI"),e.$store.dispatch("creator/getGroup")})},toggleOperation:function(){this.$store.dispatch("creator/toggleOperation")}}}),l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-toolbar",{attrs:{color:"teal accent-4",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.$store.dispatch("interface/toggleDrawer")}}}),e._v(" "),r("v-toolbar-title",{staticClass:"headline font-weight-bold no-selected"},[e._v("\n    DataStore"+e._s("local"===e.$store.state.creator.operation?" Local/Group/"+e.$store.state.creator.groupName:" Cloud/Group/"+e.$store.state.creator.netBuffer.select)+"\n  ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",icon:""},on:{click:e.toggleOperation}},[r("v-icon",[e._v("\n      "+e._s("local"===e.$store.state.creator.operation?"people":"cloud")+"\n    ")])],1),e._v(" "),r("v-btn",{attrs:{flat:"",icon:""},on:{click:e.checkLogin}},[r("v-icon",[e._v(e._s(e.$store.state.user.isLogin?"lens":"panorama_fish_eye"))])],1)],1)},staticRenderFns:[]};var u=r("VU/8")(c,l,!1,function(e){r("gVtj")},null,null).exports,f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{value:e.$store.state.interface.drawer,fixed:"",app:""}},[r("v-list",[r("v-list-tile",{on:{click:function(t){e.$router.replace("/")}}},[r("v-list-tile-action",[r("v-icon",[e._v("home")])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Home")])],1)],1),e._v(" "),r("v-list-tile",{on:{click:function(t){e.$router.replace("/creator/factory")}}},[r("v-list-tile-action",[r("v-icon",[e._v("build")])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Factory")])],1)],1),e._v(" "),r("v-list-tile",{on:{click:function(t){e.$router.replace("/creator/dStore")}}},[r("v-list-tile-action",[r("v-icon",[e._v("subject")])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v("DStore")])],1)],1),e._v(" "),r("v-list-tile",{on:{click:function(t){e.$router.replace("/viewer")}}},[r("v-list-tile-action",[r("v-icon",[e._v("visibility")])],1),e._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Viewer")])],1)],1),e._v(" "),r("v-list-group",{attrs:{"prepend-icon":"account_circle",value:"true"}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-title",[e._v("Users")])],1),e._v(" "),r("v-list-group",{attrs:{"no-action":"","sub-group":""}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-title",[e._v("Group")])],1),e._v(" "),e._l(e.$store.getters["creator/groupList"],function(t,n){return r("v-list-tile",{key:n,on:{click:function(r){e.switchTarget(t)}}},[r("v-list-tile-title",{domProps:{textContent:e._s(t)}})],1)})],2)],1)],1)],1)},staticRenderFns:[]};var d={data:function(){return{drawer:null,transitionName:"slide-left"}},watch:{$route:function(e,t){"/"===e.path?this.transitionName="slide-right":this.transitionName="slide-left"}},beforeMount:function(){var e=this;console.log(d3),this.$store.dispatch("user/checkLogin").then(function(t){e.$store.dispatch("creator/getGroup")})},components:{VAsider:r("VU/8")({methods:{switchTarget:function(e){var t=this;this.$store.dispatch("creator/setOperation","inject").then(function(){t.$store.dispatch("creator/setInjectGroup",e)})}}},f,!1,function(e){r("dtYP")},null,null).exports,VHeader:u}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",{attrs:{id:"inspire"}},[t("VAsider"),this._v(" "),t("VHeader"),this._v(" "),t("v-content",{staticClass:"bg-image"},[t("transition",{attrs:{name:this.transitionName}},[t("keep-alive",[t("router-view",{staticClass:"child-view"})],1)],1)],1),this._v(" "),t("v-footer",{attrs:{color:"teal accent-4",app:""}},[t("v-spacer"),this._v(" "),t("span",{staticClass:"white--text"},[this._v("© 2018  ")])],1)],1)},staticRenderFns:[]};var v=r("VU/8")(d,p,!1,function(e){r("O9/O")},null,null).exports,m=r("/ocq"),h={data:function(){return{isShownPath:!1,imagePath:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535489298937&di=42889babe658b1c1f5bf1ee9a51f69ab&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2F%25CE%25D2%25D4%25D9%25D2%25B2%25B2%25BB%25CB%25AE%25CC%25FB%25C1%25CB%2Fpic%2Fitem%2F1f26530aca9e1c8a63d98641.jpg",imagePathBuffer:"",target:"",snackbar:!1,y:"top",x:null,mode:"",timeout:2e3,text:"",groupName:"",rawVisible:!1}},watch:{isShownPath:function(e){!1===e&&""!==this.imagePathBuffer&&(this.imagePath=this.imagePathBuffer)}},methods:{seeRaw:function(){var e=this;this.rawVisible?this.rawVisible=!1:this.$store.dispatch("creator/preBuild").then(function(e){return console.log(e),e}).then(function(t){e.$store.dispatch("creator/buildAll",t).then(function(t){e.target=t,e.rawVisible=!0})})},upLoad:function(){var e=this;if(this.$store.state.user.isLogin)switch(this.$store.state.creator.operation){case"local":var t=this.$store.state.creator.groupName;""===t||/\s/.test(t)||this.$store.getters["creator/groupList"].some(function(e){return e===t})?this.$store.dispatch("interface/setGroupNameError",!0):this.$store.dispatch("creator/uploadData",this.$store.state.user.name).then(function(t){t.state.success&&(e.text="创建组成功",e.snackbar=!0,e.$store.dispatch("creator/getGroup"))});break;case"inject":this.$store.dispatch("creator/updateGroup",this.$store.state.user.name).then(function(t){t.state.success&&(e.text="修改组成功",e.snackbar=!0,e.$store.dispatch("creator/getGroup"))})}else this.text="您还未登陆",this.snackbar=!0},switchLocale:function(e){var t=this;this.$store.dispatch("faker/switchLocale",e).then(function(){t.$faker.locale=e})},changeImage:function(){this.isShownPath=!this.isShownPath},changeOperation:function(){this.$store.dispatch("creator/toggleOperation")},namingGroup:function(){this.$store.dispatch("creator/setLocalGroup",this.groupName)},deleteGroup:function(){var e=this;this.$store.state.user.isLogin?this.$store.dispatch("creator/deleteGroup",this.$store.state.user.name).then(function(t){t.state.success&&e.$store.dispatch("creator/getGroup")}):(this.text="您还未登陆",this.snackbar=!0)}}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"",column:""}},[r("v-flex",{attrs:{xs12:"",md10:"",lg9:""}},[r("v-card",[r("v-img",{attrs:{src:e.imagePath,height:"350px"},on:{dblclick:e.changeImage}}),e._v(" "),r("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.isShownPath,expression:"isShownPath"}],attrs:{box:"",label:"Image's URL"},model:{value:e.imagePathBuffer,callback:function(t){e.imagePathBuffer=t},expression:"imagePathBuffer"}}),e._v(" "),r("v-card-title",[r("div",[r("div",[r("v-text-field",{attrs:{error:e.$store.state.interface.groupNameError,label:"Group Name",clearable:""},on:{change:e.namingGroup},model:{value:e.groupName,callback:function(t){e.groupName=t},expression:"groupName"}})],1),e._v(" "),r("div",[r("v-select",{attrs:{items:e.$store.state.faker.localeType,label:"Language",value:e.$store.state.faker.langType},on:{change:e.switchLocale}})],1)])]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{flat:"",icon:"",color:"teal accent-4"},on:{click:e.seeRaw}},[r("v-icon",[e._v("visibility")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"teal accent-4"},on:{click:e.upLoad}},[r("v-icon",[e._v(e._s("local"===e.$store.state.creator.operation?"cloud_upload":"cached"))])],1),e._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:"inject"===e.$store.state.creator.operation,expression:"$store.state.creator.operation === 'inject'"}],attrs:{icon:"",flat:"",color:"error"},on:{click:e.deleteGroup}},[r("v-icon",[e._v("close")])],1)],1),e._v(" "),r("v-snackbar",{attrs:{bottom:"bottom"===e.y,left:"left"===e.x,"multi-line":"multi-line"===e.mode,right:"right"===e.x,timeout:e.timeout,top:"top"===e.y,vertical:"vertical"===e.mode,color:"teal accent-3"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                      "+e._s(e.text)+"\n                      "),r("v-btn",{attrs:{color:"white",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n                        Close\n                  ")])],1)],1)],1),e._v(" "),r("v-flex",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.rawVisible,expression:"rawVisible"}]},[e._v("\n            "+e._s(e.target)+"\n          ")])])],1)],1)},staticRenderFns:[]};var b=r("VU/8")(h,y,!1,function(e){r("OiFf")},null,null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{"text-xs-center":"",fluid:"","fill-height":""}},[t("v-layout",{attrs:{"justify-center":""}},[t("v-flex",[t("v-layout",{attrs:{column:""}},[t("v-flex",[t("transition",{attrs:{name:"slide-left"}},[t("keep-alive",[t("router-view",{staticClass:"child-view"})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var _=r("VU/8")({},g,!1,function(e){r("HcYh")},null,null).exports,k=r("Dd8w"),x=r.n(k),w=r("d7EF"),E=r.n(w),S=r("W3Iv"),T=r.n(S),N=r("fZjL"),$=r.n(N),B=(r("ZoQJ"),["String","Number","Boolean"]),O=["Object","Array"],j={data:function(){return{keyName:this.initialName,typePrimary:"String",isCustomType:!1,customField:"",typeAdvanced:"Array",fakerType:"",fakerTypeItem:"",selectedObject:"",selectedBoolean:!0,isAdvancedType:!1,count:0,showReName:!1}},props:{index:Number,initialName:String,belong:String},created:function(){var e=this,t=this.$store.state.creator.factory.entriesBuffer[this.index].value.descriptor.split("|");if("String"===t[0]||"Boolean"===t[0]||"Number"===t[0])if(this.typePrimary=t[0],/^\w+\.\w+$/.test(t[1])){var r=t[1].split(".");this.fakerType=r[0],this.fakerTypeItem=r[1]}else{var n=t[1].match(/^Custom\((.*)\)$/)[1];switch(this.isCustomType=!0,t[0]){case"String":this.customField=String(n);break;case"Number":this.customField=Number(n);break;case"Boolean":this.selectedBoolean="true"===n}}else if("Object"===t[0]||/^Array\(\d+\)$/.test(t[0]))if(this.isAdvancedType=!0,"Object"===t[0])-1!==$()(this.$store.getters["creator/workSpace"]).filter(function(t){return t!==e.belong}).indexOf(t[1])&&(this.typeAdvanced="Object",this.selectedObject=t[1]);else{var a=t[0].match(/^Array\((\d+)\)$/);a&&(this.typeAdvanced="Array",this.count=a[1],t[1]&&-1!==$()(this.$store.getters["creator/workSpace"]).filter(function(t){return t!==e.belong}).indexOf(t[1])&&(this.selectedObject=t[1]))}},computed:{totalType:function(){return this.isAdvancedType?[].concat(O):[].concat(B)}},methods:{save:function(){try{if(this.isAdvancedType)switch(this.typeAdvanced){case"Object":this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:"Object|"+this.selectedObject});break;case"Array":this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:"Array("+this.count+")|"+this.selectedObject})}else if(this.isCustomType)switch(this.typePrimary){case"String":this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:"String|Custom("+this.customField+")"});break;case"Number":this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:"Number|Custom("+this.customField+")"});break;case"Boolean":this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:"Boolean|Custom("+this.selectedBoolean+")"})}else this.fakerType&&this.fakerTypeItem&&this.$store.dispatch("creator/achieveEntriesBuffer",{index:this.index,descriptor:this.typePrimary+"|"+this.fakerType+"."+this.fakerTypeItem})}catch(e){console.log(e)}},handleClose:function(){this.$emit("deleteMe",this.index)}}},A={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-expansion-panel-content",[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",{staticClass:"header-font"},[e._v("\n          "+e._s(e.keyName)+"\n        ")]),e._v(" "),r("span",[e._v("\n          "+e._s(e.$store.state.creator.factory.entriesBuffer[e.index].value.descriptor)+"\n        ")])]),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{column:""}},[r("v-flex",[r("v-layout",[r("v-flex",{attrs:{xs6:""}},[r("v-layout",[r("v-flex",[r("v-switch",{staticClass:"mt-4",attrs:{label:"advanced"},model:{value:e.isAdvancedType,callback:function(t){e.isAdvancedType=t},expression:"isAdvancedType"}})],1),e._v(" "),r("v-flex",[r("v-switch",{staticClass:"mt-4",attrs:{label:"custom",disabled:e.isAdvancedType},model:{value:e.isCustomType,callback:function(t){e.isCustomType=t},expression:"isCustomType"}})],1)],1)],1),e._v(" "),r("v-flex",{attrs:{xs6:""}},[e.isAdvancedType?r("v-select",{attrs:{items:e.totalType,label:"Type"},model:{value:e.typeAdvanced,callback:function(t){e.typeAdvanced=t},expression:"typeAdvanced"}}):r("v-select",{attrs:{items:e.totalType,label:"Type"},model:{value:e.typePrimary,callback:function(t){e.typePrimary=t},expression:"typePrimary"}})],1)],1)],1),e._v(" "),r("v-flex",[r("v-layout",{directives:[{name:"show",rawName:"v-show",value:!e.isAdvancedType,expression:"!isAdvancedType"}]},[r("v-flex",{directives:[{name:"show",rawName:"v-show",value:!e.isCustomType,expression:"!isCustomType"}]},[r("v-layout",[r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:Object.keys(e.$store.state.faker.fakerType[e.typePrimary]),label:"firstType"},model:{value:e.fakerType,callback:function(t){e.fakerType=t},expression:"fakerType"}})],1),e._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:e.$store.state.faker.fakerType[e.typePrimary][e.fakerType],label:"secondType"},model:{value:e.fakerTypeItem,callback:function(t){e.fakerTypeItem=t},expression:"fakerTypeItem"}})],1)],1)],1),e._v(" "),r("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.isCustomType,expression:"isCustomType"}]},["String"===e.typePrimary||"Number"===e.typePrimary?r("v-text-field",{attrs:{type:"Number"===e.typePrimary?"number":"text",label:"value"},model:{value:e.customField,callback:function(t){e.customField=t},expression:"customField"}}):r("v-select",{attrs:{items:[!0,!1]},model:{value:e.selectedBoolean,callback:function(t){e.selectedBoolean=t},expression:"selectedBoolean"}})],1)],1),e._v(" "),r("v-layout",{directives:[{name:"show",rawName:"v-show",value:e.isAdvancedType,expression:"isAdvancedType"}]},[r("v-layout",[r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:Object.keys(e.$store.getters["creator/workSpace"]).filter(function(t){return t!==e.belong}),label:"advancedType"},model:{value:e.selectedObject,callback:function(t){e.selectedObject=t},expression:"selectedObject"}})],1),e._v(" "),"Array"===e.typeAdvanced?r("v-flex",{staticClass:"pb-2",attrs:{xs6:""}},[r("v-slider",{attrs:{"thumb-label":"always",label:"count"},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}})],1):e._e()],1)],1)],1),e._v(" "),r("v-flex",[r("v-toolbar",{attrs:{color:"white",flat:""}},[r("v-btn",{attrs:{icon:""},on:{click:function(t){e.showReName=!e.showReName}}},[r("v-icon",[e._v("edit")])],1),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.save}},[r("v-icon",[e._v("save")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",flat:"",color:"error"},on:{click:e.handleClose}},[r("v-icon",[e._v("close")])],1)],1)],1),e._v(" "),r("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.showReName,expression:"showReName"}]},[r("v-text-field",{attrs:{label:"rename"},on:{blur:function(t){e.showReName=!1}},model:{value:e.keyName,callback:function(t){e.keyName=t},expression:"keyName"}})],1)],1)],1)],1)},staticRenderFns:[]};var R={data:function(){return{name:"",currentKey:""}},beforeRouteEnter:function(e,t,r){r(function(t){if(e.query.target){var r=void 0,n=void 0;t.$store.dispatch("creator/resetEntriesBuffer").then(function(){T()(t.$store.getters["creator/workSpace"][e.query.target]).forEach(function(a){var i=E()(a,2);r=i[0],n=i[1],t.name=e.query.target,t.$store.dispatch("creator/pushEntriesBuffer",{key:r,value:n})})})}})},methods:{appendChild:function(){var e=this;this.currentKey&&-1===this.currentKey.search(/\s/g)&&this.$store.state.creator.factory.entriesBuffer.every(function(t){return t.key!==e.currentKey})&&this.$store.dispatch("creator/pushEntriesBuffer",{key:this.currentKey,value:{descriptor:"",initiator:null}}),this.currentKey=""},commit:function(){var e=this;if(this.name&&-1===this.name.search(/\s/g)&&this.$store.state.creator.factory.entriesBuffer.every(function(e){return!(""===e.value.descriptor)})){var t={};this.$store.state.creator.factory.entriesBuffer.forEach(function(e){t[e.key]=e.value}),this.$store.dispatch("creator/save",{name:this.name,body:x()({},t)}).then(function(){e.reset()})}},deleteItem:function(e){this.$store.dispatch("creator/deleteEntriesBuffer",e)},reset:function(){this.name="",this.currentKey="",this.$store.dispatch("creator/resetEntriesBuffer")},query:function(){this.currentKey="",this.name="",this.$store.dispatch("creator/resetEntriesBuffer")},enter:function(e){"Enter"===e.key&&this.appendChild()}},components:{KeyValuePair:r("VU/8")(j,A,!1,function(e){r("kDnH")},null,null).exports}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",lg6:""}},[r("v-container",{staticClass:"slim-padding",attrs:{fluid:"","grid-list-sm":"","text-xs-center":""}},[r("v-layout",{attrs:{"align-space-between":"","fill-height":"",column:""}},[r("v-flex",{attrs:{"d-flex":""}},[r("v-layout",{attrs:{"justify-center":"",column:""}},[r("v-flex",[r("v-toolbar",{attrs:{dark:"",dense:"",color:"teal accent-4"}},[r("v-btn",{attrs:{flat:"",icon:""},on:{click:e.query}},[r("v-icon",[e._v("people")])],1),e._v(" "),r("v-toolbar-title",{staticClass:"font-weight-light"},[e._v("\n                          "+e._s(e.name)+"\n                          "),r("span")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.appendChild}},[r("v-icon",[e._v("add")])],1),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.commit}},[r("v-icon",[e._v("check")])],1)],1)],1),e._v(" "),r("v-flex",[r("v-text-field",{attrs:{label:"Name",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("v-flex",[r("v-text-field",{attrs:{color:"blue",label:"Key",clearable:""},on:{keypress:e.enter},model:{value:e.currentKey,callback:function(t){e.currentKey=t},expression:"currentKey"}})],1)],1)],1),e._v(" "),r("v-flex",{attrs:{xs8:"",sm9:"",md10:"",lg12:""}},[r("v-expansion-panel",e._l(e.$store.state.creator.factory.entriesBuffer,function(t,n){return r("KeyValuePair",{key:t.key,attrs:{belong:e.name,index:n,initialName:t.key},on:{deleteMe:e.deleteItem}})}))],1)],1)],1)],1)],1)},staticRenderFns:[]};var P=r("VU/8")(R,C,!1,function(e){r("O6aa")},null,null).exports,F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-data-iterator",{attrs:{items:e.$store.getters["creator/dStoreList"],"item-key":"name","rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,"content-tag":"v-layout",row:"",wrap:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"item",fn:function(t){return r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[r("v-card",{staticClass:"elevation-5"},[r("v-card-title",[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:""},on:{click:function(r){e.handleEdit(t.index)}}},[e._v("\r\n                  "+e._s(t.item.name)+"\r\n                ")])],1),e._v(" "),r("v-flex",[r("v-btn",{attrs:{flat:"",icon:"",color:"error"},on:{click:function(r){e.deleteItem(t.item.name)}}},[r("v-icon",[e._v("close")])],1)],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-list",{attrs:{dense:""}},e._l(t.item.values,function(t){return r("v-list-tile",{key:t.key},[r("v-list-tile-content",[e._v(e._s(t.key)+" ")]),e._v(" "),r("br"),e._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[e._v(e._s(t.descriptor))])],1)}))],1)],1)}}])})],1)},staticRenderFns:[]};var L=r("VU/8")({data:function(){return{rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4}}},methods:{handleEdit:function(e){this.$router.push({name:"factory",query:{target:this.$store.getters["creator/dStoreList"][e].name}})},deleteItem:function(e){this.$store.dispatch("creator/deleteObject",e)}}},F,!1,function(e){r("KChb")},null,null).exports,I={data:function(){return{firstSelection:"",secondSelection:"",showItemSelection:!1,keySelection:"",itemKeys:[],dataset:[],padding:{left:30,right:30,top:20,bottom:20}}},methods:{handleView:function(){var e=this;this.$store.dispatch("creator/buildOne",this.firstSelection).then(function(t){var r=t[e.firstSelection][e.secondSelection];r instanceof Array&&(e.showItemSelection=!0,e.itemKeys=$()(r[0]),e.dataset=r)})},handleKeySelection:function(e){console.log(e),"number"==typeof this.dataset[0][e]&&(this.clearDraw(),this.draw())},updateSize:function(){"number"==typeof this.dataset[0][this.keySelection]&&(this.clearDraw(),this.draw())},clearDraw:function(){d3.select(".table svg").remove()},draw:function(){var e=document.getElementsByClassName("table")[0],t=e.clientWidth,r=e.clientHeight,n=d3.select(".table").append("svg").attr("width",t).attr("height",r),a=this.transformedDateSet,i=this.padding,o=d3.scale.ordinal().domain(d3.range(a.length)).rangeRoundBands([0,t-i.left-i.right]),s=d3.scale.linear().domain([0,d3.max(a)]).range([r-i.top-i.bottom,0]),c=d3.svg.axis().scale(o).orient("bottom"),l=d3.svg.axis().scale(s).orient("left");n.selectAll(".table-rect").data(a).enter().append("rect").attr("class","table-rect").attr("transform","translate("+i.left+","+i.top+")").attr("x",function(e,t){return o(t)+2}).attr("y",function(e){return s(e)}).attr("width",o.rangeBand()-4).attr("height",function(e){return r-i.top-i.bottom-s(e)}).attr("fill","#FB8C00"),n.selectAll(".detail").data(a).enter().append("text").attr("class","detail").attr("transform","translate("+i.left+","+i.top+")").attr("x",function(e,t){return o(t)+2}).attr("y",function(e){return s(e)}).attr("dx",function(){return(o.rangeBand()-4)/2-5}).attr("dy",function(e){return 20}).text(function(e){return e}).attr("fill","white");n.append("g").attr("class","axis").attr("transform","translate("+i.left+","+(r-i.bottom)+")").call(c),n.append("g").attr("class","axis").attr("transform","translate("+i.left+","+i.top+")").call(l)}},computed:{secondType:function(){return this.firstSelection&&this.$store.getters["creator/workSpace"][this.firstSelection]?$()(this.$store.getters["creator/workSpace"][this.firstSelection]):[]},transformedDateSet:function(){var e=this;return this.dataset.map(function(t){return t[e.keySelection]})}}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",[r("v-flex",[r("v-card",{attrs:{dark:"",color:"teal accent-4"}},[r("v-card",{staticClass:"table",attrs:{color:"yellow lighten-5"}}),e._v(" "),r("v-card-text",[r("v-select",{attrs:{color:"white",items:Object.keys(e.$store.getters["creator/workSpace"]),label:"First"},model:{value:e.firstSelection,callback:function(t){e.firstSelection=t},expression:"firstSelection"}}),e._v(" "),r("v-select",{attrs:{color:"white",items:e.secondType,label:"Second"},model:{value:e.secondSelection,callback:function(t){e.secondSelection=t},expression:"secondSelection"}}),e._v(" "),r("v-select",{directives:[{name:"show",rawName:"v-show",value:e.showItemSelection,expression:"showItemSelection"}],attrs:{color:"white",items:e.itemKeys,label:"key"},on:{change:e.handleKeySelection},model:{value:e.keySelection,callback:function(t){e.keySelection=t},expression:"keySelection"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:""},on:{click:e.handleView}},[r("v-icon",[e._v("\n              bubble_chart\n            ")])],1),e._v(" "),r("v-btn",{attrs:{flat:""},on:{click:e.updateSize}},[r("v-icon",[e._v("\n              cached\n            ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var G=r("VU/8")(I,U,!1,function(e){r("2o6I")},null,null).exports;n.default.use(m.a);var V=new m.a({routes:[{path:"/",name:"home",component:b},{path:"/creator",name:"creator",component:_,children:[{path:"factory",name:"factory",component:P},{path:"dstore",name:"dstore",component:L}]},{path:"/viewer",name:"viewer",component:G},{path:"*",redirect:"/"}]}),D=r("NYxO"),H=r("2mV7");n.default.use(D.a);var K=new D.a.Store({modules:H.default,strict:!1});n.default.prototype.$faker=s.a,n.default.use(i.a),new n.default({components:{App:v},router:V,store:K,render:function(e){return e(v)}}).$mount("#app")},O6aa:function(e,t){},"O9/O":function(e,t){},OiFf:function(e,t){},ZoQJ:function(e,t,r){"use strict";t.a=l,t.d=function(e){var t=JSON.parse(a()(e));return o()(t).forEach(function(e){o()(t[e]).forEach(function(r){var n=t[e][r].descriptor.split("|"),a=n[0],i=n[1];if("Object"===a||/^Array\(\d+\)$/.test(a)){if(/^Array\(\d+\)$/.test(a)){var o=a.match(/^Array\((\d+)\)$/)[1];t[e][r].initiator=function(){return new Array(parseInt(o)).fill(0).map(function(e,r){return t[i]?l(t[i]):r})}}"Object"===a&&(t[e][r].initiator=function(){return l(t[i])})}else{var s=void 0;switch(a){case"String":if(s=i.match(/^Custom\((.*)\)$/))t[e][r].initiator=function(){return String(s[1])};else{var u=i.split(".");t[e][r].initiator=c.a[u[0]][u[1]]}break;case"Number":if(s=i.match(/^Custom\((.*)\)$/))t[e][r].initiator=function(){return Number(s[1])};else{var f=i.split(".");t[e][r].initiator=c.a[f[0]][f[1]]}break;case"Boolean":if(s=i.match(/^Custom\((.*)\)$/))"false"===s[1]||"0"===s[1]?t[e][r].initiator=function(){return!1}:t[e][r].initiator=function(){return!0};else{var d=i.split(".");t[e][r].initiator=c.a[d[0]][d[1]]}}}})}),t},t.b=function(e){return fetch(e,{credentials:"include",mode:"cors"}).then(function(e){return e.json()})},t.c=function(e,t){return fetch(e,{body:a()(t),headers:{"content-type":"application/json"},credentials:"include",method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"}).then(function(e){return e.json()})};var n=r("mvHQ"),a=r.n(n),i=r("fZjL"),o=r.n(i),s=r("FfS/"),c=r.n(s);function l(e){if(e){var t={};return o()(e).forEach(function(r){t[r]=e[r].initiator()}),t}}},bREw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("ZoQJ"),a=r("2uFj");t.default={namespaced:!0,state:{UA:window.navigator.userAgent,name:"",isLogin:!1},getters:{userAgent:function(e){return e.UA.match(/\((.+);/)[1]}},actions:{checkLogin:function(e){Object(n.c)(a.a.URL+"/login").then(function(t){t.state.success?(e.commit("SWITCH_LOGIN",!0),e.commit("USERNAME",t.state.user.name)):(e.commit("SWITCH_LOGIN",!1),window.confirm("自动登陆失败,是否前往Spot登陆?")&&window.open("/"))}).catch(function(t){e.commit("SWITCH_LOGIN",!1)})}},mutations:{SWITCH_LOGIN:function(e,t){e.isLogin=t},USERNAME:function(e,t){e.name=t}}}},dtYP:function(e,t){},dzkv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mvHQ"),a=r.n(n),i=r("//Fk"),o=r.n(i),s=r("fZjL"),c=r.n(s),l=r("ZoQJ"),u=r("2uFj"),f=r("7+uW");t.default={namespaced:!0,state:{objects:{},factory:{entriesBuffer:[]},groupName:"",netBuffer:{select:"",groups:[]},operation:"local"},getters:{dStoreList:function(e){var t=void 0;switch(e.operation){case"local":t=e.objects;break;case"inject":(t=e.netBuffer.groups.find(function(t){return!!t.group&&t.group.belong===e.netBuffer.select}))&&(t=t.pre)}if(t)return c()(t).map(function(e){var r=t[e];return{name:e,values:c()(r).map(function(e){return{key:e,descriptor:r[e].descriptor}})}})},groupList:function(e){return e.netBuffer.groups.map(function(e){if(e.group)return e.group.belong}).filter(function(e){return void 0!==e})},workSpace:function(e){switch(e.operation){case"local":return e.objects;case"inject":var t=e.netBuffer.select,r=e.netBuffer.groups.find(function(e){return!!e.group&&e.group.belong===t});return r?r.pre:{}}}},mutations:{SAVE:function(e,t){f.default.set(e.objects,t.name,t.body)},SAVE_GROUP_MEMBER:function(e,t){var r=e.netBuffer.select,n=e.netBuffer.groups.find(function(e){return!!e.group&&e.group.belong===r}).pre;f.default.set(n,t.name,t.body)},DELETE_OBJECT:function(e,t){switch(e.operation){case"local":f.default.delete(e.objects,t);break;case"inject":var r=e.netBuffer.select,n=e.netBuffer.groups.find(function(e){return!!e.group&&e.group.belong===r}).pre;f.default.delete(n,t)}},PUSH_ENTRIES_BUFFER:function(e,t){e.factory.entriesBuffer.push(t)},ACHIEVE_ENTRIES_BUFFER:function(e,t){e.factory.entriesBuffer[t.index].value.descriptor=t.descriptor,e.factory.entriesBuffer[t.index].value.initiator=t.initiator},DELETE_ENTRIES_BUFFER:function(e,t){e.factory.entriesBuffer.splice(t,1)},RESET_ENTRIES_BUFFER:function(e){e.factory.entriesBuffer=[]},SET_NET_BUFFER_GROUPS:function(e,t){e.netBuffer.groups=t},SET_OPERATION:function(e,t){e.operation=t},SET_LOCAL_GROUP:function(e,t){e.groupName=t},SET_INJECT_GROUP:function(e,t){e.netBuffer.select=t}},actions:{save:function(e,t){switch(e.state.operation){case"local":e.commit("SAVE",t);break;case"inject":e.commit("SAVE_GROUP_MEMBER",t)}},deleteObject:function(e,t){e.commit("DELETE_OBJECT",t)},pushEntriesBuffer:function(e,t){e.commit("PUSH_ENTRIES_BUFFER",t)},achieveEntriesBuffer:function(e,t){e.commit("ACHIEVE_ENTRIES_BUFFER",t)},deleteEntriesBuffer:function(e,t){e.commit("DELETE_ENTRIES_BUFFER",t)},resetEntriesBuffer:function(e){e.commit("RESET_ENTRIES_BUFFER")},preBuild:function(e){return Object(l.d)(e.getters.workSpace)},buildObject:function(e,t){var r=t.obj,n=t.name;if(r[n])return Object(l.a)(r[n])},buildOne:function(e,t){return e.dispatch("preBuild").then(function(e){var r={};return r[t]=Object(l.a)(e[t]),r})},buildAll:function(e,t){var r={};return c()(t).forEach(function(e){r[e]=Object(l.a)(t[e])}),r},uploadData:function(e,t){return new o.a(function(r,n){Object(l.c)(u.a.URL+"/post",{username:t,type:"dataStore",dataStore:{group:{belong:e.state.groupName.trim(),description:"测试用..."},pre:a()(e.state.objects)}}).then(function(e){return r(e)})})},updateGroup:function(e,t){var r=e.state.netBuffer.select,n=e.state.netBuffer.groups.find(function(e){return!!e.group&&e.group.belong===r});return new o.a(function(e,r){Object(l.c)(u.a.URL+"/update",{username:t,type:"dataStore",dataStore:{id:n.id,pre:a()(n.pre)}}).then(function(t){e(t)})})},getData:function(e,t){return Object(l.b)(u.a.URL+"/find?type=dataStore")},getGroup:function(e){e.dispatch("getData").then(function(e){return e}).then(function(t){e.dispatch("setNetBufferGroups",t.state.dataStore.map(function(e){try{e.pre=JSON.parse(e.pre)}catch(t){console.log(t),e.pre={}}return e}))}).then(function(){console.log(e.getters.groupList)})},deleteGroup:function(e,t){var r=e.state.netBuffer.select,n=e.state.netBuffer.groups.find(function(e){return!!e.group&&e.group.belong===r});if(n)return new o.a(function(e,r){Object(l.c)(u.a.URL+"/delete",{username:t,type:"dataStore",dataStore:{id:Number(n.id)}}).then(function(t){e(t)})})},setNetBufferGroups:function(e,t){e.commit("SET_NET_BUFFER_GROUPS",t)},setOperation:function(e,t){e.commit("SET_OPERATION",t)},toggleOperation:function(e){e.commit("SET_OPERATION","local"===e.state.operation?"inject":"local")},setLocalGroup:function(e,t){e.commit("SET_LOCAL_GROUP",t)},setInjectGroup:function(e,t){e.commit("SET_INJECT_GROUP",t)}}}},gJtD:function(e,t){},gNcp:function(e,t,r){var n={"./creator.js":"dzkv","./faker.js":"h112","./index.js":"2mV7","./interface.js":"Fh1G","./user.js":"bREw"};function a(e){return r(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="gNcp"},gVtj:function(e,t){},h112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"FAKER_TYPE",function(){return a});var n=r("FfS/"),a={String:{address:["city","cityPrefix","citySuffix","streetName","streetAddress","streetSuffix","streetPrefix","secondaryAddress","county","country","state","stateAbbr","latitude","longitude"],name:["firstName","lastName","findName","jobTitle","title","jobDescriptor","jobArea","jobType","prefix","suffix"],commerce:["color","department","productName","price","productAdjective","productMaterial","product"],company:["suffixes","companyName","companySuffix","catchPhrase","bs","catchPhraseAdjective","catchPhraseDescriptor","bsAdjective","bsBuzz","bsNoun"],datebase:["column","type","collation","engine"],date:["past","future","between","recent","month","weekday"],lorem:["word","words","sentence","sentences","slug","paragraph","text","lines"],finance:["account","accountName","mask","amount","transactionType","currencyCode","currencyName","currencySymbol","bitcoinAddress","iban","bic"],internet:["avatar","email","exampleEmail","userName","protocol","url","domainName","domainSuffix","domainWord","ip","ipv6","userAgent","color","mac","password"],system:["fileName","commonFileName","mimeType","fileType","fileExt","directoryPath","filePath","semver"],phone:["phoneNumber","phoneNumberFormat"],random:["uuid","word","words","locale"]},Number:{random:["number","ageRandom"]},Boolean:{random:["boolean"]}};r.n(n).a.random.ageRandom=function(){return~~(60*Math.random()+10)},t.default={namespaced:!0,state:{fakerType:a,langType:"en",localeType:["en","ja","ko","zh_CN","zh_TW"]},actions:{switchLocale:function(e,t){e.commit("SWITCH_LOCALE",t)}},mutations:{SWITCH_LOCALE:function(e,t){e.langType=t}}}},kDnH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8301e0e1ac7c95b8a9aa.js.map