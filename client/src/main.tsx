import React from "react";
import ReactDOM from "react-dom/client";

import Router from "@/components/router";
import { DataProvider } from "@/contexts/dataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <Router />
    </DataProvider>
  </React.StrictMode>
);
