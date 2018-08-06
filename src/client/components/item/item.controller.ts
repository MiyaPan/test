export default class {
    static $inject = ['$scope'];
    public listModel;

    constructor(private $scope) {
    }

    public check (item) {
        item.isSelected = !item.isSelected;
        if(this.listModel.isSelectedAllByItems()) {
            this.listModel.isSelectedAll = true;
        } else if(this.listModel.isNotSelectedAllByItems()) {
            this.listModel.isSelectedAll = false;
        }
    }
 }