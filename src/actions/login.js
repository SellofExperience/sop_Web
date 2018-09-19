import * as types from '../constants/ActionTypes';

function doLogin(data) {
    return { type: types.LOGIN_LOGIN_SUBMIT, data };
}

export { doLogin };
