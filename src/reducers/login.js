import * as types from '../constants/ActionTypes';

const login = (state = [], action) => {
    switch (action.type) {
    case types.LOGIN_LOGIN_SUBMIT:
        return state;
    default:
        return state;
    }
};

export default login;
