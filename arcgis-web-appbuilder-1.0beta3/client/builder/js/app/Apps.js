//>>built
require({cache:{"url:builder/templates/Apps.html":'\x3cdiv \x3e\r\n  \x3cdiv class\x3d"app-content" data-dojo-attach-point\x3d"appContent"\x3e\r\n    \x3cdiv class\x3d"head-section" data-dojo-attach-point\x3d"head-section"\x3e\r\n        \x3cdiv class\x3d"textPart1"\x3e${nls.welcomeMessage}\x3c/div\x3e\r\n        \x3cdiv class\x3d"textPart2"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"upload-button-div"\x3e\r\n          \x3cinput class\x3d"upload-button" type\x3d"button" value\x3d"${nls.appUpload}"\x3e\r\n          \x3cform enctype\x3d"multipart/form-data" method\x3d"post" action\x3d"/builder/rest/apps/upload" data-dojo-attach-point\x3d"uploadAppFileFormNode"\x3e\r\n            \x3cinput class\x3d"file-input" name\x3d"app" type\x3d"file" data-dojo-attach-point\x3d"appFileInputNode" data-dojo-type\x3d"dojox/form/Uploader" data-dojo-attach-event\x3d"onChange:_onAppFileChange,onError:_onAppFileUploadError,onComplete:_onAppFileUploadComplete" accept\x3d".zip" style\x3d"width:100%;height:100%;"/\x3e\x3c/input\x3e\r\n            \x3cinput name\x3d"creator" type\x3d"text" value\x3d"1234" style\x3d"display:none;" data-dojo-attach-point\x3d"appFileCreatorInputNode"\x3e\x3c/input\x3e\r\n          \x3c/form\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"create-button-div"\x3e\x3cinput class\x3d"create-button" type\x3d"button" value\x3d"${nls.appCreate}" data-dojo-attach-event\x3d"onclick:_onCreateClick"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"list-section" id\x3d"list-section" data-dojo-attach-point\x3d"listSection"\x3e\r\n      \x3ctable class\x3d"list-section-head"\x3e\r\n        \x3ctbody\x3e\r\n          \x3ctr class\x3d"head-content"\x3e\r\n            \x3cth class\x3d"name"\x3e${nls.appName}\x3c/th\x3e\r\n            \x3cth class\x3d"desc"\x3e${nls.appDesc}\x3c/th\x3e\r\n            \x3cth class\x3d"time"\x3e${nls.appTime}\x3c/th\x3e\r\n            \x3cth class\x3d"modified"\x3e${nls.appModified}\x3c/th\x3e\r\n            \x3cth class\x3d"creator"\x3e${nls.appCreator}\x3c/th\x3e\r\n          \x3c/tr\x3e  \r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n\r\n      \x3cdiv class\x3d"list-section-body-content" id\x3d"list-section-body-content" data-dojo-attach-point\x3d"listSectionBodyContent"\x3e\r\n        \x3ctable class\x3d"list-table" data-dojo-attach-point\x3d"listTable"\x3e\r\n          \x3ctbody\x3e\x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e        \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3ciframe style\x3d"display:none" name\x3d"downloadTargetFrame"\x3e\x3c/iframe\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/request dojo/mouse dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/Apps.html dojo/on dojo/keys dojo/_base/lang dijit/form/ValidationTextBox ./CreateApp ./CreateAppNew ./AppOperMenu ./serviceUtils dojo/Deferred dojo/topic dojo/dom-class dojo/dom dojo/query dijit/registry jimu/dijit/Message builder/portalUtils dojox/form/Uploader".split(" "),function(y,H,c,I,w,z,A,B,C,h,J,e,K,L,D,E,p,M,u,f,N,
F,O,q,G){return y([z,A,B],{templateString:C,menu:void 0,label:"applist",apps:{},sortBy:"lastUpdated",postMixInProperties:function(){this.inherited(arguments);this.nls=e.mixin({},builderNls.common);this.nls=e.mixin(this.nls,builderNls.apps)},constructor:function(){},startup:function(){this.inherited(arguments);this.refresh();c.setSelectable(this.appContent,!1)},getAppList:function(){return p.getAppList()},refresh:function(a){a?(this.setApps(a),this.createAppList()):this.getAppList().then(e.hitch(this,
function(a){this.setApps(a);this.createAppList()}))},setApps:function(a){this.apps=a},createAppList:function(){this.cleanAppList();var a,b=null;for(a=0;a<this.apps.length;a++)b=this.createAppNode(this.apps[a],a,b)},cleanAppList:function(){c.empty(this.listTable.firstElementChild||this.listTable.firstChild)},createAppNode:function(a,b,l){var d,k,m,f,g,r,x,s,n,q,v,t;b=c.create("tr",{"class":"list-table-item list-table-item"+(b%2?" list-table-item-add ":" ")},this.listTable.firstElementChild||this.listTable.firstChild);
t=c.create("td",{"class":"item-begin-td item-first-td"},b);c.create("td",{"class":"item-begin-td item-second-td"},b);k=c.create("td",{"class":"item-name-td"},b);m=c.create("div",{"class":"item-name",innerHTML:a.name},k);f=c.create("td",{"class":"item-desc-td"},b);g=c.create("div",{"class":"item-desc",innerHTML:a.description},f);d=c.create("td",{"class":"item-time-td"},b);v=c.create("div",{"class":"item-time",innerHTML:a.lastUpdated},d);d=c.create("td",{"class":"item-modified-td"},b);var p=c.create("div",
{"class":"item-modified",innerHTML:a.modified},d);d=c.create("td",{"class":"item-creator-td"},b);c.create("div",{"class":"item-creator",innerHTML:a.creator},d);d=c.create("td",{"class":"item-loading-td",innerHTML:"\x3cdiv class\x3d'loading-div'\x3e\x3c/div\x3e"},b);n=F(".loading-div",d)[0];c.create("img",{src:"builder/css/images/download.gif","class":"loading-img"},n);d=c.create("td",{"class":"item-operations-td"},b);d=c.create("div",{"class":"item-operations-div"},d);c.setStyle(d,"display","none");
r=c.create("div",{"class":"item-edit"},d);c.create("div",{innerHTML:this.nls.edit,"class":"item-edit-text"},r);x=c.create("div",{innerHTML:'\x3ca href\x3d"stemapp/index.html?id\x3d'+a.id+'" target\x3d"_blank"\x3e'+this.nls.launch+"\x3c/a\x3e","class":"item-preview"},d);s=c.create("div",{"class":"item-more"},d);q=c.create("div",{"class":"app-menu-div"},s);n=new E({apps:this.apps,app:a,posNode:b,loadingDiv:n,appListWidget:this},q);c.create("td",{"class":"item-end-td"},b);this.own(h(b,w.enter,e.hitch(this,
this._onListTableItemMouseover,b,d,l)));this.own(h(b,w.leave,e.hitch(this,this._onListTableItemMouseout,b,d,n,l)));this.own(h(b,"click",e.hitch(this,function(a){a.stopPropagation()})));this.own(h(m,"dblclick",e.hitch(this,this._onNameDoubleClick,a,b,k,m,v,p)));this.own(h(g,"dblclick",e.hitch(this,this._onDescriptionDoubleClick,a,b,f,g,v,p)));this.own(h(r,"click",e.hitch(this,this._onAppEditClick,a)));this.own(h(x,"click",this._onAppPreviewClick(a)));this.own(h(s,"click",e.hitch(this,this._onAppMoreClick,
a,n,s,t,b,d,l)));this.own(h(this.ownerDocument,"click",e.hitch(this,this._onAppsClick,n,b,d,t,l,s)));this.own(u.subscribe("menuAll/hide",e.hitch(this,this._onAppsClick,n,b,d,t,l,s)));return b},createAppNodeHTML:function(a){return"\x3ctd\x3e\x3cdiv\x3e"+a.name+"\x3c/div\x3e\x3c/td\x3e\x3ctd\x3e\x3cdiv\x3e"+a.description+"\x3c/div\x3e\x3c/td\x3e\x3ctd\x3e\x3cdiv\x3e"+a.lastUpdated+'\x3c/div\x3e\x3c/td\x3e\x3cinput type\x3d"button" value\x3d"Edit" /\x3e\x3cinput type\x3d"button" value\x3d"Preview"/\x3e\x3cinput type\x3d"button" value\x3d"..."/\x3e'},
changeTextFieldOfNode:function(a,b,l,d,k,m,p){var g,r=e.clone(a);c.setStyle(k,"display","none");g="name"===d?c.create("input",{value:a[d],"class":"jimu-input item-input-"+d},l):c.create("textarea",{value:a[d],"class":"jimu-input item-textarea-"+d},l);g.focus();g.select();f.add(b,"list-table-item-dbclick");h(g,"blur",e.hitch(this,function(){a[d]!==g.value&&(r[d]=g.value,this.updateApp(r).then(function(b){!0===b.success?(k.innerHTML=g.value,m.innerHTML=b.lastUpdated,p.innerHTML=b.modified,a[d]=g.value):
new q({message:b.message})},function(a){}));c.destroy(g);c.setStyle(k,"display","block");f.remove(b,"list-table-item-dbclick")}))},updateApp:function(a){return p.updateApp(a)},_onCreateClick:function(){D.popupDlg({appListWidget:this})},_onAppFileUploadError:function(a){new q({message:a.message||a})},_onAppFileUploadComplete:function(a){a.success?(this.cleanAppList(),this.getAppList().then(e.hitch(this,function(a){this.setApps(a);this.createAppList()}))):new q({message:a.message})},_onAppFileChange:function(){G.getPortal(window.portalUrl).getUser().then(e.hitch(this,
function(a){c.setAttr(this.appFileCreatorInputNode,"value",a.username);this.appFileInputNode.submit(this.uploadAppFileFormNode)}),function(a){new q({message:a.message||a})})},_onListTableItemMouseover:function(a,b,l){f.add(a,"list-table-item-mouseover");l&&f.add(l,"list-table-next-item-mouseover");c.setStyle(b,"display","block")},_onListTableItemMouseout:function(a,b,l,d){l.isShow||(f.remove(a,"list-table-item-mouseover"),d&&f.remove(d,"list-table-next-item-mouseover"),c.setStyle(b,"display","none"))},
_onNameDoubleClick:function(a,b,c,d,k,f){e.hitch(this,this.changeTextFieldOfNode(a,b,c,"name",d,k,f))},_onDescriptionDoubleClick:function(a,b,c,d,f,m){e.hitch(this,this.changeTextFieldOfNode(a,b,c,"description",d,f,m))},_onAppEditClick:function(a){u.publish("switchToApp",a)},_onAppPreviewClick:function(a){return function(){}},_onAppMoreClick:function(a,b,e,d,k,m,h,g){b.isShow?(b.hide(),f.remove(d,"item-first-td-selected"),c.removeClass(e,"item-more-selected")):(u.publish("menuAll/hide"),b.set("app",
a),b.show(),f.add(d,"item-first-td-selected"),c.addClass(e,"item-more-selected"),this._onListTableItemMouseover(k,m,h,g));g.stopPropagation()},_onAppsClick:function(a,b,e,d,k,h){a.hide();f.remove(d,"item-first-td-selected");k&&f.remove(k,"list-table-next-item-mouseover");f.remove(b,"list-table-item-mouseover");c.removeClass(h,"item-more-selected");c.setStyle(e,"display","none")}})});