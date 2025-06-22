import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Page1 from "./Page1";
import UserProvider from "./contexts/UserContext";
import Page2 from "./Page2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}

    {/* <UserProvider>
      <Page1 />
    </UserProvider> */}

    <Page2
      listOfFacts={["fact1", "fact2", "fact3"]}
      cb={alert}
    />
  </StrictMode>
);
