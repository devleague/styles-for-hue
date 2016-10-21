import { combineReducers, compose } from 'redux';

import { default as elementsReducer } from './elementsReducer';
import { default as styleReducer } from './styles';
import { default as colorReducer } from './colors';
import { default as fontReducer } from './fonts';
import { default as savePopupReducer } from './savePopup';
import { default as sideBarReducer } from './sideBar';
import { default as menuReducer } from './menuShow';
import { default as updatePopupReducer } from './updatePopup';
import { default as popoverReducer } from './popover';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer,
  styles: styleReducer,
  colors: colorReducer,
  fonts: fontReducer,
  savePopup: savePopupReducer,
  sideBar: sideBarReducer,
  menuShow: menuReducer,
  updatePopup: updatePopupReducer,
  popover: popoverReducer
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