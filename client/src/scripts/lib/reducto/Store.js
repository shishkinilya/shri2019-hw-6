class Store {
  constructor(reducer, initialState) {
    this._reducer = reducer;
    this._state = initialState;
    this._listeners = [];
    this.dispatch({
      type: '@@init'
    });
  }

  getState() {
    return this._state;
  }

  subscribe(cb) {
    this._listeners.push(cb);
    return {
      unsubscribe() {
        const index = this._listeners.indexOf(cb);
        this._listeners.splice(index, 1);
      }
    }
  }

  dispatch(action) {
    this._state = this._reducer(this._state, action);
    this._notifyListeners();
  }

  _notifyListeners() {
    this._listeners.forEach(listener => listener(this._state));
  }
}

export default Store;
