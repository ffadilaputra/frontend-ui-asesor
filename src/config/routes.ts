import Login from "../pages/Login";
import Asesmen from "../pages/Asesmen";

const routes: IRoute[] = [
  {
    name: "login",
    component: Login,
    label: "Login",
    path: "/login",
    private: true,
    hide: true
  },
  {
    name: "asesmen",
    component: Asesmen,
    label: "Asesmen",
    path: "/asesmen",
    private: true,
    hide: false
  }
];

export default routes;
