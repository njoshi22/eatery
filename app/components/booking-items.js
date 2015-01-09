import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    makeBooking: function(timeslot) {
      timeslot.set('booked',true);
      timeslot.save().then(function(){alert('Saved.');});
    }
  }
});
