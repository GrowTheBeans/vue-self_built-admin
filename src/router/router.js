import Home from "../views/Home.vue";

const Login = () => import('../views/Login.vue');
const Error = () => import('../views/Error.vue');

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
];

export default routes;
