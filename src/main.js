"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();


// Run the router
// Render the app for whatever handler is in scope based on URL
// this file is entry point of the application
Router.run(routes, function(Handler) {
   React.render(<Handler/>, document.getElementById('app'));
});