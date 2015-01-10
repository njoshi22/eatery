import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions: {
    makeBooking: function(timeslot) {
      timeslot.set('booked',true);
      timeslot.save()
      .then(Notify.alert('Booked!'));
    }
  },

});
