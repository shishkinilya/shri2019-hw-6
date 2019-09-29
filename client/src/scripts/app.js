import Store from './lib/reducto/Store';
import filesReducer from './store/files/reducer';
import FileSearchView from './views/FileSearchView';

const filesSearchFieldEl = document.querySelector('#id-file-search-field');
const filesTableEl = document.querySelector('#id-file-list-table');

const store = new Store(filesReducer);

new FileSearchView(filesSearchFieldEl, store);
new FilesTable
