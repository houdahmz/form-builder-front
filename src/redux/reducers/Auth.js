import {
  GET_ADMIN_COMMISSIONS,
  GET_PROFILE_SUCCESS,
  GET_USER_STATS,
  GET_USER_STATS_BYMONTH,
  SET_AUTH_TOKEN,
  SIGNOUT_AUTH_SUCCESS,
  UPDATE_AUTH_USER,
} from '../../constants/ActionTypes';

const INIT_STATE = {
  user: null,
  profile: null,
  token: null,
  stats: [],
  monthStats: [],
  statsTr: [],
  transactions: [],
  commissions: [],
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_PROFILE_SUCCESS: {

      return {
        ...state,
        profile: action.payload,
      };
    }
    case SIGNOUT_AUTH_SUCCESS: {
      return {
        user: null,
      };
    }
    case SET_AUTH_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
};
export default authReducer;
