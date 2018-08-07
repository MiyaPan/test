import ListModel from './listModel';
export default AppCtrl;

AppCtrl.$inject = ['$scope'];

function AppCtrl($scope) {
    $scope.listModel = new ListModel();
    $scope.tab = null;
    $scope.isShowSelectedArr = false;

    $scope.reload = () => {
        $scope.listModel.tab = $scope.tab;
        $scope.listModel.list = [];
        $scope.listModel.reload().then(() => {
            $scope.$apply();
        });
    };

    $scope.selectAll = () => {
        $scope.listModel.isSelectedAll = !$scope.listModel.isSelectedAll;
        $scope.listModel.list.map((item) => {
            item.isSelected = $scope.listModel.isSelectedAll;
        })
    };

    $scope.getSelected = () => {
        $scope.isShowSelectedArr = true;
    };

    $scope.$watch('tab', () => {
        $scope.reload();
    });

    function init () {
        $scope.reload();
    }
    init();
}