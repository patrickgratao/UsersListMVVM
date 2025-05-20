import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy loading das páginas
const HomePage = lazy(() => import("./pages/Home"));

const Load = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<span>Carregando...</span>}>
    <Component />
  </Suspense>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={Load(HomePage)} />
      </Route>
    </Routes>
  );
}
