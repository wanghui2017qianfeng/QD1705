require.config({
    paths:{
        "jquery": "jquery-1.11.3", //遵从AMD规范
        "jquery-cookie": "jquery.cookie",

        "index": "index",
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})

require(["index"],function(index){
    console.log(index.main());
})

require(["slide"],function(slide){
    console.log(slide.slide());
})

require(["fade"],function(fade){
    console.log(fade.fade());
})

require(["productlist"],function(productlist){
    console.log(productlist.productlist());
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

require(["order"],function(order){
    console.log(order.order());
})

require(["register"],function(register){
    console.log(register.register());
})

require(["login"],function(login){
    console.log(login.login());
})