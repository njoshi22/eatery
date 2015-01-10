import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["restaurant"],
  restaurant: Ember.computed.alias('controllers.restaurant.model'),
  availableCount: function() {
    return this.get('model').filterBy('booked',false).get('length');
  }.property('model.@each.booked'),
  actions: {
    createSchedule: function() {
      var schedule = this.store.createRecord('schedule', {
        time: this.get('timeSelect.name'),
        booked: false
      });
      var restaurant = this.get('restaurant');
      var schedules = restaurant.get('schedules');
      schedules.addObject(schedule);
      schedule.save();
      restaurant.save();
    },
    deleteSchedule: function(item) {
      var restaurant = this.get('restaurant');
      item.deleteRecord();
      item.save();
      restaurant.save();
    }
  },
  timings: [{
    name: '2130'
  },{
    name: '2200'
  }]
});
