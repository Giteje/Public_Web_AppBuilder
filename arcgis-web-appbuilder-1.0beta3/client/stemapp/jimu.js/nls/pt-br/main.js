define({
    common: {
      ok: 'Ok',
      cancel: 'Cancelar',
      next: 'Avançar',
      back: 'Voltar'
    },

    errorCode: "Código",
    errorMessage: "Mensagem",
    errorDetail: "Detalhe",
    widgetPlaceholderTooltip: "Para configurar, siga até Widgets e clique no console correspondente",

    symbolChooser:{
      preview:'Visualizar',
      basic:'Básico',
      arrows:'Setas',
      business:'Negócio',
      cartographic:'Cartográfico',
      nationalParkService:'Serviço do Parque Nacional',
      outdoorRecreation:'Recreação ao Ar Livre',
      peoplePlaces:'Lugares e Pessoas',
      safetyHealth:'Saúde e Segurança',
      shapes:'Formas',
      transportation:'Transporte',
      symbolSize:'Tamanho de Símbolo',
      color:'Cor',
      alpha:'Alfa',
      outlineColor:'Cor do Contorno',
      outlineWidth:'Largura do Contorno',
      style:'Estilo',
      width:'Largura',
      text:'Texto',
      fontColor:'Cor da Fonte',
      fontSize:'Tamanho da Fonte',
      transparency: 'Transparência',
      solid: 'Sólido',
      dash: 'Traço',
      dot: 'Ponto',
      dashDot: 'Traço Ponto',
      dashDotDot: 'Traço Ponto Ponto'
    },

    transparency: {
      opaque: 'Opaco',
      transparent: 'Transparente'
    },

    rendererChooser:{
      domain: 'Domínio',
      use:'Uso',
      singleSymbol:'Um Único Símbolo',
      uniqueSymbol:'Símbolos Únicos',
      color:'Cor',
      size:'Tamanho',
      toShow:'Para Mostrar',
      colors:'Cores',
      classes:'Classes',
      symbolSize:'Tamanho de Símbolo',
      addValue:'Adicionar Valor',
      setDefaultSymbol:'Configurar Símbolo Padrão',
      defaultSymbol:'Símbolo Padrão',
      selectedSymbol:'Símbolo Selecionado',
      value:'Valor',
      label:'Rótulo',
      range:'Intervalo'
    },

    drawBox:{
      point: "Ponto",
      line: "Linha",
      polyline: "Polilinha",
      freehandPolyline: "Polilinha À Mão Livre",
      triangle: "Triângulo",
      extent: "Extensão",
      circle: "Círculo",
      ellipse: "Elipse",
      polygon: "Polígono",
      freehandPolygon: "Polígono À Mão Livre",
      text: "Texto",
      clear: "Limpar"
    },

    popupConfig: {
      title: "Título",
      add: "Adicionar",
      fields: "Campos",
      noField: "Nenhum Campo",
      visibility: "Visível",
      name: "Nome",
      alias: "Nome Alternativo",
      actions: "Ações"
    },

    includeButton: {
      include: "Incluir"
    },

    loadingShelter: {
      loading: "Carregando"
    },

    basicServiceBrowser: {
      noServicesFound: 'Nenhum serviço encontrado.',
      unableConnectTo: 'Não foi possível conectar ao'
    },

    serviceBrowser: {
      noGpFound: 'Nenhum serviço de geoprocessamento encontrado.',
      unableConnectTo: 'Não foi possível conectar ao'
    },

    layerServiceBrowser: {
      noServicesFound: 'Nenhum serviço de mapa ou da feição encontrado',
      unableConnectTo: 'Não foi possível conectar ao'
    },

    basicServiceChooser: {
      validate: "Validar",
      example: "Exemple",
      set: "Configurar"
    },

    urlInput: {
      invalidUrl: 'URL inválido.'
    },

    filterBuilder: {
      addAnotherExpression: "Adicionar um expressão de filtro",
      addSet: "Adicionar um conjunto de expressão",
      matchMsg: "Obtenha feições na camada que correspondam ao ${any_or_all} das seguintes expressões",
      matchMsgSet: "${any_or_all} das seguintes expressões neste parâmetro são verdadeiros",
      all: "Todas",
      any: "Nenhum",
      value: "Valor",
      field: "Campo",
      unique: "Único",
      none: "Nenhum",
      and: "e",
      valueTooltip: "Inserir valor",
      fieldTooltip: "Selecionar de campo existente",
      uniqueValueTooltip: "Selecionar de valores únicos no campo selecionado",
      stringOperatorIs: "é", // e.g. <stringFieldName> is 'California'
      stringOperatorIsNot: "não é",
      stringOperatorStartsWith: "inicia com",
      stringOperatorEndsWith: "finaliza com",
      stringOperatorContains: "contém",
      stringOperatorDoesNotContain: "não contém",
      stringOperatorIsBlank: "está em branco",
      stringOperatorIsNotBlank: "não está em branco",
      dateOperatorIsOn: "está em", // e.g. <dateFieldName> is on '1/1/2012'
      dateOperatorIsNotOn: "não está em",
      dateOperatorIsBefore: "está antes",
      dateOperatorIsAfter: "está após",
      dateOperatorDays: "dias",
      dateOperatorWeeks: "semanas", // e.g. <dateFieldName> is the last 4 weeks
      dateOperatorMonths: "meses",
      dateOperatorInTheLast: "no último",
      dateOperatorNotInTheLast: "não no último",
      dateOperatorIsBetween: "está entre",
      dateOperatorIsNotBetween: "não está entre",
      dateOperatorIsBlank: "está em branco",
      dateOperatorIsNotBlank: "não está em branco",
      numberOperatorIs: "é", // e.g. <numberFieldName> is 1000
      numberOperatorIsNot: "não é",
      numberOperatorIsAtLeast: "é pelo menos",
      numberOperatorIsLessThan: "é menor que",
      numberOperatorIsAtMost: "é na maioria",
      numberOperatorIsGreaterThan: "é maior que",
      numberOperatorIsBetween: "está entre",
      numberOperatorIsNotBetween: "não está entre",
      numberOperatorIsBlank: "está em branco",
      numberOperatorIsNotBlank: "não está em branco",
      string: "Texto",
      number: "Número",
      date: "Data",
      askForValues: "Perguntar por valores",
      prompt: "Janela de Comando",
      hint: "Sugestão",
      error: {
        invalidParams: "Parâmetros inválidos.",
        invalidUrl: "URL inválido.",
        noFilterFields: "As camadas não têm campos que possam ser utilizados para filtrar.",
        invalidSQL: "Expressão SQL inválida.",
        cantParseSQL: "Não é possível analisar a expressão SQL."
      }
    },

    featureLayerSource: {
      layer: "Camada",
      browse: "Procurar",
      selectFromMap: "Selecionar do Mapa",
      selectFromPortal: "Adicionar do Portal",
      addServiceUrl: "Adicionar URL de Serviço",
      inputLayerUrl: "URL da Camada de Entrada",
      selectLayer: "Seleciona uma camada de feição do mapa atual.",
      chooseItem: "Escolhe um item da camada de feição.",
      setServiceUrl: "Insere a URL de serviço da feição ou serviço do mapa.",
      selectFromOnline: "ã_Add from Online_Ç",
      chooseLayer: "ã_Choose a feature layer._Ç"
    },

    gpSource: {
      selectFromPortal: "ã_Add from Portal_Ç",
      addServiceUrl: "ã_Add Service URL_Ç",
      selectFromOnline: "ã_Add from Online_Ç",
      setServiceUrl: "ã_Enter the URL of geoprocessing service._Ç",
      chooseItem: "ã_Choose a geoprocessing service item._Ç",
      chooseTask: "ã_Choose a geoprocessing task._Ç"
    },

    itemSelector: {
      map: "Mapa",
      selectWebMap: "Escolher Mapa da Web",
      addMapFromOnlineOrPortal: "Localize e adicione um mapa da web para ser utilizado no aplicativo a partir de recursos públicos do ArcGIS Online ou do seu conteúdo privado no ArcGIS Online ou Portal.",
      searchMapName: "Procurar por nome do mapa...",
      searchNone: "Não foi possível encontramos o que você procurava. Tente novamente.",
      groups: "Grupos",
      noneGroups: "Sem grupos",
      signInTip: "Sua sessão de login expirou, atualize seu navegador para entrar no seu portal novamente.",
      signIn: "Entrar",
      publicMap: "Público",
      myOrganization: "Minha Organização",
      myGroup: "Meus Grupos",
      myContent: "Meu Conteúdo",
      count: "Contagem",
      fromPortal: "do Portal",
      fromOnline: "do ArcGIS.com",
      noneThumbnail: "Miniatura Não Disponível",
      owner: "proprietário",
      signInTo: "Entrar no",
      lastModified: "Última Modificação",
      moreDetails: "Mais Detalhes"
    },

    featureLayerChooserFromPortal: {
      notSupportQuery: "ã_The service doesn't support query._Ç"
    },

    basicLayerChooserFromMap: {
      noLayersTip: "Não há nenhuma camada de feição disponível no mapa."
    },

    layerInfosMenu: {
      titleBasemap: 'Mapas Base',
      titleLayers: 'Camadas Operacionais',
      labelLayer: 'Nome da Camada',
      itemZoomTo: 'Zoom para',
      itemTransparency: 'Transparência',
      itemTransparent: 'Transparente',
      itemOpaque: 'Opaco',
      itemMoveUp: 'Mover para cima',
      itemMoveDown: 'Mover para baixo',
      itemDesc: 'Descrição',
      itemDownload: 'Download',
      itemToAttributeTable: 'Abrir Tabela de Atributo'
    },

    imageChooser: {
      unsupportReaderAPI: "TODO: Navegador sem suporte para API de leitor do arquivo",
      invalidType: "Tipo de arquivo inválido.",
      exceed: "O tamanho do arquivo excede 1024 KB",
      enableFlash: "TODO: Habilitar flash."
    },

    simpleTable: {
      moveUp: 'Mover para cima',
      moveDown: 'Mover para baixo',
      deleteRow: 'Excluir',
      edit: 'Editar'
    }
});