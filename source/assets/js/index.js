(function(angular){


    /**
     * Create PayPal Module
     */
    angular.module('paypalCodeChallenge', [])

        /**
         * Configure the application
         */
        .config(['$interpolateProvider', function($interpolateProvider) {
            /**
             * change the default variable definitions
             * because it conflicts with handlebars
             */
            $interpolateProvider.startSymbol('[[').endSymbol(']]');
        }])

        /**
         * Build the main directive
         */
        .directive('proplookup', function() {
            return {
                templateUrl: 'assets/templates/localePropertyLookup.hbs',
                controller: ['$scope', '$http', function($scope, $http){

                    $scope.properties = ['quotationStart','quotationEnd','alternateQuotationStart','alternateQuotationEnd'];
                    $scope.locales = [];

                    $scope.selection = {
                        locale: 'top',
                        properties: 'quotationStart',
                        options: {
                            quotationStart:true,
                            quotationEnd:true,
                            alternateQuotationStart:true,
                            alternateQuotationEnd:true
                        }
                    };

                    $scope.display = null;
                        
                    $scope.reloadValues = function(){
                        $http({ method:'GET', url:'/locale/' + $scope.selection.locale }).then(function(response){
                            $scope.display = response.data;
                        }, function(){
                            console.error('There was an error retrieving the locale: ' + $scope.selection.locale);
                        });
                    };

                    $http({ method:'GET', url:'/locales' }).then(function(response){
                        $scope.locales = response.data;
                    }, function(){
                        console.error('We had an error obtaining the list of locales');
                    });

                    $scope.reloadValues();

                }]
            }
        });


})(angular);