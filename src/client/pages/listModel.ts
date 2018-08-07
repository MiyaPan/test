import listApi from '../../apis/list.api';

export default class ListModel {
    public list = [];
    public totalPages: number = 0;
    public totalCount: number = 0;
    public isSelectedAll: boolean = false;

    public tab: string = null;
    public pageNum: number = 1;
    public pageSize = 20;

    private lastResolverFun;
    private lastRejectFun;

    public reload() {
        return new Promise((resolve, reject) => {
           this.lastResolverFun = resolve;
           this.lastRejectFun = reject;
            listApi.getList(this.pageNum, this.pageSize, this.tab)
                .then((listData) => {
                    if (resolve !== this.lastResolverFun) {
                        return;
                    }
                    this.totalPages = listData.totalPages;
                    this.totalCount = listData.totalCount;
                    this.pageNum = listData.pageNum;
                    this.list = listData.items.map(item => {
                        item.isSelected = this.isSelectedAll;
                        return item;
                    });
                    this.lastResolverFun();
                }).catch(err => {
                    if (reject !== this.lastRejectFun) {
                        return;
                    }
                    this.lastRejectFun(err);
                });
        });
    }

    public isSelectedAllByItems(): boolean {
        return this.list.every((item) => item.isSelected === true);
    }

    public isNotSelectedAllByItems (): boolean {
        return this.list.some((item) => item.isSelected === false);
    }

    public getSelectedArr () {
        let selectedArr = this.list.filter((item) => item.isSelected === true);
        return selectedArr.map((item) => item.id)
    }

    public isFirstPage () {
        return this.pageNum === 1;
    }

    public isLastPage () {
        return this.totalPages === this.pageNum;
    }
}
