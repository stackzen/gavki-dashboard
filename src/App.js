import React from "react";
import {Routes, Route} from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/Dashboard/container"));
import "./App.css";
import Header from "./components/Header/Header";
import NoMatch from "./pages/NoMatch/container/NoMatch";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<></>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
