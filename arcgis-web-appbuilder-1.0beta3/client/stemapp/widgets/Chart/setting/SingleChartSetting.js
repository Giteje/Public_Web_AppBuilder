///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/array',
  'dojo/_base/html',
  'dojo/_base/query',
  'dojo/_base/Color',
  'dojo/on',
  'dojo/Evented',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dijit/Tooltip',
  'dijit/form/Select',
  'dojo/text!./SingleChartSetting.html',
  'dijit/form/ValidationTextBox',
  'dijit/TooltipDialog',
  'dijit/popup',
  'jimu/utils',
  'jimu/dijit/TabContainer3',
  'jimu/dijit/Filter',
  'jimu/dijit/LoadingShelter',
  'jimu/dijit/_FeaturelayerSourcePopup',
  'jimu/dijit/SymbolPicker',
  'jimu/dijit/Message',
  'jimu/dijit/SimpleTable',
  './DataFields',
  '../Preview',
  'esri/request',
  'esri/tasks/query',
  'esri/tasks/QueryTask',
  'esri/symbols/jsonUtils'
],
function(declare, lang, array, html, query, Color, on, Evented, _WidgetBase,
  _TemplatedMixin, _WidgetsInTemplateMixin, Tooltip, Select, template,
  ValidationTextBox, TooltipDialog, dojoPopup, jimuUtils, TabContainer3, Filter,
  LoadingShelter, _FeaturelayerSourcePopup, SymbolPicker, Message, SimpleTable,
  DataFields, Preview, esriRequest, EsriQuery, QueryTask, esriSymbolJsonUtils) {
  /*jshint unused: false*/
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented], {
    baseClass: 'jimu-widget-singlechart-setting',
    templateString: template,
    mediaSelector: null,

    //options
    config: null,
    map: null,
    nls: null,
    tr: null,
    settingImagesUrl: '',

    //public methods:
    //setConfig
    //getConfig
    //setNewLayerDefinition

    _layerDefinition: null,

    _highLightColor: '#ff0000',

    _stringFieldType: 'esriFieldTypeString',

    _oidFieldType: 'esriFieldTypeOID',

    _numberFieldTypes: ['esriFieldTypeSmallInteger',
                        'esriFieldTypeInteger',
                        'esriFieldTypeSingle',
                        'esriFieldTypeDouble'],

    _uniqueColors:{
      color1:['#fce138','#fff799','#fcd27e','#f1983c',
              '#a553b7','#b1a9d0','#6ecffc','#4c81cd',
              '#fc6f84','#fc3e5a','#69f488','#48885c'].reverse(),
      color2:['#102432','#144d59','#ffc754','#ea9010',
              '#a54e1d','#661510','#d8341a','#b31515',
              '#4a0932','#8c213f','#18382e','#2c6954'].reverse(),
      color3:['#be9626','#607100','#00734c','#704489',
              '#01acca','#024e76','#f09100','#ea311f',
              '#c6004b','#7570b3','#666666','#333333'].reverse(),
      color4:['#fffa00','#f5cb11','#9fd40c','#46e29c',
              '#32b8a6','#7ff2fa','#ad00f2','#c461ea',
              '#eb7200','#e8a784','#bf2e2e','#6c7000'].reverse(),
      color5:['#191921','#11495c','#78b1c2','#454f4b',
              '#8f8f82','#99dbbc','#87b051','#f7ec88',
              '#ebdcc1','#dbb658','#c43541','#75351e'].reverse(),
      color6:['#332424','#751555','#d47013','#d68989',
              '#211173','#82aad6','#7bfaeb','#6ec9a8',
              '#6b6408','#e9da40','#ccc54a','#1fc235'].reverse()
    },

    postCreate: function(){
      this.inherited(arguments);
      this._initSelf();
    },

    destroy: function(){
      this.tr = null;
      delete this.tr;
      dojoPopup.close(this.filterTooltipDialog);
      this.filterTooltipDialog.destroy();
      this.filterTooltipDialog = null;
      this.inherited(arguments);
    },

    startup: function(){
      if(!this._started){
        this.inherited(arguments);
        // setTimeout(lang.hitch(this, function(){
        //   this._updateUrlTextBoxLength();
        // }), 200);
      }
      this._started = true;
    },

    _updateUrlTextBoxLength: function(){
      try{
        var boxBtn = html.getMarginBox(this.btnSetSource);
        var boxDescription = html.getContentBox(this.descriptionTA);
        var width = Math.max(boxDescription.w - boxBtn.w - 10, 380);
        html.setStyle(this.urlTextBox.domNode, 'width', width + 'px');
      }
      catch(e){
        console.error(e);
      }
    },

    setConfig: function(config){
      if(!this._isObject(config)){
        return;
      }

      this.config = config;
      var url = config.url||'';
      var validUrl = url && typeof url === 'string';
      if(!validUrl){
        return;
      }

      if(this._layerDefinition && this._layerDefinition.url === url){
        this._resetByConfig(this.config, this._layerDefinition);
      }
      else{
        this._layerDefinition = null;
        this.showBigShelter();
        var def = esriRequest({
          url: url,
          hanleAs: 'json',
          content: {f: 'json'},
          callbackParamName: 'callback'
        });
        def.then(lang.hitch(this, function(response){
          if(!this.domNode){
            return;
          }
          this.hideBigShelter();
          this._layerDefinition = response;
          this._layerDefinition.url = url;
          this._resetByConfig(this.config, this._layerDefinition);
        }), lang.hitch(this, function(err){
          console.error(err);
          if(!this.domNode){
            return;
          }
          this.hideBigShelter();
        }));
      }
    },

    getConfig: function(showError){
      var config = {
        url: '',
        filter: '',
        name: '',
        description: '',
        mode:'',
        types:[],
        colors: []
      };

      config.url = this.urlTextBox.get('value');

      var filter = this.filter.toJson();
      if(!filter){
        if(showError){
          if(this.tab.viewStack.getSelectedLabel() !== this.nls.preview){
            dojoPopup.open({
              popup: this.filterTooltipDialog,
              around: this.urlTextBox.domNode
            });
          }
          this._showMessage(this.nls.setFilterTip);
        }
        return false;
      }
      config.filter = filter;

      var chartName = this.chartNameTextBox.get('value');
      if(!chartName){
        if(showError){
          this._showMessage(this.nls.setChartTitleTip);
        }
        return false;
      }
      config.name = chartName;

      config.description = this.descriptionTA.value;

      config.mode = this.chartModeSelect.get('value');

      var chartTypes = [];
      
      if(this.columnCbx.checked){
        chartTypes.push('column');
      }

      if(this.pieCbx.checked){
        chartTypes.push('pie');
      }

      if(this.barCbx.checked){
        chartTypes.push('bar');
      }

      if(this.lineCbx.checked){
        chartTypes.push('line');
      }
      
      if(chartTypes.length === 0){
        if(showError){
          this._showMessage(this.nls.setChartTypeTip);
        }
        return false;
      }
      config.types = chartTypes;

      config.colors = this._uniqueColors[this.colorSelect.get('value')];

      if(config.mode === 'feature'){
        var featureConfig = {
          labelField: '',
          valueFields: [],
          sortOrder: ''
        };

        featureConfig.labelField = this.featureAxisLabelSelect.get('value');

        var featureDataFields = this.valueFields.getSelectedFieldNames();
        if(featureDataFields.length === 0){
          if(showError){
            this._showMessage(this.nls.setDataFieldTip);
          }
          return false;
        }
        featureConfig.valueFields = featureDataFields;

        if(this.ascRadio.checked){
          featureConfig.sortOrder = "asc";
        }
        else{
          featureConfig.sortOrder = "des";
        }

        config = lang.mixin(config, featureConfig);
      }
      else if(config.mode === 'category'){
        var categoryConfig = {
          categoryField: '',
          operation: '',
          valueFields: [],
          sortOrder: ''
        };

        categoryConfig.categoryField = this.categoryFieldSelect.get('value');//check if none

        categoryConfig.operation = this.categoryOperationSelect.get('value');

        var categoryDataFields = this.valueFields.getSelectedFieldNames();
        if(categoryDataFields.length === 0){
          if(showError){
            this._showMessage(this.nls.setDataFieldTip);
          }
          return false;
        }
        categoryConfig.valueFields = categoryDataFields;

        if(this.ascRadio.checked){
          categoryConfig.sortOrder = "asc";
        }
        else{
          categoryConfig.sortOrder = "des";
        }

        config = lang.mixin(config, categoryConfig);
      }
      else if(config.mode === 'count'){
        var countConfig = {
          categoryField: '',
          sortOrder: ''
        };

        countConfig.categoryField = this.categoryFieldSelect.get('value');

        if(this.ascRadio.checked){
          countConfig.sortOrder = "asc";
        }
        else{
          countConfig.sortOrder = "des";
        }

        config = lang.mixin(config, countConfig);
      }
      else if(config.mode === 'field'){
        var fieldConfig = {
          operation: '',
          valueFields: []
        };

        fieldConfig.operation = this.fieldOperationSelect.get('value');

        var fieldDataFields = this.valueFields.getSelectedFieldNames();
        if(fieldDataFields.length === 0){
          if(showError){
            this._showMessage(this.nls.setDataFieldTip);
          }
          return false;
        }
        fieldConfig.valueFields = fieldDataFields;
        config = lang.mixin(config, fieldConfig);
      }

      this.config = lang.clone(config);

      var symbol = this.symbolPicker.getSymbol();
      if(symbol){
        config.symbol = symbol.toJson();
      }
      else{
        return false;
      }

      var color = this.colorPicker.getColor();
      config.highLightColor = color.toHex();

      this.tr._layerDefinition = this._layerDefinition;

      return lang.clone(config);
    },

    showBigShelter: function(){
      this.emit("show-shelter");
    },

    hideBigShelter: function(){
      this.emit("hide-shelter");
    },

    _showMessage: function(msg){
      new Message({
        message: msg
      });
    },

    _isObject:function(o){
      return o && typeof o === 'object';
    },

    _initSelf: function(){
      this._initTabs();
      this._initChartTypes();
      this._initFilter();
      this._initSortOrder();
      this._initDataFields();
      this._initPreview();
      this._onChartModeChnaged();
    },

    _initTabs: function(){
      var tabSettings = {
        title: this.nls.settings,
        content: this.settingsTabNode
      };

      var tabPreview = {
        title: this.nls.preview,
        content: this.previewTabNode
      };

      var tabs = [tabSettings, tabPreview];
      this.tab = new TabContainer3({tabs: tabs});
      this.tab.placeAt(this.tabDiv);
      this.own(on(this.tab, 'tabChanged', lang.hitch(this, function(title){
        if(title === tabPreview.title){
          this._updatePreview();
        }

        dojoPopup.close(this.filterTooltipDialog);
      })));
    },

    _initFilter: function(){
      var str = '<div>' +
        '<div class="filter-div"></div>' +
        '<div class="operations" style="overflow:hidden;">'+
          '<div class="jimu-btn btn-cancel" style="float:right;padding:6px;"></div>' +
          '<div class="jimu-btn btn-ok" style="float:right;padding:6px;margin-right:20px;"></div>' +
        '</div>' +
      '</div>';
      var ttdContent = html.toDom(str);
      var filterDiv = query('.filter-div', ttdContent)[0];
      var btnOk = query('.btn-ok', ttdContent)[0];
      var btnCancel = query('.btn-cancel', ttdContent)[0];
      btnOk.innerHTML = this.nls.ok;
      btnCancel.innerHTML = this.nls.close;//this.nls.cancel;

      this.filterTooltipDialog = new TooltipDialog({
        content: ttdContent
      });
      
      this.filter = new Filter();
      this.filter.allExpsBox.style.maxHeight = "300px";
      this.filter.allExpsBox.style.overflowY = "auto";
      this.filter.placeAt(filterDiv);
      this.filter.startup();

      this.own(on(btnOk, 'click', lang.hitch(this, function(){
        var result = this.filter.toJson();
        if(result){
          dojoPopup.close(this.filterTooltipDialog);
        }
      })));

      this.own(on(btnCancel, 'click', lang.hitch(this, function(){
        //restore filter to previous config
        dojoPopup.close(this.filterTooltipDialog);
      })));

      this.own(on(this.filterIcon, 'click', lang.hitch(this, function(event){
        event.stopPropagation();
        dojoPopup.close(this.filterTooltipDialog);
        dojoPopup.open({
          popup: this.filterTooltipDialog,
          around: this.urlTextBox.domNode
        });
      })));
    },

    _initSortOrder: function(){
      var str = '<div>' +
        '<div class="asc-div">' +
          '<input type="radio" class="asc-radio" checked />' +
          '<span class="asc-span" style="margin-left:10px;">' + this.nls.ascending + '</span>' +
        '</div>' +
        '<div class="des" style="margin-top:10px;">' +
          '<input type="radio" class="des-radio" />' +
          '<span class="des-span" style="margin-left:10px;">' + this.nls.descending + '</span>' +
        '</div>' +
      '</div>';

      var name = "chart_" + jimuUtils.getRandomString();
      var ttdContent = html.toDom(str);
      this.ascRadio = query('.asc-radio', ttdContent)[0];
      this.desRadio = query('.des-radio', ttdContent)[0];
      this.ascRadio.name = name;
      this.desRadio.name = name;

      this.sortOrderTooltipDialog  = new TooltipDialog({
        content: ttdContent
      });

      this.own(on(window, 'click', lang.hitch(this, function(event){
        var target = event.target || event.srcElement;
        var a = target === this.sortOrderTooltipDialog.domNode;
        var b = html.isDescendant(target, this.sortOrderTooltipDialog.domNode);
        var isClickInternal = a || b;
        if(!isClickInternal){
          dojoPopup.close(this.sortOrderTooltipDialog);
        }
      })));

      this.own(on(this.categorySortOrderIcon, 'click', lang.hitch(this, function(event){
        event.stopPropagation();
        dojoPopup.close(this.sortOrderTooltipDialog);
        dojoPopup.open({
          popup: this.sortOrderTooltipDialog,
          around: this.categorySortOrderIcon,
          orient: ['after-centered', 'below']
        });
      })));

      this.own(on(this.featureSortOrderIcon, 'click', lang.hitch(this, function(event){
        event.stopPropagation();
        dojoPopup.close(this.sortOrderTooltipDialog);
        dojoPopup.open({
          popup: this.sortOrderTooltipDialog,
          around: this.featureSortOrderIcon,
          orient: ['after-centered', 'below']
        });
      })));
    },

    _initDataFields: function(){
      this.valueFields = new DataFields({
        nls: this.nls
      });
      this.valueFields.placeAt(this.dataFieldsDiv);
      this.valueFields.startup();
      this.own(on(this.valueFields, 'change', lang.hitch(this, function(){
        this._updateChartTypes();
      })));
    },

    _updateChartTypes: function(){
      this.lineCbx.disabled = false;
      this.pieCbx.disabled = false;

      var chartMode = this.chartModeSelect.get('value');

      if(chartMode === 'feature' || chartMode === 'category'){
        var fields = this.valueFields.getSelectedFieldNames();
        if(fields.length > 1){
          this.lineCbx.checked = false;
          this.pieCbx.checked = false;
          this.lineCbx.disabled = true;
          this.pieCbx.disabled = true;
        }
      }

      if (this.pieCbx.disabled) {
        html.addClass(this.pieSpan, 'gray');
      } else {
        html.removeClass(this.pieSpan, 'gray');
      }

      if (this.lineCbx.disabled) {
        html.addClass(this.lineSpan, 'gray');
      } else {
        html.removeClass(this.lineSpan, 'gray');
      }
    },

    _initChartTypes: function(){
      var strRandom = jimuUtils.getRandomString();
      this.columnCbx.id = 'chart_column_' + strRandom;
      this.pieCbx.id = 'chart_pie_' + strRandom;
      this.barCbx.id = 'chart_bar_' + strRandom;
      this.lineCbx.id = 'chart_line_' + strRandom;

      html.setAttr(this.columnSpan, 'for', this.columnCbx.id);
      html.setAttr(this.pieSpan, 'for', this.pieCbx.id);
      html.setAttr(this.barSpan, 'for', this.barCbx.id);
      html.setAttr(this.lineSpan, 'for', this.lineCbx.id);
    },

    _initPreview: function(){
      this.preview = new Preview({
        nls: this.nls
      });

      this.preview.placeAt(this.previewDiv);
      this.preview.startup();
    },

    _onChartModeChnaged: function(){
      var chartMode = this.chartModeSelect.get('value') || '';

      var className = chartMode + '-tr';
      var trs = query('.detail-tr', this.detailsTable);

      array.forEach(trs, lang.hitch(this, function(tr){
        if(html.hasClass(tr, className)){
          html.addClass(tr, 'show-tr');
        }
        else{
          html.removeClass(tr, 'show-tr');
        }
      }));

      this._updateChartTypes();
    },

    _onChartNameChanged: function(){
      this.emit('name-change',this.chartNameTextBox.get('value'));
    },

    _onDescriptionFocus: function(){
      html.setStyle(this.descriptionTA, 'height', '62px');
    },

    _onDescriptionBlur: function(){
      html.setStyle(this.descriptionTA, 'height', '30px');
    },

    _clear: function(){
      //reset general
      this._layerDefinition = null;
      this.urlTextBox.set('value','');
      this.filter.reset();

      this.chartNameTextBox.set('value','');

      this.descriptionTA.value = '';

      this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());

      //reset details
      this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());

      this.categoryOperationSelect.set('value', 'sum');

      this.fieldOperationSelect.set('value', 'sum');

      this.valueFields.clear();

      this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());

      this.ascRadio.checked = true;

      this.columnCbx.checked = false;
      this.pieCbx.checked = false;
      this.barCbx.checked = false;
      this.lineCbx.checked = false;

      this.colorSelect.set('value', 'color1');

      //reset symbol picker
      this.symbolPicker.reset();
      this.colorPicker.setColor(new Color(this._highLightColor));

      //reset preview
      this.preview.clear();
    },

    _onBtnSetClicked: function(){
      var args = {
        titleLabel: this.nls.setDataSource,

        featureArgs: {
          multiple: false,
          createMapResponse: this.map.webMapResponse,
          appConfig: {
            portalUrl: window.portalUrl,
            appId: ''
          },
          style: {
            height: '100%'
          }
        }
      };

      var featurePopup = new _FeaturelayerSourcePopup(args);
      this.own(on(featurePopup, 'ok', lang.hitch(this, function(item){
        featurePopup.close();
        this.setNewLayerDefinition(item.name, item.url, item.definition);
      })));
      this.own(on(featurePopup, 'cancel', lang.hitch(this, function(){
        featurePopup.close();
      })));

      featurePopup.startup();
    },

    _hasNumberFields: function(layerDefinition){
      var result = false;
      var fieldInfos = layerDefinition.fields;
      if(fieldInfos && fieldInfos.length > 0){
        result = array.some(fieldInfos, lang.hitch(this, function(fieldInfo){
          return this._numberFieldTypes.indexOf(fieldInfo.type) >= 0;
        }));
      }
      return result;
    },

    setNewLayerDefinition: function(name, url, definition, /* optional */ chartName){
      definition.name = name;
      definition.url = url;
      var oldUrl = this._layerDefinition && this._layerDefinition.url;
      if (url !== oldUrl) {
        this._resetByNewLayerDefinition(definition, chartName);
      }
    },

    _resetByNewLayerDefinition: function(layerInfo, /* optional */ chartName){
      this._clear();
      if(!layerInfo){
        return;
      }

      //general
      this._layerDefinition = layerInfo;
      var url = layerInfo.url;
      this.urlTextBox.set('value', url);
      if(this._layerDefinition){
        this.filter.buildByExpr(url, '1=1', this._layerDefinition);
      }

      this.chartNameTextBox.set('value', chartName || layerInfo.name);

      //details
      //reset categoryFieldSelect, featureAxisLabelSelect, valueFields
      this._resetFieldsDijitsByLayerInfo(this._layerDefinition);

      this.columnCbx.checked = true;

      //reset symbol
      var geoType = jimuUtils.getTypeByGeometryType(layerInfo.geometryType);
      var symType = '';
      if(geoType === 'point'){
        symType = 'marker';
      }
      else if(geoType === 'polyline'){
        symType = 'line';
      }
      else if(geoType === 'polygon'){
        symType = 'fill';
      }
      if(symType){
        this.symbolPicker.showByType(symType);
      }
    },

    _resetFieldsDijitsByLayerInfo: function(layerDefinition){
      //reset chartModeSelect
      this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());
      if(this._hasNumberFields(layerDefinition)){
        this.chartModeSelect.addOption({
          value: 'feature',
          label: this.nls.featureOption
        });
        this.chartModeSelect.addOption({
          value: 'category',
          label: this.nls.categoryOption
        });
        this.chartModeSelect.addOption({
          value: 'count',
          label: this.nls.countOption
        });
        this.chartModeSelect.addOption({
          value: 'field',
          label: this.nls.fieldOption
        });
        this.chartModeSelect.set('value', 'feature');
      }
      else{
        this.chartModeSelect.addOption({
          value: 'count',
          label: this.nls.countOption
        });
        this.chartModeSelect.set('value', 'count');
      }

      var displayField = layerDefinition.displayField;
      var fieldInfos = lang.clone(layerDefinition.fields);

      //categoryFieldSelect
      var categoryFieldTypes = [this._stringFieldType].concat(lang.clone(this._numberFieldTypes));

      var availableCategoryFieldInfos=array.filter(fieldInfos,lang.hitch(this,function(fieldInfo){
        return categoryFieldTypes.indexOf(fieldInfo.type) >= 0;
      }));
      
      this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());

      var selectedCategoryFieldValue = '';

      array.forEach(availableCategoryFieldInfos, lang.hitch(this, function(fieldInfo){
        var option = {
          value: fieldInfo.name,
          label: fieldInfo.alias
        };

        this.categoryFieldSelect.addOption(option);

        if(fieldInfo.name === displayField){
          selectedCategoryFieldValue = displayField;
        }
      }));

      this.categoryFieldSelect.set('value', selectedCategoryFieldValue);

      //featureAxisLabelSelect
      var a = this._stringFieldType;
      var b = this._oidFieldType;
      var featureLabelFieldTypes = [a, b].concat(lang.clone(this._numberFieldTypes));

      var availableLabelFieldInfos = array.filter(fieldInfos, lang.hitch(this, function(fieldInfo){
        return featureLabelFieldTypes.indexOf(fieldInfo.type) >= 0;
      }));

      this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());

      var selectedAxisLabelValue = '';

      array.forEach(availableLabelFieldInfos, lang.hitch(this, function(fieldInfo){
        var option = {
          value: fieldInfo.name,
          label: fieldInfo.alias
        };

        if(displayField){
          if(fieldInfo.name === displayField){
            selectedAxisLabelValue = fieldInfo.name;
          }
        }
        else{
          if(fieldInfo.type === this._oidFieldType){
            selectedAxisLabelValue = fieldInfo.name;
          }
        }

        this.featureAxisLabelSelect.addOption(option);
      }));

      this.featureAxisLabelSelect.set('value', selectedAxisLabelValue);

      //valueFields
      var numberFieldInfos = array.filter(fieldInfos, lang.hitch(this, function(fieldInfo){
        return this._numberFieldTypes.indexOf(fieldInfo.type) >= 0;
      }));
      this.valueFields.setFields(numberFieldInfos);
    },

    _resetByConfig: function(cfg, layerInfo){
      this._clear();
      var config = lang.clone(cfg);

      //general
      this._layerDefinition = layerInfo;
      this.urlTextBox.set('value', config.url);
      var filter = config.filter;
      // this.whereClause.innerHTML = filter.expr;
      this.filter.buildByFilterObj(layerInfo.url, filter, layerInfo);
      this.chartNameTextBox.set('value', config.name||layerInfo.name||'');
      this.descriptionTA.value = config.description||'';

      //details
      //reset categoryFieldSelect, featureAxisLabelSelect, valueFields
      this._resetFieldsDijitsByLayerInfo(layerInfo);

      this.chartModeSelect.set('value', config.mode);

      var types = config.types;

      if(types.indexOf('column') >= 0){
        this.columnCbx.checked = true;
      }
      if(types.indexOf('bar') >= 0){
        this.barCbx.checked = true;
      }

      if(config.mode === 'feature'){
        this.featureAxisLabelSelect.set('value', config.labelField);
        this.valueFields.selectFields(config.valueFields);

        if(config.sortOrder === 'des'){
          this.desRadio.checked = true;
        }
        else{
          this.ascRadio.checked = true;
        }

        if(config.valueFields.length <= 1){
          if(types.indexOf('line') >= 0){
            this.lineCbx.checked = true;
          }
          if(types.indexOf('pie') >= 0){
            this.pieCbx.checked = true;
          }
        }
      }
      else if(config.mode === 'category'){
        this.categoryFieldSelect.set('value', config.categoryField);
        this.categoryOperationSelect.set('value', config.operation);
        this.valueFields.selectFields(config.valueFields);

        if(config.sortOrder === 'des'){
          this.desRadio.checked = true;
        }
        else{
          this.ascRadio.checked = true;
        }

        if(config.valueFields.length <= 1){
          if(types.indexOf('line') >= 0){
            this.lineCbx.checked = true;
          }
          if(types.indexOf('pie') >= 0){
            this.pieCbx.checked = true;
          }
        }
      }
      else if(config.mode === 'count'){
        this.categoryFieldSelect.set('value', config.categoryField);

        if(config.sortOrder === 'des'){
          this.desRadio.checked = true;
        }
        else{
          this.ascRadio.checked = true;
        }

        if (types.indexOf('line') >= 0) {
          this.lineCbx.checked = true;
        }
        if (types.indexOf('pie') >= 0) {
          this.pieCbx.checked = true;
        }
      }
      else if(config.mode === 'field'){
        this.fieldOperationSelect.set('value', config.operation);
        this.valueFields.selectFields(config.valueFields);
        if (types.indexOf('line') >= 0) {
          this.lineCbx.checked = true;
        }
        if (types.indexOf('pie') >= 0) {
          this.pieCbx.checked = true;
        }
      }

      //set symbol
      var symbol = esriSymbolJsonUtils.fromJson(config.symbol);
      this.symbolPicker.showBySymbol(symbol);

      ////highlight color
      this.colorPicker.setColor(new Color(config.highLightColor));

      //set color
      var color = config.colors && config.colors[0];
      if(color){
        for(var colorName in this._uniqueColors){
          if(color === this._uniqueColors[colorName][0]){
            this.colorSelect.set('value', colorName);
            break;
          }
        }
      }
    },

    _updatePreview: function(){
      this.preview.clear();
      var config = this.getConfig(true);
      if(!config){
        return;
      }

      var queryParams = new EsriQuery();
      queryParams.returnGeometry = false;
      queryParams.where = config.filter.expr || '1=1';
      queryParams.outFields = [];

      if(config.mode === 'feature'){
        queryParams.outFields = lang.clone(config.valueFields);
        if(queryParams.outFields.indexOf(config.labelField) < 0){
          queryParams.outFields = [config.labelField].concat(queryParams.outFields);
        }
      }
      else if(config.mode === 'category'){
        queryParams.outFields = lang.clone(config.valueFields);
        if(queryParams.outFields.indexOf(config.categoryField) < 0) {
          queryParams.outFields =  [config.categoryField].concat(queryParams.outFields);
        }
      }
      else if(config.mode === 'count'){
        queryParams.outFields = [config.categoryField];
      }
      else if(config.mode === 'field'){
        queryParams.outFields = lang.clone(config.valueFields);
      }

      this.tab.showShelter();
      this.showBigShelter();

      var queryTask = new QueryTask(config.url);
      queryTask.execute(queryParams).then(lang.hitch(this, function(featureSet) {
        if(!this.domNode){
          return;
        }

        var box = html.getContentBox(this.domNode.parentNode);
        var h = Math.max(box.h - 60, 150);
        html.setStyle(this.preview.domNode, 'height', h + 'px');

        var args = {
          config: config,
          featureSet: featureSet,
          layerDefinition: this._layerDefinition,
          resultLayer: null
        };
        this.preview.createCharts(args);
        this.tab.hideShelter();
        this.hideBigShelter();
      }), lang.hitch(this, function(err) {
        if(!this.domNode){
          return;
        }

        console.error(err);
        this.tab.hideShelter();
        this.hideBigShelter();
      }));
    }

  });
});