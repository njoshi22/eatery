import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("admin");
  this.route("loading");
  this.route("restaurants");

  this.resource("restaurant", {
    path: "/restaurant/:restaurant_id"
  }, function() {
    this.route("bookings", {
      path: "/bookings"
    });
  });
});

export default Router;