"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');
var firebase = require('./firebase');

InitializeActions.initApp();


// Run the router
// Render the app for whatever handler is in scope based on URL
// this file is entry point of the application
Router.run(routes, function(Handler) {
   React.render(<Handler/>, document.getElementById('app'));
});

// example firebase request
firebase.firestore().collection('accounts').doc('6rhcYs3aZ42MlRQcjdGZ').get()
.then(resp => console.log(resp.data()));


firebase.firestore().collection('accounts').add({name: 'Test Account 2', symbol: '$Tst2'})
.then(resp => console.log(resp));
