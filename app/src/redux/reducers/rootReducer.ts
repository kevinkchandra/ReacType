import { combineReducers } from '@reduxjs/toolkit';

// Need to import each slice which will be combined in the rootReducer
import codePreviewReducer from './slice/codePreviewSlice';
import contextReducer from './slice/contextReducer';
import appStateReducer from './slice/appStateSlice';
import styleReducer from './slice/styleSlice';
import roomReducer from './slice/roomSlice';
import MUIpropsSlice from './slice/MUIpropsSlice';

const rootReducer = combineReducers({
  codePreviewSlice: codePreviewReducer,
  contextSlice: contextReducer,
  appState: appStateReducer,
  styleSlice: styleReducer,
  roomSlice: roomReducer,
  MUIpropsSlice: MUIpropsSlice,
});

export default rootReducer;
