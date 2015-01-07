import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("admin");
  this.route("loading");

  this.route("restaurants",{
    path: "/restaurants"
  });

  this.resource("restaurant", {
    path: "/restaurants/:restaurant_id"
  }, function() {
    });
  this.route('restaurant/bookings');
});

export default Router;
