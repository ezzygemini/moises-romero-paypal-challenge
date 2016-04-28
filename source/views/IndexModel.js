/**
 * Created by ezzygemini on 4/28/16.
 */

function IndexModel(){
    this.title = 'PayPal Code Challenge';
    this.description = 'Coding challenges are fun!';
    this.ngApp = 'paypalCodeChallenge';
    this.cssFiles = [
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
        '/assets/css/global.css',
        '/assets/css/index.css'
    ];
    this.jsFiles = [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
        '/assets/js/index.js'
    ];
}

module.exports = IndexModel;