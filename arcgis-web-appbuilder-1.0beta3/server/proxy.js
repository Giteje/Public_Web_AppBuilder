/*
Copyright ©2014 Esri. All rights reserved.
 
TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
Unpublished material - all rights reserved under the
Copyright Laws of the United States and applicable international
laws, treaties, and conventions.
 
For additional information, contact:
Attn: Contracts and Legal Department
Environmental Systems Research Institute, Inc.
380 New York Street
Redlands, California, 92373
USA
 
email: contracts@esri.com
*/


var request = require('request');
var logger = require('log4js').getLogger('proxy');

exports.proxyRequest = function() {
  return function(req, res, next) {
    try{
      var url;
      if (req.url.indexOf('?') > -1) {
        url = req.url.substr(2);
      } else {
        return next();
      }
      var r;
      if (req.method === 'GET') {
        r = request.get({
          url: url,
          rejectUnauthorized: false,
          requestCert: true,
          agent: false,
          proxy: args.proxy? args.proxy: undefined
        });
        r.pipe(res);
      } else if (req.method === 'POST') {
        r = request({
          method: 'POST',
          url: url,
          form: req.body,
          rejectUnauthorized: false,
          requestCert: true,
          agent: false,
          proxy: args.proxy? args.proxy: undefined
        });
        r.pipe(res);
      } else {
        res.send('support get and post only.');
      }
      if(r){
        r.on('error', function(err){
          logger.error('proxy error', err);
        });
      }
    }
    catch(e){
      console.error(e);
    }
  };
};