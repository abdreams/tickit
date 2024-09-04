import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTHO_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTHO_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
