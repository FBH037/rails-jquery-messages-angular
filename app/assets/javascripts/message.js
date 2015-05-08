// (function(){
// angular.module('checkboxExample', []);
// app.controller('ExampleController', ['$scope', function($scope) {
//   $scope.checkboxModel = {
//     value1 : true,
//     value2 : 'YES'
//   };
//
//   function StoreController(){
//     alert("welcome!");
//   }
// }]);
// })();
$(document).ready(function(){
var app = angular.module("app", []);


function countController( $scope, $timeout )
{
  
  $scope.addons = [
  {
    checked: true
  },
  {
    checked: false
  }
  ];
}


function MainCtrl() {

  var vm = this;
  vm.message = "Welcome";
  vm.actionsQuery =

  {
    actionTypes: [

    {
      checked: true,
      Description: "Jon"
    }, {
      checked: false,
      Description: "Bon"
    }, {
      checked: false,
      Description: "Tim"
    }

    ]
  };
  vm.selected = function() {
  vm.checkoxesState = true;
  }

  vm.UpdateCheckboxes = function() {


    angular.forEach(vm.actionsQuery.actionTypes, function(at) {

      at.checked = vm.checkoxesState;

    });
    vm.checkoxesState = !this.checkoxesState


  };

}

angular.module("app").controller("MainCtrl", MainCtrl);
});
