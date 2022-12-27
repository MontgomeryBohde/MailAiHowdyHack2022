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
import Summary from "./routes/summary/summary";
import Response from "./routes/response/response";
import ExtractContacts from "./routes/extract contacts/extractContacts";
import ExtractDetails from "./routes/extract details/extractDetails";
import Contact from "./routes/creator info/creators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    path: "/creators",
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