(function(app){

    app.controller("genericController", ['Controller', '$scope', '$attrs', function(Controller, $scope, $attrs) {
        return new Controller($scope, $attrs);
    }]);

})(angular.module("interviewExercise", []));



