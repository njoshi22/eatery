import {Model,attr} from 'fireplace';

export default Model.extend({
  time: attr({default: "2000"}),
  booked: attr("boolean", {default: false}),
  bookedDidChange: function () {
    if (this.get("changeCameFromFirebase")) { return; }
    this.save();
  }.observes('booked')
});
