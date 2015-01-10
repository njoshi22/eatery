// import {Model,attr, hasMany} from 'fireplace';
import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr(),
  cuisine: attr("string",{defaultValue: "General"}),
  openingTime: attr("string",{defaultValue: "1900"}),
  closingTime: attr("string",{defaultValue: "2359"}),
  schedules: DS.hasMany("schedule"),
  createdAt: attr("string",{defaultValue: function(){return new Date();}})
});
