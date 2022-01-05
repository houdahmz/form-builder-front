import {
  fetchError,
  fetchStart,
  fetchSuccess
} from './Common'
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, SHOW_MESSAGE } from '../../constants/ActionTypes';
import dataAxios from '../../constants/axiosData';
import { FORM_DATA } from '../../constants/ActionTypes';
import history from '../../helpers/history';
import Swal from 'sweetalert2';

export const createForm = (service) => {
  return (dispatch) => {
    const body = service;
    dispatch({ type: FETCH_START });
    dataAxios
      .post('/forms', body)
      .then(async (data) => {
        if (data.status == 201) {
          //await dispatch({ type: FETCH_SUCCESS });
          // await dispatch(getFormById(data.data._id))
          await localStorage.setItem('formId', data.data._id);
          await Swal.fire({
            icon: 'success',
            title: 'Form create',
            // preConfirm: () => {
            //   localStorage.setItem('formId', data.data._id);
            //   history.push('/form')
            // }
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  };
};
export const getFormById = (id, callback) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    dataAxios
      .get('/forms/' + id)
      .then((data) => {
        if (data.status == 200) {
          callback(data.data);
          console.log(data)
          dispatch({
            type: FORM_DATA,
            payload: data.data,
          });
        } else {
          callback(null);
          dispatch({
            type: FETCH_ERROR,
            payload: 'message.somethingWentWrong',
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
export const updateFormById = (id, data, callback) => {
  return (dispatch) => {
    const body = data;
    dispatch({ type: FETCH_START });
    dataAxios
      .put('/pages/' + id, body)
      .then(async (data) => {
        if (data.status == 200) {
          // callback(data.data);
          // console.log(data)
          // dispatch({
          //   type: FORM_DATA,
          //   payload: data.data,
          // });
          await Swal.fire({
            icon: 'success',
            title: 'Good job',
            text: "Your answer is save :) "
            // preConfirm: () => {
            //   localStorage.setItem('formId', data.data._id);
            //   // history.push('/form')
            // }
          })
        } else {
          callback(null);
          dispatch({
            type: FETCH_ERROR,
            payload: 'message.somethingWentWrong',
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
export const deleteFormById = (id, data, callback) => {
  return (dispatch) => {
    // dispatch({ type: FETCH_START });
    dataAxios
      .delete('/pages/field/' + id)
      .then(async (data) => {
       // if (data.status == 200) {
          // callback(data.data);
          // console.log(data)
          // dispatch({
          //   type: FORM_DATA,
          //   payload: data.data,
          // });
          await Swal.fire({
            icon: 'success',
            title: 'Good job',
            text: "Your form is delete :) "
            // preConfirm: () => {
            //   localStorage.setItem('formId', data.data._id);
            //   // history.push('/form')
            // }
          })
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};