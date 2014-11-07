//>>built
require({cache:{"url:builder/config/templates/WidgetSettingPage.html":'\x3cdiv class\x3d"widget-setting-page"\x3e\r\n  \x3cdiv class\x3d"section common-setting" data-dojo-attach-point\x3d"commonSettingNode"\x3e\r\n    \x3cdiv class\x3d"basic"\x3e\r\n      \x3cdiv class\x3d"icon"\x3e\r\n        \x3cimg class\x3d"real-icon"  data-dojo-attach-point\x3d"iconNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"right"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"labelNode" class\x3d"jimu-input"\x3e\r\n        \x3cdiv class\x3d"right-foot" data-dojo-attach-point\x3d"rightFooterNode"\x3e\r\n          \x3cdiv class\x3d"image-container"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"imageChooser"\x3e\x3c/div\x3e\r\n            \x3cspan nowrap class\x3d"change-icon" data-dojo-attach-point\x3d"changeNode"\x3e${nls.changeIcon}\x3c/span\x3e\r\n          \x3c/div\x3e          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layout"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"section widget-setting" data-dojo-attach-point\x3d"widgetSettingNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Deferred dojo/topic dojo/aspect dojo/on dojo/mouse dojo/query dojo/NodeList-dom dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/WidgetSettingPage.html ./WidgetDefaultSettingPage jimu/utils jimu/WidgetManager jimu/dijit/ViewStack jimu/dijit/ImageChooser jimu/dijit/LoadingIndicator jimu/dijit/Message dijit/form/CheckBox".split(" "),function(g,c,a,u,v,h,w,d,x,y,z,k,l,m,n,e,p,f,
A,q,r,s,B){return g([k,l,m],{templateString:n,postMixInProperties:function(){this.nls=c.mixin({},builderNls.common);this.nls=c.mixin(this.nls,builderNls.widgets)},startup:function(){this.inherited(arguments);this.own(d(window,"resize",c.hitch(this,this.resize)));this.init()},init:function(){this.loading=new r;this.loading.placeAt(this.widgetSettingNode);this.initCommonAttr();this.initWidgetAttr();this.resize()},resize:function(){var b=a.getContentBox(this.domNode);a.setStyle(this.widgetSettingNode,
{height:b.h-90+"px"})},onCancel:function(){this.onClose();this.popup.close()},onOk:function(){if(this._checkLabelExist())return new s({message:this.nls.labelExists}),!1;this.iconNode.src&&(this.setting.icon=this.iconNode.src);this.setting.label=a.getAttr(this.labelNode,"value");if(this.settingDijit){var b=this.settingDijit.getConfig(!0);if(!1===b)return!1;this.setting.config=b}h.publish("widgetSettingPageOk",this.setting);this.onClose();this.popup.close()},_checkLabelExist:function(){var b=0,t=a.getAttr(this.labelNode,
"value");this.appConfig.visitElement(c.hitch(this,function(a){this.setting.id!==a.id&&a.label===t&&b++}));return 0<b},onClose:function(){this.settingViewStack?(this.settingDijitUI.destroy(),this.settingDijitJSON.destroy(),this.settingViewStack.destroy()):this.settingDijit&&this.settingDijit.destroy()},initCommonAttr:function(){a.setAttr(this.iconNode,"src",this.setting.icon);a.setAttr(this.labelNode,"value",this.setting.label);this.setting.inPanel?(this.imageChooser=new q({},this.imageChooser),this.own(d(this.imageChooser,
"imageChange",c.hitch(this,function(a){this.iconNode.src=a})))):a.addClass(this.changeNode,"disable-change-icon")},initWidgetAttr:function(){!1===this.setting.hasConfig?this.widgetSettingNode.innerHTML='\x3cdiv class\x3d"noconfig-info"\x3e'+this.nls.noConfig+"\x3c/div\x3e":f.getInstance().tryLoadWidgetConfig(this.setting).then(c.hitch(this,function(b){this.setting.config=b;!1===this.setting.hasSettingPage?(this.settingDijit=new e({config:this.setting.config}),a.place(this.settingDijit.domNode,this.widgetSettingNode),
this.settingDijit.startup(),this.loading.destroy()):p.checkFileExist(this.setting.folderUrl+"setting/Setting.js").then(c.hitch(this,function(b){b?f.getInstance().loadWidgetSettingPage(this.setting).then(c.hitch(this,function(b){this.settingDijit=b;a.place(this.settingDijit.domNode,this.widgetSettingNode);this.settingDijit.startup();this.loading.destroy()})):(this.loading.destroy(),this.settingDijit=new e({config:this.setting.config}),a.place(this.settingDijit.domNode,this.widgetSettingNode),this.settingDijit.startup())}))}))},
setAppConfig:function(a){this.appConfig=a}})});