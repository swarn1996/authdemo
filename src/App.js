import React, { Suspense } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./component/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { CircularProgress } from "@material-ui/core";

const Home = React.lazy(() => import("./home/Home"));
const Auth = React.lazy(() => import("./auth/Auth"));

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Suspense fallback={<CircularProgress />}>
                {" "}
                <Home />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/auth"
          element={
            <Suspense fallback={<CircularProgress />}>
              <Auth />
            </Suspense>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
