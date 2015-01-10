import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  init: function() {
    this.set('newRestaurant',Ember.Object.create());
  },
  isRestaurants: function() {
    return this.get('model').get('length') > 0 ? true : false;
  }.property('model.@each'),
  actions: {
    saveRestaurant: function() {
      var restaurant = this.store.createRecord('restaurant',{
        name: this.get('newRestaurant.name'),
        cuisine: this.get('newRestaurant.cuisine'),
        openingTime: '1900',
        closingTime: '2359'
      });

      restaurant.save().then(function() {
        Notify.show('danger','Saved!');
      });
    }
  },

  sortProperties: ['name'],
  sortAscending: true


});
