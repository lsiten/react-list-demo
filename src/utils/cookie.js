import Cookies from 'js-cookie';

export const getIsLogin = () => !!Cookies.get('counselor');
export const logoutCookie = () => {
  Cookies.remove('counselor', { path: '/' });
};
