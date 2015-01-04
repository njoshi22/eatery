import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  init: function() {
    this.set("cityName","Mumbai");
  },
  notify: Notify.Container.create(),
  actions: {
    clicked: function() {
      this.notify.info("Hello from the controller!");
    },
    changeCity: function(city) {
      this.set("cityName",city);
    }
  },

  restaurants: function() {
    return this.store.find('restaurant');
  },

  names: [],
  cityName: null,
  peopleRequired: "2 people",
  bookingDate: null,
  timeRequired: "3:00 PM",

  searchText: null,

  searchResults: function() {
    var searchText = this.get('searchText');
    // var modelData = this.store.find('restaurant');
    var modelData = ["Mumbai","Sydney","NYC"];

    if(!searchText || searchText.length < 4) { return; }

    var regex = new RegExp(searchText,'i');

    var results = modelData.filter(function(place) {
      return place.match(regex);
    });

    return results;

  }.property('searchText')
});
