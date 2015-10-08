
//base css for hypertag apps - optional
require('./verbs.css');
//jquery required for hypertag apps
require('expose?$!expose?jQuery!jquery');
//jshint is only used during development
require('imports?this=>window!jshint');
//stacktrace is only used during developement
require('imports?this=>window!stacktrace');
//this version of jquery templates fixes a memory leak
require('imports?this=>window!JQTemplates');
//the main hypertag codebase, all in one file.
require('imports?this=>window!hypertag_library');

//draw a set of useful default hypertags into the page
document.write(require('./builtins.hyp'));

//set up hypertag's focus mechanism to defaults.
Hypertag.GUI.focus.setLayer(window).setWindow(window);

//provide reference to the Hypertag namespace. While we are 
//using global references today, this will change soon.
module.exports = Hypertag;