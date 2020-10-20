import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2151522Reducer from '../features/SignIn2151522/redux/reducers'
import SignIn2151508Reducer from '../features/SignIn2151508/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2151522: SignIn2151522Reducer,
SignIn2151508: SignIn2151508Reducer,

});