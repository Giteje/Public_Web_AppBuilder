//>>built
define({common:{ok:"OK",cancel:"Storno",save:"Ulo\u017eit",doNotSave:"Neukl\u00e1dat",saved:"Ulo\u017eeno"},apps:{welcomeMessage:"V\u00edtejte v programu Web AppBuilder for ArcGIS!",appCreate:"Vytvo\u0159it nov\u00fd",appCreateTitle:"Vytvo\u0159it novou aplikaci",appUpload:"Nahr\u00e1t",appName:"N\u00e1zev aplikace",appDesc:"Popis",appTime:"Datum \u00fapravy",appModified:"Upravil",appCreator:"Vytvo\u0159il",edit:"Upravit",launch:"Spustit",createFromHere:"Vytvo\u0159it odsud",remove:"Odebrat",deleteMenu:"Odstranit",
duplicate:"Duplikovat",editAppInfo:"Upravit informace o aplikaci",download:"St\u00e1hnout",agolTemp:"Exportovat jako \u0161ablonu",createAppFailedMeg:"Aplikaci se nepoda\u0159ilo vytvo\u0159it.",noAppName:"Je vy\u017eadov\u00e1n n\u00e1zev aplikace.",confirmDeleteApp:"Ur\u010dit\u011b chcete odstranit tuto aplikaci?",deleteAppTitle:"Odstranit aplikaci",downloadFailedTip:"Stahov\u00e1n\u00ed se nezda\u0159ilo!",savePublish:"Chcete-li ulo\u017eit a publikovat webovou aplikaci, vypl\u0148te n\u00ed\u017ee uveden\u00e9 informace. Adresu URL t\u00e9to webov\u00e9 mapov\u00e9 aplikace naleznete v podrobnostech polo\u017eky.",
appBuilderMsg:"Pom\u016f\u017eeme v\u00e1m za\u010d\u00edt.",appBuilderTitle:"Web AppBuilder for ArcGIS",titleLabel:"Nadpis:",tagsLabel:"Kl\u00ed\u010dov\u00e1 slova:",summaryLabel:"Shrnut\u00ed:",saveFolderLabel:"Ulo\u017eit do slo\u017eky:",shareSameLevel:"Sd\u00edlet stejn\u011b jako webovou mapu ",createAppUrlError:"Aplikace byla \u00fasp\u011b\u0161n\u011b vytvo\u0159ena, ale sd\u00edlen\u00ed se nezda\u0159ilo.",saveAsFaied:"P\u0159\u00edkaz Ulo\u017eit jako se nepoda\u0159ilo prov\u00e9st.",
deleteFalse:"Aplikaci se nepoda\u0159ilo odstranit. Funkce removeApp neprob\u011bhla \u00fasp\u011b\u0161n\u011b.",deleteError:"Aplikaci se nepoda\u0159ilo odstranit.",duplicateFalse:"Aplikaci se nepoda\u0159ilo duplikovat. Funkce duplicate neprob\u011bhla \u00fasp\u011b\u0161n\u011b.",duplicateError:"Aplikaci se nepoda\u0159ilo duplikovat.",editAppFalse:"Funkce updateApp neprob\u011bhla \u00fasp\u011b\u0161n\u011b.",editAppTrue:"Aplikace byla \u00fasp\u011b\u0161n\u011b aktualizov\u00e1na, identifik\u00e1tor aplikace: ",
editError:"Nepoda\u0159ilo se aktualizovat n\u00e1zev nebo popis aplikace."},header:{appDefaultAttributes:"V\u00fdchoz\u00ed atributy aplikace",help:"N\u00e1pov\u011bda",settings:"Nastaven\u00ed",signIn:"P\u0159ihl\u00e1sit se",signOut:"Odhl\u00e1sit se",saveSuccessfully:"\u00dasp\u011b\u0161n\u011b ulo\u017eeno!",saveFailed:"Ulo\u017een\u00ed se nezda\u0159ilo!",home:"Dom\u016f",gallery:"Galerie",groups:"Skupiny",content:"M\u016fj obsah",organization:"Moje organizace",logoTitle:"Web AppBuilder for ArcGIS",
profile:"Profil"},settings:{settings:"Nastavit v\u00fdchoz\u00ed atributy aplikace",lSettings:"Nastavit atributy aplikace",showAdSetting:"+ Zobrazit pokro\u010dil\u00e1 nastaven\u00ed",hideAdSetting:"Skr\u00fdt pokro\u010dil\u00e1 nastaven\u00ed\u2026",bingMapKey:"Licen\u010dn\u00ed k\u00f3d k Bing Maps",bingMapId:"ID Bing Maps",defaultPortalUrl:"V\u00fdchoz\u00ed URL port\u00e1lu",portalUrl:"URL port\u00e1lu",geometryServiceUrl:"URL slu\u017eby geometrie",geometryServiceError:"Zadan\u00e9 URL slu\u017eby geometrie je neplatn\u00e9 nebo je slu\u017eba nep\u0159\u00edstupn\u00e1.",
routeServiceUrl:"URL slu\u017eby trasov\u00e1n\u00ed",geocodeServiceUrl:"URL slu\u017eby geok\u00f3dov\u00e1n\u00ed",printTaskUrl:"URL tiskov\u00e9 \u00falohy",httpProxyUrl:"URL HTTP proxy",appId:"ID aplikace",locale:"Jazyk",save:"Ulo\u017eit",themeRepo:"Sklad motiv\u016f",widgetRepo:"Sklad widget\u016f",loadHelperServices:"Na\u010d\u00edst pomocn\u00e9 slu\u017eby",loadServiceError:"URL port\u00e1lu je neplatn\u00e1. URL port\u00e1lu obvykle odpov\u00edd\u00e1 tomuto vzoru: http(s)://www.arcgis.com/ nebo http(s)://\x26lt;portal_server\x26gt;/\x26lt;instance_name\x26gt;",
webMapError:"Z URL port\u00e1lu nelze z\u00edskat v\u00fdchoz\u00ed webovou mapu.",helpText:{bingMapKey:"Pro p\u0159\u00edstup ke slu\u017eb\u011b Bing Maps a geokod\u00e9ru Bing je vy\u017eadov\u00e1n licen\u010dn\u00ed k\u00f3d k Bing Maps.",defaultPortalUrl:"URL pro slu\u017eby ArcGIS Online, nebo m\u00edstn\u00ed slu\u017eby Portal for ArcGIS.",geometryServiceUrl:"Slu\u017eba geometrie, s jej\u00ed\u017e pomoc\u00ed ur\u010dit\u00e9 widgety prov\u00e1d\u011bj\u00ed geometrick\u00e9 operace.",
geocodeServiceUrl:"Slu\u017eba geok\u00f3dov\u00e1n\u00ed, s jej\u00ed\u017e pomoc\u00ed ur\u010dit\u00e9 widgety prov\u00e1d\u011bj\u00ed operace geok\u00f3dov\u00e1n\u00ed.",routeServiceUrl:"Trasovac\u00ed slu\u017eba, s jej\u00ed\u017e pomoc\u00ed ur\u010dit\u00e9 widgety prov\u00e1d\u011bj\u00ed trasovac\u00ed operace.",printTaskUrl:"Tiskov\u00e1 \u00faloha, s jej\u00ed\u017e pomoc\u00ed ur\u010dit\u00e9 widgety prov\u00e1d\u011bj\u00ed tiskov\u00e9 operace.",httpProxyUrl:"P\u0159\u00edstup k obsahu, kter\u00fd je zabezpe\u010den nebo hostov\u00e1n na jin\u00e9m serveru ne\u017e va\u0161e aplikace, vy\u017eaduje HTTP proxy (probl\u00e9m s jinou dom\u00e9nou).",
locale:"Jazyk, kter\u00fd va\u0161e webov\u00e1 aplikace pou\u017e\u00edv\u00e1.",appId:"ID, s jeho\u017e pomoc\u00ed se lze v r\u00e1mci aplikace p\u0159ihl\u00e1sit ke slu\u017eb\u011b ArcGIS Online prost\u0159ednictv\u00edm autorizace OAuth2.",themeRepo:"Sklad motiv\u016f pou\u017e\u00edvan\u00fdch v programu Web AppBuilder.",widgetRepo:"Sklad widget\u016f pou\u017e\u00edvan\u00fdch v programu Web AppBuilder."}},leftPane:{themes:"Motivy",map:"Mapa",widgets:"Widgety",attributes:"Atributy",width:"\u0160\u00ed\u0159ka",
height:"V\u00fd\u0161ka",selectDevice:"Zvolte za\u0159\u00edzen\u00ed, na kter\u00e9m chcete zobrazit n\u00e1hled v\u00fd\u0161e uveden\u00e9ho obsahu, p\u0159\u00edpadn\u011b jej upravit.",share:"Sd\u00edlet",previewMore:"N\u00e1hledy",back2Configure:"Konfigurovat",unSaveMegBegin:"Chcete ulo\u017eit zm\u011bny proveden\u00e9 v ",unSaveMegEnd:"?",canNotSaveMeg:"Tuto v\u00fdchoz\u00ed aplikaci nelze ulo\u017eit.",saveSuccessMeg:"\u00dasp\u011b\u0161n\u011b ulo\u017eeno",saveFailedMeg:"Aplikaci se nepoda\u0159ilo ulo\u017eit.",
toHomeTitle:"Web AppBuilder for ArcGIS",saveAs:"Ulo\u017eit jako",launch:"Spustit",unloadMessage:"na kter\u00e9 pracujete, obsahuje neulo\u017een\u00e9 zm\u011bny.",theApp:"Aplikace"},themes:{themeTitle:"Motivy",styleTitle:"Styl",layoutTitle:"Rozvr\u017een\u00ed"},mapConfig:{map:"Mapa",selectWebMap:"Zvolit webovou mapu",searchMapName:"Vyhled\u00e1vat podle n\u00e1zvu mapy\u2026",searchNone:"Nepoda\u0159ilo se n\u00e1m naj\u00edt to, co hled\u00e1te. Zkuste to pros\u00edm znovu.",groups:"Skupiny",
noneGroups:"\u017d\u00e1dn\u00e9 skupiny",signInTip:"Va\u0161e p\u0159ihla\u0161ovac\u00ed relace vypr\u0161ela. Chcete-li se k port\u00e1lu znovu p\u0159ihl\u00e1sit, obnovte zobrazen\u00ed str\u00e1nky v prohl\u00ed\u017ee\u010di.",signIn:"P\u0159ihl\u00e1sit se",publicMap:"Ve\u0159ejn\u00e9",myOrganization:"Moje organizace",myGroup:"Moje skupiny",myContent:"M\u016fj obsah",setExtentTip:'Chcete-li v aplikaci nastavit po\u010d\u00e1te\u010dn\u00ed rozsah mapy, vyberte vpravo po\u017eadovan\u00fd rozsah mapy a pot\u00e9 zde klikn\u011bte na tla\u010d\u00edtko \u201eNastavit po\u010d\u00e1te\u010dn\u00ed rozsah".',
setExtent:"Nastavit po\u010d\u00e1te\u010dn\u00ed rozsah",count:"Po\u010det",fromPortal:"z port\u00e1lu",fromOnline:"z webu ArcGIS.com",noneThumbnail:"Miniatura nen\u00ed k dispozici.",changeMap:"Zvolit webovou mapu",owner:"vlastn\u00edk",signInTo:"P\u0159ihl\u00e1sit se do",lastModified:"Naposledy upraveno",moreDetails:"Dal\u0161\u00ed podrobnosti",originalExtentTip:"Obnovit p\u016fvodn\u00ed rozsah webov\u00e9 mapy",setInitialExtent:"Pou\u017e\u00edt aktu\u00e1ln\u00ed zobrazen\u00ed mapy",restoreInitialExtent:"Pou\u017e\u00edt v\u00fdchoz\u00ed rozsah webov\u00e9 mapy",
statement:"Zadejte po\u010d\u00e1te\u010dn\u00ed prostorov\u00fd rozsah mapy, kter\u00fd se pou\u017eije p\u0159i spu\u0161t\u011bn\u00ed aplikace."},widgets:{openAtStart:"Otev\u0159\u00edt p\u0159i spu\u0161t\u011bn\u00ed",jsonEditor:"Editor JSON",back:"Zp\u011bt",changeIcon:"zm\u011bnit ikonu widgetu",more:"Dal\u0161\u00ed informace o tomto widgetu",dropWidgetMessage:"Opravdu chcete tento widget odstranit?",dropGroupMessage:"Opravdu chcete tuto skupinu odstranit?",setControlledWidgets:"Nastavit widgety v tomto ovlada\u010di",
setControlledWidgetsBy:"Nastavit widgety spravovan\u00e9 pomoc\u00ed ",noConfig:"\u017d\u00e1dn\u00e1 dal\u0161\u00ed konfigurace",notFinished:"Je\u0161t\u011b nejste hotovi!",labelExists:"\u0160t\u00edtek existuje",configLabel:"Konfigurovat"},groups:{label:"\u0160t\u00edtek"},attributes:{headerTitle:"Ozna\u010den\u00ed",headerDesc:"P\u0159idejte aplikaci logo, nadpis nebo podnadpis.",addLogo:"Kliknut\u00edm sem p\u0159id\u00e1te logo.",title:"Nadpis",subtitle:"Podnadpis",appIdTitle:"ID aplikace",
appIdAbout:"O aplikaci",linksTitle:"Odkazy",addLink:"P\u0159idat nov\u00fd odkaz",proxyUrlPlaceholder:"Dvojit\u00fdm kliknut\u00edm zah\u00e1j\u00edte editaci URL proxy.",prefixPlaceholder:"Dvojit\u00fdm kliknut\u00edm zah\u00e1j\u00edte editaci p\u0159edpony.",prefixHeader:"P\u0159edpona",proxyUrlHeader:"URL proxy",labelPlaceholder:"Dvojit\u00fdm kliknut\u00edm zah\u00e1j\u00edte editaci n\u00e1zvu odkazu.",urlPlaceholder:"Dvojit\u00fdm kliknut\u00edm zah\u00e1j\u00edte editaci URL odkazu.",proxySetting:"Nastaven\u00ed proxy",
proxyRulesLabel:"Nastavte pravidla proxy pro sm\u011brov\u00e1n\u00ed po\u017eadavk\u016f aplikace: ",alwaysUseProxyLabel:"Pou\u017e\u00edvat n\u00e1sleduj\u00edc\u00ed proxy pro v\u0161echny po\u017eadavky, kter\u00e9 neodpov\u00eddaj\u00ed v\u00fd\u0161e uveden\u00fdm pravidl\u016fm: ",addProxyRule:"P\u0159idat nov\u00e9 pravidlo proxy",useProxySetting:"Pou\u017e\u00edvat proxy",proxyUrl:"URL proxy",editLabel:"Upravit",deleteLabel:"Odstranit"},serviceUtils:{duplicateError:"Aplikaci se nepoda\u0159ilo duplikovat.",
duplicateUrlError:"Aplikace byla \u00fasp\u011b\u0161n\u011b duplikov\u00e1na, ale nepoda\u0159ilo se aktualizovat adresu URL.",addItemError:"P\u0159id\u00e1n\u00ed polo\u017eky se nezda\u0159ilo.",addItemUnsuccess:"Na p\u0159\u00edkaz P\u0159idat polo\u017eku nebyla zaznamen\u00e1na \u017e\u00e1dn\u00e1 odezva.",createUrlError:"Vytvo\u0159en\u00ed aplikace prob\u011bhlo \u00fasp\u011b\u0161n\u011b, ale nepoda\u0159ilo se aktualizovat adresu URL.",createError:"Vytvo\u0159en\u00ed aplikace se nezda\u0159ilo.",
createCodeAttachmentError:"Vytvo\u0159en\u00ed aplikace prob\u011bhlo \u00fasp\u011b\u0161n\u011b, ale nepoda\u0159ilo se p\u0159idat k\u00f3d jako p\u0159\u00edlohu."},agolTemplate:{title:"Exportovat jako \u0161ablonu aplikace pro webov\u00e9 mapy",rightPartHead:"Nastavit u \u0161ablony parametry, kter\u00e9 lze konfigurovat",rightPartSubhead:"Kategorie parametr\u016f",rightPartHead2:"K\u00f3d JSON \u0161ablony",viewJsonCode:"Zobrazit k\u00f3d JSON",viewJsonBack:"Zp\u011bt na Nastaven\u00ed",ok:"OK",
save:"Ulo\u017eit",download:"Exportovat",unSaveMeg:"Chcete ulo\u017eit proveden\u00e9 zm\u011bny?",cancelPopupTitle:"\u0160ablona aplikace pro webov\u00e9 mapy",saveSuccessMeg:"\u00dasp\u011b\u0161n\u011b ulo\u017eeno",appNameTitle:"N\u00e1zev aplikace: "}});