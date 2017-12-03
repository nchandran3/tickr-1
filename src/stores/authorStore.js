"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('lodash');

var _authors = [];


// take an empty object, extend it to use event emitter, and define rest of store
// new object will have event emitter
var AuthorStore = assign({}, EventEmitter.prototype, {
    // tell react components when this store changes
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, {id : id});
    }
});

// gets called when any action is dispatched
// registers store with dispatcher
Dispatcher.register(function(action) {
   switch(action.actionType) {
       case ActionTypes.INITIALIZE:
           _authors = action.initialData.authors;
           AuthorStore.emitChange();
           break;
       case ActionTypes.CREATE_AUTHOR:
           _authors.push(action.author);
           AuthorStore.emitChange();
           break;
       case ActionTypes.UPDATE_AUTHOR:
           var existingAuthor = _.find(_authors, {id: action.author.id});
           var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
           _authors.splice(existingAuthorIndex, 1, action.author);
           AuthorStore.emitChange();
           break;
       case ActionTypes.DELETE_AUTHOR:
           debugger;
           _.remove(_authors, function(author) {
               return action.id === author.id;
           });
           AuthorStore.emitChange();
           break;
       default:
           // no op
   }
});

module.exports = AuthorStore;