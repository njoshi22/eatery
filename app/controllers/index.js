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
  cityName: null,
  peopleRequired: "2 people",
  timeRequired: "3:00 PM",
  optionSelect: ['Mumbai','Cairns']
});
