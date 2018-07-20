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

        init: function ($scope, $attrs, $http) {
            this.$scope = $scope;

            console.log("I'm attached as the controller to: " + $attrs.context);
            // $scope.items = [{"firstName": "No Names yet! " + Math.random()}];

            this.$scope.loadData = this.loadData.bind(this);
            this.$http = $http;
        },


        /**
         * Load the data
         */
        loadData: function () {
            this.$http.get('items.json').then( this.onData.bind(this));
        },

        /**
         * Populate the items in the $scope
         * @param response
         */
        onData: function (response) {
            if (response.status != 200) {
                this.memoryCleanup();
                return;
            }
            
            this.$scope.items = response.data.filter(function(i){
                return !!i.firstName && !!i.lastName
            });
        },

        memoryCleanup: function(){
            this.$scope.items = [];
        }


    };

    app.service('Controller', function(){
        return Controller;
    });
})(angular.module('interviewExercise'));
