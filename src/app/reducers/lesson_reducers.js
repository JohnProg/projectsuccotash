import { List, Map } from 'immutable';

const init = List([]);

export default function(lessons=init, action) {
  switch(action.type) {
    case 'CREATE_LESSON':
      return lessons.push(Map(action.payload));
    default:
      return lessons;
  }
}
