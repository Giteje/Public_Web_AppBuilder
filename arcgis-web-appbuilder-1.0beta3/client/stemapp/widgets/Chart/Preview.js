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
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./Preview.html',
    'dojox/charting/Chart',
    'dojox/charting/axis2d/Default',
    'dojox/charting/plot2d/Columns',
    'dojox/charting/plot2d/Bars',
    'dojox/charting/plot2d/Lines',
    'dojox/charting/plot2d/Pie',
    'dojox/charting/plot2d/ClusteredColumns',
    'dojox/charting/plot2d/ClusteredBars',
    'dojox/charting/action2d/Tooltip',
    'dojo/fx/easing',
    'dojox/charting/action2d/MouseIndicator',
    'dojox/charting/action2d/Highlight',
    'dojox/charting/action2d/MoveSlice',
    'dojox/charting/themes/MiamiNice',
    'dojox/charting/action2d/Magnify',
    'esri/symbols/jsonUtils',
    'esri/graphic',
    'esri/graphicsUtils',
    'jimu/utils'
  ],
  function(declare, lang, array, html, query, Color, on, _WidgetBase, _TemplatedMixin,
    template, Chart, Default, Columns, Bars, Lines, Pie, ClusteredColumns, ClusteredBars,
    Tooltip, easing, MouseIndicator, Highlight, MoveSlice, MiamiNice, Magnify, symbolJsonUtils,
    Graphic, graphicsUtils, jimuUtils) {
    return declare([_WidgetBase, _TemplatedMixin], {
      baseClass: 'jimu-widget-chart-preview',
      templateString: template,

      charts:[],
      currentChartIndex: -1,
      layerDefinition: null,
      config: null,
      featureSet: null,
      map: null,// if used in setting page, it is null
      resultLayer: null,//if used in setting page, it is null

      tempGraphics: null,

      //public methods
      //resize
      //createCharts
      //clear

      resize: function(){
        if(this.currentChartIndex >= 0){
          this._showChart(this.currentChartIndex);
        }
      },

      _calculateChartBox: function(){
        var thisBox = html.getContentBox(this.domNode);
        var headerBox = html.getMarginBox(this.resultsHeader);
        var descriptionBox = html.getMarginBox(this.descriptionNode);
        var itemHeight = thisBox.h - headerBox.h - descriptionBox.h;
        query('.chart-section-item', this.domNode).forEach(lang.hitch(this, function(domItem) {
          html.setStyle(domItem, 'height', itemHeight + 'px');
        }));
        var box = html.getContentBox(this.chartContainer);
        return box;
      },

      createCharts: function(args) {
        try{
          //args: {config,featureSet,layerDefinition,resultLayer}
          this.clear();

          //important
          html.setStyle(this.resultsSection, 'display', 'block');
          html.setStyle(this.noresultsSection, 'display', 'none');

          query('.chart-section-item', this.domNode).forEach(lang.hitch(this, function(domItem){
            html.setStyle(domItem, 'height', 0);
          }));

          this.config = args.config;
          this.featureSet = args.featureSet;
          this.layerDefinition = args.layerDefinition;
          this.resultLayer = args.resultLayer;

          this.chartTitle.innerHTML = this.config.name || "";
          this.chartTitle.title = this.chartTitle.innerHTML;
          this.descriptionNode.innerHTML = this.config.description || "";

          html.setStyle(this.resultsSection, 'display', 'block');

          var i = 0, chartDiv, chartDivs = [];

          var types = args.config.types;

          var box = this._calculateChartBox();
          var w = box.w + 'px';
          var h = box.h + 'px';

          for(i = 0; i < types.length; i++){
            chartDiv = html.create('div', {
              'class': 'chart-div',
              style: {
                width: w,
                height: h
              }
            }, this.chartContainer);
            chartDivs.push(chartDiv);
            var strLi = "<li><a></a></li>";
            var domLi = html.toDom(strLi);
            html.place(domLi, this.pagingUl);
          }

          var config = args.config;
          if(config.mode === 'feature'){
            this.charts = this._createFeatureModeCharts(args, chartDivs);
          }
          else if(config.mode === 'category'){
            this.charts = this._createCategoryModeCharts(args, chartDivs);
          }
          else if(config.mode === 'count'){
            this.charts = this._createCountModeCharts(args, chartDivs);
          }
          else if(config.mode === 'field'){
            this.charts = this._createFieldModeCharts(args, chartDivs);
          }

          this._showChart(0);

          //features has been filtered
          if(args.featureSet.features.length === 0){
            html.setStyle(this.resultsSection, 'display', 'none');
            html.setStyle(this.noresultsSection, 'display', 'block');
          }
        }
        catch(e){
          console.log(e);
        }
      },

      clear: function(){
        this.config = null;
        this.featureSet = null;
        this.layerDefinition = null;
        this.resultLayer = null;
        this.chartTitle.innerHTML = "";
        this.chartTitle.title = "";
        this.descriptionNode.innerHTML = "";
        this.currentChartIndex = -1;
        var chartDivs = query('.chart-div', this.chartContainer);
        chartDivs.style({display:'none'});
        query("li",this.pagingUl).removeClass('selected');

        if(!this.charts){
          this.charts = [];
        }

        for(var i = 0; i < this.charts.length; i++){
          var chart = this.charts[i];
          if(chart){
            chart.destroy();
          }
          chart = null;
          this.charts[i] = null;
        }
        this.charts = [];
        html.empty(this.pagingUl);
        html.empty(this.chartContainer);
        html.setStyle(this.resultsSection,'display','none');
        html.setStyle(this.noresultsSection,'display','none');
      },

      _showChart: function(index) {
        this.currentChartIndex = -1;
        var chartDivs = query('.chart-div', this.chartContainer);
        chartDivs.style({
          display: 'none'
        });
        var lis = query("li", this.pagingUl);
        lis.removeClass('selected');

        if (index < 0) {
          return;
        }
        

        var chartDiv = chartDivs[index];
        if (chartDiv) {
          this.currentChartIndex = index;
          html.setStyle(chartDiv, {
            display: 'block'
          });
        }
        
        var li = lis[index];
        if (li) {
          html.addClass(li, 'selected');
        }

        var chart = null;
        if(this.charts && this.charts.length > 0){
          chart = this.charts[index];
          if(chart){
            var chartBox = this._calculateChartBox();
            var chartWidth = chartBox.w;
            var chartHeight = chartBox.h;
            var plot = chart.getPlot('default');
            if(plot && plot.declaredClass === "dojox.charting.plot2d.Pie"){
              if(plot.opt){
                var radius = Math.floor(Math.min(chartBox.w, chartBox.h) / 2) - 3;
                plot.opt.radius = radius;
              }
            }
            chart.resize(chartWidth, chartHeight);
          }
        }
      },

      _onPagingUlClicked: function(event){
        var target = event.target || event.srcElement;
        var tagName = target.tagName.toLowerCase();
        if (tagName === 'a') {
          var as = query('a', this.pagingUl);
          var index = array.indexOf(as, target);
          if (index >= 0) {
            this._showChart(index);
          }
        }
      },

      _onLeftArrowClicked: function(){
        var index = (this.currentChartIndex - 1 + this.charts.length) % this.charts.length;
        if (index >= 0) {
          this._showChart(index);
        }
      },

      _onRightArrowClicked: function(){
        var index = (this.currentChartIndex + 1 + this.charts.length) % this.charts.length;
        if (index >= 0) {
          this._showChart(index);
        }
      },

      _getHighLightMarkerSymbol:function(){
        var sym = symbolJsonUtils.fromJson(this.config.symbol);
        var size =  Math.max(sym.size||0, sym.width||0, sym.height, 18);
        size += 1;

        var symJson = {
          "color": [255, 255, 255, 0],
          "size": 18,
          "angle": 0,
          "xoffset": 0,
          "yoffset": 0,
          "type": "esriSMS",
          "style": "esriSMSSquare",
          "outline": {
            "color": [0, 0, 128, 255],
            "width": 0.75,
            "type": "esriSLS",
            "style": "esriSLSSolid"
          }
        };
        var symbol = symbolJsonUtils.fromJson(symJson);
        symbol.setSize(size);
        symbol.outline.setColor(new Color(this.config.highLightColor));

        return symbol;
      },

      _getHighLightLineSymbol: function(){
        var selectedSymJson = {
          "color": [0, 255, 255, 255],
          "width": 1.5,
          "type": "esriSLS",
          "style": "esriSLSSolid"
        };
        var symbol = symbolJsonUtils.fromJson(selectedSymJson);
        symbol.setColor(new Color(this.config.highLightColor));
        return symbol;
      },

      _getHighLightFillSymbol:function(){
        var selectedSymJson = {
          "color": [0, 0, 0, 0],
          "outline": {
            "color": [0, 255, 255, 255],
            "width": 1.5,
            "type": "esriSLS",
            "style": "esriSLSSolid"
          },
          "type": "esriSFS",
          "style": "esriSFSNull"
        };
        var symbol = symbolJsonUtils.fromJson(selectedSymJson);
        symbol.outline.setColor(new Color(this.config.highLightColor));
        return symbol;
      },

      _zoomToGraphics: function(features){
        var isVisible = this.resultLayer && this.resultLayer.visible;
        if(!isVisible){
          return;
        }

        if(features && features.length > 0){
          var extent = null;
          try{
            extent = graphicsUtils.graphicsExtent(features);
          }
          catch(e){
            console.log(e);
          }

          if(extent){
            this.map.setExtent(extent.expand(1.4));
          }
          else{
            var firstFeature = features[0];
            var geometry = firstFeature && firstFeature.geometry;

            if(geometry){
              var singlePointFlow = lang.hitch(this, function(centerPoint){
                var maxLevel = this.map.getNumLevels();
                var currentLevel = this.map.getLevel();
                var level2 = Math.floor(maxLevel * 2 / 3);
                var zoomLevel = Math.max(currentLevel, level2);
                this.map.setLevel(zoomLevel).then(lang.hitch(this, function(){
                  this.map.centerAt(centerPoint);
                }));
              });
              
              if(geometry.type === 'point'){
                singlePointFlow(geometry);
              }
              else if(geometry.type === 'multipoint'){
                if(geometry.points.length === 1){
                  singlePointFlow(geometry.getPoint(0));
                }
              }
            }
          }
        }
      },

      _removeTempGraphics: function(){
        if(this.resultLayer && this.tempGraphics && this.tempGraphics.length > 0){
          while(this.tempGraphics.length > 0){
            this.resultLayer.remove(this.tempGraphics[0]);
            this.tempGraphics.splice(0, 1);
          }
        }
        this.tempGraphics = null;
      },

      _mouseOverChartItem: function(features){
        this._removeTempGraphics();

        var isVisible = this.resultLayer && this.resultLayer.visible;
        if(!isVisible){
          return;
        }

        var geoType = jimuUtils.getTypeByGeometryType(this.layerDefinition.geometryType);
        var symbol = null;
        if(geoType === 'point'){
          symbol = this._getHighLightMarkerSymbol();
          this.tempGraphics = [];
          array.forEach(features, lang.hitch(this, function(feature){
            var g = new Graphic(feature.geometry, symbol);
            this.tempGraphics.push(g);
            this.resultLayer.add(g);
          }));
        }
        else if(geoType === 'polyline' || geoType === 'polygon'){
          if(geoType === 'polyline'){
            symbol = this._getHighLightLineSymbol();
          }
          else{
            symbol = this._getHighLightFillSymbol();
          }

          array.forEach(features, lang.hitch(this, function(feature){
            feature.setSymbol(symbol);
          }));
        }
      },

      _mouseOutChartItem: function(){
        this._removeTempGraphics();

        if(!this.resultLayer){
          return;
        }

        array.forEach(this.resultLayer.graphics, lang.hitch(this, function(feature){
          feature.setSymbol(null);
        }));
      },

      _isNumber: function(value){
        var valueType = Object.prototype.toString.call(value).toLowerCase();
        return valueType === "[object number]";
      },

      _tryLocaleNumber: function(value){
        var result = jimuUtils.localizeNumber(value);
        if(result === null || result === undefined){
          result = value;
        }
        return result;
      },

      //---------------create feature mode charts---------------
      _createFeatureModeCharts: function(args, chartDivs){
        var charts = [];
        var config = args.config;
        var labelField = config.labelField;
        var valueFields = config.valueFields;
        var types = config.types;
        var isAsc = config.sortOrder !== 'des';

        //filter features with number values firstly
        var fs = args.featureSet.features;
        args.featureSet.features = array.filter(fs, lang.hitch(this, function(feature){
          return array.every(valueFields, lang.hitch(this, function(fieldName){
            var attributes = feature.attributes;
            return attributes && this._isNumber(attributes[fieldName]);
          }));
        }));

        ////{category:'a',valueFields:[10,100,2],dataFeatures:[f1]}//only one data feature
        var data = [];

        data = array.map(args.featureSet.features, lang.hitch(this, function(feature) {
          var attributes = feature.attributes;
          var option = {
            category: attributes[labelField],
            valueFields: [],
            dataFeatures: [feature]
          };
          option.valueFields = array.map(valueFields, lang.hitch(this, function(fieldName) {
            return attributes[fieldName];
          }));
          return option;
        }));

        if(isAsc){
          data.sort(function(a, b){
            if(a.category < b.category){
              return -1;
            }
            else if(a.category > b.category){
              return 1;
            }
            else{
              return 0;
            }
          });
        }
        else{
          data.sort(function(a, b){
            if(a.category < b.category){
              return 1;
            }
            else if(a.category > b.category){
              return -1;
            }
            else{
              return 0;
            }
          });
        }

        array.forEach(types, lang.hitch(this, function(type, i){
          try {
            var chartDiv = chartDivs[i];
            var chart = null;
            if (type === 'column') {
              chart = this._createFeatureModeColumnChart(args, chartDiv, data);
            } else if (type === 'bar') {
              chart = this._createFeatureModeBarChart(args, chartDiv, data);
            } else if (type === 'line') {
              chart = this._createFeatureModeLineChart(args, chartDiv, data);
            } else if (type === 'pie') {
              chart = this._createFeatureModePieChart(args, chartDiv, data);
            }

            chart.connectToPlot('default', lang.hitch(this, function(evt) {
              var isOver = evt.type === 'onmouseover';
              var isOut = evt.type === 'onmouseout';
              var isClick = evt.type === 'onclick';
              if (isOver || isOut || isClick) {
                var a = data[evt.index]; //{category,valueFields,dataFeatures:[f1,f2...]}
                var features = a.dataFeatures;
                if (evt.type === 'onmouseover') {
                  this._mouseOverChartItem(features);
                } else if (evt.type === 'onmouseout') {
                  this._mouseOutChartItem(features);
                }
                else if(evt.type === 'onclick'){
                  this._zoomToGraphics(features);
                }
              }
            }));

            charts.push(chart);
          } catch (e) {
            console.log(e);
          }
        }));

        return charts;
      },

      _createFeatureModeColumnChart: function(args, chartDiv, data){
        return this._createCategoryModeColumnChart(args, chartDiv, data);
      },

      _createFeatureModeBarChart: function(args, chartDiv, data){
        return this._createCategoryModeBarChart(args, chartDiv, data);
      },

      _createFeatureModeLineChart: function(args, chartDiv, data){
        return this._createCategoryModeLineChart(args, chartDiv, data);
      },

      _createFeatureModePieChart: function(args, chartDiv, data){
        return this._createCategoryModePieChart(args, chartDiv, data);
      },

      //--------------------create category mode charts-------------------------
      _createCategoryModeCharts: function(args, chartDivs){
        var charts = [];
        var config = args.config;
        var categoryField = config.categoryField;
        var valueFields = config.valueFields;
        var types = config.types;
        var isAsc = config.sortOrder !== 'des';

        //filter features with number values firstly
        var fs = args.featureSet.features;
        args.featureSet.features = array.filter(fs, lang.hitch(this, function(feature){
          return array.every(valueFields, lang.hitch(this, function(fieldName){
            var attributes = feature.attributes;
            return attributes && this._isNumber(attributes[fieldName]);
          }));
        }));

        var uniques = [];//{category:'a',valueFields:[10,100,2],dataFeatures:[f1,f2...]}

        var operation = args.config.operation;
        
        var uniqueValuesHash = {}; //{a:{valueFields:[10,100,2], dataFeatures:[f1,f2...]}}

        array.forEach(args.featureSet.features, lang.hitch(this, function(feature) {
          var attributes = feature.attributes;
          var category = attributes[categoryField];
          var dataFieldValues = array.map(valueFields, lang.hitch(this, function(fieldName) {
            return attributes[fieldName];
          }));
          var categoryObj = null;

          if (uniqueValuesHash.hasOwnProperty(category)) {
            categoryObj = uniqueValuesHash[category];
            categoryObj.dataFeatures.push(feature);
            categoryObj.valueFields=array.map(categoryObj.valueFields,lang.hitch(this,function(v,i){
              var result = 0;
              var newValue = dataFieldValues[i];

              if (operation === 'average') {
                result = (v + newValue) / 2.0;
              } else if (operation === 'sum') {
                result = v + newValue;
              } else if (operation === 'max') {
                result = Math.max(v, newValue);
              } else if (operation === 'min') {
                result = Math.min(v, newValue);
              }

              return result;
            }));
          } else {
            categoryObj = {
              valueFields: dataFieldValues,
              dataFeatures: [feature]
            };
            uniqueValuesHash[category] = categoryObj;
          }
        }));
        
        var categoryObj = null;
        for (var uniqueValue in uniqueValuesHash) {
          categoryObj = uniqueValuesHash[uniqueValue];

          uniques.push({
            category: uniqueValue,
            valueFields: categoryObj.valueFields,
            dataFeatures: categoryObj.dataFeatures
          });
        }

        if(isAsc){
          uniques.sort(function(a, b){
            if(a.category < b.category){
              return -1;
            }
            else if(a.category > b.category){
              return 1;
            }
            else{
              return 0;
            }
          });
        }
        else{
          uniques.sort(function(a, b){
            if(a.category < b.category){
              return 1;
            }
            else if(a.category > b.category){
              return -1;
            }
            else{
              return 0;
            }
          });
        }

        array.forEach(types, lang.hitch(this, function(type, i){
          try {
            var chartDiv = chartDivs[i];
            var chart = null;

            if (type === 'column') {
              chart = this._createCategoryModeColumnChart(args, chartDiv, uniques);
            } else if (type === 'bar') {
              chart = this._createCategoryModeBarChart(args, chartDiv, uniques);
            } else if (type === 'line') {
              chart = this._createCategoryModeLineChart(args, chartDiv, uniques);
            } else if (type === 'pie') {
              chart = this._createCategoryModePieChart(args, chartDiv, uniques);
            }

            chart.connectToPlot('default', lang.hitch(this, function(evt) {
              var isOver = evt.type === 'onmouseover';
              var isOut = evt.type === 'onmouseout';
              var isClick = evt.type === 'onclick';

              if (isOver || isOut || isClick) {
                var a = uniques[evt.index]; //{category,valueFields,dataFeatures:[f1,f2...]}
                var features = a.dataFeatures;
                if (evt.type === 'onmouseover') {
                  this._mouseOverChartItem(features);
                } else if (evt.type === 'onmouseout') {
                  this._mouseOutChartItem(features);
                }
                else if(evt.type === 'onclick'){
                  this._zoomToGraphics(features);
                }
              }
            }));

            charts.push(chart);
          } catch (e) {
            console.log(e);
          }
        }));

        return charts;
      },

      _createCategoryModeColumnChart: function(args, chartDiv, uniques){
        //uniques:[{category,valueFields,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var valueFields = config.valueFields;

        var labels = [];
        var seriesArray = [];
        for(var i = 0; i < valueFields.length; i++){
          seriesArray.push([]);
        }
        array.forEach(uniques, lang.hitch(this, function(item, index){
          labels.push({
            value: index + 1,
            text: item.category
          });
          for(var i = 0; i < item.valueFields.length; i++){
            var num = item.valueFields[i];
            var fieldName = valueFields[i];
            var a = this.nls.category;
            var b = this._tryLocaleNumber(item.category);
            var c = jimuUtils.localizeNumber(num);
            seriesArray[i].push({
              y: num,
              tooltip: "<div style='color:green;margin-right:10px;'>" +
              "<span style='white-space:nowrap'>" + a + " : " + b + "</span><br/><br/>" +
              "<span style='white-space:nowrap;'>" + fieldName + " : " + c + "</span>" +
              "</div>"
            });
          }
        }));

        //construct chart
        var columnChart = new Chart(chartDiv);

        columnChart.addPlot('default', {
          type: ClusteredColumns,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        columnChart.addAxis('x', {
          natural: true,
          labels: labels
          // labelFunc: lang.hitch(this, function(text, value, precision){
          //   return value;
          // })
        });

        columnChart.addAxis('y', {
          vertical: true,
          natural: true,
          includeZero: true
        });

        var colors = config.colors;
        for(i = 0; i < seriesArray.length; i++){
          var series = seriesArray[i];
          var fieldName = valueFields[i];
          columnChart.addSeries(fieldName, series, {
            stroke: {
              color: colors[i%colors.length]
            },
            fill: colors[(i+1)%colors.length]
          });
        }

        new MoveSlice(columnChart, "default");
        new Highlight(columnChart, "default");
        new Tooltip(columnChart, "default");

        columnChart.render();

        return columnChart;
      },

      _createCategoryModeBarChart: function(args, chartDiv, uniques){
        //uniques:[{category,valueFields,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var valueFields = config.valueFields;

        var labels = [];
        var seriesArray = [];
        for(var i = 0; i < valueFields.length; i++){
          seriesArray.push([]);
        }
        array.forEach(uniques, lang.hitch(this, function(item, index){
          labels.push({
            value: index + 1,
            text: item.category
          });
          for(var i = 0; i < item.valueFields.length; i++){
            var num = item.valueFields[i];
            var fieldName = valueFields[i];
            var a = this.nls.category;
            var b = this._tryLocaleNumber(item.category);
            var c = jimuUtils.localizeNumber(num);
            seriesArray[i].push({
              y: num,
              tooltip: "<div style='color:green;margin-right:10px;'>" +
              "<span style='white-space:nowrap'>" + a + " : " + b + "</span><br/><br/>" +
              "<span style='white-space:nowrap;'>" + fieldName + " : " + c + "</span>" +
              "</div>"
            });
          }
        }));

        //construct chart
        var barChart = new Chart(chartDiv);

        barChart.addPlot('default', {
          type: ClusteredBars,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        barChart.addAxis('x', {
          vertical: true,
          natural: true,
          labels: labels
        });

        barChart.addAxis('y', {
          natural: true,
          includeZero: true
        });

        var colors = config.colors;
        for(i = 0; i < seriesArray.length; i++){
          var series = seriesArray[i];
          var fieldName = valueFields[i];
          barChart.addSeries(fieldName, series, {
            stroke: {
              color: colors[i%colors.length]
            },
            fill: colors[(i+1)%colors.length]
          });
        }

        new MoveSlice(barChart, "default");
        new Highlight(barChart, "default");
        new Tooltip(barChart, "default");

        barChart.render();

        return barChart;
      },

      _createCategoryModeLineChart: function(args, chartDiv, uniques){
        //uniques:[{category,valueFields,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var valueFields = config.valueFields;

        var labels = [];
        var seriesArray = [];
        for(var i = 0; i < valueFields.length; i++){
          seriesArray.push([]);
        }
        array.forEach(uniques, lang.hitch(this, function(item, index){
          labels.push({
            value: index + 1,
            text: item.category
          });
          for(var i = 0; i < item.valueFields.length; i++){
            var num = item.valueFields[i];
            var fieldName = valueFields[i];
            var a = this.nls.category;
            var b = this._tryLocaleNumber(item.category);
            var c = jimuUtils.localizeNumber(num);
            seriesArray[i].push({
              y: num,
              tooltip: "<div style='color:green;margin-right:10px;'>" +
              "<span style='white-space:nowrap'>" + a + " : " + b + "</span><br/><br/>" +
              "<span style='white-space:nowrap;'>" + fieldName + " : " + c + "</span>" +
              "</div>"
            });
          }
        }));

        //construct chart
        var lineChart = new Chart(chartDiv);

        lineChart.addPlot('default', {
          type: Lines,
          animate: {
            duration: 2000,
            easing: easing.cubicIn
          },
          markers: true,
          tension: "S"
        });

        lineChart.addAxis('x', {
          type: Default,
          natural: true,
          includeZero: true,
          labels: labels
        });

        lineChart.addAxis('y', {
          vertical: true,
          natural: true
        });

        var colors = config.colors;
        for(i = 0; i < seriesArray.length; i++){
          var series = seriesArray[i];
          var fieldName = valueFields[i];
          lineChart.addSeries(fieldName, series, {
            stroke: {
              color: colors[i%colors.length]
            },
            fill: colors[(i+1)%colors.length]
          });
        }

        new Magnify(lineChart, "default");
        new Highlight(lineChart, "default");
        new Tooltip(lineChart, "default");

        lineChart.render();

        return lineChart;
      },

      _createCategoryModePieChart: function(args, chartDiv, uniques){
        //uniques:[{category,valueFields,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var valueFields = config.valueFields;
        var box = html.getContentBox(chartDiv);
        var radius = Math.floor(Math.min(box.w, box.h) / 2) - 3;

        var labels = [];
        var seriesArray = [];
        var sums = [];
        array.forEach(valueFields, lang.hitch(this, function(dataFieldName, index){
          seriesArray.push([]);
          var sum = 0.0;
          array.forEach(uniques, lang.hitch(this, function(item){
            sum += item.valueFields[index];
          }));
          sums.push(sum);
        }));

        array.forEach(uniques, lang.hitch(this, function(item, index){
          labels.push({
            value: index + 1,
            text: item.category
          });
          for(var i = 0; i < item.valueFields.length; i++){
            var num = item.valueFields[i];
            var fieldName = valueFields[i];
            var percent = (num / sums[i] * 100).toFixed(1) + "%";
            var a = this.nls.category;
            var b = this._tryLocaleNumber(item.category);
            var c = jimuUtils.localizeNumber(num);
            seriesArray[i].push({
              y: num,
              text: item.category,
              tooltip: "<div style='color:green;margin-right:10px;'>" +
              "<span style='white-space:nowrap'>" + a + " : " + b + "</span><br/><br/>" +
              "<span style='white-space:nowrap;'>" + fieldName + " : " + c + "</span><br/><br/>" +
              "<span style='white-space:nowrap'>" + percent + "</span>" +
              "</div>"
            });
          }
        }));

        //construct chart
        var pieChart = new Chart(chartDiv);

        pieChart.setTheme(MiamiNice);

        pieChart.addPlot('default', {
          type: Pie,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          radius: radius,
          markers: true
        });

        var colors = config.colors;
        for(var i = 0; i < seriesArray.length; i++){
          var series = seriesArray[i];
          var fieldName = valueFields[i];
          pieChart.addSeries(fieldName, series, {
            stroke: {
              color: colors[i%colors.length]
            },
            fill: colors[(i+1)%colors.length]
          });
        }

        new MoveSlice(pieChart, "default");
        new Highlight(pieChart, "default");
        new Tooltip(pieChart, "default");

        pieChart.render();

        return pieChart;
      },

      //------------------------create count mode charts--------------------------
      _createCountModeCharts: function(args, chartDivs){
        var charts = [];
        var config = args.config;
        var types = config.types;
        var categoryField = config.categoryField;
        var isAsc = config.sortOrder !== 'des';

        //{fieldValue1:{count:count1,dataFeatures:[f1,f2...]},fieldValue2...}
        var statisticsHash = {};
        array.forEach(args.featureSet.features, lang.hitch(this, function(feature){
          var attributes = feature.attributes;
          var fieldValue = attributes[categoryField];
          var fieldValueObj = null;
          if(statisticsHash.hasOwnProperty(fieldValue)){
            fieldValueObj = statisticsHash[fieldValue];
            fieldValueObj.count++;
            fieldValueObj.dataFeatures.push(feature);
          }
          else{
            fieldValueObj = {
              count: 1,
              dataFeatures: [feature]
            };
            statisticsHash[fieldValue] = fieldValueObj;
          }
        }));
        var data = [];//[{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}]
        var fieldValueObj = null;
        for(var fieldValue in statisticsHash){
          fieldValueObj = statisticsHash[fieldValue];//{count:count1,dataFeatures:[f1,f2...]}
          data.push({
            fieldValue: fieldValue,
            count: fieldValueObj.count,
            dataFeatures: fieldValueObj.dataFeatures
          });
        }

        if(isAsc){
          data.sort(function(a, b){
            if(a.fieldValue < b.fieldValue){
              return -1;
            }
            else if(a.fieldValue > b.fieldValue){
              return 1;
            }
            else{
              return 0;
            }
          });
        }
        else{
          data.sort(function(a, b){
            if(a.fieldValue < b.fieldValue){
              return 1;
            }
            else if(a.fieldValue > b.fieldValue){
              return -1;
            }
            else{
              return 0;
            }
          });
        }
        
        array.forEach(types, lang.hitch(this, function(type, i){
          try {
            var chartDiv = chartDivs[i];
            var chart = null;
            if (type === 'column') {
              chart = this._createCountModeColumnChart(args, chartDiv, data);
            } else if (type === 'bar') {
              chart = this._createCountModeBarChart(args, chartDiv, data);
            } else if (type === 'line') {
              chart = this._createCountModeLineChart(args, chartDiv, data);
            } else if (type === 'pie') {
              chart = this._createCountModePieChart(args, chartDiv, data);
            }

            chart.connectToPlot('default', lang.hitch(this, function(evt) {
              var isOver = evt.type === 'onmouseover';
              var isOut = evt.type === 'onmouseout';
              var isClick = evt.type === 'onclick';

              if (isOver || isOut || isClick) {
                var a = data[evt.index]; //{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}
                var features = a.dataFeatures;
                if (evt.type === 'onmouseover') {
                  this._mouseOverChartItem(features);
                } else if (evt.type === 'onmouseout') {
                  this._mouseOutChartItem(features);
                }
                else if(evt.type === 'onclick'){
                  this._zoomToGraphics(features);
                }
              }
            }));

            charts.push(chart);
          } catch (e) {
            console.log(e);
          }
        }));

        return charts;
      },

      _createCountModeColumnChart: function(args, chartDiv, data){
        //[{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var categoryField = config.categoryField;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];
        array.forEach(data, lang.hitch(this, function(item, index){
          var num = item.count;
          var fieldValue = item.fieldValue.toString();
          var a = this._tryLocaleNumber(fieldValue);
          var b = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: categoryField + ' : ' + fieldValue
          });
          series.push({
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + categoryField + " : " + a + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + this.nls.count + " : " + b + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var columnChart = new Chart(chartDiv);

        columnChart.addPlot('default', {
          type: Columns,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        columnChart.addAxis('x', {
          natural: true,
          labels: labels
        });

        columnChart.addAxis('y', {
          vertical: true,
          includeZero: true,
          natural: true
        });

        columnChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });
        
        new MoveSlice(columnChart, "default");
        new Highlight(columnChart, "default");
        new Tooltip(columnChart, "default");

        columnChart.render();

        return columnChart;
      },

      _createCountModeBarChart: function(args, chartDiv, data){
        //[{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var categoryField = config.categoryField;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];
        array.forEach(data, lang.hitch(this, function(item, index){
          var num = item.count;
          var fieldValue = item.fieldValue.toString();
          var a = this._tryLocaleNumber(fieldValue);
          var b = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: categoryField + ' : ' + fieldValue
          });
          series.push({
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + categoryField + " : " + a + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + this.nls.count + " : " + b + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var barChart = new Chart(chartDiv);
        barChart.addPlot('default', {
          type: Bars,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        barChart.addAxis('x', {
          vertical: true,
          natural: true,
          labels: labels
        });

        barChart.addAxis('y', {
          includeZero: true,
          natural: true
        });

        barChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new MoveSlice(barChart, "default");
        new Highlight(barChart, "default");
        new Tooltip(barChart, "default");

        barChart.render();

        return barChart;
      },

      _createCountModeLineChart: function(args, chartDiv, data){
        //[{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var categoryField = config.categoryField;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];
        
        array.forEach(data, lang.hitch(this, function(item, index){
          var num = item.count;
          var fieldValue = item.fieldValue.toString();
          labels.push({
            value: index + 1,
            text: categoryField + ' : ' + fieldValue
          });
          var a = this._tryLocaleNumber(fieldValue);
          var b = jimuUtils.localizeNumber(num);
          series.push({
            y: num,
            text: '',
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + categoryField + " : " + a + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + this.nls.count + " : " + b + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var lineChart = new Chart(chartDiv);

        lineChart.addPlot('default', {
          type: Lines,
          animate: {
            duration: 2000,
            easing: easing.cubicIn
          },
          markers: true,
          tension: "S"
        });

        lineChart.addAxis('x', {
          type: Default,
          natural: true,
          includeZero: true,
          labels: labels
        });

        lineChart.addAxis('y', {
          vertical: true,
          natural: true
        });

        lineChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new Magnify(lineChart, "default");
        new Highlight(lineChart, "default");
        new Tooltip(lineChart, "default");

        lineChart.render();

        return lineChart;
      },

      _createCountModePieChart: function(args, chartDiv, data){
        //[{fieldValue:value1,count:count1,dataFeatures:[f1,f2...]}]
        var config = args.config;
        var categoryField = config.categoryField;
        var colors = config.colors;
        var box = html.getContentBox(chartDiv);
        var radius = Math.floor(Math.min(box.w, box.h) / 2) - 3;

        var labels = [];//{value,text}
        var series = [];
        var sum = 0.0;
        array.forEach(data, lang.hitch(this, function(item){
          sum += item.count;
        }));

        array.forEach(data, lang.hitch(this, function(item, index){
          var num = item.count;
          var fieldValue = item.fieldValue.toString();
          var percent = (num / sum * 100).toFixed(1) + "%";
          var a = this._tryLocaleNumber(fieldValue);
          var b = jimuUtils.localizeNumber(num);
          var c = this.nls.count;
          labels.push({
            value: index + 1,
            text: categoryField + ' : ' + fieldValue
          });
          series.push({
            text: fieldValue,
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + categoryField + " : " + a + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + c + " : " + b + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + percent + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var pieChart = new Chart(chartDiv);

        pieChart.setTheme(MiamiNice);

        pieChart.addPlot('default', {
          type: Pie,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          radius: radius,
          markers: true
        });

        pieChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new MoveSlice(pieChart, "default");
        new Highlight(pieChart, "default");
        new Tooltip(pieChart, "default");

        pieChart.render();

        return pieChart;
      },

      //-----------------create field mode charts-------------------------
      _createFieldModeCharts: function(args, chartDivs){
        var charts = [];
        var config = args.config;
        var types = config.types;
        var valueFields = config.valueFields;
        var operation = config.operation;

        //filter features with number values firstly
        var fs = args.featureSet.features;
        args.featureSet.features = array.filter(fs, lang.hitch(this, function(feature){
          return array.every(valueFields, lang.hitch(this, function(fieldName){
            var attributes = feature.attributes;
            return attributes && this._isNumber(attributes[fieldName]);
          }));
        }));

        var attributesList = array.map(args.featureSet.features, lang.hitch(this, function(feature){
          return feature.attributes;
        }));

        var data = {};//{fieldName1:value1,fieldName2:value2}

        array.forEach(valueFields, lang.hitch(this, function(fieldName){
          data[fieldName] = 0;
        }));

        array.forEach(attributesList, lang.hitch(this, function(attributes){
          array.forEach(valueFields, lang.hitch(this, function(fieldName){
            var fieldValue = attributes[fieldName];
            if(data.hasOwnProperty(fieldName)){
              if(operation === 'average'){
                data[fieldName] = (data[fieldName] + fieldValue) / 2.0;
              }
              else if(operation === 'sum'){
                data[fieldName] += fieldValue;
              }
              else if(operation === 'max'){
                data[fieldName] = Math.max(data[fieldName], fieldValue);
              }
              else if(operation === 'min'){
                data[fieldName] = Math.min(data[fieldName], fieldValue);
              }
            }
            else{
              data[fieldName] = fieldValue;
            }
          }));
        }));

        array.forEach(types, lang.hitch(this, function(type, i){
          try {
            var chartDiv = chartDivs[i];
            var chart = null;
            if (type === 'column') {
              chart = this._createFieldModeColumnChart(args, chartDiv, data);
            } else if (type === 'bar') {
              chart = this._createFieldModeBarChart(args, chartDiv, data);
            } else if (type === 'line') {
              chart = this._createFieldModeLineChart(args, chartDiv, data);
            } else if (type === 'pie') {
              chart = this._createFieldModePieChart(args, chartDiv, data);
            }

            chart.connectToPlot('default', lang.hitch(this, function(evt) {
              var isOver = evt.type === 'onmouseover';
              var isOut = evt.type === 'onmouseout';
              var isClick = evt.type === 'onclick';

              if (isOver || isOut || isClick) {
                var features = this.featureSet && this.featureSet.features;
                if (evt.type === 'onmouseover') {
                  this._mouseOverChartItem(features);
                } else if (evt.type === 'onmouseout') {
                  this._mouseOutChartItem(features);
                }
                else if(evt.type === 'onclick'){
                  this._zoomToGraphics(features);
                }
              }
            }));

            charts.push(chart);
          } catch (e) {
            console.log(e);
          }
        }));

        return charts;
      },

      _createFieldModeColumnChart: function(args, chartDiv, data){
        //data: {fieldName1:value1,fieldName2:value2}
        var config = args.config;
        var valueFields = config.valueFields;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];

        array.forEach(valueFields, lang.hitch(this, function(fieldName, index){
          var num = data[fieldName];
          var a = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: fieldName
          });

          series.push({
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + fieldName + " : " + a + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var columnChart = new Chart(chartDiv);

        columnChart.addPlot('default', {
          type: Columns,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        columnChart.addAxis('x', {
          natural: true,
          labels: labels
        });

        columnChart.addAxis('y', {
          vertical: true,
          includeZero: true,
          natural: true
        });

        columnChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });
        
        new MoveSlice(columnChart, "default");
        new Highlight(columnChart, "default");
        new Tooltip(columnChart, "default");

        columnChart.render();

        return columnChart;
      },

      _createFieldModeBarChart: function(args, chartDiv, data){
        //data: {fieldName1:value1,fieldName2:value2}
        var config = args.config;
        var valueFields = config.valueFields;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];

        array.forEach(valueFields, lang.hitch(this, function(fieldName, index){
          var num = data[fieldName];
          var a = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: fieldName
          });

          series.push({
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + fieldName + " : " + a + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var barChart = new Chart(chartDiv);
        barChart.addPlot('default', {
          type: Bars,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          enableCache: true,
          markers: true,
          gap: 2,
          minBarSize: 2,
          maxBarSize: 60
        });

        barChart.addAxis('x', {
          vertical: true,
          natural: true,
          labels: labels
        });

        barChart.addAxis('y', {
          includeZero: true,
          natural: true
        });

        barChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new MoveSlice(barChart, "default");
        new Highlight(barChart, "default");
        new Tooltip(barChart, "default");

        barChart.render();

        return barChart;
      },

      _createFieldModeLineChart: function(args, chartDiv, data){
        //data: {fieldName1:value1,fieldName2:value2}
        var config = args.config;
        var valueFields = config.valueFields;
        var colors = config.colors;

        var labels = [];//{value,text}
        var series = [];

        array.forEach(valueFields, lang.hitch(this, function(fieldName, index){
          var num = data[fieldName];
          var a = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: fieldName
          });

          series.push({
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + fieldName + " : " + a + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var lineChart = new Chart(chartDiv);

        lineChart.addPlot('default', {
          type: Lines,
          animate: {
            duration: 2000,
            easing: easing.cubicIn
          },
          markers: true,
          tension: "S"
        });

        lineChart.addAxis('x', {
          type: Default,
          natural: true,
          includeZero: true,
          labels: labels
        });

        lineChart.addAxis('y', {
          vertical: true,
          natural: true
        });

        lineChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new Magnify(lineChart, "default");
        new Highlight(lineChart, "default");
        new Tooltip(lineChart, "default");

        lineChart.render();

        return lineChart;
      },

      _createFieldModePieChart: function(args, chartDiv, data){
        //data: {fieldName1:value1,fieldName2:value2}
        var config = args.config;
        var valueFields = config.valueFields;
        var colors = config.colors;
        var box = html.getContentBox(chartDiv);
        var radius = Math.floor(Math.min(box.w, box.h) / 2) - 3;

        var labels = [];//{value,text}
        var series = [];
        var sum = 0.0;
        for(var fieldName in data){
          sum += data[fieldName];
        }

        array.forEach(valueFields, lang.hitch(this, function(fieldName, index){
          var num = data[fieldName];
          var percent = (num / sum * 100).toFixed(1) + "%";
          var a = jimuUtils.localizeNumber(num);
          labels.push({
            value: index + 1,
            text: fieldName
          });

          series.push({
            text: fieldName,
            y: num,
            tooltip: "<div style='color:green;margin-right:10px;'>" +
            "<span style='white-space:nowrap;'>" + fieldName + " : " + a + "</span><br/><br/>" +
            "<span style='white-space:nowrap;'>" + percent + "</span>" +
            "</div>"
          });
        }));

        //construct chart
        var pieChart = new Chart(chartDiv);

        pieChart.setTheme(MiamiNice);

        pieChart.addPlot('default', {
          type: Pie,
          animate: {
            duration: 2000,
            easing: easing.bounceInOut
          },
          radius: radius,
          markers: true
        });

        pieChart.addSeries('default', series, {
          stroke: {
            color: colors[0]
          },
          fill: colors[1]
        });

        new MoveSlice(pieChart, "default");
        new Highlight(pieChart, "default");
        new Tooltip(pieChart, "default");

        pieChart.render();

        return pieChart;
      }
    });
  });