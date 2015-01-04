import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ["restaurant.index"],
  restaurant: Ember.computed.alias('controllers.restaurant.index'),
  actions: {
    createSchedule: function() {
      var schedule = this.store.createRecord('schedule', {
        time: '2100',
        booked: false
      });
      var restaurant = this.get('restaurant');
      var schedules = restaurant.get('schedules');
      schedules.pushObject(schedule);
      schedule.save();
      restaurant.save();
    }
  }
});
