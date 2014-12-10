//>>built
define({common:{ok:"OK",cancel:"Cancelar",save:"Salvar",doNotSave:"N\u00e3o Salvar",saved:"Salvo"},apps:{welcomeMessage:"\u00e3_Welcome to Web AppBuilder for ArcGIS!_\u00c7",appCreate:"Criar Novo",appCreateTitle:"Criar Novo Aplicativo",appUpload:"Carregar",appName:"Nome do Aplicativo",appDesc:"Descri\u00e7\u00e3o",appTime:"\u00e3_Date modified_\u00c7",appModified:"\u00e3_Modified by_\u00c7",appCreator:"\u00e3_Creator_\u00c7",edit:"Editar",launch:"Iniciar",createFromHere:"Criar a partir daqui",remove:"Remover",
deleteMenu:"\u00e3_Delete_\u00c7",duplicate:"Duplicar",editAppInfo:"Editar Info do Aplicativo",download:"Download",agolTemp:"Exportar como Modelo",createAppFailedMeg:"Falha ao criar aplicativo.",noAppName:"Um nome de aplicativo \u00e9 exigido.",confirmDeleteApp:"\u00e3_Are you sure you want to delete this app?_\u00c7",deleteAppTitle:"\u00e3_Delete App_\u00c7",downloadFailedTip:"Falha de Download!",savePublish:"Preencha as informa\u00e7\u00f5es abaixo para salvar e publicar seu aplicativo da web. Visualize os detalhes do item deste aplicativo de mapeamento da web para ver a URL do aplicativo.",
appBuilderMsg:"Deixe-nos ajud\u00e1-lo a come\u00e7ar",appBuilderTitle:"Web AppBuilder for ArcGIS",titleLabel:"T\u00edtulo:",tagsLabel:"Tags:",summaryLabel:"Resumo:",saveFolderLabel:"Salvar na pasta:",shareSameLevel:"\u00e3_Share the same as web map_\u00c7 ",createAppUrlError:"\u00e3_Create App successfully, but 'sharing app' failed!_\u00c7",saveAsFaied:"\u00e3_Save as failed_\u00c7",deleteFalse:"\u00e3_Failed to remove the app! The response of removeApp is 'unsuccess'!_\u00c7",deleteError:"\u00e3_Failed to remove the app_\u00c7",
duplicateFalse:"\u00e3_Failed to duplicate the app! The response of duplicate is 'unsuccess'!_\u00c7",duplicateError:"\u00e3_Failed to duplicate the app_\u00c7",editAppFalse:"\u00e3_The response of updateApp is 'unsuccess'!_\u00c7",editAppTrue:"\u00e3_Updated app successfully, the app id is_\u00c7 ",editError:"\u00e3_Failed to update 'app name' or 'app description'!_\u00c7"},header:{appDefaultAttributes:"Atributos do Aplicativo Padr\u00e3o",help:"Ajuda",settings:"Configura\u00e7\u00f5es",signIn:"Entrar",
signOut:"Sair",saveSuccessfully:"Salvo com sucesso !",saveFailed:"Falha ao salvar !",home:"\u00e3_Home_\u00c7",gallery:"\u00e3_Gallery_\u00c7",groups:"Grupos",content:"\u00e3_My Content_\u00c7",organization:"\u00e3_My Organization_\u00c7",logoTitle:"\u00e3_Web AppBuilder for ArcGIS_\u00c7",profile:"\u00e3_Profile_\u00c7"},settings:{settings:"Configurar Atributos do Aplicativo Padr\u00e3o",lSettings:"Configurar Atributos do Aplicativo",showAdSetting:"+ Mostrar configura\u00e7\u00f5es avan\u00e7adas",
hideAdSetting:"Ocultar configura\u00e7\u00f5es avan\u00e7adas...",bingMapKey:"Chave do Bing Maps",bingMapId:"ID do Bing Maps",defaultPortalUrl:"URL do Portal Padr\u00e3o",portalUrl:"URL do Portal",geometryServiceUrl:"URL do Servi\u00e7o de Geometria",geometryServiceError:"O URL do servi\u00e7o de geometria que voc\u00ea inseriu \u00e9 inv\u00e1lido ou inacess\u00edvel.",routeServiceUrl:"URL do Servi\u00e7o de Rota",geocodeServiceUrl:"URL do Servi\u00e7o de Geoc\u00f3digo",printTaskUrl:"URL da Tarefa de Impress\u00e3o",
httpProxyUrl:"URL de Proxy do HTTP",appId:"ID do Aplicativo",locale:"Localizar",save:"Salvar",themeRepo:"Reposit\u00f3rio de Tema",widgetRepo:"Reposit\u00f3rio de Widget",loadHelperServices:"Carregar servi\u00e7os de ajuda",loadServiceError:"A URL do portal \u00e9 inv\u00e1lida. A URL do Portal est\u00e1 normalmente neste modelo: http(s)://www.arcgis.com/ ou http(s)://\x26lt;portal_server\x26gt;/\x26lt;instance_name\x26gt;",webMapError:"N\u00e3o \u00e9 poss\u00edvel obter o mapa da web padr\u00e3o a partir da url do portal",
helpText:{bingMapKey:"A chave do Bing Maps \u00e9 exigida para acessar Bing Maps e geocodificador do Bing.",defaultPortalUrl:"A URL do ArcGIS Online ou do seu Portal for ArcGIS local.",geometryServiceUrl:"O servi\u00e7o de geometria utilizado por determinados widgets para realizar opera\u00e7\u00f5es de geometria.",geocodeServiceUrl:"O servi\u00e7o de geoc\u00f3digo utilizado por determinados widgets para realizar uma opera\u00e7\u00e3o de geocodifica\u00e7\u00e3o.",routeServiceUrl:"O servi\u00e7o de rota utilizado por determinados widgets para realizar uma opera\u00e7\u00e3o de rota.",
printTaskUrl:"A tarefa de impress\u00e3o utilizada por determinados widgets para realizar a opera\u00e7\u00e3o de impress\u00e3o.",httpProxyUrl:"Um proxy de HTTP \u00e9 exigido ao acessar o conte\u00fado que est\u00e1 seguro ou hospedado em um servidor diferente do seu aplicativo (problema de dom\u00ednio cruzado).",locale:"Localiza\u00e7\u00e3o utilizada para seu aplicativo da web.",appId:"O ID utilizado no aplicativo para Entrar no ArcGIS Online por autoriza\u00e7\u00e3o do OAuth2.",themeRepo:"Reposit\u00f3rio de temas utilizado no Web AppBuilder.",
widgetRepo:"Reposit\u00f3rio de widgets utilizados no Web AppBuilder."}},leftPane:{themes:"Temas",map:"Mapa",widgets:"Widgets",attributes:"Atributos",width:"Largura",height:"Altura",selectDevice:"Selecione um dispositivo para visualizar ou personalizar acima",share:"Compartilhar",previewMore:"Visualiza\u00e7\u00f5es",back2Configure:"Configurar",unSaveMegBegin:"Deseja salvar suas altera\u00e7\u00f5es no ",unSaveMegEnd:"?",canNotSaveMeg:"voc\u00ea n\u00e3o pode salvar este aplicativo padr\u00e3o",saveSuccessMeg:"Salvo com sucesso",
saveFailedMeg:"Falha ao Salvar Aplicativo",toHomeTitle:"\u00e3_Web AppBuilder for ArcGIS_\u00c7",saveAs:"Salvar Como",launch:"Iniciar",unloadMessage:"\u00e3_you are working on has unsaved changes._\u00c7",theApp:"\u00e3_The application_\u00c7"},themes:{themeTitle:"Temas",styleTitle:"Estilo",layoutTitle:"Layout"},mapConfig:{map:"Mapa",selectWebMap:"Escolher Mapa da Web",searchMapName:"Procurar por nome do mapa...",searchNone:"\u00e3_We couldn't find what you were looking for. Please try another one._\u00c7",
groups:"\u00e3_Groups_\u00c7",noneGroups:"Sem grupos",signInTip:"\u00e3_Your login session has expired. Please refresh your browser to sign in to your portal again._\u00c7",signIn:"Entrar",publicMap:"P\u00fablico",myOrganization:"Minha Organiza\u00e7\u00e3o",myGroup:"Meus Grupos",myContent:"Meu Conte\u00fado",setExtentTip:'Navegue at\u00e9 a extens\u00e3o apropriada a partir do mapa do lado direito e clique no bot\u00e3o "Configurar Extens\u00e3o Inicial" para configurar a extens\u00e3o de mapa inicial do aplicativo.',
setExtent:"Configurar Extens\u00e3o Inicial",count:"Contagem",fromPortal:"do Portal",fromOnline:"do ArcGIS.com",noneThumbnail:"Miniatura n\u00e3o dispon\u00edvel",changeMap:"Escolher Mapa da Web",owner:"propriet\u00e1rio",signInTo:"Entrar no",lastModified:"\u00daltima Modifica\u00e7\u00e3o",moreDetails:"Mais Detalhes",originalExtentTip:"Restaurar a extens\u00e3o original do mapa da web",setInitialExtent:"Utilizar Viualiza\u00e7\u00e3o de Mapa Atual",restoreInitialExtent:"Utilizar Extens\u00e3o de Mapa da Web Padr\u00e3o",
statement:"Especifique a extens\u00e3o espacial inicial do mapa quando o aplicativo for iniciado."},widgets:{openAtStart:"Abrir ao iniciar",jsonEditor:"Editor de JSON",back:"Voltar",changeIcon:"alterar \u00edcone do widget",more:"Obtenha mais informa\u00e7\u00f5es sobre este widget",dropWidgetMessage:"Tem certeza que deseja remover este widget?",dropGroupMessage:"Tem certeza que deseja remover este grupo?",setControlledWidgets:"Configure os widgets neste controlador",setControlledWidgetsBy:"Configurar widgets gerenciados por ",
noConfig:"Sem mais configura\u00e7\u00e3o.",notFinished:"\u00e3_Not finish yet!_\u00c7",labelExists:"\u00e3_Label exists_\u00c7",configLabel:"\u00e3_Configure_\u00c7"},groups:{label:"R\u00f3tulo"},attributes:{headerTitle:"R\u00f3tulo",headerDesc:"\u00e3_Add LOGO, title, or subtitle for your app._\u00c7",addLogo:"\u00e3_Click here to add a LOGO_\u00c7",title:"T\u00edtulo",subtitle:"Subt\u00edtulo",appIdTitle:"\u00e3_App ID_\u00c7",appIdAbout:"\u00e3_About_\u00c7",linksTitle:"Links",addLink:"Adicionar Novo Link",
proxyUrlPlaceholder:"Clique duas vezes para editar URL de proxy",prefixPlaceholder:"Clique duas vezes para editar prefixo",prefixHeader:"Prefixo",proxyUrlHeader:"URL de Proxy",labelPlaceholder:"Clique duas vezes para editar nome do link",urlPlaceholder:"URL",proxySetting:"Configura\u00e7\u00f5es de Proxy",proxyRulesLabel:"\u00e3_Specify proxy rules to route your application requests:_\u00c7 ",alwaysUseProxyLabel:"\u00e3_Use the following proxy for all requests that don't match above rules:_\u00c7 ",
addProxyRule:"Adicionar Nova Regra de Proxy",useProxySetting:"Utilizar Proxy",proxyUrl:"URL de Proxy",editLabel:"Editar",deleteLabel:"Excluir"},serviceUtils:{duplicateError:"\u00e3_Duplicate App Failed!_\u00c7",duplicateUrlError:"\u00e3_Duplicate App successfully, but failed to update URL!_\u00c7",addItemError:"Falha de AddItem",addItemUnsuccess:"Resposta de AddItem mal sucedida",createUrlError:"Cria\u00e7\u00e3o de Aplicativo bem sucedida, mas falha ao atualizar URL!",createError:"Falha ao Criar Aplicativo!",
createCodeAttachmentError:'Cria\u00e7\u00e3o de Aplicativo bem sucedida, mas falha ao adicionar "Anexo de C\u00f3digo"!'},agolTemplate:{title:"Exportar como Modelo de Aplicativo de Mapa da Web",rightPartHead:"Definir par\u00e2metros configur\u00e1veis para o modelo",rightPartSubhead:"Categorias do Par\u00e2metro",rightPartHead2:"C\u00f3digo de JSON do Modelo",viewJsonCode:"Visualizar C\u00f3digo de JSON",viewJsonBack:"Voltar para Configura\u00e7\u00f5es",ok:"OK",save:"Salvar",download:"Exportar",
unSaveMeg:"Deseja Salvar suas altera\u00e7\u00f5es?",cancelPopupTitle:"Modelo de Aplicativo de Mapa da Web",saveSuccessMeg:"Salvo com sucesso",appNameTitle:"Nome do Aplicativo: "}});