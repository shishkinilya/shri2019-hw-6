const reductoMiddle = store => dispatch =>
    action => typeof action === 'function' ? action(store.dispatch, store.getState) : dispatch(action);

export default reductoMiddle;
