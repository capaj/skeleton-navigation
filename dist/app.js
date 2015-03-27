System.register(["jquery", "bskyb-commerce/sly", "aurelia-http-client", "../src/tv-grid.css!"], function (_export) {
  var $, sly, HttpClient, _createClass, _classCallCheck, apiUrl, App;

  _export("configure", configure);

  function configure(aurelia) {}

  return {
    setters: [function (_jquery) {
      $ = _jquery["default"];
    }, function (_bskybCommerceSly) {
      sly = _bskybCommerceSly["default"];
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_srcTvGridCss) {}],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      apiUrl = "http://localhost:8777";
      App = _export("App", (function () {
        function App(http) {
          _classCallCheck(this, App);

          var self = this;

          http.get(apiUrl + "/hawk/linear/services/4101/1").then(function (res) {
            self.services = JSON.parse(res.response).services;
            console.log(self.services);
          }, function (data, status) {
            console.warn("ERROR ", data, status);
          });
        }

        _createClass(App, null, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return App;
      })());
    }
  };
});

//aurelia.use.standardConfiguration();    //when uncommented, app.js fails to load
//return aurelia.start().then(function (a) {
//  return a.setRoot(undefined, document.body);
//});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQU8sQ0FBQyxFQUNELEdBQUcsRUFDRixVQUFVLGlDQUdkLE1BQU0sRUFFRyxHQUFHOzt1QkFlQSxTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUMsRUFLakM7Ozs7QUEzQk0sT0FBQzs7QUFDRCxTQUFHOztBQUNGLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUdkLFlBQU0sR0FBRyx1QkFBdUI7QUFFdkIsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixJQUFJLEVBQUM7Z0NBRk4sR0FBRzs7QUFHWixjQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLGNBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLDhCQUE4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ25FLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUNsRCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDNUIsRUFBRSxVQUFTLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDeEIsbUJBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztXQUN0QyxDQUFDLENBQUM7U0FFSjs7cUJBWlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=