import controller from './item.controller';
import * as itemTemplate from './item.html';
import './item.less';

export default function () {
    return {
        restrict: 'E',
        scope: {
            listModel: '='
        },
        template: itemTemplate,
        controller,
        controllerAs: 'vm',
        bindToController: true
    }
}