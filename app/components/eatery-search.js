import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'input',
    classNames: ['main-options'],
    data: null,

  _initializeTypeahead: function() {

    var emberModel = this.store.all('restaurant'); //  - THIS WONT WORK IF MODEL ISN'T LOADED IN THE ROUTE. LOADING MODEL IN ROUTE TAKES A LONG TIME FOR THE PAGE TO LOAD.

    //Bloodhound
    var restaurants = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map(emberModel, function(restaurant) { return { name: restaurant.get('name'), opening: restaurant.get('openingTime') }; })
      // limit: 10,
      // prefetch: {
      //   url: 'https://eatery.firebaseio.com/restaurants.json',
      //   filter: function(data) {
      //     // var map = {};
      //     // var restaurants = [];
      //     // $.each(data, function(i,restaurant) {
      //     //   map[restaurant.name] = restaurant;
      //     //   restaurants.push(restaurant.name);
      //     // });
      //     // var retdata = JSON.parse(JSON.stringify(data));
      //     var res = $.map(data, function(restaurant) { return restaurant.name; });
      //     console.log(res);
      //     return res;
      //   }
      // }
    });

    restaurants.initialize();

    this.$().typeahead(
      {
        hint: true,
        highlight: true,
        minLength: 2
      },
      {
        name: 'restaurants',
        displayKey: 'name',
        source: restaurants.ttAdapter(),
        templates: {
          empty: ['<h6>Could not find any restaurant matching that name</h6>'],
          suggestion: Handlebars.compile('<div id="typeahead-results">{{name}}</div>')
        }
      }
    );
  }.on('didInsertElement')
});
