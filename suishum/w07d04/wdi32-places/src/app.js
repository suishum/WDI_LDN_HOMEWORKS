import angular from 'angular';
import '@uirouter/angularjs';

import Router from './config/router';
import PlacesIndexCtrl from './controllers/places/index';
import PlacesNewCtrl from './controllers/places/new';
import PlacesShowCtrl from './controllers/places/show';
import PlacesEditCtrl from './controllers/places/edit';

import Place from './services/place';

import googleMap from './directives/google-map';
import googleAutocomplete from './directives/google-autocomplete';

import 'bulma';
import './assets/scss/style.scss';

angular.module('angularIntro', ['ui.router'])
  .config(Router)
  .controller('PlacesIndexCtrl', PlacesIndexCtrl)
  .controller('PlacesNewCtrl', PlacesNewCtrl)
  .controller('PlacesShowCtrl', PlacesShowCtrl)
  .controller('PlacesEditCtrl', PlacesEditCtrl)
  .service('Place', Place)
  .directive('googleMap', googleMap)
  .directive('googleAutocomplete', googleAutocomplete);
