import controller from './tabBar.controller';
import * as tabBarTemplate from './tabBar.html';
import './tabBar.less';

export default function () {
    return {
        restrict: 'E',
        scope: {
            tab: '='
        },
        template: tabBarTemplate,
        controller,
        controllerAs: 'vm',
        bindToController: true
    }
}