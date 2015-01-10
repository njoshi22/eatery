import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.set("cityName","Mumbai");
    this.set('newSearch',Ember.Object.create({
      bookingDate: this.get('bookingDate'),
      cityName: this.get('cityName'),
      peopleRequired: this.get('peopleRequired'),
      bookingTime: this.get('bookingTime')
    }));
    console.log(this.get('newSearch'));
  },

  filtered: function() {
    var ret = Ember.computed.filterBy("model","name","Dummy1");
    console.log(ret);
    return ret;
  }.observes('model'),

  actions: {
    changeCity: function(city) {
      this.set("cityName",city);
    },
    findBooking: function() {
      // Code incorporating aspects of newSearch and firebase
      // on clicking the "Book" button
    }
  },

//Update search object model when values are changed
  updateSearchModel: function() {
    var newSearch = this.get('newSearch');
    newSearch.set('bookingDate',this.get('bookingDate'));
    newSearch.set('bookingTime',this.get('bookingTime'));
    newSearch.set('peopleRequried',this.get('peopleRequired'));
    newSearch.set('cityName',this.get('cityName'));
    newSearch.set('restaurantId',this.get('restaurantId'));
    console.log(newSearch);
  }.observes('cityName','peopleRequired','bookingDate','bookingTime'),

//Initial properties
  cityName: null,
  peopleRequired: 2,
  peopleRequiredString: function() {
    return this.get('peopleRequired').toString().concat(" people");
  }.property('peopleRequired'),
  bookingDate: null,
  bookingTime: "3:00 PM",

// Autocomplete variables and methods
  searchText: null,
  searchResults: function() {
    var searchText = this.get('searchText');
    var res = this.store.all('restaurant');
    var modelData = $.map(res, function(item) { return item.get('name');});

    if(!searchText || searchText.length < 4) { return; }
    var regex = new RegExp(searchText,'i');
    var results = modelData.filter(function(place) {
      return place.match(regex);
    });
    return results;

    /// not woring --> // this.store.filter('restaurant', function(place) {
    //   if(place.get('name').match(regex)) { return true; }
    // });
    // modelData.filter(function(place) {
    //   return place.match(regex);
    // });

    // var results = this.store.all('restaurant', {name: regex});
    // return $.map(results,function(res) { return res.get('name'); });

  }.property('searchText'),

  selectedRestaurant: null
});
