import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set('newRestaurant',Ember.Object.create());
  },
  actions: {
    saveRestaurant: function() {
      var restaurant = this.store.createRecord('restaurant',{
        name: this.get('newRestaurant.name'),
        cuisine: this.get('newRestaurant.cuisine')
      });

      restaurant.save().then(function() {
        alert('saved');
      });

    }
  }
});
