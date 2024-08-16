import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { ProductQueryProvider } from "./contexts/ProductQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductQueryProvider>
    <RouterProvider router={router} />
    </ProductQueryProvider>
  </StrictMode>
);
