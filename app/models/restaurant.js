import {Model,attr, hasMany} from 'fireplace';

export default Model.extend({
  name: attr(),
  cuisine: attr("string",{default: "General"}),
  openingTime: attr("string",{default: "1900"}),
  closingTime: attr("string",{default: "2359"}),
  schedules: hasMany("schedule"),
  createdAt: attr("string",{default: function(){return new Date();}})
});
