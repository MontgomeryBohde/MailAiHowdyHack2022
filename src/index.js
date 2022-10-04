import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import WPage from "./routes/w_page";
import Summary from "./routes/summary";
import Response from "./routes/response";
import ExtractContacts from "./routes/extractContacts";
import ExtractDetails from "./routes/extractDetails";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/w_page",
    element: <WPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/summary",
    element: <Summary />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/response",
    element: <Response />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/extractContacts",
    element: <ExtractContacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/extractDetails",
    element: <ExtractDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();