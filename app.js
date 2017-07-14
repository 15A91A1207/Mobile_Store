

(function ()
{
    var app = angular.module("MobileStore",[]);
    var iphone = {
        name:"iphone7 plus",
        color:"apple Red",
        memory:"3GB RAM, 128 Internal memory",
        price:74999,
        image:"images/iphone7plus.png",
        isSoldOut:false,
        activeTab :"Description"
    };
    var redmi3s ={
        name:"redmi3s",
        color:"redmi gold",
        memory:"3GB RAM, 32 Internal memory",
        price:8999,
        image:"images/aa.jpg",
        image:"images/aa.jpg",
        isSoldOut:false,
        activeTab :"Description"

    };
    app.controller("StoreController",function () {
        this.mobiles=[iphone,redmi3s]


        this.setActiveTab = function(mobile,Tab) {
            mobile.activeTab = tab;
        }
    });
})();
