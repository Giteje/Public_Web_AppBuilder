//>>built
require({cache:{"url:builder/config/templates/AttributeConfig.html":'\x3cdiv class\x3d"attribute-config"\x3e\r\n  \x3cdiv class\x3d"section header-section" data-dojo-attach-point\x3d"headerSection"\x3e\r\n    \x3cp class\x3d"header-title"\x3e${nls.headerTitle}\x3c/p\x3e\r\n    \x3cdiv class\x3d"header-desc"\x3e${nls.headerDesc}\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/ImageChooser" data-dojo-attach-point\x3d"imageChooser"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"no-logo"  data-dojo-attach-point\x3d"noLogoNode"\x3e\r\n        \x3cimg class\x3d"image" src\x3d"builder/css/images/add_header.png"\x3e\r\n        \x3cdiv class\x3d"text"\x3e ${nls.addLogo}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cimg class\x3d"logo" data-dojo-attach-point\x3d"logoNode" style\x3d"display:none"\x3e\r\n      \x3cdiv class\x3d"titles"\x3e\r\n        \x3cdiv style\x3d"background-color:#fafafc;" class\x3d"title"\x3e\r\n          \x3cinput  placeholder\x3d"${nls.title}" data-dojo-attach-point\x3d"titleNode" maxLength\x3d"30"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv style\x3d"background-color:#fafafc;" class\x3d"subtitle"\x3e\r\n          \x3cinput  placeholder\x3d"${nls.subtitle}" data-dojo-attach-point\x3d"subtitleNode" maxLength\x3d"30"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section links-section" data-dojo-attach-point\x3d"linksSection"\x3e\r\n    \x3cp class\x3d"title"\x3e${nls.linksTitle}\x3c/p\x3e\r\n    \x3cdiv class\x3d"attribute-content"\x3e\r\n      \x3cdiv class\x3d"list-header"\x3e\r\n        \x3cspan class\x3d"header-button add" data-dojo-attach-event\x3d"onclick: onAddLinkClick"\x3e${nls.addLink}\x3c/span\x3e\r\n        \x3cspan class\x3d"header-button edit" data-dojo-attach-event\x3d"onclick: onEditLinkClick"\x3e${nls.editLabel}\x3c/span\x3e\r\n        \x3cspan class\x3d"header-button delete" data-dojo-attach-event\x3d"onclick: onDeleteLinkClick"\x3e${nls.deleteLabel}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"links-list" data-dojo-attach-point\x3d"linksListNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section appId-section" data-dojo-attach-point\x3d"appIdSection" style\x3d"display:none"\x3e\r\n    \x3cp class\x3d"title"\x3e${nls.appIdTitle}\x3c/p\x3e\r\n    \x3ca target\x3d"_blank" href\x3d"http://doc.arcgis.com/en/arcgis-online/share-maps/add-items.htm#ESRI_SECTION2_20AF85308FD548B5ADBAE28836F66D3F"\x3e${nls.appIdAbout}\x3c/a\x3e\r\n    \x3cdiv class\x3d"attribute-content"\x3e\r\n      \x3cinput type\x3d"text" placeholder\x3d"AppId" data-dojo-attach-point\x3d"appIdNode" /\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section" data-dojo-attach-point\x3d"useProxySection" style\x3d"display:none"\x3e\r\n    \x3cdiv class\x3d"proxy-setting" data-dojo-attach-point\x3d"useProxySetting"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"proxy-section" data-dojo-attach-point\x3d"proxySection"\x3e\r\n      \x3clabel class\x3d"rules-label"\x3e${nls.proxyRulesLabel}\x3c/label\x3e\r\n      \x3cdiv class\x3d"attribute-content"\x3e\r\n        \x3cdiv class\x3d"list-header"\x3e\r\n          \x3cspan class\x3d"header-button add" data-dojo-attach-event\x3d"onclick: onAddProxyRuleClick"\x3e${nls.addProxyRule}\x3c/span\x3e\r\n          \x3cspan class\x3d"header-button edit" data-dojo-attach-event\x3d"onclick: onEditProxyRuleClick"\x3e${nls.editLabel}\x3c/span\x3e\r\n          \x3cspan class\x3d"header-button delete" data-dojo-attach-event\x3d"onclick: onDeleteProxyRuleClick"\x3e${nls.deleteLabel}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"proxy-rule-header"\x3e\r\n          \x3cdiv class\x3d"prefix"\x3e${nls.prefixHeader}\x3c/div\x3e\r\n          \x3cdiv class\x3d"proxy-url"\x3e${nls.proxyUrlHeader}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"proxy-rule-list" data-dojo-attach-point\x3d"proxyRulesListNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"always-use-proxy" data-dojo-attach-point\x3d"alwaysUseProxy"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"attribute-content" data-dojo-attach-point\x3d"proxyUrlSection" \x3e\r\n        \x3cinput type\x3d"text" placeholder\x3d"${nls.proxyUrl}" data-dojo-attach-point\x3d"proxyUrlNode" /\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/topic dojo/on dojo/dom dojo/aspect dojo/mouse dojo/query dojo/NodeList-dom dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/AttributeConfig.html dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom-attr dojo/_base/array builder/portalUtils jimu/dijit/CheckBox jimu/dijit/ImageChooser".split(" "),function(q,c,b,f,e,x,y,z,g,A,r,s,t,u,B,C,m,D,v,w,p){return q([r,s,t],{templateString:u,appConfig:null,
selectLinkNode:null,selectProxyRuleNode:null,initedLinks:!1,initedProxy:!1,_currentPortalUrl:null,showProxySetting:!1,showAlwaysUseProxy:!1,postMixInProperties:function(){this.inherited(arguments);this.nls=c.mixin({},builderNls.settings);this.nls=c.mixin(this.nls,builderNls.attributes);this.nls=c.mixin(this.nls,builderNls.common)},postCreate:function(){this.inherited(arguments);this.useProxySetting=new p({label:this.nls.useProxySetting,checked:!1},this.useProxySetting);this.alwaysUseProxy=new p({label:this.nls.alwaysUseProxyLabel,
checked:!1},this.alwaysUseProxy);this._bindEvents()},startup:function(){this.inherited(arguments);this._keepOrder();b.addClass(this.imageChooser.domNode,"no-logo")},_bindEvents:function(){this.own(e(this.titleNode,"change",c.hitch(this,this.onTitleChange)));this.own(e(this.subtitleNode,"change",c.hitch(this,this.onSubtitleChange)));this.own(e(this.imageChooser,"imageChange",c.hitch(this,"onLogoChange")));this.own(e(this.useProxySetting,"click",c.hitch(this,this._onUseProxySettingChange)));this.own(e(this.alwaysUseProxy,
"click",c.hitch(this,this._onAlwaysUseProxyChange)));this.own(e(this.proxyUrlNode,"change",c.hitch(this,this._onProxyUrlChange)));this.own(e(this.proxyUrlNode,"blur",c.hitch(this,this._onProxyUrlBlur)));this.own(e(this.appIdNode,"change",c.hitch(this,this._onAppIdChange)));this.own(e(this.domNode,"click",c.hitch(this,function(){this.selectLinkNode&&(b.removeClass(this.selectLinkNode,"selected-item"),this.selectLinkNode=null);this.selectProxyRuleNode&&(b.removeClass(this.selectProxyRuleNode,"selected-item"),
this.selectProxyRuleNode=null)})))},init:function(a){this.appConfig=a||{};this.initHeader(a);this.initedLinks||(this.initLinks(a),this.initedLinks=!0);this.initedProxy||(this.initProxy(a),this.initedProxy=!0);this._currentPortalUrl!==a.portalUrl&&(this.initAppId(a),this._currentPortalUrl=a.portalUrl)},setAppConfig:function(a){this.init(a)},initHeader:function(a){var d=a.logo;d&&(d&&(!d.startWith("/")&&!d.startWith("http")&&!d.startWith("data"))&&(d=path+"stemapp/"+d),b.setAttr(this.logoNode,"src",
d),m.set(this.noLogoNode,"display","none"),m.set(this.logoNode,"display","block"));a.title&&b.setAttr(this.titleNode,"value",a.title);a.subtitle&&b.setAttr(this.subtitleNode,"value",a.subtitle)},onLogoChange:function(a){b.setAttr(this.logoNode,"src",a);m.set(this.noLogoNode,"display","none");m.set(this.logoNode,"display","block");f.publish("configChanged","app",{logo:a})},onTitleChange:function(a){f.publish("configChanged","app",{title:a.target.value})},onSubtitleChange:function(a){f.publish("configChanged",
"app",{subtitle:a.target.value})},initLinks:function(a){b.empty(this.linksListNode);a.links&&a.links.forEach(c.hitch(this,function(a){this.createLinkNode(a)}))},initProxy:function(a){if(a=a.httpProxy)this.useProxySetting.setValue(a.useProxy),this.showProxySetting=!!a.useProxy,this._onUseProxySettingChange(),this.alwaysUseProxy.setValue(a.alwaysUseProxy),this.showAlwaysUseProxy=!!a.alwaysUseProxy,this._onAlwaysUseProxyChange(),a.url&&b.setAttr(this.proxyUrlNode,"value",a.url),a.rules&&(b.empty(this.proxyRulesListNode),
v.forEach(a.rules,c.hitch(this,function(a){this.createProxyRuleNode(a)})))},initAppId:function(a){w.getPortal(a.portalUrl).loadSelfInfo().then(c.hitch(this,function(d){d.supportsOAuth?(b.setStyle(this.appIdSection,"display","none"),b.setAttr(this.appIdNode,"value",a.appId)):b.setStyle(this.appIdSection,"display","none")}),c.hitch(this,function(a){this.shelter.hide()}))},getLinks:function(){var a=[];g(".links-list .list-item",this.domNode).forEach(c.hitch(this,function(b){var l=g(".first input",b).attr("value")[0];
b=g(".second input",b).attr("value")[0];l&&a.push({label:l,url:b})}));return a},getProxy:function(){var a=[],d=b.getAttr(this.proxyUrlNode,"value");g(".proxy-rule-list .list-item",this.domNode).forEach(c.hitch(this,function(b){var d=g(".first input",b).attr("value")[0];b=g(".second input",b).attr("value")[0];d&&a.push({urlPrefix:d,proxyUrl:b})}));return{useProxy:this.useProxySetting.getValue(),alwaysUseProxy:this.alwaysUseProxy.getValue(),url:d,rules:a}},_bindNodeEvents:function(a,d,l,n,k,h){this.own(e(a,
"click",c.hitch(this,function(d){"links"===h?(this.selectLinkNode&&b.removeClass(this.selectLinkNode,"selected-item"),b.addClass(a,"selected-item"),this.selectLinkNode=a):"proxyRules"===h&&(this.selectProxyRuleNode&&b.removeClass(this.selectProxyRuleNode,"selected-item"),b.addClass(a,"selected-item"),this.selectProxyRuleNode=a);d.stopPropagation()})));this.own(e(d,"dblclick",c.hitch(this,function(){b.setStyle(d,"display","none");b.setStyle(l,"display","block");l.focus();l.select()})));this.own(e(n,
"dblclick",c.hitch(this,function(){b.setStyle(n,"display","none");b.setStyle(k,"display","block");k.focus();k.select()})));this.own(e(k,"focus",function(a){a.target.value||(a.target.value="http://")}));this.own(e(l,"blur",c.hitch(this,function(a){b.setAttr(d,{innerHTML:a.target.value||d.innerHTML,style:{display:"block"}});b.setStyle(l,"display","none");"links"===h?f.publish("configChanged","app",{links:this.getLinks()}):"proxyRules"===h&&this._publishProxy()})));this.own(e(k,"blur",c.hitch(this,function(a){b.setAttr(n,
{innerHTML:a.target.value||n.innerHTML,style:{display:"block"}});b.setStyle(k,"display","none");"links"===h?f.publish("configChanged","app",{links:this.getLinks()}):"proxyRules"===h&&this._publishProxy()})))},_createListItem:function(a,d,c,e,k){var h=b.create("div",{"class":"list-item"}),f=b.create("div",{"class":"first"},h);c=b.create("div",{"class":"mask",innerHTML:d||c,title:c},f);var f=b.create("input",{style:{display:"none"}},f),g=b.create("div",{"class":"second"},h);k=b.create("div",{"class":"mask",
innerHTML:e||k,title:k},g);g=b.create("input",{style:{display:"none"}},g);b.setAttr(f,"value",d);b.setAttr(g,"value",e);this._bindNodeEvents(h,c,f,k,g,a);d||this.focusNewItem(h,c,f,a);return h},focusNewItem:function(a,d,c,e){"links"===e?(this.selectLinkNode&&b.removeClass(this.selectLinkNode,"selected-item"),b.addClass(a,"selected-item"),this.selectLinkNode=a):"proxyRules"===e&&(this.selectProxyRuleNode&&b.removeClass(this.selectProxyRuleNode,"selected-item"),b.addClass(a,"selected-item"),this.selectProxyRuleNode=
a);b.setStyle(d,"display","none");b.setStyle(c,"display","block");c.value=d.innerHTML;setTimeout(function(){c.focus();c.select()},0)},createLinkNode:function(a){a=this._createListItem("links",a.label,this.nls.labelPlaceholder,a.url,this.nls.urlPlaceholder);b.place(a,this.linksListNode)},createProxyRuleNode:function(a){a=this._createListItem("proxyRules",a.urlPrefix,this.nls.prefixPlaceholder,a.proxyUrl,this.nls.proxyUrlPlaceholder);b.place(a,this.proxyRulesListNode)},_keepOrder:function(){var a=b.getMarginBox(this.headerSection),
d=b.getMarginBox(this.linksSection),c=b.getMarginBox(this.appIdSection),e=b.getMarginBox(this.useProxySection),a=a.h+d.h+c.h+e.h,d=b.getMarginBox(this.domNode).h;a>d&&b.setStyle(this.domNode,"paddingRight","10px")},onAddLinkClick:function(a){a.stopPropagation();4!==g(".links-list .list-item",this.domNode).length&&(this.createLinkNode({label:"",url:""}),this._keepOrder())},_onEditItemClick:function(a){var c=g(".first .mask",a)[0];a=g(".first input",a)[0];b.setStyle(c,"display","none");b.setStyle(a,
"display","block");a.focus();a.select()},onEditLinkClick:function(){this.selectLinkNode&&this._onEditItemClick(this.selectLinkNode)},onDeleteLinkClick:function(){this.selectLinkNode&&(b.destroy(this.selectLinkNode),f.publish("configChanged","app",{links:this.getLinks()}))},onAddProxyRuleClick:function(a){this.createProxyRuleNode({urlPrefix:"",proxyUrl:""});this._keepOrder();a.stopPropagation()},onEditProxyRuleClick:function(){this.selectProxyRuleNode&&this._onEditItemClick(this.selectProxyRuleNode)},
onDeleteProxyRuleClick:function(){this.selectProxyRuleNode&&(b.destroy(this.selectProxyRuleNode),f.publish("configChanged","app",{httpProxy:this.getProxy()}))},_onUseProxySettingChange:function(){this.useProxySetting.checked?b.setStyle(this.proxySection,"display","block"):b.setStyle(this.proxySection,"display","none");this.showProxySetting!==this.useProxySetting.checked&&(this._publishProxy(),this.showProxySetting=this.useProxySetting.checked)},_onAlwaysUseProxyChange:function(){this.showAlwaysUseProxy!==
this.alwaysUseProxy.checked&&(this._publishProxy(),this.showAlwaysUseProxy=this.alwaysUseProxy.checked)},_onProxyUrlChange:function(){this._publishProxy()},_onProxyUrlBlur:function(){this.proxyUrlNode.value?b.removeClass(this.proxyUrlNode,"error-status"):b.addClass(this.proxyUrlNode,"error-status")},_onAppIdChange:function(){f.publish("configChanged","app",{appId:this.appIdNode.value})},_publishProxy:function(){f.publish("configChanged","app",{httpProxy:this.getProxy()})}})});