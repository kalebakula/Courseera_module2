(function()
{
    'use strict'

    angular.module('ShoppingListCheckOff',[])

    .controller('ToBuyController',buyController)
    
    .controller('AlreadyBoughtController',boughtController)
    .service('ShoppingListCheckOffService',service);


    buyController.$inject = ['$scope','ShoppingListCheckOffService'];

    function buyController($scope,service)
    {
        $scope.buy=[];
       
        $scope.buy=service.buyItems();
        $scope.bought=function(item)
        {
            service.bought(item);
            $scope.buy=service.buyItems();
            
        }
    }
    boughtController.$inject = ['$scope','ShoppingListCheckOffService'];
    
function boughtController($scope,service)
{
        $scope.bought=[];
        $scope.bought=service.boughtItems();      
        

}
   

    function service()
    {
        var service=this;
        var buy=[{name:'apple',qty:'5'},{name:'banana',qty:'10'},{name:'papaya',qty:'2'},{name:'orange',qty:'8'}];
        var bought=[];
       service.buyItems=function()
       {
           return buy;
       };

       service.boughtItems=function()
       {
           return bought;
       };
       service.bought=function(item)
       {
           bought.push(item);
           buy.splice(buy.indexOf(item),1);
           return bought;
       };
    }
})();