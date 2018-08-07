export default class {
    public listModel;
    public reload: Function;

    constructor() {
    }

    public onPageChange (goPrevious) {
        if (goPrevious) {
            this.listModel.pageNum --;
        } else {
            this.listModel.pageNum ++;
        }
        this.reload();
    }
 }