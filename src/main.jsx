import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routes.jsx";
import { ThemeProvider } from "./config/ThemeContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)