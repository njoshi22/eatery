import {Model,attr,hasOne} from 'fireplace';

export default Model.extend({
  time: attr("string",{default: "2000"}),
  booked: attr("boolean", {default: false}),
  restaurant: hasOne('restaurant'),
  bookedDidChange: function () {
    if (this.get("changeCameFromFirebase")) { return; }
    this.save();
  }.observes('booked')
});
