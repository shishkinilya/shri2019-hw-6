import Store from './Store';

export default function applyMiddleware(middleware) {
  return function createStoreWithMiddleware() {
    return (reducer, state) => {
      const store = new Store(reducer, state);

      store.dispatch = action => middleware(store)(store.dispatch)(action);

      return store;
    }
  }
}
