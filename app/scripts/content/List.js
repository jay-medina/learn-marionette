define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var Templates = require('templates/Templates');

  var Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: Templates.Contact,
    events: {
      'click': 'highlightName',
      'click button': 'deleteBtn'
    },
    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    displayText: function(e) {
      alert($(e.target).text());
    },
    deleteBtn: function(){
      this.model.collection.remove(this.model);
      return false;
    }
  });

  var Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: Templates.ContactList,
    childView: Contact,
    childViewContainer: 'tbody'
  });

  return {
    Contact: Contact,
    Contacts: Contacts
  };

});
