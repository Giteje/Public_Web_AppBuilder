//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Deferred dojo/promise/all dojo/request jimu/utils".split(" "),function(g,f,h,c,k,l,m,n){return g(null,{appConfig:void 0,currentStyleName:void 0,currentLayoutName:void 0,_manifest:void 0,constructor:function(a){this._manifest=a;this.domNodes={}},clear:function(){var a;this.appConfig=null;for(a=0;a<this._manifest.layouts.length;a++)if("appLayout"===this._manifest.layouts[a].name){this._manifest.layouts[a].domNode&&h.destroy(this._manifest.layouts[a].domNode);
this._manifest.layouts.splice(a,1);break}},loadLayouts:function(){var a=new k,b=[],d=c.filter(this._manifest.layouts,function(a){return"appLayout"!==a.name});c.forEach(d,function(a){b.push(m(this._manifest.url+a.uri,{handleAs:"json"}))},this);l(b).then(f.hitch(this,function(b){c.forEach(d,function(a,d){a.layoutConfig=b[d]},this);a.resolve()}),function(){a.reject()});return a},setAppConfig:function(a){this.appConfig=a},getName:function(){return this._manifest.name},getLabel:function(){return this._manifest.label},
getIcon:function(){return this._manifest.icon},getLayouts:function(){return this._manifest.layouts},getStyles:function(){return this._manifest.styles},getUrl:function(){return this._manifest.url},getCurrentStyle:function(){return this.getStyleByName(this.currentStyleName)},getCurrentLayout:function(){return this.getLayoutByName(this.currentLayoutName)},changeCurrentStyle:function(a){this.currentStyleName=a},changeCurrentLayout:function(a){this.currentLayoutName=a},addLayout:function(a,b,d){var e,
c=this.getLayouts();for(e=0;e<c.length;e++)if(c[e].name===a)return null;a={description:"this is current app layout",name:a,layoutConfig:b,domClass:d};this._manifest.layouts.push(a);return a},getStyleByName:function(a){var b,d=null;for(b=0;b<this._manifest.styles.length;b++)if(this._manifest.styles[b].name===a){d=this._manifest.styles[b];break}return d},getLayoutByName:function(a){var b,d=null;for(b=0;b<this._manifest.layouts.length;b++)if(this._manifest.layouts[b].name===a){d=this._manifest.layouts[b];
break}return d},getLayoutByCompare:function(){return null},layoutIsEqual:function(a,b){return n.isEqual(this.getLayoutFromConfig(a),this.getLayoutFromConfig(b))},getLayoutFromConfig:function(a){var b={};a=f.clone(a);a.widgetOnScreen&&(b.widgetOnScreen={},a.widgetOnScreen.widgets&&(b.widgetOnScreen.widgets=[],c.forEach(a.widgetOnScreen.widgets,function(a,c){b.widgetOnScreen.widgets[c]={position:a.position?a.position:{left:0,top:0}}})),a.widgetOnScreen.groups&&(b.widgetOnScreen.groups=[],c.forEach(a.widgetOnScreen.groups,
function(a,c){b.widgetOnScreen.groups[c]={position:a.position?a.position:{left:0,top:0}}})));a.map&&(b.map={position:a.map.position});return b}})});