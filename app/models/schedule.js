import {Model,attr} from 'fireplace';

export default Model.extend({
  time: attr({default: "2000"}),
  booked: attr("boolean", {default: false})
  // isOpen: function() {
  //     // boolean value based on whether open timings < current time < closed time
  // },
});
