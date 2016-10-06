import { combineReducers, compose } from 'redux';

import { default as elementsReducer } from './elementsReducer';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer
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