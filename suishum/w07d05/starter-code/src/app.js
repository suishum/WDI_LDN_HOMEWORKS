import angular from 'angular';
// Angular UI-Router is a client-side Single Page Application routing framework for AngularJS.
import '@uirouter/angularjs';

// Controllers handle the information & functions you want to use on a view
import Router from './config/router';
import OrdersIndexCtrl from './controllers/orders/index';
import OrdersNewCtrl from './controllers/orders/new';

// Services deal with getting stuff from the database
import Order from './services/order';
import Item from './services/item';

// Style dependancies
import 'bulma';

angular.module('angularHackathon', ['ui.router'])
  .config(Router)
  .controller('OrdersIndexCtrl', OrdersIndexCtrl)
  .controller('OrdersNewCtrl', OrdersNewCtrl)
  .service('Order', Order)
  .service('Item', Item);
