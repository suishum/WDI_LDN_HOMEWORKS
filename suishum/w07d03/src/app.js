import angular from 'angular';
import '@uirouter/angularjs';

import Router from './config/router';

import DogsIndexCtrl from './controllers/dogs/index';
import DogsShowCtrl from './controllers/dogs/show';
import DogsNewCtrl from './controllers/dogs/new';
import DogsEditCtrl from  './controllers/dogs/edit';

import rangeFilter from './filters/range';

import Dog from './services/dog';

import 'bulma';

angular.module('angularHackathon', ['ui.router'])
  .config(Router)
  .controller('DogsIndexCtrl', DogsIndexCtrl)
  .controller('DogsShowCtrl', DogsShowCtrl)
  .controller('DogsNewCtrl', DogsNewCtrl)
  .controller('DogsEditCtrl', DogsEditCtrl)
  .service('Dog', Dog)
  .filter('range', rangeFilter);
