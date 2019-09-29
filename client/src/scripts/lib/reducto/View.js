export default class View {
  constructor(el, store) {
    this._el = el;
    this._store = store;
    this._subscription = store.subscribe(
      this._prepareRender.bind(this)
    );
    this._prepareRender(store.getState());
  }

  destroy() {
    this._el.innerHTML = '';
    this._subscription.unsubscribe();
  }

  render() {
    throw new Error('This method should be overriden');
  }

  _prepareRender(state) {
    this._el.innerHTML = this.render(state);
  }
}
