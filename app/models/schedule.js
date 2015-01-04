import {Model,attr} from 'fireplace';

export default Model.extend({
  time: attr({default: "2000"}),
  booked: attr("boolean", {default: false})
});
