import ApplicationAdapter from './application';
import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://eatery.firebaseio.com")
});
