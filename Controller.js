(function (app)
{
    /**
     * A generic controller that can be re-used any number of times, and
     * will load data from items.json and populate the $scope with that
     * array of items
     *
     * @constructor
     */
    function Controller()
    {

        //Call the init() method below, which does all the initialization and connecting of $scope
        this.init.apply(this, arguments);
    }

    Controller.prototype = {

        url: 'items.json',

        init: function ($scope, $attrs, $http)
        {
            this.$scope = $scope;
            this.$scope.$http = $http;
            this.$scope.url = this.url;
            this.$scope.onData = this.onData;
            this.$scope.loadData = this.loadData;

            this.$scope.$on('$destroy', function ()
            {
                this.memoryCleanup();
            });

            console.log("I'm attached as the controller to: " + $attrs.context);
            //$scope.items = [{"firstName": "No Names yet! " + Math.random()}];
        },


        /**
         * Load the data
         */
        loadData: function ()
        {
            var self = this;

            self.$http.get(self.url, { cache: true }).success(function (data)
            {
                self.onData(data);
            }).error(function (err)
            {
                console.log(err);
            });
        },

        /**
         * Populate the items in the $scope
         * @param response
         */
        onData: function (response)
        {
            this.items = response;

        },

        memoryCleanup: function ()
        {
            alert('Memory Cleanup');
        }


    };

    app.service('Controller', function ()
    {
        return Controller;
    });
})(angular.module('interviewExercise'));
