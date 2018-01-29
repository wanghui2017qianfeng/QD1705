require.config({
    paths:{
        "jquery": "jquery-1.11.3", //遵从AMD规范
        "jquery-cookie": "jquery.cookie",

        "order": "order",
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})

require(["order"],function(order){
    console.log(order.order());
})
