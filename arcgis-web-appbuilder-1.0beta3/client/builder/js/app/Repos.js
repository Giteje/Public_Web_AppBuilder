//>>built
require({cache:{"url:builder/templates/Repos.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"list-section" data-dojo-attach-point\x3d"listSection"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/request dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/Repos.html".split(" "),function(a,g,h,b,c,d,e,f){return a([d,e],{templateString:f,startup:function(){this.syncRepos()},syncRepos:function(){c("/wm/repo/sync",{handleAs:"json"}).then(b.hitch(this,function(a){}))}})});