import FILES_ACTIONS from './actions';
import LOADING_STATUSES from '../../const/loadingStatuses';

const reducer = (state, action) => {
  switch (action.type) {
    case FILES_ACTIONS.GET_FILES:
      return {
        ...state,
        ...{
          files: {
            initialList: [],
            filteredList: [],
            status: LOADING_STATUSES.LOADING
          }
        }
      };

    case FILES_ACTIONS.GET_FILES_SUCCESS:
      return {
        ...state,
        ...{
          files: {
            initialList: action.payload.list,
            filteredList: [],
            status: LOADING_STATUSES.SUCCESS
          }
        }
      };

    case FILES_ACTIONS.GET_FILES_FAIL:
      return {
        ...state,
        ...{
          files: {
            initialList: [],
            filteredList: [],
            status: LOADING_STATUSES.FAIL
          }
        }
      };

    case FILES_ACTIONS.FIND_FILES:
      return {
        ...state,
        ...{
          files: {
            filteredList: state.files.initialList.filter(file => file.name.includes(action.payload.query))
          }
        }
      };

    default:
      return {
        ...state,
        ...{
          files: {
            initialList: [],
            filteredList: [],
            status: LOADING_STATUSES.SUCCESS
          }
        }
      }
  }
};

export default reducer;
