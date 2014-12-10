//>>built
define({common:{ok:"OK",cancel:"Annuller",save:"Gem",doNotSave:"Gem ikke",saved:"Gemt"},apps:{welcomeMessage:"\u00f8_Welcome to Web AppBuilder for ArcGIS!_\u00e5",appCreate:"Opret ny",appCreateTitle:"Opret en ny app",appUpload:"Overf\u00f8r",appName:"App-navn",appDesc:"Beskrivelse",appTime:"\u00f8_Date modified_\u00e5",appModified:"\u00f8_Modified by_\u00e5",appCreator:"\u00f8_Creator_\u00e5",edit:"Redig\u00e9r",launch:"Start",createFromHere:"Opret herfra",remove:"Fjern",deleteMenu:"\u00f8_Delete_\u00e5",
duplicate:"Duplik\u00e9r",editAppInfo:"Redig\u00e9r oplysninger om appen",download:"Hent",agolTemp:"Eksporter som skabelon",createAppFailedMeg:"Appen kunne ikke oprettes.",noAppName:"App-navn er obligatorisk.",confirmDeleteApp:"\u00f8_Are you sure you want to delete this app?_\u00e5",deleteAppTitle:"\u00f8_Delete App_\u00e5",downloadFailedTip:"Overf\u00f8rslen mislykkedes!",savePublish:"Udfyld oplysningerne nedenfor for at gemme og offentligg\u00f8re din web-applikation. Vis oplysningerne om elementet i denne webkortapplikation for at se URL'en til applikationen.",
appBuilderMsg:"Lad os hj\u00e6lpe dig med at komme i gang",appBuilderTitle:"Web AppBuilder for ArcGIS",titleLabel:"Titel:",tagsLabel:"N\u00f8gleord:",summaryLabel:"Oversigt:",saveFolderLabel:"Gem i mappe:",shareSameLevel:"\u00f8_Share the same as web map_\u00e5 ",createAppUrlError:"\u00f8_Create App successfully, but 'sharing app' failed!_\u00e5",saveAsFaied:"\u00f8_Save as failed_\u00e5",deleteFalse:"\u00f8_Failed to remove the app! The response of removeApp is 'unsuccess'!_\u00e5",deleteError:"\u00f8_Failed to remove the app_\u00e5",
duplicateFalse:"\u00f8_Failed to duplicate the app! The response of duplicate is 'unsuccess'!_\u00e5",duplicateError:"\u00f8_Failed to duplicate the app_\u00e5",editAppFalse:"\u00f8_The response of updateApp is 'unsuccess'!_\u00e5",editAppTrue:"\u00f8_Updated app successfully, the app id is_\u00e5 ",editError:"\u00f8_Failed to update 'app name' or 'app description'!_\u00e5"},header:{appDefaultAttributes:"Appens standardattributter",help:"Hj\u00e6lp",settings:"Indstillinger",signIn:"Log ind",signOut:"Log ud",
saveSuccessfully:"Gemt!",saveFailed:"Blev ikke gemt!",home:"\u00f8_Home_\u00e5",gallery:"\u00f8_Gallery_\u00e5",groups:"Grupper",content:"\u00f8_My Content_\u00e5",organization:"\u00f8_My Organization_\u00e5",logoTitle:"\u00f8_Web AppBuilder for ArcGIS_\u00e5",profile:"\u00f8_Profile_\u00e5"},settings:{settings:"Angiv standardattributter for appen",lSettings:"Angiv appattributter",showAdSetting:"+ Vis avancerede indstillinger",hideAdSetting:"Skjul avancerede indstillinger...",bingMapKey:"Bing Maps-n\u00f8gle",
bingMapId:"Bing Maps-id",defaultPortalUrl:"Standard-URL for Portal",portalUrl:"Portal-URL",geometryServiceUrl:"Geometritjeneste-URL",geometryServiceError:"Den geometritjeneste-URL, du har angivet, er ugyldig eller utilg\u00e6ngelig.",routeServiceUrl:"Rutetjenestens URL",geocodeServiceUrl:"Geokodningstjenestens URL",printTaskUrl:"Udskrivningsopgavens URL",httpProxyUrl:"HTTP Proxy URL",appId:"App-id",locale:"Placering",save:"Gem",themeRepo:"Temalager",widgetRepo:"Widget-lager",loadHelperServices:"Indl\u00e6s hj\u00e6lpetjenester",
loadServiceError:"Portalens URL-adresse er ugyldig. Den skal normalt have formatet: http(s)://www.arcgis.com/ eller http(s)://\x26lt;portalserver\x26gt;/\x26lt;instansnavn\x26gt;",webMapError:"Kan ikke hente standarwebkortet fra portalURL",helpText:{bingMapKey:"Bing Maps-n\u00f8glen kr\u00e6ves, for at du kan f\u00e5 adgang til Bing Maps og Bing-geokodning.",defaultPortalUrl:"URL'en til ArcGIS Online eller din lokale Portal for ArcGIS.",geometryServiceUrl:"Den geometritjeneste, som benyttes af visse widgets til at foretage geometrioperationer.",
geocodeServiceUrl:"Geokodningstjenesten, som visse widgets bruger til at udf\u00f8re geokodningsefunktioner.",routeServiceUrl:"Rutetjenesten, som visse widgets bruger til at udf\u00f8re rutefunktioner.",printTaskUrl:"Udskrivningsopgaven, som visse widgets bruger til at udf\u00f8re udskrivningsfunktioner.",httpProxyUrl:'Der kr\u00e6ves en HTTP-proxy for at f\u00e5 adgang til indhold, der enten er beskyttet eller "hosted" p\u00e5 en server, som adskiller sig fra din applikation (krydsdom\u00e6neproblem).',
locale:"Landestandarden, der anvendes til din webapp.",appId:"Id'et, der anvendes i appen, til at logge p\u00e5 ArcGIS Online vha. OAuth2-autorisation.",themeRepo:"Lager med temaer, der anvendes i Web AppBuilder.",widgetRepo:"Lager med widgets, der anvendes i Web AppBuilder."}},leftPane:{themes:"Temaer",map:"Kort",widgets:"Widgets",attributes:"Attributter",width:"Bredde",height:"H\u00f8jde",selectDevice:"V\u00e6lg en enhed, der skal forh\u00e5ndsvises, eller tilpas ovenst\u00e5ende",share:"Del",previewMore:"Forh\u00e5ndsvisninger",
back2Configure:"Konfigur\u00e9r",unSaveMegBegin:"Vil du gemme \u00e6ndringerne af ",unSaveMegEnd:"?",canNotSaveMeg:"du kan ikke gemme denne standardapp",saveSuccessMeg:"Gemt",saveFailedMeg:"Appen blev ikke gemt",toHomeTitle:"\u00f8_Web AppBuilder for ArcGIS_\u00e5",saveAs:"Gem som",launch:"Start",unloadMessage:"\u00f8_you are working on has unsaved changes._\u00e5",theApp:"\u00f8_The application_\u00e5"},themes:{themeTitle:"Temaer",styleTitle:"Typografi",layoutTitle:"Layout"},mapConfig:{map:"Kort",
selectWebMap:"V\u00e6lg webkort",searchMapName:"S\u00f8g efter kortnavn...",searchNone:"\u00f8_We couldn't find what you were looking for. Please try another one._\u00e5",groups:"\u00f8_Groups_\u00e5",noneGroups:"Ingen grupper",signInTip:"\u00f8_Your login session has expired. Please refresh your browser to sign in to your portal again._\u00e5",signIn:"Log ind",publicMap:"Offentlig",myOrganization:"Min organisation",myGroup:"Mine grupper",myContent:"Mit indhold",setExtentTip:'Navig\u00e9r til den rette udstr\u00e6kning fra kortet p\u00e5 h\u00f8jre side, og klik p\u00e5 knappen "Indstil startudstr\u00e6kning" for at indstille appens oprindelige kortudstr\u00e6kning.',
setExtent:"Indstil startudstr\u00e6kning",count:"T\u00e6lling",fromPortal:"fra Portal",fromOnline:"fra ArcGIS.com",noneThumbnail:"Miniaturen er ikke tilg\u00e6ngelig",changeMap:"V\u00e6lg webkort",owner:"ejer",signInTo:"Log ind p\u00e5",lastModified:"Sidst \u00e6ndret",moreDetails:"Flere oplysninger",originalExtentTip:"Gendan til webkortets oprindelige udstr\u00e6kning",setInitialExtent:"Brug aktuel kortudstr\u00e6kning",restoreInitialExtent:"Brug standardudstr\u00e6kningen i Web Map",statement:"Angiv spatial udstr\u00e6kning for kortet, n\u00e5r programmet starter."},
widgets:{openAtStart:"\u00c5bn ved start",jsonEditor:"JSON-editor",back:"Tilbage",changeIcon:"skift widget-ikon",more:"F\u00e5 mere at vide om denne widget",dropWidgetMessage:"Er det sikkert, at denne widget skal fjernes?",dropGroupMessage:"Er det sikkert, at denne gruppe skal fjernes?",setControlledWidgets:"Indstil widgets i denne controller",setControlledWidgetsBy:"Indstil widgets administreret af ",noConfig:"Ikke mere konfiguration.",notFinished:"\u00f8_Not finish yet!_\u00e5",labelExists:"\u00f8_Label exists_\u00e5",
configLabel:"\u00f8_Configure_\u00e5"},groups:{label:"M\u00e6rke"},attributes:{headerTitle:"Branding",headerDesc:"\u00f8_Add LOGO, title, or subtitle for your app._\u00e5",addLogo:"\u00f8_Click here to add a LOGO_\u00e5",title:"Titel",subtitle:"Undertitel",appIdTitle:"\u00f8_App ID_\u00e5",appIdAbout:"\u00f8_About_\u00e5",linksTitle:"Links",addLink:"Tilf\u00f8j nyt link",proxyUrlPlaceholder:"Dobbeltklik for at redigere proxy-URL",prefixPlaceholder:"Dobbeltklik for at redigere pr\u00e6fiks",prefixHeader:"Pr\u00e6fiks",
proxyUrlHeader:"Proxy-URL",labelPlaceholder:"Dobbeltklik for at redigere linkets navn",urlPlaceholder:"Dobbeltklik for at redigere linkets URL",proxySetting:"Proxy-indstilling",proxyRulesLabel:"\u00f8_Specify proxy rules to route your application requests:_\u00e5 ",alwaysUseProxyLabel:"\u00f8_Use the following proxy for all requests that don't match above rules:_\u00e5 ",addProxyRule:"Tilf\u00f8j ny proxy-regel",useProxySetting:"Brug proxy",proxyUrl:"Proxy-URL",editLabel:"Redig\u00e9r",deleteLabel:"Slet"},
serviceUtils:{duplicateError:"\u00f8_Duplicate App Failed!_\u00e5",duplicateUrlError:"\u00f8_Duplicate App successfully, but failed to update URL!_\u00e5",addItemError:"AddItem mislykkedes",addItemUnsuccess:"Svar p\u00e5 AddItem mislykkedes",createUrlError:"Appen blev oprettet, men kunne ikke opdatere URL!",createError:"Oprettelsen af app'en mislykkedes!",createCodeAttachmentError:"App'en blev oprettet, men kunne ikke tilf\u00f8je vedh\u00e6ftet kode!"},agolTemplate:{title:"Eksporter som skabelon til webkortapp",
rightPartHead:"Indstil konfigur\u00e9rbare parametre til skabelonen",rightPartSubhead:"Parameterkategorier",rightPartHead2:"JSON-skabelonkode",viewJsonCode:"Vis JSON-kode",viewJsonBack:"Tilbage til Indstillinger",ok:"OK",save:"Gem",download:"Eksport\u00e9r",unSaveMeg:"Skal \u00e6ndringerne gemmes?",cancelPopupTitle:"Skabelon til webkortapp",saveSuccessMeg:"Gemt",appNameTitle:"Appnavn: "}});