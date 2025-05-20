import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "styles/global.css";

import AppRoutes from "./Routes";
export const App = () => {
  return (
    <Suspense fallback={<>Carregando...</>}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
};
