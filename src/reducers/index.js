import { combineReducers, compose } from 'redux';

import { default as elementsReducer } from './elementsReducer';
import { default as colorReducer } from './colors';
import { default as fontReducer } from './fonts';
import { default as savePopupReducer } from './savePopup';
import { default as sideBarReducer } from './sideBar';
import { default as menuReducer } from './menuShow';
import { default as updatePopupReducer } from './updatePopup';
import { default as modalReducer } from './modal';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer,
  colors: colorReducer,
  fonts: fontReducer,
  savePopup: savePopupReducer,
  sideBar: sideBarReducer,
  menuShow: menuReducer,
  updatePopup: updatePopupReducer,
  modal: modalReducer
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