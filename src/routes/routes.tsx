import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/dashboard/Dashboard";

import { Navigate, createBrowserRouter } from "react-router-dom";
import AllProject from "@/pages/dashboard/Projects/AllProjects";
import CreateProject from "@/pages/dashboard/Projects/CreateProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/login/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/dashboard-home" />,
      },
      {
        path: "dashboard-home",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <AllProject />,
      },
      {
        path: "create-projects",
        element: <CreateProject />,
      },
    ],
  },
]);

export default router;
