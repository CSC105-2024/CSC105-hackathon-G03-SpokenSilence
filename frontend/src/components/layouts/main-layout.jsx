import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/nav/app-sidebar";
import Header from "@/components/nav/app-header";

const Layout = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full">
        <div className="flex flex-col flex-1 min-h-screen">
          <Header />
          <div className="flex-1 md:mt-16 md:mb-6">
            <main className="flex-grow max-w-7xl px-10 pt-20 z-0 mx-auto w-full">
              {children}
            </main>
          </div>
        </div>
        <AppSidebar side="right" />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
