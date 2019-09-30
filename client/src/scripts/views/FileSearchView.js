import View from '../lib/reducto/View';
import FILES_ACTIONS from '../store/files/actions';

export default class FileSearchView extends View {
  constructor(el, store) {
    super(el, store);
    this._onInput = this._onInput.bind(this);

    el.addEventListener('keyup', this._onInput);
  }

  render(state) {
    this._el.value = state.query;
  }

  destroy() {
    super.destroy();
    this._el.removeEventListener('keyup', this._onInput);
  }

  _onInput(event) {
    this._store.dispatch({
      type: FILES_ACTIONS.FIND_FILES,
      payload: {
        query: event.target.value,
      },
    });
  }
}
