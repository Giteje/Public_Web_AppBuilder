﻿define({
    common: {
      ok: 'Gerai',
      cancel: 'Atšaukti',
      next: 'Kitas',
      back: 'Atgal'
    },

    errorCode: "Kodas",
    errorMessage: "Pranešimas",
    errorDetail: "Išsamiau",
    widgetPlaceholderTooltip: "Norėdami nustatyti, eikite į valdiklių dalį ir spustelėkite atitinkamą vietą",

    symbolChooser:{
      preview:'Peržiūra',
      basic:'Bazinis',
      arrows:'Rodyklės',
      business:'Verslas',
      cartographic:'Kartografijos',
      nationalParkService:'Nacionalinių parkų tarnyba',
      outdoorRecreation:'Pramogos lauke',
      peoplePlaces:'Žmonių susibūrimo vietos',
      safetyHealth:'Sauga ir sveikata',
      shapes:'Formos',
      transportation:'Transportas',
      symbolSize:'Simbolio dydis',
      color:'Spalva',
      alpha:'Alfa',
      outlineColor:'Kontūro spalva',
      outlineWidth:'Kontūro plotis',
      style:'Stilius',
      width:'Plotis',
      text:'Tekstas',
      fontColor:'Šrifto spalva',
      fontSize:'Šrifto dydis',
      transparency: 'Permatomumas',
      solid: 'Vientisas',
      dash: 'Brūkšnys',
      dot: 'Taškas',
      dashDot: 'Brūkšnys taškas',
      dashDotDot: 'Brūkšnys taškas taškas'
    },

    transparency: {
      opaque: 'Nepermatomas',
      transparent: 'Permatomas'
    },

    rendererChooser:{
      domain: 'Domenas',
      use:'Naudoti',
      singleSymbol:'Vieną simbolį',
      uniqueSymbol:'Skirtingus simbolius',
      color:'Spalva',
      size:'Dydis',
      toShow:'Rodyti',
      colors:'Spalvos',
      classes:'Klasės',
      symbolSize:'Simbolio dydis',
      addValue:'Pridėti reikšmę',
      setDefaultSymbol:'Nustatyti numatytąjį simbolį',
      defaultSymbol:'Numatytasis simbolis',
      selectedSymbol:'Pasirinktas simbolis',
      value:'Reikšmė',
      label:'Žymė',
      range:'Intervalas'
    },

    drawBox:{
      point: "Kyšulys",
      line: "Linija",
      polyline: "Linija",
      freehandPolyline: "Laisvai piešiama linija",
      triangle: "Trikampis",
      extent: "Aprėptis",
      circle: "Apskritimas",
      ellipse: "Elipsė",
      polygon: "Poligonas",
      freehandPolygon: "Laisvai piešiamas poligonas",
      text: "Tekstas",
      clear: "Valyti"
    },

    popupConfig: {
      title: "Pavadinimas",
      add: "Pridėti",
      fields: "Laukai",
      noField: "Lauko nėra",
      visibility: "Matoma",
      name: "Pavadinimas",
      alias: "Pseudonimas",
      actions: "Veiksmai"
    },

    includeButton: {
      include: "Įtraukti"
    },

    loadingShelter: {
      loading: "Kraunama"
    },

    basicServiceBrowser: {
      noServicesFound: 'Paslaugų nerasta.',
      unableConnectTo: 'Nepavyksta prisijungti prie'
    },

    serviceBrowser: {
      noGpFound: 'Geoduomenų apdorojimo paslaugų nerasta.',
      unableConnectTo: 'Nepavyksta prisijungti prie'
    },

    layerServiceBrowser: {
      noServicesFound: 'Žemėlapių paslaugų arba elementų paslaugų nerasta.',
      unableConnectTo: 'Nepavyksta prisijungti prie'
    },

    basicServiceChooser: {
      validate: "Tikrinti",
      example: "Pavyzdys",
      set: "Grupė"
    },

    urlInput: {
      invalidUrl: 'Neleistinas URL.'
    },

    filterBuilder: {
      addAnotherExpression: "Pridėti filtro sąlygą",
      addSet: "Pridėti išraiškų rinkinį",
      matchMsg: "Gauti elementus sluoksnyje, kurie atitinka šias sąlygas: ${any_or_all}",
      matchMsgSet: "${any_or_all} iš grupėje esančių sąlygų yra teisinga (-os)",
      all: "Viskas",
      any: "Bet kuri",
      value: "Reikšmė",
      field: "Laukas",
      unique: "Unikalios",
      none: "Nėra",
      and: "ir",
      valueTooltip: "Įveskite reikšmę",
      fieldTooltip: "Pasirinkite iš esamo lauko",
      uniqueValueTooltip: "Pažymėtame lauke pasirinkite unikalias reikšmes",
      stringOperatorIs: "yra", // e.g. <stringFieldName> is 'California'
      stringOperatorIsNot: "nėra",
      stringOperatorStartsWith: "prasideda su",
      stringOperatorEndsWith: "baigiasi su",
      stringOperatorContains: "įraše yra",
      stringOperatorDoesNotContain: "įraše nėra",
      stringOperatorIsBlank: "yra tuščias",
      stringOperatorIsNotBlank: "nėra tuščias",
      dateOperatorIsOn: "yra ant", // e.g. <dateFieldName> is on '1/1/2012'
      dateOperatorIsNotOn: "yra ne ant",
      dateOperatorIsBefore: "yra prieš",
      dateOperatorIsAfter: "yra po",
      dateOperatorDays: "dienos",
      dateOperatorWeeks: "savaitės", // e.g. <dateFieldName> is the last 4 weeks
      dateOperatorMonths: "mėnesiai",
      dateOperatorInTheLast: "yra paskutinis",
      dateOperatorNotInTheLast: "nėra paskutinis",
      dateOperatorIsBetween: "yra tarp",
      dateOperatorIsNotBetween: "nėra tarp",
      dateOperatorIsBlank: "yra tuščias",
      dateOperatorIsNotBlank: "nėra tuščias",
      numberOperatorIs: "yra", // e.g. <numberFieldName> is 1000
      numberOperatorIsNot: "nėra",
      numberOperatorIsAtLeast: "yra mažiausia (bent)",
      numberOperatorIsLessThan: "yra mažiau nei",
      numberOperatorIsAtMost: "yra daugiausia",
      numberOperatorIsGreaterThan: "yra daugiau nei",
      numberOperatorIsBetween: "yra tarp",
      numberOperatorIsNotBetween: "nėra tarp",
      numberOperatorIsBlank: "yra tuščias",
      numberOperatorIsNotBlank: "nėra tuščias",
      string: "Eilutė",
      number: "Skaičius",
      date: "Data",
      askForValues: "Klausti reikšmių",
      prompt: "Įveskite",
      hint: "Užuomina",
      error: {
        invalidParams: "Neleistini parametrai.",
        invalidUrl: "Neleistinas URL.",
        noFilterFields: "Sluoksnyje nėra laukų, kurie gali būti naudojami filtravimui.",
        invalidSQL: "Neleistina SQL sąlyga.",
        cantParseSQL: "Nepavyksta išanalizuoti SQL sąlygos."
      }
    },

    featureLayerSource: {
      layer: "Sluoksnis",
      browse: "Parinkti",
      selectFromMap: "Pasirinkti iš žemėlapio",
      selectFromPortal: "Pridėti iš portalo",
      addServiceUrl: "Pridėti paslaugos URL",
      inputLayerUrl: "Įvesties sluoksnio URL",
      selectLayer: "Pasirinkite elementų sluoksnį iš dabartinio žemėlapio.",
      chooseItem: "Pasirinkite elementų sluoksnio elementą.",
      setServiceUrl: "Įveskite elementų paslaugos arba žemėlapių paslaugos URL.",
      selectFromOnline: "Į_Add from Online_š",
      chooseLayer: "Į_Choose a feature layer._š"
    },

    gpSource: {
      selectFromPortal: "Į_Add from Portal_š",
      addServiceUrl: "Į_Add Service URL_š",
      selectFromOnline: "Į_Add from Online_š",
      setServiceUrl: "Į_Enter the URL of geoprocessing service._š",
      chooseItem: "Į_Choose a geoprocessing service item._š",
      chooseTask: "Į_Choose a geoprocessing task._š"
    },

    itemSelector: {
      map: "Žemėlapis",
      selectWebMap: "Pasirinkti žemėlapį",
      addMapFromOnlineOrPortal: "ArcGIS Online viešuosiuose ištekliuose arba privačiame turinyje, esančiame ArcGIS Online arba portale, raskite ir pridėkite interneto žemėlapį, kuris bus naudojamas aplikacijoje.",
      searchMapName: "Ieškoti pagal žemėlapio pavadinimą...",
      searchNone: "Nepavyko rasti jūsų ieškomo elemento. Bandykite dar kartą.",
      groups: "Grupės",
      noneGroups: "Grupių nėra",
      signInTip: "Baigėsi prisijungimo laikas, atnaujinkite naršyklės langą, kad vėl prisijungtumėte prie portalo.",
      signIn: "Prisijunkite",
      publicMap: "Vieša",
      myOrganization: "Organizacija",
      myGroup: "Mano Grupės",
      myContent: "Turinys",
      count: "Kiekis",
      fromPortal: "iš portalo",
      fromOnline: "iš ArcGIS.com",
      noneThumbnail: "Miniatiūros nėra",
      owner: "savininkas",
      signInTo: "Prisijungti į",
      lastModified: "Pakeitimo data",
      moreDetails: "Išsamiau"
    },

    featureLayerChooserFromPortal: {
      notSupportQuery: "Į_The service doesn't support query._š"
    },

    basicLayerChooserFromMap: {
      noLayersTip: "Žemėlapyje nėra elementų sluoksnio."
    },

    layerInfosMenu: {
      titleBasemap: 'Pagrindo žemėlapiai',
      titleLayers: 'Darbiniai sluoksniai',
      labelLayer: 'Sluoksnio pavadinimas',
      itemZoomTo: 'Parodyti visą',
      itemTransparency: 'Permatomumas',
      itemTransparent: 'Permatomas',
      itemOpaque: 'Nepermatomas',
      itemMoveUp: 'Pakelti aukštyn',
      itemMoveDown: 'Nuleisti žemyn',
      itemDesc: 'Aprašas',
      itemDownload: 'Atsiųsti',
      itemToAttributeTable: 'Atidaryti atributų lentelę'
    },

    imageChooser: {
      unsupportReaderAPI: "UŽDUOTIS: naršyklė nepalaiko failo skaitytuvo API",
      invalidType: "Neleistinas failo tipas.",
      exceed: "Failo dydis negali viršyti 1024 KB",
      enableFlash: "UŽDUOTIS: įjunkite „flash“."
    },

    simpleTable: {
      moveUp: 'Pakelti aukštyn',
      moveDown: 'Nuleisti žemyn',
      deleteRow: 'Ištrinti',
      edit: 'Redaguoti'
    }
});