//>>built
require({cache:{"url:builder/templates/Header.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"home-section" data-dojo-attach-point\x3d"homeSection"\x3e\r\n    \x3cdiv class\x3d"home-label" data-dojo-attach-point\x3d"homeLabel"\x3e${nls.home}\x3c/div\x3e\r\n    \x3cdiv class\x3d"home-menu header-menu" data-dojo-attach-point\x3d"homeMenu"\x3e\r\n      \x3ca nowrap target\x3d"_self" href\x3d"#" data-dojo-attach-point\x3d"homeItem"\x3e${nls.home}\x3c/a\x3e\r\n      \x3ca nowrap target\x3d"_self" href\x3d"#" data-dojo-attach-point\x3d"galleryItem"\x3e${nls.gallery}\x3c/a\x3e\r\n      \x3ca nowrap target\x3d"_self" href\x3d"#" data-dojo-attach-point\x3d"groupsItem"\x3e${nls.groups}\x3c/a\x3e\r\n      \x3ca nowrap target\x3d"_self" href\x3d"#" data-dojo-attach-point\x3d"contentItem"\x3e${nls.content}\x3c/a\x3e\r\n      \x3ca nowrap target\x3d"_self" href\x3d"#" data-dojo-attach-point\x3d"organizationItem"\x3e${nls.organization}\x3c/a\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"logo-title" data-dojo-attach-point\x3d"logoTitle"\x3e\r\n    \x3cdiv class\x3d"logo"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"title"\x3eWeb AppBuilder for ArcGIS\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"app-name" data-dojo-attach-point\x3d"appName"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"user-section"\x3e\r\n    \x3cdiv class\x3d"user-info"\x3e      \r\n      \x3cdiv class\x3d"user-name" data-dojo-attach-point\x3d"userNameNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"user-icon"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"user-menu header-menu"\x3e\r\n      \x3ca nowrap target\x3d"_self" data-dojo-attach-point\x3d"profileItem"\x3e${nls.profile}\x3c/a\x3e\r\n      \x3ca nowrap target\x3d"_self" data-dojo-attach-point\x3d"helpItem"\x3e${nls.help}\x3c/a\x3e\r\n      \x3cdiv nowrap class\x3d"sign-out" data-dojo-attach-point\x3d"signOutItem"\x3e${nls.signOut}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/Header.html dojo/on dojo/topic dojo/keys dojo/request/script esri/request jimu/dijit/Popup jimu/dijit/Message builder/portalUtils jimu/portalUrlUtils builder/tokenUtils jimu/utils".split(" "),function(h,b,r,f,k,l,m,d,c,s,n,t,u,v,p,e,g,q){return h([k,l],{templateString:m,baseClass:"header",postMixInProperties:function(){this.nls=b.mixin({},builderNls.common);this.nls=
b.mixin(this.nls,builderNls.header)},postCreate:function(){this.inherited(arguments);this._initSelf()},_initSelf:function(){window.isXT?(f.destroy(this.homeSection),f.setStyle(this.logoTitle,"cursor","pointer"),this._bindXtEvents()):(f.addClass(this.homeLabel,"dropdown"),this._bindIntegratedEvents(window.portalUrl));var a=p.getPortal(window.portalUrl);a.haveSignIn()&&a.getUser().then(b.hitch(this,function(a){if(a=a&&a.username)this.userNameNode.innerHTML=a}),b.hitch(this,function(a){}))},_bindXtEvents:function(){this.own(c.subscribe("userSignOut",
b.hitch(this,function(){this.userNameNode.innerHTML=""})));this.own(c.subscribe("userSignIn",b.hitch(this,function(a){this.userNameNode.innerHTML=a.userId||""})));this.own(d(this.logoTitle,"click",b.hitch(this,function(){var a=b.hitch(this,function(){if(window.history&&window.history.pushState){if("applist"!==main.getSelectedLabel()){c.publish("switchToAppList");var a=window.location.href.split("?")[0];window.history.pushState({path:a},"",a)}}else window.location.href="index.html"});this._hasConfigApp()?
c.publish("leavePage",a):a()})));this.own(d(this.profileItem,"click",b.hitch(this,function(){var a=b.hitch(this,function(){window.location.href=e.getHomeUserUrl(window.portalUrl)});this._hasConfigApp()?c.publish("leavePage",a):a()})));this.own(d(this.helpItem,"click",b.hitch(this,function(){var a=b.hitch(this,function(){window.location.href=e.getPortalHelpUrl(window.portalUrl)});this._hasConfigApp()?c.publish("leavePage",a):a()})));this.own(d(this.signOutItem,"click",b.hitch(this,function(){var a=
b.hitch(this,function(){this.userNameNode.innerHTML="";g.signOutAll();c.publish("switchToSetPortalUrl",null);var a=e.getOAuth2SignOutUrl(window.portalUrl),a=e.setHttpsProtocol(a),b=window.location.href.replace(/[\?|\&](id=)(.+)/,"");q.changeLocation(b);n.get(a,{jsonp:"callback"}).then(function(a){},function(a){})});this._hasConfigApp()?c.publish("leavePage",a):a()})))},_bindIntegratedEvents:function(a){this.own(d(this.homeItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=
e.getHomeIndexUrl(a)})})));this.own(d(this.galleryItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=e.getHomeGalleryUrl(a)})})));this.own(d(this.groupsItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=e.getHomeGroupsUrl(a)})})));this.own(d(this.contentItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=e.getHomeMyContentUrl(a)})})));this.own(d(this.organizationItem,"click",b.hitch(this,
function(){c.publish("leavePage",function(){window.location.href=e.getHomeMyOrganizationUrl(a)})})));this.own(d(this.profileItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=e.getHomeUserUrl(a)})})));this.own(d(this.helpItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){window.location.href=e.getPortalHelpUrl(a)})})));this.own(d(this.signOutItem,"click",b.hitch(this,function(){c.publish("leavePage",function(){g.signOutAll();window.location.href=
e.getPortalSignInUrlFromLocation()})})))},setAppName:function(a){this.appName.innerHTML=a||""},getAppName:function(){return this.appName.innerHTML||""},_hasConfigApp:function(){return!!main.getViewByLabel("config")}})});