/* eslint-disable import/prefer-default-export */
import Home from './components/Home';
import Header from './components/Header';

const User = (resolve) => {
  require.ensure(['./components/user/User'], () => {
    resolve(require('./components/user/User'), 'user');
  });
};

const UserHome = (resolve) => {
  require.ensure(['./components/user/UserHome'], () => {
    resolve(require('./components/user/UserHome'), 'user');
  });
};

const UserDetail = (resolve) => {
  require.ensure(['./components/user/UserDetail'], () => {
    resolve(require('./components/user/UserDetail'), 'user');
  });
};

const UserEdit = (resolve) => {
  require.ensure(['./components/user/UserEdit'], () => {
    resolve(require('./components/user/UserEdit'), 'user');
  });
};

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header,
    },
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-top': Header,
    },
    children: [
      { path: '', component: UserHome },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ],
  },
  {
    path: '/redirect',
    redirect: { name: 'home' },
  },
  {
    path: '*',
    redirect: '/',
  },
];
