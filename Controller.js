(function(app) {
    /**
     * A generic controller that can be re-used any number of times, and
     * will load data from items.json and populate the $scope with that
     * array of items
     *
     * @constructor
     */
    function Controller() {

        //Call the init() method below, which does all the initialization and connecting of $scope
        this.init.apply(this, arguments);
    }

    Controller.prototype = {

        url: null,

        init: function ($scope, $attrs) {
            this.$scope = $scope;

            console.log("I'm attached as the controller to: " + $attrs.context);
            //this.$scope.items = [{"firstName": "No Names yet! " + Math.random()}];
        },


        /**
         * Load the data
         */
        loadData: function () {

        },

        /**
         * Populate the items in the $scope
         * @param response
         */
        onData: function (response) {


        },

        memoryCleanup: function(){

        }


    };

    app.service('Controller', function(){
        return Controller;
    });
})(angular.module('interviewExercise'));
