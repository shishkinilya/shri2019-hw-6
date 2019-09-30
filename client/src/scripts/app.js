import applyMiddleware from './lib/reducto/applyMiddleware';
import reductoMiddle from './lib/reducto/middleware';

import filesReducer from './store/files/reducer';
import FileSearchView from './views/FileSearchView';
import FilesTableView from './views/FilesTableView';
import LOADING_STATUSES from './const/loadingStatuses';
import FILES_ACTIONS from "./store/files/actions";

const filesSearchFieldEl = document.querySelector('#id-file-search-field');
const filesTableEl = document.querySelector('#id-file-list');
const initialState = {
  query: '',
  status: LOADING_STATUSES.SUCCESS,
  initialList: [],
  filteredList: [],
};


const createStoreWithMiddleware = applyMiddleware(reductoMiddle)();
const store = createStoreWithMiddleware(filesReducer, initialState);

new FileSearchView(filesSearchFieldEl, store);
new FilesTableView(filesTableEl, store);

function getFiles() {
  return async function(dispatch) {
    const files = await fetch('http://localhost:3000/api/repos/task-1')
      .then(response => response.json());

    dispatch({
      type: FILES_ACTIONS.GET_FILES_SUCCESS,
      payload: {
        list: files,
      },
    });
  }
}

store.dispatch(getFiles());
