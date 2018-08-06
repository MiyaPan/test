import controller from './pager.controller';
import * as pagerTemplate from './pager.html';
import './pager.less';

export default function () {
    return {
        restrict: 'E',
        scope: {
            listModel: '=',
            reload: '&'
        },
        template: pagerTemplate,
        controller,
        controllerAs: 'vm',
        bindToController: true
    }
}