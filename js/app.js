(function() {
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller("ToBuyController", ["$scope", "ShoppingListCheckOffService", ToBuyController])
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

        function ToBuyController($scope, ShoppingListCheckOffService){
            $scope.listItems = ShoppingListCheckOffService.getWishItems();
            $scope.buyItem = function (itemIndex) {
                 ShoppingListCheckOffService.boughtItem(itemIndex);
            };
        };

        function AlreadyBoughtController($scope, ShoppingListCheckOffService){
            $scope.listItems = ShoppingListCheckOffService.getBoughItems();
        }

      

    function ShoppingListCheckOffService(){
        var service = this;

        var wishItems = [
            {
                name: "cookies",
                quantity: 20
            },
            {
                name: "hamburguer",
                quantity: 12
            },
            {
                name: "pizza",
                quantity: 6
            },
            {
                name: "apple",
                quantity: 80
            },
            {
                name: "tomatoes",
                quantity: 5
            }
            ];
        var boughtItems = [];
        service.getWishItems = function () {
            return wishItems;
        };

        service.getBoughItems = function () {
            return boughtItems;
        };

        service.boughtItem = function(index){
            boughtItems.push(wishItems[index]);
            wishItems.splice(index, 1);

        }
    }

})();