import Ember from 'ember';

export function timeFormat(input) {
  return moment(input,"Hmm").format('h.mm A');
}

export default Ember.Handlebars.makeBoundHelper(timeFormat);
