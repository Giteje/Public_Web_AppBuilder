//>>built
define(["dojo/_base/declare","dijit/_WidgetBase","builder/config/JSONEditor"],function(a,b,c){return a([b],{baseClass:"show-json-code-div",postCreate:function(){this.inherited(arguments);this.jsonEditor=new c({json:this.config});this.jsonEditor.placeAt(this.domNode)},setConfig:function(a){return this.jsonEditor.setJSON(a)},getConfig:function(){return this.jsonEditor.getJSON()}})});