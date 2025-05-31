// import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "./nav-topbar";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 backdrop-blur-lg py-3">
      <div className="flex md:block justify-between px-4">
        <Navbar />
        {/* <SidebarTrigger className="flex md:hidden cursor-pointer dark:text-white rotate-180" />{" "} */}
      </div>
    </header>
  );
};

export default Header;
