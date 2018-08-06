import 'angular';
import AppCtrl from './appController';
import './index.less';

import Item from '../components/item';
import Pager from '../components/pager';
import TabBar from '../components/tabBar';

angular.module('myApp', [])
    .controller('AppCtrl', AppCtrl)
    .directive('item', Item)
    .directive('pager', Pager)
    .directive('tabBar', TabBar);
