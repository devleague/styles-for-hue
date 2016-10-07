import { combineReducers, compose } from 'redux';

import { default as elementsReducer } from './elementsReducer';
import { default as colorReducer } from './colors';
import { default as fontReducer } from './fontDropdown';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer,
  colors: colorReducer,
  fonts: fontReducer
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