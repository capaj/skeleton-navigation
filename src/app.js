import $ from 'jquery';
import sly from 'bskyb-commerce/sly';
import {HttpClient} from 'aurelia-http-client';
import '../src/tv-grid.css!';

var apiUrl = 'http://localhost:8777';

export class App {
  static inject() { return [HttpClient]; }
  constructor(http){
    var self = this;

    http.get(apiUrl + '/hawk/linear/services/4101/1').then(function(res) {
      self.services = JSON.parse(res.response).services;
      console.log(self.services);
    }, function(data, status) {
      console.warn('ERROR ', data, status);
    });

  }
}

export function configure(aurelia){
  //aurelia.use.standardConfiguration();    //when uncommented, app.js fails to load
  //return aurelia.start().then(function (a) {
  //  return a.setRoot(undefined, document.body);
  //});
}
