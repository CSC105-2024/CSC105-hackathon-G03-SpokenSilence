import Header from "@/components/nav/app-header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-col-1">
        <main className="flex-grow max-w-7xl px-10 pt-20 z-0 mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
