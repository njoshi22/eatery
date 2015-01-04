import {Model,attr, hasMany} from 'fireplace';

export default Model.extend({
  name: attr(),
  cuisine: attr("string",{default: "General"}),
  openingTime: attr({default: "1900"}),
  closingTime: attr({default: "2359"}),
  schedules: hasMany("schedule"),
  createdAt: attr("date",{default: function(){return new Date();}})
});
