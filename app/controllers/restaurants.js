import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makeBooking: function(timeslot) {
      timeslot.set('booked',true);
      timeslot.save();
    }
  }
});
