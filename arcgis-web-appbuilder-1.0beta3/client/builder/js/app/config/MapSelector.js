//>>built
require({cache:{"url:builder/config/templates/MapSelector.html":'\x3cdiv style\x3d"position:relative;width:100%;height:100%;"\x3e\r\n\t\x3cdiv class\x3d"map-setting-tab-container" style\x3d"width:100%;height:100%;"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"tabNode"\x3e\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content mycontent-tab" data-dojo-attach-point\x3d"mycontentTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main mycontent-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onMyContentSearch" style\x3d"position:absolute;width:100%;top:15px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentMapTable" data-dojo-type\x3d"builder/config/MapTable" style\x3d"top:65px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content organization-tab" data-dojo-attach-point\x3d"organizationTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main organization-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onOrganizationSearch" style\x3d"position:absolute;width:100%;top:15px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationMapTable" data-dojo-type\x3d"builder/config/MapTable" style\x3d"top:65px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content group-tab" data-dojo-attach-point\x3d"groupTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main group-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"groups-section" style\x3d"position:absolute;width:100%;top:70px;" data-dojo-attach-point\x3d"groupsSection"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.groups}:\x3c/span\x3e\r\n\t\t\t\t\t\x3cselect class\x3d"groups-select" data-dojo-attach-point\x3d"groupsSelect"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"nodata"\x3e${nls.noneGroups}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onGroupSearch" style\x3d"position:absolute;width:100%;top:15px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupMapTable" data-dojo-type\x3d"builder/config/MapTable" style\x3d"top:113px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content public-tab" data-dojo-attach-point\x3d"publicTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main public-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onPublicSearch" style\x3d"position:absolute;width:100%;top:15px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"public-search-radios"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"portalPublicRaido" type\x3d"radio" name\x3d"publicSearchRaido" style\x3d"margin-right:10px;" /\x3e\r\n\t\t\t\t\t\x3cspan style\x3d"margin-right:28px;" data-dojo-attach-point\x3d"portalServer"\x3ePortal\x3c/span\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"onlinePublicRaido" type\x3d"radio" name\x3d"publicSearchRaido" style\x3d"margin-right:10px;" /\x3e\r\n\t\t\t\t\t\x3cspan\x3eArcGIS.com\x3c/span\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicMapSection" class\x3d"public-map-section"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicPortalMapTable" data-dojo-type\x3d"builder/config/MapTable"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicOnlineMapTable" data-dojo-type\x3d"builder/config/MapTable"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"signin-section" data-dojo-attach-point\x3d"signinSection" style\x3d"display:none;"\x3e\r\n\t\t\x3cdiv class\x3d"signin-tip"\x3e${nls.signInTip}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/topic dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/MapSelector.html dojo/_base/config dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on jimu/utils jimu/dijit/TabContainer3 builder/portalUtils jimu/portalUrlUtils jimu/dijit/Search builder/config/MapTable".split(" "),function(m,g,n,p,q,r,h,c,k,d,l,e,s,t,u,f,w,x){return m([n,p,q],{templateString:r,baseClass:"map-selector",tab:null,isPublicTabShow:!1,_user:null,
_group:null,_webMapQueryString:"",_allPublicPortalQuery:null,_filterPublicPortalQuery:null,_allPublicOnlineQuery:null,_filterPublicOnlineQuery:null,_allOrganizationQuery:null,_filterOrganizationQuery:null,_allMyContentQuery:null,_filterMyContentQuery:null,_allGroupQuery:null,_filterGroupQuery:null,_signIn:!1,portal:null,postMixInProperties:function(){this.nls=c.mixin({},builderNls.common);this.nls=c.mixin(this.nls,builderNls.mapConfig)},postCreate:function(){this.inherited(arguments);this._webMapQueryString=
" "+s.getItemQueryStringByTypes(["Web Map"])+" ";this.portal=u.getPortal(this._getPortalUrl());this._initSearchQuery();this._initTabs();this._initPortalRadio();this._initMapTables();this._initPrivate();this._initPublic();this._bindMapTableEvents();this._updateUIbySignIn()},startup:function(){this.tab._started||(this.tab.startup(),this.tab._started=!0)},_initTabs:function(){var a={title:this.nls.myContent,content:this.mycontentTabNode},b={title:this.nls.myOrganization,content:this.organizationTabNode},
v={title:this.nls.myGroup,content:this.groupTabNode},f={title:this.nls.publicMap,content:this.publicTabNode};this.isPublicTabShow=!1;this.tab=new t({tabs:[a,b,v,f]},this.tabNode);this.own(e(this.tab,"tabChanged",c.hitch(this,function(a){d.setStyle(this.signinSection,"display","none");a!==this.nls.publicMap?(this.isPublicTabShow=!1,this._updateUIbySignIn()):this.isPublicTabShow=!0})))},_bindMapTableEvents:function(){this.own(e(this.mycontentMapTable,"select",c.hitch(this,this._onMapSelected)));this.own(e(this.organizationMapTable,
"select",c.hitch(this,this._onMapSelected)));this.own(e(this.groupMapTable,"select",c.hitch(this,this._onMapSelected)));this.own(e(this.publicPortalMapTable,"select",c.hitch(this,this._onMapSelected)));this.own(e(this.publicOnlineMapTable,"select",c.hitch(this,this._onMapSelected)))},_onMapSelected:function(a){if(a=a&&a.selectedNode)this.mycontentMapTable.unselect(),this.organizationMapTable.unselect(),this.groupMapTable.unselect(),this.publicPortalMapTable.unselect(),this.publicOnlineMapTable.unselect(),
d.addClass(a,"selected")},_updateUIbySignIn:function(){d.setStyle(this.signinSection,"display","none");var a=l(".organization-tab-content-main,.group-tab-content-main,.mycontent-tab-content-main",this.domNode);this.portal.haveSignIn()?a.style("display","block"):(a.style("display","none"),this.isPublicTabShow||d.setStyle(this.signinSection,"display","block"))},_initPortalRadio:function(){var a=this._getPortalUrl(),a=f.getServerByUrl(a);f.isArcGIScom(a)?(this.portalPublicRaido.disabled=!0,this.onlinePublicRaido.checked=
!0,d.setStyle(this.portalPublicRaido,"display","none"),d.setStyle(this.portalServer,"display","none")):(this.portalPublicRaido.disabled=!1,this.portalPublicRaido.checked=!0,this.portalServer.innerHTML=a)},_initSearchQuery:function(){var a="esri_"+(h.locale&&h.locale.slice(0,2)||"en").toLowerCase(),b=k.filter("esri_he esri_fr esri_ja esri_nl esri_th esri_tr esri_nb esri_ro esri_it esri_pl esri_po esri_ru esri_pt esri_en esri_ar esri_et esri_es esri_ko esri_cs esri_da esri_zh esri_sv esri_lt esri_fi esri_lv esri_de".split(" "),
c.hitch(this,function(b){return b!==a})),d="";k.forEach(b,c.hitch(this,function(a){d+=" -owner:"+a+" "}));this._allPublicPortalQuery=this._getQuery({sortField:"numViews",sortOrder:"desc",q:this._webMapQueryString+" AND access:public "+d});this._filterPublicPortalQuery=this._getQuery({q:this._webMapQueryString+" AND access:public"});this._allPublicOnlineQuery=this._getQuery({sortField:"numViews",sortOrder:"desc",q:'(group:"c755678be14e4a0984af36a15f5b643e" OR group:"b8787a74b4d74f7fb9b8fac918735153") '+
this._webMapQueryString+" AND access:public"});this._filterPublicOnlineQuery=this._getQuery({q:this._webMapQueryString+" AND access:public"});this._allOrganizationQuery=this._getQuery();this._filterOrganizationQuery=this._getQuery();this._allMyContentQuery=this._getQuery();this._filterMyContentQuery=this._getQuery();this._allGroupQuery=this._getQuery();this._filterGroupQuery=this._getQuery()},_getQuery:function(a){return c.mixin({start:1,num:16,f:"json"},a||{})},_getPortalUrl:function(){return f.getStandardPortalUrl(window.portalUrl)},
_initMapTables:function(){var a=this._getPortalUrl();this.portalPublicRaido.disabled||(this.publicPortalMapTable.set("portalUrl",a),this.publicPortalMapTable.searchAllMaps(this._allPublicPortalQuery),this.publicPortalMapTable.set("filteredQuery",this._filterPublicPortalQuery));this.publicOnlineMapTable.set("portalUrl","http://www.arcgis.com");this.publicOnlineMapTable.searchAllMaps(this._allPublicOnlineQuery);this.publicOnlineMapTable.set("filteredQuery",this._filterPublicOnlineQuery)},_initPublic:function(){this.own(e(this.portalPublicRaido,
"click",c.hitch(this,this._onPublicRaidoClicked)));this.own(e(this.onlinePublicRaido,"click",c.hitch(this,this._onPublicRaidoClicked)));this._onPublicRaidoClicked()},_onPublicRaidoClicked:function(){this.portalPublicRaido.checked?(this.publicPortalMapTable.show(),this.publicOnlineMapTable.hide()):this.onlinePublicRaido.checked&&(this.publicPortalMapTable.hide(),this.publicOnlineMapTable.show())},_onPublicSearch:function(a){(a=a&&c.trim(a))?(this.publicPortalMapTable.showFilterMapsSection(),this.publicOnlineMapTable.showFilterMapsSection(),
this.portalPublicRaido.checked?(this._filterPublicPortalQuery.q=a+this._webMapQueryString+" AND access:public",this._filterPublicPortalQuery.start=1,this.publicPortalMapTable.searchFilteredMaps(this._filterPublicPortalQuery)):this.onlinePublicRaido.checked&&(this._filterPublicOnlineQuery.q=a+this._webMapQueryString+" AND access:public",this._filterPublicOnlineQuery.start=1,this.publicOnlineMapTable.searchFilteredMaps(this._filterPublicOnlineQuery))):(this.publicPortalMapTable.showAllMapsSection(),
this.publicOnlineMapTable.showAllMapsSection())},_initPrivate:function(){this._resetPortalMaps();this.own(g.subscribe("userSignIn",c.hitch(this,this._onSignIn)));this.own(g.subscribe("userSignOut",c.hitch(this,this._onSignOut)));this.own(e(this.groupsSelect,"change",c.hitch(this,this._onGroupsSelectChange)));var a=f.getServerByUrl(this._getPortalUrl());f.isArcGIScom(a)&&(a="ArcGIS.com");this.signinSection.title=this.nls.signInTo+" "+a;this.portal.haveSignIn()&&this._onSignIn()},_onOrganizationSearch:function(a){if(a=
a&&c.trim(a)){if(this._allOrganizationQuery){var b=this._allOrganizationQuery.q;b&&(this._filterOrganizationQuery.q=a+" "+b,this._filterOrganizationQuery.start=1,this.organizationMapTable.searchFilteredMaps(this._filterOrganizationQuery))}}else this.organizationMapTable.showAllMapsSection()},_onMyContentSearch:function(a){if(a=a&&c.trim(a)){if(this._allMyContentQuery){var b=this._allMyContentQuery.q;b&&(this._filterMyContentQuery.q=a+" "+b,this._filterMyContentQuery.start=1,this.mycontentMapTable.searchFilteredMaps(this._filterMyContentQuery))}}else this.mycontentMapTable.showAllMapsSection()},
_onGroupSearch:function(a){if(a=a&&c.trim(a)){if(this._allGroupQuery){var b=this._allGroupQuery.q;b&&(this._filterGroupQuery.q=a+" "+b,this._filterGroupQuery.start=1,this.groupMapTable.searchFilteredMaps(this._filterGroupQuery))}}else this.groupMapTable.showAllMapsSection()},_onSignIn:function(){this._updateUIbySignIn();this._signIn||(this._signIn=!0,this.portal.getUser().then(c.hitch(this,function(a){this.domNode&&(this._resetPortalMaps(),this._searchOrganization(a),this._searchMyContent(a),this._searchGroups(a))})))},
_onSignOut:function(){this._signIn=!1;this._resetPortalMaps();this._updateUIbySignIn()},_resetPortalMaps:function(){this.organizationMapTable.clear();this.mycontentMapTable.clear();this._resetGroupsSection()},_searchOrganization:function(a){this.organizationMapTable.clear();a=" orgid:"+a.orgId+" AND "+this._webMapQueryString+" AND (access:org OR access:public) ";var b=this._getPortalUrl();this._allOrganizationQuery=this._getQuery({q:a});this._filterOrganizationQuery=this._getQuery({q:a});this.organizationMapTable.set("portalUrl",
b);this.organizationMapTable.searchAllMaps(this._allOrganizationQuery)},_searchMyContent:function(a){this.mycontentMapTable.clear();var b=this._getPortalUrl();a="owner:"+a.username+" AND "+this._webMapQueryString;this._allMyContentQuery=this._getQuery({q:a});this._filterMyContentQuery=this._getQuery({q:a});this.mycontentMapTable.set("portalUrl",b);this.mycontentMapTable.searchAllMaps(this._allMyContentQuery)},_searchGroups:function(a){this._resetGroupsSection();d.setStyle(this.groupsSection,"display",
"block");a=a.getGroups();if(0<a.length){d.setStyle(this.groupSearch.domNode,"display","block");this.groupMapTable.show();d.empty(this.groupsSelect);for(var b=0;b<a.length;b++){var c=a[b];d.create("option",{value:c.id,innerHTML:c.title},this.groupsSelect)}this._onGroupsSelectChange()}this._updateUIbyGroups(a.length)},_resetGroupsSection:function(){d.setStyle(this.groupsSection,"display","none");d.empty(this.groupsSelect);d.create("option",{value:"nodata",innerHTML:this.nls.noneGroups},this.groupsSelect);
this.groupMapTable.clear();d.setStyle(this.groupSearch.domNode,"display","none");this.groupMapTable.hide();this._updateUIbyGroups(0)},_updateUIbyGroups:function(a){0===a?d.setStyle(this.groupsSection,"top","15px"):d.setStyle(this.groupsSection,"top","70px")},_onGroupsSelectChange:function(){var a=this.groupsSelect.value;this.groupMapTable.clear();if("nodata"===a)d.setStyle(this.groupSearch,"display","none"),this.groupMapTable.hide();else{d.setStyle(this.groupSearch,"display","block");this.groupMapTable.show();
var b=this._getPortalUrl(),a="group:"+a+" AND "+this._webMapQueryString;this._allGroupQuery=this._getQuery({q:a});this._filterGroupQuery=this._getQuery({q:a});this.groupMapTable.set("portalUrl",b);this.groupMapTable.searchAllMaps(this._allGroupQuery)}},getSelectedMapItem:function(){var a=null,b=l(".map-item-bg.selected",this.domNode);0<b.length&&(a=b[0].parentNode.item);return a}})});