require.config({
    paths:{
        "jquery": "jquery-1.11.3", //遵从AMD规范
        "jquery-cookie": "jquery.cookie",

        "productdetail": "productdetail",
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})

require(["productdetail"],function(productdetail){
    console.log(productdetail.productdetail());
})
require(["magnify"],function(magnify){
    console.log(magnify.magnify());
})
require(["tab"],function(tab){
    console.log(tab.tab());
})