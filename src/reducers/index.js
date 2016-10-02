import { combineReducers, compose } from 'redux';

import { default as divCompReducer } from './divComp';

const rootReducer = combineReducers({
  divComp: divCompReducer
})

const finalCreateStore = compose(
  (window.devToolsExtension)
  ? window.devToolsExtension
  : (x) => x
);

const store = finalCreateStore(
  rootReducer, {}
)

export default store;