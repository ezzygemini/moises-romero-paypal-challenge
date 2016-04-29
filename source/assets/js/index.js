/**
 * Contains the angular module to fetch
 * different locale properties
 *
 * @file
 * @since 4/28/16
 * @version 1
 * @author Moises Romero
 * @copyright Moises Romero
 */
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
                    
                    // available properties
                    $scope.properties = ['quotationStart','quotationEnd','alternateQuotationStart','alternateQuotationEnd'];
                    
                    // list of locales (populated via api)
                    $scope.locales = [];

                    // initial selection values
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

                    // hide the display values initially
                    $scope.display = null;
                        
                    // reload the values
                    $scope.reloadValues = function(){
                        $http({ method:'GET', url:'/locale/' + $scope.selection.locale }).then(function(response){
                            $scope.display = response.data;
                        }, function(){
                            console.error('There was an error retrieving the locale: ' + $scope.selection.locale);
                        });
                    };

                    // make an http request to load the locales
                    $http({ method:'GET', url:'/locales' }).then(function(response){
                        $scope.locales = response.data;
                    }, function(){
                        console.error('We had an error obtaining the list of locales');
                    });

                    // display the default values
                    $scope.reloadValues();
                }]
            }
        });


})(angular);