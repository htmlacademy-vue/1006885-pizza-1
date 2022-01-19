import IndexHome from "@/views/Index";
import AppLogin from "@/views/Login";
import AppProfile from "@/views/Profile";
import AppCart from "@/views/Cart";
import AppOrders from "@/views/Orders";

export default [
  {
    path: "/",
    name: "IndexHome",
    component: IndexHome,
    // children: [
    //   {
    //     path: "/login",
    //     name: "Login",
    //     component: AppLogin,
    //   },
    // ],
  },
  {
    path: "/login",
    name: "Login",
    component: AppLogin,
  },
  {
    path: "/profile",
    name: "Profile",
    component: AppProfile,
    meta: {
      layout: "AppLayoutWithSideBar",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: AppCart,
    meta: {
      layout: "AppLayoutCart",
    },
  },
  {
    path: "/cart/edit/:slug",
    name: "PizzaEdit",
    component: IndexHome,
  },
  {
    path: "/orders",
    name: "Orders",
    component: AppOrders,
    meta: {
      layout: "AppLayoutWithSideBar",
    },
  },
];
