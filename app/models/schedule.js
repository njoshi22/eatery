import {Model,attr,hasMany} from 'fireplace';

export default Model.extend({
  time: attr({default: "2000"}),
  booked: attr("boolean")
  // isOpen: function() {
  //     // boolean value based on whether open timings < current time < closed time
  // },
});
