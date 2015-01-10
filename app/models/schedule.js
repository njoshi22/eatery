// import {Model,attr,hasOne, belongsTo} from 'fireplace';
import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  time: attr("string",{default: "2000"}),
  booked: attr("boolean", {default: false}),
  restaurant: DS.belongsTo('restaurant'),
  bookedDidChange: function () {
    if (this.get("changeCameFromFirebase")) { return; }
    this.save();
  }.observes('booked')
});
