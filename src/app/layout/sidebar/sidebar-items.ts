import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [  
  // Admin Modules
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    moduleName: "admin",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["admin"],
    submenu: [],
  },
  
  {
    path: "",
    title: "General Masters",
    moduleName: "generalmasters",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/states",
        title: "States",
        moduleName: "state",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      }, {
        path: "/admin/districts",
        title: "Districts",
        moduleName: "district",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      }, {
        path: "/admin/cities",
        title: "Cities",
        moduleName: "cities",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      }, {
        path: "/admin/pincodes",
        title: "Pincodes",
        moduleName: "pincodes",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
    ],
  },

  {
    path: "",
    title: "Business Masters",
    moduleName: "businessmasters",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/admins",
        title: "Admins",
        moduleName: "admin",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
      {
        path: "/admin/vendors",
        title: "Vendors",
        moduleName: "vendor",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      }, {
        path: "/admin/businesses",
        title: "Businesses",
        moduleName: "businesses",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
      {
        path: "/admin/productcategories",
        title: "Product Categories",
        moduleName: "productcategories",
        iconType: "feather",
        icon: "airplay",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["admin"],
        submenu: [],
      },
    ],
  },
];
