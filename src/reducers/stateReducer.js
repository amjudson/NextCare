import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function stateReducer(state = initialState.ranks, action) {
  switch (action.type) {
    case actions.LOAD_STATES_SUCCESS:
      return action.states;
    default:
      return state;
  }
}
