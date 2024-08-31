import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routesForAdmin from "routesForAdmin.js";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routesForAdmin);
  }, [location.pathname]);

  const getActiveRoute = (routesForAdmin) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routesForAdmin.length; i++) {
      if (
        window.location.href.indexOf(
          routesForAdmin[i].layout + "/" + routesForAdmin[i].path
        ) !== -1
      ) {
        setCurrentRoute(routesForAdmin[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routesForAdmin) => {
    let activeNavbar = false;
    for (let i = 0; i < routesForAdmin.length; i++) {
      if (
        window.location.href.indexOf(routesForAdmin[i].layout + routesForAdmin[i].path) !== -1
      ) {
        return routesForAdmin[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routesForAdmin) => {
    return routesForAdmin.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routesForAdmin)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {(getRoutes(routesForAdmin))}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
