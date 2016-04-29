/**
 * Contains a basic data model that can be parsed 
 * with handlebars templates
 *
 * @file
 * @since 4/28/16
 * @version 1
 * @author Moises Romero
 * @copyright Moises Romero
 */
function IndexModel(){

    /**
     * The title of the page
     * @type {string}
     */
    this.title = 'PayPal Code Challenge';

    /**
     * The page description
     * @type {string}
     */
    this.description = 'Coding challenges are fun!';

    /**
     * Angular application name
     * @type {string}
     */
    this.ngApp = 'paypalCodeChallenge';

    /**
     * A list of CSS files to include
     * @type {string[]}
     */
    this.cssFiles = [
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
        '/assets/css/global.css',
        '/assets/css/index.css'
    ];

    /**
     * A list of JS files to include
     * @type {string[]}
     */
    this.jsFiles = [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
        '/assets/js/index.js'
    ];
}

module.exports = IndexModel;