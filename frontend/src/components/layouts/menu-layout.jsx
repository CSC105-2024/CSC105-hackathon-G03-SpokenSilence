 import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/nav/app-sidebar";
import Header from "@/components/nav/app-header";

const MenuLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <main>
        <Header />
      </main>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
};

export default MenuLayout;
