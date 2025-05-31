import MenuLayout from "@/components/layouts/menu-layout";
import Footer from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuLayout />
      <div className="relative md:py-6 pt-16">
        <main className="flex-grow max-w-7xl px-10 z-0 mx-auto">
          {children}
        </main>
      </div>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

export default Layout;
