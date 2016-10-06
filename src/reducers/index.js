import { combineReducers, compose } from 'redux';

import { default as divCompReducer } from './divComp';
import { default as colorReducer } from './colors';

const rootReducer = combineReducers({
  divComp: divCompReducer,
  colors: colorReducer
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