import View from '../lib/reducto/View';
import FILES_ACTIONS from '../store/files/actions';

export default class FileSearchView extends View {
  constructor(el, store) {
    super(el, store);
    this._onInput = this._onInput.bind(this);
    this._el.addEventListener('change', this._onInput);
  }

  render() {
    return `<input type="search">`;
  }

  destroy() {
    super.destroy();
    this._el.removeEventListener('change', this._onInput);
  }

  _onInput(event) {
    const { value: query } = event.target;

    if (query.trim()) {
      this._store.dispatch({
        type: FILES_ACTIONS.FIND_FILES,
        payload: {
          query,
        },
      });
    }
  }
}
