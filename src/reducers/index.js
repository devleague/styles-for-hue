import { combineReducers, compose } from 'redux';

import { default as elementsReducer } from './elementsReducer';
import { default as colorReducer } from './colors';
import { default as fontReducer } from './fonts';
import { default as savePopupReducer } from './savePopup';
import { default as sideBarReducer } from './sideBar';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer,
  colors: colorReducer,
  fonts: fontReducer,
  savePopup: savePopupReducer,
  sideBar: sideBarReducer
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