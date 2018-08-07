function getList (pageNum, pageSize, tab): Promise<any> { // 参数用来获取指定页，指定tab参数和指定每页大小
    let dataArr = [];
    for(let i=(pageNum -1) * 20; i<pageNum * 20; i++){
        dataArr.push({id: '' + i })
    }
    let data = {
        totalPages: 20,
        totalCount: 30,
        pageNum: pageNum,
        items: dataArr
    };
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.random() * 5000);
    })
}

export default {
    getList
}