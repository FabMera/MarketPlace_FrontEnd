import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./CSS/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import UserProvider from "./Context/UserProvider";
import ProductProvider from "./Context/ProductProvider";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <ProductProvider>
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>
        </ProductProvider>
    </UserProvider>
);
