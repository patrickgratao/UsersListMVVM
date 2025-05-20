import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy loading das páginas
const UserListPage = lazy(() => import("./pages/UserList"));

const Load = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<span>Carregando...</span>}>
    <Component />
  </Suspense>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={Load(UserListPage)} />
      </Route>
    </Routes>
  );
}
