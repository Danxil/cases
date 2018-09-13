import { RSAA } from 'redux-api-middleware';

export const getUserInfo = () => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/user`,
    credentials: 'include',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      'GET_USER_INFO_REQUEST',
      { type: 'GET_USER_INFO_SUCCESS', meta: { spinnerKeys: { LOGIN: false } } },
      { type: 'GET_USER_INFO_FAILURE', meta: { spinnerKeys: { LOGIN: false } } },
    ]
  }
});

export const signIn = (values) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/auth/local`,
    method: 'POST',
    body: JSON.stringify(values),
    types: [
      { type: 'SIGN_IN_REQUEST', meta: { spinnerKeys: { LOGIN: true } } },
      'SIGN_IN_SUCCESS',
      { type: 'SIGN_IN_FAILURE', meta: { spinnerKeys: { LOGIN: false } } },
    ]
  }
});

export const signUp = (values) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/sign-up`,
    method: 'POST',
    body: JSON.stringify(values),
    types: [
      { type: 'SIGN_UP_REQUEST', meta: { spinnerKeys: { LOGIN: true } } },
      'SIGN_UP_SUCCESS',
      { type: 'SIGN_UP_FAILURE', meta: { spinnerKeys: { LOGIN: false } } },
    ]
  }
});

export const logout = () => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_REST_URL}/logout`,
    method: 'GET',
    types: [
      'LOGOUT_REQUEST',
      'LOGOUT_SUCCESS',
      'LOGOUT_FAILURE'
    ]
  }
});

export const confirmDemoModeFinished = () => {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_BASE_REST_URL}/demo-mode-finished-confirmation`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'CONFIRM_DEMO_MODE_FINISHED_REQUEST',
        'CONFIRM_DEMO_MODE_FINISHED_SUCCESS',
        'CONFIRM_DEMO_MODE_FINISHED_FAILURE'
      ]
    }
  };
};

export const confirmDemoModeActivated = () => {
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_BASE_REST_URL}/demo-mode-activated-confirmation`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: [
        'CONFIRM_DEMO_MODE_ACTIVATED_REQUEST',
        'CONFIRM_DEMO_MODE_ACTIVATED_SUCCESS',
        'CONFIRM_DEMO_MODE_ACTIVATED_FAILURE'
      ]
    }
  };
};
