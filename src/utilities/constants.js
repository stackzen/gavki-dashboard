import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuTwoToneIcon from "@mui/icons-material/RestaurantMenuTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";

export const sidebarOption = [
  {
    key: "Dashboard",
    route: "",
    Icon: DashboardIcon,
  },
  {
    key: "Food Order",
    route: "food-order",
    Icon: ShoppingCartIcon,
  },
  {
    key: "Manage Menu",
    route: "manage-menu",
    Icon: RestaurantMenuTwoToneIcon,
  },
  {
    key: "Settings",
    route: "settings",
    Icon: SettingsIcon,
  },
];
