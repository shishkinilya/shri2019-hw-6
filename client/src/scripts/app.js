import Store from './lib/reducto/Store';
import filesReducer from './store/files/reducer';
import FileSearchView from './views/FileSearchView';
import FilesTableView from './views/FilesTableView';
import LOADING_STATUSES from './const/loadingStatuses';

const filesSearchFieldEl = document.querySelector('#id-file-search-field');
const filesTableEl = document.querySelector('#id-file-list');
const initialState = {
  query: '',
  status: LOADING_STATUSES.SUCCESS,
  initialList: [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}],
  filteredList: [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}],
};

const store = new Store(filesReducer, initialState);
new FileSearchView(filesSearchFieldEl, store);
new FilesTableView(filesTableEl, store);
