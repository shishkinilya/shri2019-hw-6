import FILES_ACTIONS from './actions';
import LOADING_STATUSES from '../../const/loadingStatuses';

const reducer = (state, action) => {
  switch (action.type) {
    case FILES_ACTIONS.GET_FILES:
      return {
        ...state,
        status: LOADING_STATUSES.LOADING
      };

    case FILES_ACTIONS.GET_FILES_SUCCESS:
      return {
        ...state,
        initialList: action.payload.list,
        filteredList: action.payload.list,
        status: LOADING_STATUSES.SUCCESS
      };

    case FILES_ACTIONS.GET_FILES_FAIL:
      return {
        ...state,
        initialList: [],
        filteredList: [],
        status: LOADING_STATUSES.FAIL
      };

    case FILES_ACTIONS.FIND_FILES:
      if (action.payload.query) {
        return {
          ...state,
          query: action.payload.query,
          filteredList: state.initialList.filter(file => file.name.includes(action.payload.query))
        };
      }
      return {
        ...state,
        query: action.payload.query,
        filteredList: state.initialList.slice(),
      };

    default:
      return {
        ...state,
      }
  }
};

export default reducer;
