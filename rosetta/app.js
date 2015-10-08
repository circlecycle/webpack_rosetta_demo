// Declare app level module which depends on views, and components

require('angular');
require('hypertag');

document.write(require('./foo.hyp'));

var app = angular.module('app', []);

app.directive('hello', function() {
    return {
        restrict: 'AE',
        template: require('./hello.tmpl'),
        link:function(){
            console.log("hello", this);
        }
    };
});

module.exports = app;
