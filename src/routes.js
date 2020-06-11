import Home from './components/Home';
import User from './components/user/User';
import UserHome from './components/user/UserHome';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';

export const routes = [
  { path: '', component: Home },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserHome },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit },
    ],
  },
];
