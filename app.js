(function(app){

    app.controller("genericController", ['Controller', '$scope', '$attrs', '$http', function(Controller, $scope, $attrs, $http) {
        return new Controller($scope, $attrs, $http);
    }]);

})(angular.module("interviewExercise", []));



