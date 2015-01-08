import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["restaurant"],
  restaurant: Ember.computed.alias('controllers.restaurant.model'),
  actions: {
    createSchedule: function() {
      var schedule = this.store.createRecord('schedule', {
        time: this.get('timeSelect.name'),
        booked: false
      });
      var restaurant = this.get('restaurant');
      var schedules = restaurant.get('schedules');
      schedules.pushObject(schedule);
      schedule.save();
      restaurant.save().then(function(){alert('saved!');});
    },
    deleteSchedule: function(item) {
      item.delete();
    }
  },
  timings: [{
    name: '2130'
  },{
    name: '2200'
  }]
});
