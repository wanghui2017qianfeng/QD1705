require.config({
    paths:{
        "jquery": "jquery-1.11.3", //遵从AMD规范
        "jquery-cookie": "jquery.cookie",

        "productlist": "productlist",
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})

require(["productlist"],function(productlist){
    console.log(productlist.productlist());
})

require(["fade"],function(fade){
    console.log(fade.fade());
})
