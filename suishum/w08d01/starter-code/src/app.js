// imports & angular.module()
import angular from 'angular';
import '@uirouter/angularjs';

import Router from './config/router';

import OrderCtrl from './controllers/order';

import 'bulma';

angular.module('aldgateGrind', ['ui.router'])
  .config(Router)
  .controller('OrderCtrl', OrderCtrl);
