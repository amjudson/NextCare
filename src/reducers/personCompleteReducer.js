import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function personReducer(state = initialState.personCompletes, action) {
  switch (action.type) {
    case actions.LOAD_PERSONCOMPLETES_SUCCESS:
      return action.personCompletes.sort((person1, person2) => person1.lastName.localeCompare(person2.lastName));
    case actions.LOAD_PERSONCOMPLETE_SUCCESS:
      return action.personComplete;
    default:
      return state;
  }
}
