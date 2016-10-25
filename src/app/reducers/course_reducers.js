import { List, Map } from 'immutable';

const init = List([]);

export default function(courses=init, action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return courses.push(Map(action.payload));
    default:
      return courses;
  }
}
