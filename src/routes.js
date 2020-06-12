/* eslint-disable import/prefer-default-export */
import Home from './components/Home';
import User from './components/user/User';
import UserHome from './components/user/UserHome';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import Header from './components/Header';

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
