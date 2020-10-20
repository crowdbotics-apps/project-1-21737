import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard13151554Reducer from '../features/Dashboard13151554/redux/reducers'
import SignIn14151553Reducer from '../features/SignIn14151553/redux/reducers'
import SignIn46151552Reducer from '../features/SignIn46151552/redux/reducers'
import SignIn2151522Reducer from '../features/SignIn2151522/redux/reducers'
import SignIn2151508Reducer from '../features/SignIn2151508/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard13151554: Dashboard13151554Reducer,
SignIn14151553: SignIn14151553Reducer,
SignIn46151552: SignIn46151552Reducer,
SignIn2151522: SignIn2151522Reducer,
SignIn2151508: SignIn2151508Reducer,

});