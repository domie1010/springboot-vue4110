const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoquyiqingguanlixitong/",
            name: "xiaoquyiqingguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoquyiqingguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小区疫情购物系统"
        } 
    }
}
export default base
