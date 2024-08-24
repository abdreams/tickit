import Footer from "components/footer/FooterAuthDefault";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js"; // it's an array of object of routes
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import SignUp from "views/auth/SignUp";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
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
    <div className="min-h-screen w-full !bg-gray-100 dark:!bg-navy-900">
      <FixedPlugin />
      <main className="mx-auto flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col w-full max-w-[420px]">
          {/* <Link to="/admin" className="mt-5 mb-10 w-max mx-auto">
            <div className="flex h-fit w-fit items-center hover:cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                  fill="#A3AED0"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-600">Back to Dashboard</p>
            </div>
          </Link> */}
          <Routes>
            {getRoutes(routes)}
            {/* <Route
              path="/"
              element={<Navigate to="/auth/sign-in" replace />}
            /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </main>
    </div>
  );
}
