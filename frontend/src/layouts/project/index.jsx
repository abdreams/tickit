import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routesForProj from "routesForProj.js";

export default function Project(props) {
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
    getActiveRoute(routesForProj);
  }, [location.pathname]);

  const getActiveRoute = (routesForProj) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routesForProj.length; i++) {
      const routePath = routesForProj[i].layout + "/" + routesForProj[i].path;
      if (location.pathname.includes(routePath.split("/:projectId")[0])) {
        setCurrentRoute(routesForProj[i].name);
        activeRoute = routesForProj[i].name;
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routesForProj) => {
    let activeNavbar = false;
    for (let i = 0; i < routesForProj.length; i++) {
      const routePath = routesForProj[i].layout + "/" + routesForProj[i].path;
      if (location.pathname.includes(routePath.split("/:projectId")[0])) {
        return routesForProj[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routesForProj) => {
    return routesForProj.map((prop, key) => {
      if (prop.layout === "/project") {
        return (
          <Route
            path={`${prop.path}`}
            element={prop.component}
            key={key}
          />
        );
      }
      return null;
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
              secondary={getActiveNavbar(routesForProj)}
              {...rest}
            />
            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routesForProj)}
                {/* Default redirect to main dashboard */}
                <Route
                  path="/project/:projectId/*"
                  element={<Navigate to="/project/:projectId/default" replace />}
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
