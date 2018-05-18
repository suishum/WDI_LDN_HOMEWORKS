import angular from 'angular';
import GifCtrl from './controllers/GifCtrl';

import 'bulma';

angular.module('gifCity', [])
  .controller('GifCtrl', GifCtrl);
