import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from "../actions/actionTypes";


// Initial state of the reducer
const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  // Reducer function for handling pet data state
  const dataReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, loading: true };
      case FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  