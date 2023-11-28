import { Dispatch } from 'redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actionTypes';
import {fetchData} from '../../services/petService';

// Action creator for fetching pets data. It returns a function (thunk) that performs the asynchronous operation.
export const fetchPetsData = () => async (dispatch: Dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const data = await fetchData();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
