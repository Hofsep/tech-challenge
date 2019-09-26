
angular.module("module", ["JWTService"]).controller("Ctrl", function($scope, $http){

    $http.get('https://jsonplaceholder.typicode.com/users').then(function(res) {
        $scope.users = res;
        $scope.user = $scope.users.data[0];
    });
  
    $scope.buttonClick = () => {
        
    }

});
