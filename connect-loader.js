        (function() {
          var getUrlParam = function (param) {
            var codedParam = (new RegExp(param + '=([^&]*)')).exec(window.location.search)[1];
            return decodeURIComponent(codedParam);
          };
        
          var options = document.getElementById('connect-loader').getAttribute('data-options');
          var script = document.createElement("script");
          script.src = 'https://connect-cdn.atl-paas.net/all.js';
        
          if(options) {
            script.setAttribute('data-options', options);
          }
        
          document.getElementsByTagName("head")[0].appendChild(script);
          script.onload = main;
        })();
