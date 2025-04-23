import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App></App>  */}
    <>
      <body class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <svg
            class="mx-auto mb-4 h-16 w-16 text-yellow-400"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 class="text-2xl font-semibold text-gray-800 mb-2">
            Website Under Maintenance
          </h1>
          <p class="text-gray-600 mb-4">
            Thank you for your patience. We’ll be back shortly.
          </p>
          <p class="text-sm text-gray-400">– Team Zaid</p>
        </div>
      </body>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
