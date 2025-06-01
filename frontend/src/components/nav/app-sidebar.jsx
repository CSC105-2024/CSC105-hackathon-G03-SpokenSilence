import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Info,
  LogIn,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import NavUser from "./nav-user";
import { Button } from "../ui/button";
import {useAuth} from "@/contexts/auth-context.jsx";

const items = [
  {
    title: "View Card",
    url: "/",
  },
  {
    title: "Dashboard",
    url: "/auth/dashboard/dashboard",
  },
  {
    title: "Flower Information",
    url: "/flower-info",
  },
];

const AppSidebar = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const { isAuth, signOutUser } = useAuth()

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (item) => {
    setActive(item.url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSignInClick = () => {
    navigate("/Signin");
  };

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>SpokenSilence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  className={`${
                    active === "/"
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : ""
                  }`}
                >
                  <Link 
                    to="/" 
                    className="flex items-center"
                    onClick={() => handleLinkClick(items[0])}
                  >
                    <span>View Card</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {isAuth && (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild
                      className={`${
                        active === "/auth/dashboard/dashboard"
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : ""
                      }`}
                    >
                      <Link 
                        to="/dashboard" 
                        className="flex items-center"
                        onClick={() => handleLinkClick(items[1])}
                      >
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      asChild
                      className={`${
                        active === "/flower-info"
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : ""
                      }`}
                    >
                      <Link 
                        to="/flower-info" 
                        className="flex items-center"
                        onClick={() => handleLinkClick(items[2])}
                      >
                        <span>Flower Information</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {isAuth ? (
          <NavUser />
        ) : (
          <div className="p-4">
            <Button
              onClick={handleSignInClick}
              className="w-full bg-gradient-to-bl from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-700 hover:to-purple-700"
              variant="default"
            >
              Sign In
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;