import { combineReducers, compose, createStore } from 'redux';
import { default as elementsReducer } from './elementsReducer';
import { default as styleReducer } from './styles';
import { default as colorReducer } from './colors';
import { default as fontReducer } from './fonts';
import { default as savePopupReducer } from './savePopup';
import { default as sideBarReducer } from './sideBar';
import { default as menuReducer } from './menuShow';
import { default as showUpdateButtonReducer } from './showUpdateButton';
import { default as popoverReducer } from './popover';

const rootReducer = combineReducers({
  elementsReducer: elementsReducer,
  styles: styleReducer,
  colors: colorReducer,
  fonts: fontReducer,
  savePopup: savePopupReducer,
  sideBar: sideBarReducer,
  menuShow: menuReducer,
  showUpdateButton: showUpdateButtonReducer,
  popover: popoverReducer
})

const finalCreateStore = compose(
  (window.devToolsExtension)
  ? window.devToolsExtension()
  : (x) => x
)(createStore);

const store = finalCreateStore(
  rootReducer
)

export default store;