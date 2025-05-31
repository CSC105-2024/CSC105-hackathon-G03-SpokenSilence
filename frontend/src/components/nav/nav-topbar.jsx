import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import Changeprofile from "@/components/dialog/changeprofile";
import { useAuth } from "@/contexts/auth-context.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth()

  const [active, setActive] = useState(location.pathname);
  const isAuthenticated = true;

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  const [dialogType, setDialogType] = useState(null);

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

            {isAuth && (
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
                    active === "/flower-info"
                      ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl  text-white"
                      : ""
                  }`}
                  onClick={() => navigate("/flower-info")}
                >
                  Flower Information
                </li>
              </>
            )}

            <li>
              {isAuth? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="hidden rounded-full md:flex cursor-pointer"
                    >
                      <CircleUser className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="hidden md:block">
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setDialogType("Changeprofile")}
                    >
                      Change Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={"cursor-pointer"}
                      onClick={() => navigate("/")}
                    >
                      SignOut
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <li
                  className={`hidden py-2 px-3 md:flex cursor-pointer ${
                    active === "/sign-in"
                      ? "bg-gradient-to-bl from-fuchsia-600 to-purple-600 rounded-3xl  text-white"
                      : ""
                  }`}
                  onClick={() => navigate("/system/sign-in")}
                >
                  SignIn
                </li>
              )}
            </li>
          </ul>
          {dialogType === "Changeprofile" && (
            <Changeprofile
              open={true}
              onOpenChange={() => setDialogType(null)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
