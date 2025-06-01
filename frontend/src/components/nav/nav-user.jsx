import { useState } from "react";
import {User, ChevronsUpDown, LogOut, CircleUser} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import Changeprofile from "@/components/dialog/changeprofile";
import { useAuth } from "@/contexts/auth-context.jsx";

const NavUser = () => {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();
  const [dialogType, setDialogType] = useState(null);
  const {user} = useAuth();

  console.log(user)
  

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-10 w-10 rounded-full ">
                  <CircleUser size={48} className="w-50 h-10"/>
                  <AvatarFallback className="rounded-full">
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user?.username}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {user?.username}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {/*<DropdownMenuItem*/}
                {/*  onClick={() => setDialogType("Changeprofile")}*/}
                {/*>*/}
                {/*  Change Profile*/}
                {/*</DropdownMenuItem>*/}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Signout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      {dialogType === "Changeprofile" && (
        <Changeprofile open={true} onOpenChange={() => setDialogType(null)} />
      )}
    </>
  );
};

export default NavUser;
