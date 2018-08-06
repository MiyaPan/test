export default class {
    static $inject = ['$scope'];

    public tab: string;
    constructor(private $scope) {
    }

    public changeTab (tab) {
        this.tab = tab;
    }
 }