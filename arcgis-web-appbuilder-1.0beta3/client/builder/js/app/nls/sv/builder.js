//>>built
define({common:{ok:"OK",cancel:"Avbryt",save:"Spara",doNotSave:"Spara inte",saved:"Sparad"},apps:{welcomeMessage:"\u00c5_Welcome to Web AppBuilder for ArcGIS!_\u00f6",appCreate:"Skapa ny",appCreateTitle:"Skapa en ny app",appUpload:"\u00d6verf\u00f6r",appName:"Appnamn",appDesc:"Beskrivning",appTime:"\u00c5_Date modified_\u00f6",appModified:"\u00c5_Modified by_\u00f6",appCreator:"\u00c5_Creator_\u00f6",edit:"Redigera",launch:"Starta",createFromHere:"Skapa h\u00e4rifr\u00e5n",remove:"Ta bort",deleteMenu:"\u00c5_Delete_\u00f6",
duplicate:"Duplicera",editAppInfo:"Redigera appinfo",download:"H\u00e4mta",agolTemp:"Exportera som mall",createAppFailedMeg:"Det gick inte att skapa appen.",noAppName:"Appnamn m\u00e5ste anges.",confirmDeleteApp:"\u00c5_Are you sure you want to delete this app?_\u00f6",deleteAppTitle:"\u00c5_Delete App_\u00f6",downloadFailedTip:"Det gick inte att h\u00e4mta!",savePublish:"Fyll i informationen nedan f\u00f6r att spara och publicera webbapplikationen. Visa objektinformation f\u00f6r webbmappningsapplikationen om du vill se URL:en till applikationen.",
appBuilderMsg:"L\u00e5t oss hj\u00e4lpa dig komma ig\u00e5ng",appBuilderTitle:"Web AppBuilder for ArcGIS",titleLabel:"Titel:",tagsLabel:"Taggar:",summaryLabel:"Sammanfattning:",saveFolderLabel:"Spara i mapp:",shareSameLevel:"\u00c5_Share the same as web map_\u00f6 ",createAppUrlError:"\u00c5_Create App successfully, but 'sharing app' failed!_\u00f6",saveAsFaied:"\u00c5_Save as failed_\u00f6",deleteFalse:"\u00c5_Failed to remove the app! The response of removeApp is 'unsuccess'!_\u00f6",deleteError:"\u00c5_Failed to remove the app_\u00f6",
duplicateFalse:"\u00c5_Failed to duplicate the app! The response of duplicate is 'unsuccess'!_\u00f6",duplicateError:"\u00c5_Failed to duplicate the app_\u00f6",editAppFalse:"\u00c5_The response of updateApp is 'unsuccess'!_\u00f6",editAppTrue:"\u00c5_Updated app successfully, the app id is_\u00f6 ",editError:"\u00c5_Failed to update 'app name' or 'app description'!_\u00f6"},header:{appDefaultAttributes:"Standardattribut f\u00f6r appen",help:"Hj\u00e4lp",settings:"Inst\u00e4llningar",signIn:"Logga in",
signOut:"Logga ut",saveSuccessfully:"Sparad!",saveFailed:"Det gick inte att spara!",home:"\u00c5_Home_\u00f6",gallery:"\u00c5_Gallery_\u00f6",groups:"Grupper",content:"\u00c5_My Content_\u00f6",organization:"\u00c5_My Organization_\u00f6",logoTitle:"\u00c5_Web AppBuilder for ArcGIS_\u00f6",profile:"\u00c5_Profile_\u00f6"},settings:{settings:"Ange standardattribut f\u00f6r appen",lSettings:"Ange attribut f\u00f6r appen",showAdSetting:"+ Visa avancerade inst\u00e4llningar",hideAdSetting:"D\u00f6lj avancerade inst\u00e4llningar ...",
bingMapKey:"Bing Maps-nyckel",bingMapId:"Bing Maps-ID",defaultPortalUrl:"Standardportal-URL",portalUrl:"Portal-URL",geometryServiceUrl:"URL till geometritj\u00e4nst",geometryServiceError:"Den URL du har angett f\u00f6r geometritj\u00e4nsten \u00e4r ogiltig eller g\u00e5r inte att komma \u00e5t.",routeServiceUrl:"URL till ruttj\u00e4nst",geocodeServiceUrl:"URL till geokodningstj\u00e4nst",printTaskUrl:"URL till utskriftstj\u00e4nst",httpProxyUrl:"URL till HTTP-proxy",appId:"App-ID",locale:"Spr\u00e5kversion",
save:"Spara",themeRepo:"Lagringsplats f\u00f6r tema",widgetRepo:"Lagringsplats f\u00f6r widget",loadHelperServices:"Hj\u00e4lptj\u00e4nster f\u00f6r h\u00e4mtning",loadServiceError:"Portal-URL:en \u00e4r ogiltig. En portal-URL har normalt sett f\u00f6ljande format: http(s)://www.arcgis.com/ eller http(s)://\x26lt;portal_server\x26gt;/\x26lt;instance_name\x26gt;",webMapError:"Det g\u00e5r inte att h\u00e4mta en standardwebbkarta fr\u00e5n portalUrl",helpText:{bingMapKey:"Bing Maps-nyckeln kr\u00e4vs f\u00f6r \u00e5tkomst till Bing Maps och Bing geocoder.",
defaultPortalUrl:"URL:en f\u00f6r ArcGIS Online eller ditt lokala Portal for ArcGIS.",geometryServiceUrl:"Den geometritj\u00e4nst som anv\u00e4nds av vissa widgetar f\u00f6r att utf\u00f6ra geometri\u00e5tg\u00e4der.",geocodeServiceUrl:"Den geokodningstj\u00e4nst som anv\u00e4nds av vissa widgetar f\u00f6r att utf\u00f6ra geokodnings\u00e5tg\u00e4rder.",routeServiceUrl:"Den ruttj\u00e4nst som anv\u00e4nds av en del widgetar f\u00f6r att utf\u00f6ra rutt\u00e5tg\u00e4rder.",printTaskUrl:"Den utskriftstj\u00e4nst som anv\u00e4nds av vissa widgetar f\u00f6r att utf\u00f6ra utskrifts\u00e5tg\u00e4rder.",
httpProxyUrl:"En HTTP-proxy kr\u00e4vs f\u00f6r att f\u00e5 \u00e5tkomst till inneh\u00e5ll som \u00e4r skyddat eller driftas p\u00e5 en annan server \u00e4n din app (korsdom\u00e4nproblem).",locale:"Spr\u00e5kversion som anv\u00e4nds f\u00f6r webbappen.",appId:"Det ID som anv\u00e4nds i appen f\u00f6r att logga in p\u00e5 ArcGIS Online med OAuth2-auktorisering.",themeRepo:"Lagringsplats f\u00f6r teman som anv\u00e4nds i Web AppBuilder.",widgetRepo:"Lagringsplats f\u00f6r widgetar som anv\u00e4nds i Web AppBuilder."}},
leftPane:{themes:"Teman",map:"Karta",widgets:"Widgetar",attributes:"Attribut",width:"Bredd",height:"H\u00f6jd",selectDevice:"V\u00e4lj en enhet som ska f\u00f6rhandsgranskas eller anpassas ovan",share:"Dela",previewMore:"F\u00f6rhandsgranskningar",back2Configure:"Konfigurera",unSaveMegBegin:"Vill du spara dina \u00e4ndringar till ",unSaveMegEnd:"?",canNotSaveMeg:"du kan inte spara den h\u00e4r standardappen",saveSuccessMeg:"Sparad",saveFailedMeg:"Det gick inte att spara appen",toHomeTitle:"\u00c5_Web AppBuilder for ArcGIS_\u00f6",
saveAs:"Spara som",launch:"Starta",unloadMessage:"\u00c5_you are working on has unsaved changes._\u00f6",theApp:"\u00c5_The application_\u00f6"},themes:{themeTitle:"Teman",styleTitle:"Format",layoutTitle:"Layout"},mapConfig:{map:"Karta",selectWebMap:"V\u00e4lj webbkarta",searchMapName:"S\u00f6k efter kartnamn ...",searchNone:"\u00c5_We couldn't find what you were looking for. Please try another one._\u00f6",groups:"\u00c5_Groups_\u00f6",noneGroups:"Inga grupper",signInTip:"\u00c5_Your login session has expired. Please refresh your browser to sign in to your portal again._\u00f6",
signIn:"Logga in",publicMap:"Publik",myOrganization:"Min organisation",myGroup:"Mina grupper",myContent:"Mitt inneh\u00e5ll",setExtentTip:'Navigera till l\u00e4mplig utbredning via kartan p\u00e5 h\u00f6ger sida och klicka p\u00e5 knappen "Ange inledande utbredning" f\u00f6r att st\u00e4lla in appens inledande kartutbredning.',setExtent:"Ange inledande utbredning",count:"Antal",fromPortal:"fr\u00e5n Portal",fromOnline:"fr\u00e5n ArcGIS.com",noneThumbnail:"Ingen miniatyrbild finns tillg\u00e4nglig",
changeMap:"V\u00e4lj webbkarta",owner:"\u00e4gare",signInTo:"Logga in p\u00e5",lastModified:"Senast \u00e4ndrad",moreDetails:"Mer information",originalExtentTip:"\u00c5terst\u00e4ll till kartans ursprungliga utbredning",setInitialExtent:"Anv\u00e4nd aktuell kartutbredning",restoreInitialExtent:"Anv\u00e4nd webbkartans standardutbredning",statement:"Ange kartans inledande geografiska utbredning n\u00e4r applikationen startas."},widgets:{openAtStart:"\u00d6ppna vid start",jsonEditor:"JSON-redigerare",
back:"Bak\u00e5t",changeIcon:"\u00e4ndra widgetikon",more:"L\u00e4s mer om den h\u00e4r widgeten",dropWidgetMessage:"Vill du ta bort den h\u00e4r widgeten?",dropGroupMessage:"Vill du ta bort den h\u00e4r gruppen?",setControlledWidgets:"Ange widgetar i den h\u00e4r kontrollen",setControlledWidgetsBy:"Ange widgetar hanterade av ",noConfig:"Ingen mer konfiguration.",notFinished:"\u00c5_Not finish yet!_\u00f6",labelExists:"\u00c5_Label exists_\u00f6",configLabel:"\u00c5_Configure_\u00f6"},groups:{label:"Etikett"},
attributes:{headerTitle:"Anpassning",headerDesc:"\u00c5_Add LOGO, title, or subtitle for your app._\u00f6",addLogo:"\u00c5_Click here to add a LOGO_\u00f6",title:"Titel",subtitle:"Underrubrik",appIdTitle:"\u00c5_App ID_\u00f6",appIdAbout:"\u00c5_About_\u00f6",linksTitle:"L\u00e4nkar",addLink:"L\u00e4gg till en ny l\u00e4nk",proxyUrlPlaceholder:"Dubbelklicka f\u00f6r att redigera proxy-URL",prefixPlaceholder:"Dubbelklicka f\u00f6r att redigera prefix",prefixHeader:"Prefix",proxyUrlHeader:"Proxy-URL",
labelPlaceholder:"Dubbelklicka f\u00f6r att redigera l\u00e4nknamnet",urlPlaceholder:"Dubbelklicka f\u00f6r att redigera l\u00e4nk-URL",proxySetting:"Proxyinst\u00e4llning",proxyRulesLabel:"\u00c5_Specify proxy rules to route your application requests:_\u00f6 ",alwaysUseProxyLabel:"\u00c5_Use the following proxy for all requests that don't match above rules:_\u00f6 ",addProxyRule:"L\u00e4gg till ny proxyregel",useProxySetting:"Anv\u00e4nd proxy",proxyUrl:"Proxy-URL",editLabel:"Redigera",deleteLabel:"Ta bort"},
serviceUtils:{duplicateError:"\u00c5_Duplicate App Failed!_\u00f6",duplicateUrlError:"\u00c5_Duplicate App successfully, but failed to update URL!_\u00f6",addItemError:"AddItem misslyckades",addItemUnsuccess:"AddItem-svaret misslyckades",createUrlError:"Appen har skapats, men URL:en uppdaterades inte!",createError:"Det gick inte att skapa appen!",createCodeAttachmentError:'Appen har skapats, men "Kodbilaga" lades inte till!'},agolTemplate:{title:"Exportera som mall f\u00f6r webbkartapp",rightPartHead:"Ange konfigurerade parametrar f\u00f6r mallen",
rightPartSubhead:"Parameterkategorier",rightPartHead2:"Mall f\u00f6r JSON-kod",viewJsonCode:"Visa JSON-kod",viewJsonBack:"Tillbaka till Inst\u00e4llningar",ok:"OK",save:"Spara",download:"Exportera",unSaveMeg:"Vill du spara dina \u00e4ndringar?",cancelPopupTitle:"Mall f\u00f6r webbkartapp",saveSuccessMeg:"Sparad",appNameTitle:"Appnamn: "}});