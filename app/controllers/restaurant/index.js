import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  availableCount: function() {
    var schedules = this.get('model.schedules');
    return schedules.filterBy('booked',false).get('length');
  }.property('model.schedules.@each.booked'),
  isAvailable: function() {
    var resBool = this.get('availableCount') > 0 ? true : false;
    console.log('isAvailable: %@'.fmt(resBool));
    return resBool;
  }.property('availableCount'),
  inflection: function() {
    return this.get('availableCount') === 1? "timeslot" : "timeslots";
  }.property('availableCount'),
  init: function() {
    console.log(this.routeName);
  }
});
