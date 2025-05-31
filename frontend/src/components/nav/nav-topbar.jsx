import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser, LogOut, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);
  const isAuthenticated = false;

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className="container mx-auto md:text-sm">
        <div className="flex items-center justify-center ">
          <ul className="hidden space-x-6 md:flex border-1 px-10 rounded-3xl py-2 shadow-md bg-stone-50 ">
            <li
              className={`hidden py-2 px-3 md:flex cursor-pointer  ${
                active === "/"
                  ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl text-white"
                  : ""
              }`}
              onClick={() => navigate("/")}
            >
              View Card
            </li>

            {isAuthenticated && (
              <>
                <li
                  className={`hidden py-2 px-3 md:flex cursor-pointer ${
                    active === "/dashboard"
                      ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl  text-white"
                      : ""
                  }`}
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </li>
                <li
                  className={`hidden py-2 px-3 md:flex cursor-pointer ${
                    active === "/flower-information"
                      ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl  text-white"
                      : ""
                  }`}
                  onClick={() => navigate("/flower-information")}
                >
                  Flower Information
                </li>
              </>
            )}

            <li>
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="hidden rounded-full md:flex"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="hidden md:block">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => navigate("/Change-Profile")}
                    >
                      Change Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className={"cursor-pointer"}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Signout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <li
                  className={`hidden py-2 px-3 md:flex cursor-pointer ${
                    active === "/Signin"
                      ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl  text-white"
                      : ""
                  }`}
                  onClick={() => navigate("/Signin")}
                >
                  Signin
                </li>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
