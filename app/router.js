import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('loading');
  this.route('restaurant', {path: "/restaurants/:restaurant_id"});
});

export default Router;
