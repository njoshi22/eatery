import Ember from 'ember';

export default Ember.Controller.extend({
  availableCount: function() {
    var schedules = this.get('model.schedules');
    return schedules.filterBy('booked',false).get('length');
  }.property('model.schedules.@each'),
  isAvailable: function() {
    var resBool = this.get('availableCount') > 0 ? true : false;
    console.log('isAvailable: %@'.fmt(resBool));
    return resBool;
  }.property('availableCount')
});
